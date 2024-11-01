import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill, RiOpenaiFill, RiWordpressFill } from "react-icons/ri";
import { SiTypescript, SiShadcnui, SiPrisma, SiWoocommerce, SiReact } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

export const siteConfig = {
    name: "Jeremy Oyucho",
    title: "Jeremy Oyucho| Full-Stack Developer | Cloud engineer",
    email: "jeremyoyucho8163@gmail.com",
    alias: "Jeremy ",
    description: "Jeremy Oyucho is a web developer who builds scalable, user-centric applications using Next.js, WordPress, and other frameworks. With a focus on performance, accessibility, and clean code, Alvin creates digital solutions that are both functional and aesthetically pleasing.",
    keywords: "Jeremy Oyucho, full-stack developer, web development, Next.js, WordPress, React, Node.js, scalable applications, clean code",
    url: "https://alvinchang.dev",
    taglines: [
        "🚀 Coding Simplicity, Crafting Solutions: Bringing Ideas to Life, One Line at a Time. ✨ Let's transform challenges into digital possibilities with precision and creativity!",
        "🎨 Where Code Meets Creativity: Building Digital Experiences that Matter. 🌐 From intuitive interfaces to powerful backend systems, I create solutions that engage and inspire.",
        "💡 Innovating Beyond the Screen: Crafting Seamless Digital Journeys. 🌟 From concept to completion, let’s build the future, one pixel and one line of code at a time.",
    ],
    titles: ["Full-Stack Developer", "NextJS Developer", "Wordpress Developer"],
    socialLinks: [
        {
            icon: <FaGithub />,
            url: "https://github.com/RealJe-emy?tab=stars",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/jeremy-oyucho-47b18226a/",
        },
        {
            icon: <FaSquareXTwitter />,
            url: "https://x.com/aurora_dream04",
        },
        // {
        // //     icon: <FaDiscord />,
        // //     url: "https://discord.gg/pwYGjDebkF",
        // // },
        // {
        //     icon: <IoIosMail />,
        //     url: "mailto:alvin@studioaurora.io",
        // },
    ],
    sections: {
        tableOfContents: [
            {
                id: "about-me",
                label: "ABOUT ME"
            },
            {
                id: "experiences",
                label: "EXPERIENCES"
            },
            {
                id: "projects",
                label: "PROJECTS"
            }, 
            {
                id: "blogs",
                label: "BLOGS"
            },
            {
                id: "contact",
                label: "CONTACT"
            }
        ],
        aboutMe: `
            <p>
                Hi! I'm Jeremy, a <strong>full-stack developer</strong> who started coding in <strong>2021</strong>. Since then, I've built <strong>streaming platforms</strong>, <strong>blogs</strong>, and <strong>e-commerce sites</strong>. Whether it’s front-end finesse or back-end logic, I love bringing ideas to life on the web.
            </p>
            <p>
                When I’m not coding, you’ll find me playing <strong>Dota 2</strong>, cooking up new recipes, or streaming on <strong>Kick</strong>. Let's connect—I'd love to help with your next <strong>website</strong> or <strong>API</strong> project!
            </p>
        `,
        experiences: [
            {
                company: "Meru Market Place",
                position: "Founder | Lead Developer",
                duration: "2024 - Present",
                description: "Founded a web development agency focused on delivering high-quality products and services . Lead the end-to-end development process, from client consultation and project planning to design implementation and deployment. Skilled in building scalable web apps, e-commerce platforms, and custom API integrations using modern frameworks like Next.js. Oversee a team of developers and coordinate projects to ensure timely delivery and client satisfaction."
            },
            {
                company: "Konza Technopolis.",
                position: "Cloud Engineer",
                duration: " May - August, 2024",
                description: "Developed various websites including streaming platforms, landing pages, and news sites using Next.js, WordPress, and Maccms. Built and managed APIs with Express.js, and leveraged web scraping to curate and generate content. Introduced automation processes to streamline workflows and built desktop applications with Electron for internal use."
            }
        ],
        projects: [
            {
                title: "Jeremy Oyucho | Portfolio Website",
                description: "This is my portfolio website. I built it to showcase my projects and skills. It is a static site built with Next.js, Tailwind CSS, and Shadcn/UI. I used the following technologies to build it:",
                logo: "/logox.png",
                repoLink: "https://github.com/auroradream04/aurora-portfolio",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js"
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS"
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI"
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript"
                    },
                ],
                link: "https://alvinchang.dev"
            },
            {
                title: "Genzify AI",
                description: "GenZify is an AI-powered tool I developed to transform everyday text into trendy Gen Z-style language. I managed both the front-end design and back-end development, integrating AI functionality for smooth and creative rephrasings. The platform delivers a fun, engaging experience, perfect for anyone looking to add a modern twist to their communication. This project highlights my skills in blending AI with user-centric design to create a playful, interactive web tool.",
                logo: "/genzify-logo.png",
                repoLink: "https://github.com/auroradream04/genzify-app",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js"
                    },
                    {
                        icon: <RiOpenaiFill className="text-[#412991]" />,
                        name: "OpenAI API"
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS"
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript"
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI"
                    }
                ],
                link: "https://genzify-app-wine.vercel.app/"
            },
            {
                title: "WhatAboutPets",
                description: "WhatAboutPets is a comprehensive blog and e-commerce platform I built to provide valuable insights into pet care, health, and wellness. Alongside engaging articles, the site features an integrated WooCommerce store, offering a variety of pet-related products. I managed everything from designing the user-friendly interface to implementing SEO strategies and setting up the online shop. This project highlights my expertise in both content-driven sites and e-commerce solutions, creating a complete experience for pet lovers.",
                logo: "/whataboutpets-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js"
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress"
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript"
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS"
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI"
                    },
                    {
                        icon: <GrGraphQl className="text-[#E10098]" />,
                        name: "GraphQL"
                    },
                    {
                        icon: <SiWoocommerce className="text-[#96588A]" />,
                        name: "Woocommerce"
                    }
                ],
                link: "https://whataboutpets.com"
            },
            {
                title: "丹丹影院 - ynct55.com",
                description: "ynct55.com is a Chinese-language streaming platform offering free access to a diverse library of movies, TV shows, and anime. Managed all aspects of the project, from backend infrastructure and database setup to front-end design and user experience. Implemented efficient streaming solutions and optimized the platform for SEO to reach a broader audience. This project highlights my skills in building and maintaining a complete streaming site, tailored specifically for a Chinese-speaking user base.",
                logo: "/ynct55-logo.png",
                repoLink: "",
                technologies: [
                    {
                        icon: <RiNextjsFill className="text-[#FFF]" />,
                        name: "Next.js"
                    },
                    {
                        icon: <RiWordpressFill className="text-[#21759B]" />,
                        name: "WordPress"
                    },
                    {
                        icon: <SiTypescript className="text-[#3178C6]" />,
                        name: "TypeScript"
                    },
                    {
                        icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
                        name: "Tailwind CSS"
                    },
                    {
                        icon: <SiShadcnui className="text-[#FFF]" />,
                        name: "Shadcn/UI"
                    },
                    {
                        icon: <SiPrisma className="text-[#2D3748]" />,
                        name: "Prisma"
                    }
                ],
                link: "https://www.ynct55.com"
            },
        ]
    }
};
