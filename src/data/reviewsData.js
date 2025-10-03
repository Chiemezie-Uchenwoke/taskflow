import emily from "../assets/emily.jpg";
import mike from "../assets/mike.jpg";
import sarah from "../assets/sarah.jpg";

const reviewsData = [
    {
        id: 1,
        clientName: "Sarah Chen",
        role: "Product Manager, TechCorp",
        imgUrl: `${sarah}`,
        imgAlt: "Sarah's image",
        review: "TaskFlow transformed how our team manages projects. The intuitive interface and powerful features have increased our productivity by 40%.",
        rating: 5
    },
    {
        id: 2,
        clientName: "Mike Rodriguez",
        role: "CEO, StartupXYZ",
        imgUrl: `${mike}`,
        imgAlt: "Mike's image",
        review: "The best project management tool we've used. Simple enough for our small team, but powerful enough to scale with us.",
        rating: 5
    },
    {
        id: 3,
        clientName: "Emily Watson",
        role: "Design Lead, CreativeAgency",
        imgUrl: `${emily}`,
        imgAlt: "Emily's image",
        review: "TaskFlow's collaboration features are game-changing. Our remote team feels more connected than ever before.",
        rating: 5
    },
];

export default reviewsData;