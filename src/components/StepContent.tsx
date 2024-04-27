import { Step, Field } from "@/app/Step";

export function StepContent({ step }: { step: Step }) {
    return (
        <div className="h-full">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">{step.title}</h2>
            <p className="text-gray-600 min-h-16">{step.description}</p>
            <form>
                {step.form.map((field: Field) => (
                    <div key={field.id} className="flex flex-col gap-1 mb-4">
                        <label htmlFor={field.id} 
                        className="block text-gray-700 text-sm font-semibold">{field.label}</label>
                        <input type={field.type} id={field.id} placeholder={field.placeholder}
                            className="shadow-sm appearance-none border rounded 
                            w-full py-2 px-3
                            text-gray-700 leading-tight 
                            focus:outline-none focus:shadow-outline" />
                    </div>
                ))}
            </form>
        </div>
    )
}