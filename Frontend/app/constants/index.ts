// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
// import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

import { link } from "fs";
import { title } from "process";

export const categoryieslinks = [
    { href: "Discount codes", label: "Discount codes " },
    { href: "Top Brands", label: "Top Brands" },
    { href: "Bestsellers", label: "Bestsellers" },
    { href: "More", label: "More" },
  
];

export const navlinks = [
    { href: "Find a Store", label: "Find a Store |" },
    { href: "Help", label: "Help | " },
    { href: "Join Us", label: "Join Us | " },
    { href: "Sign In", label: "Sign In  " },

];


// export const shoes = [
//     {
//         thumbnail: thumbnailShoe1,
//         bigShoe: bigShoe1,
//     },
//     {
//         thumbnail: thumbnailShoe2,
//         bigShoe: bigShoe2,
//     },
//     {
//         thumbnail: thumbnailShoe3,
//         bigShoe: bigShoe3,
//     },
// ];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

// export const products = [
//     {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     },
//     {
//         imgURL: shoe5,
//         name: "Nike Air Jordan-10",
//         price: "$210.20",
//     },
//     {
//         imgURL: shoe6,
//         name: "Nike Air Jordan-100",
//         price: "$220.20",
//     },
//     {
//         imgURL: shoe7,
//         name: "Nike Air Jordan-001",
//         price: "$230.20",
//     },
// ];

// export const services = [
//     {
//         imgURL: truckFast,
//         label: "Free shipping",
//         subtext: "Enjoy seamless shopping with our complimentary shipping service."
//     },
//     {
//         imgURL: shieldTick,
//         label: "Secure Payment",
//         subtext: "Experience worry-free transactions with our secure payment options."
//     },
//     {
//         imgURL: support,
//         label: "Love to help you",
//         subtext: "Our dedicated team is here to assist you every step of the way."
//     },
// ];

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];


export const footerLinks = [
    {
        title: "Resources",
        links: [
            { name: "Gift Cards", link: "/" },
            { name: "Find a Store", link: "/" },
            { name: "Become a Member", link: "/" },
            { name: "Nike x NBA", link: "/" },
            { name: "Nike Journal", link: "/" },
            { name: "Site Feedback", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "Get Help", link: "/" },
            { name: "Order Status", link: "/" },
            { name: "Shiping and Delivery", link: "/" },
            { name: "Returns", link: "/" },
            { name: "Order Cancellation", link: "/" },
            { name: "Payment Options", link: "/" },
            { name: "Gift Card Balance", link: "/" },
            { name: "Contact Us", link: "/" },
            { name: "Payment policy", link: "/" },
        ],

    },
    {
        title: "Company",
        links: [
            { name: "About Nike", link: "mailto:customer@nike.com" },
            { name: "News", link: "tel:+92554862354" },
            { name: "Careers", link: "tel:+92554862354" },
            { name: "Investors", link: "tel:+92554862354" },
            { name: "Purpose", link: "tel:+92554862354" },
            { name: "Sustainability", link: "tel:+92554862354" },

        ],
    },
    {
        title: "Promotions & Discounts",
        links: [
            { name: "Student", link: "mailto:customer@nike.com" },
            { name: "Military", link: "tel:+92554862354" },
            { name: "Teacher", link: "tel:+92554862354" },
            { name: "First Responders & Medical Professionals", link: "tel:+92554862354" },
            { name: "Birthday", link: "tel:+92554862354" },

        ],
    },
];



export const cookie = [
    {
        title: "",
        links: [
            { name: "@ 2024 Nike,Inc. All Right Reserved", link: "" },
            { name: "Guide ", link: "/" },
            { name: "Terms of sale ", link: "/" },
            { name: "Terms of Use", link: "/" },
            { name: "Nike Privacy Policy", link: "/" },
        ],
    },

]