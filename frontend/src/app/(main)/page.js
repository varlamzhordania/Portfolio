import {NEXT_BASE_API_URL} from "../../config";
import Hero from "../../components/(main)/Hero/Hero";
import About from "../../components/(main)/About/About";
import Projects from "../../components/(main)/Projects/Projects";
import Services from "../../components/(main)/Services/Services";
import Skills from "../../components/(main)/Skills/Skills";

export const metadata = {
    title: "Varlam Zhordania",
    description: "Varlam Zhordania , full-stack web developer",
}

export default async function page() {

    const jsonLd = [
        {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "nextjs",
            "url": `${NEXT_BASE_API_URL}`,
        },
        {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "home",
                "item": `${NEXT_BASE_API_URL}`
            },
            ]
        },
    ]

    return (
        <section  className={"main"}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
        </section>
    )
}
