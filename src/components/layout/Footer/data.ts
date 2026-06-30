import {
    BrainCircuit,
    Landmark,
    ShieldCheck,
    Database,
    Building2,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";

export const technologies = [

    {
        title: "Artificial Intelligence",
        icon: BrainCircuit,
    },

    {
        title: "Core Banking",
        icon: Landmark,
    },

    {
        title: "Cyber Security",
        icon: ShieldCheck,
    },

    {
        title: "ERP Solutions",
        icon: Database,
    },

    {
        title: "Enterprise Software",
        icon: Building2,
    },

];

export const companyLinks = [

    {
        title: "Home",
        href: "/",
    },

    {
        title: "About",
        href: "/about",
    },

    {
        title: "Products",
        href: "/products",
    },

    {
        title: "Quality",
        href: "/quality",
    },

    {
        title: "Contact",
        href: "/contact",
    },

];

export const productLinks = [

    {
        title: "Core Banking",
        href: "/products/core-banking",
    },

    {
        title: "E-Autopsy",
        href: "/products/e-autopsy",
    },

    {
        title: "Cyber Security",
        href: "/products/cyber-security",
    },

    {
        title: "MIS Solution",
        href: "/products/mis",
    },

];

export const contactInfo = [

    {

        icon: MapPin,

        title: "Head Office",

        value: "Plot No.26, Vivekanand Nagar, Nagpur, Maharashtra",

    },

    {

        icon: Phone,

        title: "Phone",

        value: "+91 62626 86865",

    },

    {

        icon: Mail,

        title: "Email",

        value: "info@vgipl.com",

    },

];

export const socialLinks = [

    {

        icon: FaLinkedinIn,

        href: "#",

        label: "LinkedIn",

    },

    {

        icon: FaFacebookF,

        href: "#",

        label: "Facebook",

    },

    {

        icon: FaInstagram,

        href: "#",

        label: "Instagram",

    },

    {

        icon: FaYoutube,

        href: "#",

        label: "YouTube",

    },

];