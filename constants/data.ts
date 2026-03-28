import { icons } from "./icons";

export const tabs: AppTab[] = [
    { name: "index", title: "Home", icon: icons.home },
    { name: "subscriptions", title: "Equipment", icon: icons.wallet },
    { name: "insights", title: "Insights", icon: icons.activity },
    { name: "settings", title: "Settings", icon: icons.setting },
];

export const HOME_USER = {
    name: "Dr. Adrian | Medical Director",
};

export const HOME_BALANCE = {
    amount: 54300.00,
    nextRenewalDate: "2026-03-18T09:00:00.000Z",
};

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
    {
        id: "mri-scanner",
        icon: { uri: "https://img.icons8.com/fluent/96/mri-scanner.png" },
        name: "MRI Scanner DX",
        price: 2400.00,
        currency: "USD",
        daysLeft: 2,
    },
    {
        id: "ultrasound",
        icon: { uri: "https://img.icons8.com/color/96/ultrasound.png" },
        name: "3D Ultrasound Unit",
        price: 850.00,
        currency: "USD",
        daysLeft: 4,
    },
    {
        id: "dental-xray",
        icon: { uri: "https://img.icons8.com/color/96/x-ray.png" },
        name: "Panoramic X-Ray",
        price: 450.00,
        currency: "USD",
        daysLeft: 6,
    },
];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
    {
        id: "surgical-laser",
        icon: { uri: "https://img.icons8.com/color/96/laser-beam.png" },
        name: "CO2 Surgical Laser",
        plan: "Dermatology Clinic",
        category: "Aesthetics",
        paymentMethod: "Checking ending in 8530",
        status: "active",
        startDate: "2023-03-20T10:00:00.000Z",
        price: 1200.00,
        currency: "USD",
        billing: "Yearly",
        renewalDate: "2026-03-20T10:00:00.000Z",
        color: "#f5c542",
    },
    {
        id: "defibrillator",
        icon: { uri: "https://img.icons8.com/color/96/defibrillator.png" },
        name: "Cardiac Defibrillator",
        plan: "ER Ward",
        category: "Emergency",
        paymentMethod: "Mastercard ending in 2408",
        status: "active",
        startDate: "2024-11-24T10:00:00.000Z",
        price: 250.00,
        currency: "USD",
        billing: "Quarterly",
        renewalDate: "2026-03-24T10:00:00.000Z",
        color: "#e8def8",
    },
    {
        id: "dialysis-machine",
        icon: { uri: "https://img.icons8.com/fluency/96/kidney.png" },
        name: "Hemodialysis Monitor",
        plan: "Renal Dept",
        category: "Critical Care",
        paymentMethod: "Amex ending in 1010",
        status: "paused",
        startDate: "2025-06-27T10:00:00.000Z",
        price: 450.00,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-03-27T10:00:00.000Z",
        color: "#b8d4e3",
    },
    {
        id: "ventilator",
        icon: { uri: "https://img.icons8.com/color/96/lungs.png" },
        name: "ICU Ventilator",
        plan: "Intensive Care Unit",
        category: "Life Support",
        paymentMethod: "Visa ending in 7784",
        status: "cancelled",
        startDate: "2024-04-02T10:00:00.000Z",
        price: 800.00,
        currency: "USD",
        billing: "Yearly",
        renewalDate: "2026-04-02T10:00:00.000Z",
        color: "#b8e8d0",
    },
];
