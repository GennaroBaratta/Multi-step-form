"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { steps } from "@/app/Step"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from "@/components/ui/pagination";
import StepPagination from "@/components/StepPagination";
import { useState } from "react";
import { StepContent } from "@/components/StepContent";

export default function Home() {
  const [step, setStep] = useState(steps[0]);


  const handleNext = () => {
    const index = steps.indexOf(step);
    if (index < steps.length - 1) {
      setStep(steps[index + 1]);
    }
  }
  const handleStepByIndex = (index: number) => {
    setStep(steps[index]);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 gap-8
    bg-fixed
    bg-magnolia
    bg-top bg-no-repeat bg-contain
    bg-[url('/images/bg-sidebar-mobile.svg')] 
    sm:bg-none">
      <div className="sm:hidden">
        <StepPagination mobile={true} steps={steps} nav={handleStepByIndex} />
      </div>

      <Card className="p-2 sm:mt-16 flex flex-row justify-start w-full max-w-4xl aspect-[8/5]">
        <div className="hidden sm:block rounded-lg 
        sm:bg-[url('/images/bg-sidebar-desktop.svg')] 
        bg-cover
        bg-no-repeat 
        md:pr-8
        shrink-0
        w-[30%]">
          <StepPagination mobile={false} steps={steps} nav={handleStepByIndex} />
        </div>

        <CardContent className="flex-grow flex flex-col justify-between md:px-16 md:pt-12 pt-4 overflow-y-auto h-full">

          <StepContent step={step} />
          <Button
            type="button"
            onClick={handleNext}
            className="self-end bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Next Step
          </Button>
        </CardContent>

      </Card>
      <footer className="block sm:hidden fixed inset-x-0 bottom-0 bg-white p-4">
        <Button className="float-right bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Next Step
        </Button>
      </footer>
    </main>
  );
}
