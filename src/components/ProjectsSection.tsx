import en from "@/locales/en.json"
import es from "@/locales/es.json"
import ShowcaseProject from "@/components/ShowcaseProject"

export default function ProjectsSection({language}: {language: "EN" | "ES"}) {
    const translations = { EN: en, ES: es }
    const t = translations[language].projects

    return (
      <div className="relative">
        {t.project1.sections.map((section, i) => (
        <ShowcaseProject
            key={i}
            // Yeah, i know the parameters and variables' indexes are flipped,
            // but it's on purpose. I just think the second image looks
            // better as the primary image on this specific case.
            image={section.image2}
            image2={section.image}
            title={section.header}
            button={t.project1.button}
            link={t.project1.link}
            paragraphs={section.paragraphs}
        />))}
      </div>
    )
}