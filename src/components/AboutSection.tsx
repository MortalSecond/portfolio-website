import en from "@/locales/en.json"
import es from "@/locales/es.json"

export default function AboutSection({language}: {language: "EN" | "ES"}){
    const translations = { EN: en, ES: es }
    const t = translations[language].about

    return(
        <section id="about" className="mb-20">
            <h1 className="text-4xl font-bold mb-4">
                {t.title}
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl">
                {t.paragraph}
            </p>

            <ul className="mt-6 list-disc list-inside text-gray-300 space-y-2">
                {t.skills.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
        </section>
    )
}