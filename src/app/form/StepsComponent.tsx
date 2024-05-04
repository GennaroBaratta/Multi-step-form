import { useFormContext } from 'react-hook-form';

export function StepOne() {
    const { register } = useFormContext();
    return (
        <div>
            <input {...register("firstName")} placeholder="First Name" />
            <input {...register("lastName")} placeholder="Last Name" />
        </div>
    );
}


export function StepTwo() {
    const { register } = useFormContext();
    return (
        <div>
            <input {...register("email")} placeholder="Email" />
            <input {...register("age", { valueAsNumber: true })} placeholder="Age" />
        </div>
    );
}
