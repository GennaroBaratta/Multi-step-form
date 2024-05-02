"use client"

import { Step } from "../Step";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form";
import { z } from "zod";

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
            <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-8">
                <Tabs orientation="vertical">
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

                    <TabsContent value="one">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </TabsContent>
                    <TabsContent value="two">
                    </TabsContent>
                </Tabs>


                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
