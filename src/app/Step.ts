
export type Step = {
    id: number
    title: string
    description: string
    form: Field[]
}

export type Field = {
    label: string
    type: string
    id: string
    placeholder?: string
    price?: string
    description?: string
}

export const steps: Step[] = [
    {
        id: 1,
        title: "Personal info",
        description: "Please provide your name, email address, and phone number.",
        form: [
            {
                label: "Name",
                type: "text",
                id: "name",
                placeholder: "e.g. Stephen King",
            },
            {
                label: "Email Address",
                type: "email",
                id: "email",
                placeholder: "e.g. stephenking@lorem.com",
            },
            {
                label: "Phone Number",
                type: "tel",
                id: "phone",
                placeholder: "e.g. 555-555-5555",
            },
        ],
    },
    {
        id: 2,
        title: "Select your plan",
        description: "You have the option of monthly or yearly billing.",
        form: [
            {
                label: "Arcade",
                type: "radio",
                id: "arcade",
                price: "9.99",
            },
            {
                label: "Advanced",
                type: "radio",
                id: "advanced",
                price: "12.99",
            },
            {
                label: "Pro",
                type: "radio",
                id: "pro",
                price: "15.99",
            },
        ],
    },
    {
        id: 3,
        title: "Pick add-ons",
        description: "Add-ons help enhance your gaming experience.",
        form: [
            {
                label: "Game streaming",
                type: "checkbox",
                id: "game-streaming",
                price: "4.99",
                description: "Watch your favorite games live.",
            },
            {
                label: "Game recording",
                type: "checkbox",
                id: "game-recording",
                price: "2.99",
                description: "Record your gameplay.",
            },
            {
                label: "Game coaching",
                type: "checkbox",
                id: "game-coaching",
                price: "9.99",
                description: "Get tips from the pros.",
            },
        ],
    },
    {
        id: 4,
        title: "Finishing up",
        description: "Double-check everything look OK before confirming.",
        form: [
            {
                label: "Terms and conditions",
                type: "checkbox",
                id: "terms-and-conditions",
            },
        ],
    }
];