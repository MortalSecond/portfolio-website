import en from "@/locales/en.json"
import es from "@/locales/es.json"

export default function ContactSection({language}: {language: "EN" | "ES"}){
    const translations = { EN: en, ES: es }
    const t = translations[language].contact

    return(
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold mb-6">{t.title}</h2>
          <a
            href="mailto:irondiego_jkl@hotmail.com"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition"
          >
            {t.button}
          </a>
        </section>
    )
}