const pricingData = [
    {
        id: 1,
        title: "Starter",
        price: {monthly: "$9", yearly: "$86"},
        features: [
            "Up to 5 team members",
            "10 projects",
            "Basic reporting",
            "Email support"
        ],
        popular: false,
        cta: "Get Started"
    },
    {
        id: 2,
        title: "Professional",
        price: {monthly: "$29", yearly: "$278"},
        features: [
            "Up to 25 team members",
            "Unlimited projects",
            "Advanced analytics",
            "Priority support",
            "Custom workflows"
        ],
        popular: true,
        cta: "Get Started"
    },
    {
        id: 3,
        title: "Enterprise",
        price: {monthly: "$99", yearly: "$950"},
        features: [
            "Unlimited team members",
            "Unlimited projects",
            "Custom integrations",
            "24/7 phone support",
            "Advanced security"
        ],
        popular: false,
        cta: "Contact Sales"
    },
];

export default pricingData;