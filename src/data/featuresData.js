import { MdOutlineViewKanban } from "react-icons/md";
import { FaUsers, FaShieldAlt } from "react-icons/fa";
import { FaChartLine, FaMobileScreenButton } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const featuresData = [
    {
        id: 1,
        icon: MdOutlineViewKanban,
        title: "Kanban Boards",
        description: "Visual project management with drag-and-drop boards that make workflow management intuitive."
    },
    {
        id: 2,
        icon: FaUsers,
        title: "Team Collaboration",
        description: "Real-time collaboration tools including comments, file sharing, and team notifications."
    },
    {
        id: 3,
        icon: FaChartLine,
        title: "Analytics & Reports",
        description: "Detailed insights into team performance and project progress with customizable reports."
    },
    {
        id: 4,
        icon: MdAccessTimeFilled,
        title: "Time Tracking",
        description: "Built-in time tracking to monitor project hours and improve productivity estimates."
    },
    {
        id: 5,
        icon: FaMobileScreenButton,
        title: "Mobile Access",
        description: "Stay connected with native mobile apps for iOS and Android with offline capabilities."
    },
    {
        id: 6,
        icon: FaShieldAlt,
        title: "Security & Privacy",
        description: "Enterprise-grade security with end-to-end encryption and compliance certifications."
    },
];

export default featuresData;