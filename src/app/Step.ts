export enum ElementType {
    Text = 'text',
    Email = 'email',
    Phone = 'phone',
    Checkbox = 'checkbox',
    Radio = 'radio',
    Switch = 'switch',
}

export type Step = {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    rows: FormElement[][];
};

export type FormElement = {
    type: ElementType;
    id: "name" | "email" | "phone" | "plan" | "period" | "addons" | "termsAndConditions";
    label?: string;
    placeholder?: string;
    value?: string | number | boolean;
    options?: Option[];
    price?: string;
    description?: string;

};

export type Option = {
    label: string;
    value: string;
    price?: string;
    description?: string;
};

// Additional types for specific form controls can be added as needed
export type TextField = FormElement & {
    type: ElementType.Text;
    // text field specific properties
};

export type EmailField = FormElement & {
    type: ElementType.Email;
    // email field specific properties
};

export type PhoneField = FormElement & {
    type: ElementType.Phone;
    // phone field specific properties
};

export type CheckboxField = FormElement & {
    type: ElementType.Checkbox;
    // checkbox specific properties
};

export type RadioGroupField = FormElement & {
    type: ElementType.Radio;
    options: Option[]; // enforce that options must be provided for radio groups
};


export const steps: Step[] = [
    {
        id: 1,
        title: "Personal info",
        subtitle: "YOUR INFO",
        description: "Please provide your name, email address, and phone number.",
        rows: [
            [
                {
                    label: "Name",
                    type: ElementType.Text,
                    id: "name",
                    placeholder: "e.g. Stephen King",
                }],
            [{
                label: "Email Address",
                type: ElementType.Email,
                id: "email",
                placeholder: "e.g. stephenking@lorem.com",
            }],
            [{
                label: "Phone Number",
                type: ElementType.Phone,
                id: "phone",
                placeholder: "e.g. 555-555-5555",
            }],
        ],
    },
    {
        id: 2,
        title: "Select your plan",
        subtitle: "SELECT PLAN",
        description: "You have the option of monthly or yearly billing.",
        rows: [
            [{
                label: "Arcade",
                type: ElementType.Radio,
                id: "plan",
                value: "arcade",
                price: "9.99",
            },
            {
                label: "Advanced",
                type: ElementType.Radio,
                id: "plan",
                value: "advanced",
                price: "12.99",
            },
            {
                label: "Pro",
                type: ElementType.Radio,
                id: "plan",
                value: "pro",
                price: "15.99",
            }],
            [{
                type: ElementType.Switch,
                id: "period",
                label: "Monthly/Yearly",

            }]
        ],
    },
    {
        id: 3,
        title: "Pick add-ons",
        subtitle: "ADD-ONS",
        description: "Add-ons help enhance your gaming experience.",
        rows: [
            [{
                label: "Game streaming",
                type: ElementType.Checkbox,
                id: "addons",
                value: "game-streaming",
                price: "4.99",
                description: "Watch your favorite games live.",
            }],
            [{
                label: "Game recording",
                type: ElementType.Checkbox,
                id: "addons",
                value: "game-recording",
                price: "2.99",
                description: "Record your gameplay.",
            }],
            [{
                label: "Game coaching",
                type: ElementType.Checkbox,
                id: "addons",
                value: "game-coaching",
                price: "9.99",
                description: "Get tips from the pros.",
            }],
        ],
    },
    {
        id: 4,
        title: "Finishing up",
        subtitle: "SUMMARY",
        description: "Double-check everything look OK before confirming.",
        rows: [
            [{
                label: "Terms and conditions",
                type: ElementType.Checkbox,
                id: "termsAndConditions",
            }],
        ],
    }
];