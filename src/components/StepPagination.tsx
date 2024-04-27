import { Step } from "@/app/Step";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "./ui/pagination";

export default function StepPagination({ mobile, steps, nav }: { mobile: boolean, steps: Step[], nav: (index: number) => void }) {
    return (
        mobile ?
            <Pagination className="sm:hidden">
                <PaginationContent>
                    {steps.map((step) => (
                        <PaginationItem key={step.id}>
                            <PaginationLink
                                onClick={() => { nav(step.id - 1) }}
                                className="rounded-full border text-white" href="#">{step.id}</PaginationLink>
                        </PaginationItem>
                    ))}
                </PaginationContent>
            </Pagination> :
            <Pagination className="sticky justify-start p-8">
                <PaginationContent className=" flex-col gap-6 items-start">
                    {steps.map((step) => (
                        <PaginationItem key={step.id} className="flex flex-row items-center gap-4">
                            <PaginationLink

                                onClick={() => { nav(step.id - 1) }}
                                className="rounded-full border text-white w-7 h-7 aspect-square" href="#">{step.id}</PaginationLink>
                            <div>
                                <div className="font-light text-cool-gray text-xs">STEP {step.id}</div>
                                <div className="font-medium text-white text-sm">{step.title}</div>
                            </div>
                        </PaginationItem>
                    ))
                    }

                </PaginationContent>
            </Pagination>
    )
}