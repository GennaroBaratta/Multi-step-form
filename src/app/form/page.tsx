import MyForm from "./MyForm";
import { steps } from "../Step";

export default function FormPage() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-start p-6 gap-8">
            <h1>Form</h1>
            <MyForm steps={steps} />
        </main>
    )
}