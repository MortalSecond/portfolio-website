import ProjectCard from '@/components/ProjectCard'
import en from "@/locales/en.json"
import es from "@/locales/es.json"

export default function ProjectsSection({language}: {language: "EN" | "ES"}){
    const translations = { EN: en, ES: es }
    const t = translations[language].projects

    return(
        <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <ProjectCard 
                    language={language}
                    title={t.project1.title}
                    desc={t.project1.desc}
                    link={t.project1.link}
                />
            </div>
        </section>
    )
}