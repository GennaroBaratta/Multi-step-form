'use client'

import { useForm, FormProvider, FieldErrors } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


import { BaseSyntheticEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepOne, StepTwo } from './StepsComponent';

// Define the validation schema with Zod for one step
const stepOneSchema = z.object({
    firstName: z.string().min(1, 'First Name is required'),
    lastName: z.string().min(1, 'Last Name is required')
});

const stepTwoSchema = z.object({
    email: z.string().email('Enter a valid email'),
    age: z.number().min(18, 'You must be at least 18 years old')
});

const schema = stepOneSchema.merge(stepTwoSchema);
type FormData = z.infer<typeof schema>;


const formOptions = { resolver: zodResolver(schema) };

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const methods = useForm<FormData>(formOptions);
    const { handleSubmit, watch } = methods;

    const onSubmit = (data: z.infer<typeof schema>) => {
        console.log(data);
        // logic to determine next step
        setCurrentStep(currentStep + 1);
    };

    function onInvalid(errors: FieldErrors<{ firstName: string; lastName: string; email: string; age: number; }>,
        event?: BaseSyntheticEvent<object, any, any> | undefined): unknown {
        const step = currentStep === 1 ? stepOneSchema : stepTwoSchema;
        console.log(errors);
        return console.log('Invalid form');
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
                {currentStep === 1 && <StepOne />}
                {currentStep === 2 && <StepTwo />}
                {currentStep === 1 &&
                    <Button type='button'
                        onClick={() => setCurrentStep(currentStep + 1)}
                        className="bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Next
                    </Button>}
                {currentStep === 2 &&
                    <Button type='submit'
                        className="bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </Button>}

            </form>
        </FormProvider>
    );
}
