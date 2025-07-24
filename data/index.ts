export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I thrive in open, collaborative environments.",
        description: " I prioritize close collaboration and open, honest communication whether it’s with clients, designers, or my team members.",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Flexible across time zones and async-friendly.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Passionate about clean, secure, and purposeful code.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Improving my fullstack quiz platform. New UI incoming!",
        description: "Quiz App",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Open to new opportunities or collaborations, feel free to get in touch!",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Quiz App – Secure Learning Platform",
        des: "Is a fullstack educational tool designed to help users learn interactively through quizzes",
        img: "/quiz-app-lp.png",
        iconLists: ["/re.svg", "/ts.svg", "styledcomponents.svg", "/redux.svg", "/node-js.svg", "/mdb.svg"],
        link: "https://github.com/shakana0/quiz-app",
    },
    {
        id: 3,
        title: "Backend-focused API",
        des: "Backend-first e-commerce API with CQRS, MediatR, and EF Core.",
        img: "/backend-diagram.jpg",
        iconLists: ["/csharp.svg", "/dotnet.svg", "/sql.svg", "/azure.svg"],
        link: "https://github.com/shakana0/BakeryStoreBackend",
    },
    {
        id: 2,
        title: "Café Mundo",
        des: "Is a full-stack application where you can browse and buy different coffee products.",
        img: "/coffee-app-home.png",
        iconLists: ["/re.svg", "/ts.svg", "styledcomponents.svg", "/node-js.svg", "/mdb.svg"],
        link: "https://github.com/shakana0/Recept-app",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Full Stack Developer",
        company: " Avanade Sweden AB, Stockholm | Aug 2023 - 2025 May",
        desc: "Delivered a fullstack feature to improve internal UX for staff managing users and system data, combining secure APIs with a dynamic frontend built in .Net and Next.js.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Frontend Developer Intern",
        company: "SJ AB, Stockholm | Jan 2023 - May 2023",
        desc: "Rebuilt and optimized the frontend of an internal tool for train status management. Improved UI performance and aligned with the company’s design system, enabling faster workflows and boosting staff productivity.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 3,
        title: "Frontend Developer Intern",
        company: "Gibon, Uppsala | Aug 2022 - Oct 2022",
        desc: "Built a frontend uptime monitor with React, Redux, and TypeScript, visualizing real-time metrics via REST API. Designed custom SVGs in Figma and led the project independently.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/shakana0",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://linkedin.com/in/shakana-jamal"
    },
];