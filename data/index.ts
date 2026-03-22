export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "My Engineering Principles",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full opacity-15",
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
        title: "FinSolve – Intelligent Document Processing",
        des: "Enterprise-grade serverless IDP system automating financial document flows. Features a resilient event-driven architecture with Azure Service Bus and Logic Apps, optimized for high scalability and extreme cost-efficiency.",
        img: ["idp1.png", "/idp2.png", "/idp3.png", "/idp4.png"],
        iconLists: ["/dotnet.svg", "/azure.svg", "/bicep.png", "/az-fn.png", "/az-sb.png", "/az-cs.png"],
        link: "https://github.com/shakana0/FinSolve.IDP",
    },
    {
        id: 2,
        title: "PulseCare – Backend & Engineering Lead",
        des: "A digital healthcare ecosystem featuring real-time SignalR communication, secure JWT authentication, and a robust repository pattern. Led a team of 10+ developers with a focus on engineering governance and architectural integrity.",
        img: ["/pl1.png", "/pl2.png", "/pl3.png"],
        iconLists: ["/re.svg", "/csharp.svg", "/dotnet.svg", "/sql.svg", "/azure.svg", "/docker.png"],
        link: "https://github.com/shakana0/PulseCare-backend",
    },
    {
        id: 3,
        title: "Product Catalog – API Optimization",
        des: "Two API versions, both serving the same product catalog but built to demonstrate the impact of API optimization, cloud integration, and load testing",
        img: ["/prodcat1.png", "/prodcat2.png", "/prodcat3.png", "/prodcatarch.png", "/prodcatload.png"],
        iconLists: ["/re.svg", "/ts.svg", "/csharp.svg", "/dotnet.svg", "/sql.svg", "/azure.svg"],
        link: "https://github.com/shakana0/ProductCatalogAPI",
    },
    {

        id: 4,
        title: "CursedVibes API",
        des: "Narrative-driven fullstack API with clean architecture, Azure cloud integration, and GitHub Actions CI/CD.",
        img: ["/cursedVibes-Diagram.png", "/character-erdiagram.png", "/cursedVibes-swagger.jpeg"],
        iconLists: ["/csharp.svg", "/dotnet.svg", "/azure.svg", "/sql.svg", "/githubactions.svg"],
        link: "https://github.com/shakana0/CursedVibes",
    }
];

export const workExperience = [
    {
        id: 1,
        title: "Full Stack Developer",
        company: "SALT, Stockholm | Oct 2025 - Present",
        desc: "Served as the technical lead in an internal full‑stack project, defining architecture, reviewing PRs, and coordinating work across the team.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Avanade Sweden AB, Stockholm | Aug 2023 - 2025 May",
        desc: "Delivered a fullstack feature with secure, scalable APIs, optimized SQL interactions, and Azure-integrated credential management - paired with a responsive frontend in C#/.NET and Next.js.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 3,
        title: "Frontend Developer Intern",
        company: "SJ AB, Stockholm | Jan 2023 - May 2023",
        desc: "Rebuilt and optimized the frontend of an internal tool for train status management. Improved UI performance and aligned with the company’s design system, enabling faster workflows and boosting staff productivity.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Frontend Developer Intern",
        company: "Gibon, Uppsala | Aug 2022 - Oct 2022",
        desc: "Built a frontend uptime monitor with React, Redux, and TypeScript, visualizing real-time metrics via REST API. Designed custom SVGs in Figma and led the project independently.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    }
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