"use client"

import StepPagination from "@/components/StepPagination";
import { Step } from "../Step";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useState } from "react";

import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { StepContent } from "@/components/StepContent";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
    name: z.string().min(2).max(255),
    email: z.string().email(),
    phone: z.string().min(10).max(15).regex(phoneRegex, 'Invalid phone number'),
    plan: z.enum(["arcade", "advanced", "pro"]),
    period: z.enum(["monthly", "yearly"]),
    addons: z.set(z.enum(["online-service", "storage", "custom-profile"])),
    termsAndConditions: z.boolean().refine(value => value === true, {
        message: "You must agree to the terms and conditions.",
    }),
});

export default function MyForm({ steps }: { steps: Step[] }) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            plan: "arcade",
            period: "monthly",
            addons: new Set(),
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    function onInvalid() {  // This function is called when the form is invalid
        console.log('Invalid form');
    }

    return (
        <Form {...form}>

            <Tabs defaultValue={steps[0].id.toString()} orientation="vertical">
                <form
                    onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                >
                    <div className="sm:hidden">

                        <StepList mobile={true} steps={steps} />
                    </div>
                    <Card className="p-2 sm:mt-16 flex flex-row justify-start w-[80vw] max-w-4xl sm:aspect-[8/5]">
                        <div className="hidden sm:block rounded-lg 
                        sm:bg-[url('/images/bg-sidebar-desktop.svg')] 
                        bg-cover
                        bg-no-repeat 
                        md:pr-8
                        shrink-0
                        w-[30%]">
                            <StepList mobile={false} steps={steps} />
                        </div>
                        <CardContent className="flex-grow flex flex-col justify-between md:px-20 md:pt-12 pt-4 overflow-y-auto h-full">
                            <StepForm steps={steps} form={form} />
                            <TabsList className="hidden sm:flex justify-end bg-transparent">
                                <TabsTrigger 
                                    type="submit"
                                    className="bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    value={steps[steps.length - 1].id.toString()}>
                                    Submit
                                </TabsTrigger>
                            </TabsList>
                            {/* <Button
                                type={step.id === steps[steps.length - 1].id ? "submit" : "button"}
                                onClick={step.id === steps[steps.length - 1].id ? undefined : handleNext}
                                className="self-end bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Next Step
                            </Button> */}
                        </CardContent>

                    </Card>
                    <footer className="block sm:hidden fixed inset-x-0 bottom-0 bg-white p-4">
                        <Button className="float-right bg-marine-blue hover:bg-pastel-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Next Step
                        </Button>
                    </footer>
                    {/* <Tabs defaultValue={steps[0].id.toString()} orientation="vertical">
                    <TabsList>
                    {steps.map((step) => (
                        <TabsTrigger key={step.id} value={step.id.toString()}>
                        {step.title}
                        </TabsTrigger>
                    ))}
                    </TabsList>
                    {steps.map((step) => (
                        <TabsContent key={step.id} value={step.id.toString()}>
                        <div className="space-y-4">
                        <h2>{step.subtitle}</h2>
                        <p>{step.description}</p>
                        {step.rows.map((row, index) => (
                            <div key={index} className="space-y-4">
                            {row.map((formElement) => (
                                <FormField
                                key={formElement.id}
                                control={form.control}
                                name={formElement.id} render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>{formElement.label}</FormLabel>
                                    <FormControl>
                                    
                                    <Input
                                    placeholder={formElement.placeholder}
                                    value={formElement.value?.toString()}
                                    onChange={(e) => {
                                        field.onChange(e.target.value);
                                    }} />
                                    
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )} />
                            ))}
                            </div>
                        ))}
                        </div>
                        </TabsContent>
                    ))}
                    </Tabs>
                <Button type="submit">Submit</Button> */}
                </form>
            </Tabs>
        </Form >
    )
}

function StepList({ mobile, steps }: { mobile: boolean; steps: Step[] }) {
    return (
        mobile ?
            <TabsList className="sm:hidden h-max">
                {steps.map((step) => (
                    <TabsTrigger key={step.id} value={step.id.toString()}>
                        {step.id}
                    </TabsTrigger>
                ))}
            </TabsList> :
            <TabsList className="sticky justify-start p-8 flex-col gap-6 items-start h-max bg-transparent">
                {steps.map((step) => (
                    <TabsTrigger key={step.id} value={step.id.toString()}>
                        {step.title}
                    </TabsTrigger>
                ))}
            </TabsList>
    )
}

function StepForm({ steps, form }: {
    steps: Step[];
    form: UseFormReturn<z.infer<typeof formSchema>, any, undefined>
}) {
    return (
        steps.map((step) => (
            <TabsContent key={step.id} value={step.id.toString()}>
                <div className="">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">{step.subtitle}</h2>
                    <p className="text-gray-600 min-h-16">{step.description}</p>
                    {step.rows.map((row, index) => (
                        <div key={index} className="flex flex-row gap-4">
                            {row.map((formElement) => (
                                <FormField
                                    key={formElement.id + formElement.value}
                                    control={form.control}
                                    name={formElement.id}
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormLabel>{formElement.label}</FormLabel>
                                            <FormControl>

                                                <Input
                                                    placeholder={formElement.placeholder}
                                                    value={formElement.value?.toString()}
                                                    onChange={(e) => {
                                                        field.onChange(e.target.value);
                                                    }} />

                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                            ))}
                        </div>
                    ))}
                </div>
            </TabsContent>
        )
        ))

}