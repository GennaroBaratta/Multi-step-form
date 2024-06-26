'use client'
import { useState } from 'react';
import { Step, FormElement } from "@/app/Step";
import Image from 'next/image'
import { Switch } from "@/components/ui/switch"



// This would be the individual field components you might have
const TextField = ({ field }: { field: FormElement }) => (
    <div className='w-full'>
        <label htmlFor={field.id}
            className="block text-gray-700 text-sm font-semibold pb-1">{field.label}</label>
        <input type={field.type} id={field.id} placeholder={field.placeholder}
            className="shadow-sm appearance-none border rounded 
                            w-full py-2 px-3
                            text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" />
    </div>
);

const EmailField = ({ field }: { field: FormElement }) => (
    <div className='w-full'>
        <label htmlFor={field.id}
            className="block text-gray-700 text-sm font-semibold pb-1">{field.label}</label>
        <input type={field.type} id={field.id} placeholder={field.placeholder}
            className="shadow-sm appearance-none border rounded 
                            w-full py-2 px-3
                            text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" />
    </div>
);

const PhoneField = ({ field }: { field: FormElement }) => (
    <div className='w-full'>
        <label htmlFor={field.id}
            className="block text-gray-700 text-sm font-semibold pb-1">{field.label}</label>
        <input type={field.type} id={field.id} placeholder={field.placeholder}
            className="shadow-sm appearance-none border rounded 
                            w-full py-2 px-3
                            text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" />
    </div>
);

const RadioField = ({ field, checkedValue, setCheckedValue }: { field: FormElement, checkedValue: string, setCheckedValue: Function }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedValue(e.target.value);
    };

    return (
        <div className="w-full flex items-start flex-col border-purplish-blue border-2 p-4 rounded-lg cursor-pointer"
            // checked={checkedValue === field.id}
            onChange={handleChange}>
            {/* <input
                type="radio"
                name="plan" // all radio buttons should have the same 'name' to group them
                id={field.id}
                value={field.id} // this will be the value like 'arcade', 'advanced', or 'pro'
                checked={checkedValue === field.id}
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
            /> */}
            <Image src={'/images/icon-advanced.svg'} alt="aa" width={45} height={45}></Image>
            <span className="text-gray-700 font-medium">{field.label}</span>
            <span className="text-sm font-normal text-gray-500">{field.price}</span>
        </div>
    );
};


const CheckboxField = ({
    field,
    isChecked,
    handleCheckboxChange,
}: {
    field: FormElement;
    isChecked: boolean;
    handleCheckboxChange: (id: string) => void;
}) => {
    return (
        <div className="flex items-center justify-between">
            <label htmlFor={field.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                    type="checkbox"
                    id={field.id}
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(field.id)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                />
                <div>
                    <span className="text-gray-700 font-medium">{field.label}</span>
                    <p className="text-gray-500 text-sm">{field.description}</p>
                </div>
            </label>
            <span className="text-sm font-normal text-gray-500">{field.price}</span>
        </div>
    );
};


const SwitchField = ({
    field,
    isMonthly,
    setBillingPeriod,
}: {
    field: FormElement;
    isMonthly: boolean;
    setBillingPeriod: (isMonthly: boolean) => void;
}) => {
    return (
        <div className="w-full flex items-center justify-center bg-magnolia my-2 p-2">
            <span className="text-sm font-normal text-gray-500 mr-2">Monthly</span>
            <label htmlFor={field.id} className="relative inline-block w-12 mr-2 align-middle select-none">
                <input
                    type="checkbox"
                    id={field.id}
                    checked={isMonthly}
                    onChange={(e) => setBillingPeriod(e.target.checked)}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <span
                    className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${isMonthly ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                ></span>
            </label>
            <span className="text-sm font-normal text-gray-500">Yearly</span>
        </div>
    );
};


export function StepContent({ step }: { step: Step }) {
    const [isMonthly, setIsMonthly] = useState(true);

    const [selectedAddOns, setSelectedAddOns] = useState<Record<string, boolean>>({});

    const [selectedPlan, setSelectedPlan] = useState("");

    const handleCheckboxChange = (id: string) => {
        setSelectedAddOns((prevSelected) => ({
            ...prevSelected,
            [id]: !prevSelected[id],
        }));
    };
    const renderField = (field: FormElement) => {
        switch (field.type) {
            case 'text':
                return <TextField field={field} />;
            case 'email':
                return <EmailField field={field} />;
            case 'phone':
                return <PhoneField field={field} />;
            case 'radio':
                return <RadioField
                    field={field}
                    checkedValue={selectedPlan}
                    setCheckedValue={setSelectedPlan} />;
            case 'checkbox':
                return <CheckboxField
                    field={field}
                    isChecked={!!selectedAddOns[field.id]}
                    handleCheckboxChange={handleCheckboxChange} />;
            case 'switch':
                return <SwitchField
                    field={field}
                    isMonthly={isMonthly}
                    setBillingPeriod={setIsMonthly} />;
            default:
                return null;
        }
    };

    return (
        <div className="h-full">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">{step.title}</h2>
            <p className="text-gray-600 min-h-16">{step.description}</p>
            <form className="flex flex-col gap-4 mb-4">
                {step.rows.map((row: FormElement[]) => (
                    <div className="flex flex-row gap-4">
                        {row.map((field: FormElement) => (
                            renderField(field)
                        ))}
                    </div>
                ))}
            </form>
        </div>
    )
}