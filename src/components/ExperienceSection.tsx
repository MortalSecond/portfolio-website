import en from "@/locales/en.json"
import es from "@/locales/es.json"

export default function ExperienceSection({language}: {language: "EN" | "ES"}){
    const translations = { EN: en, ES: es }
    const t = translations[language].experience

  return (
    <section>
      <h1 className="text-4xl font-bold mb-8">{t.title}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Offilex Card */}
        <div className="experienceCard">
          <h2 className="text-2xl font-semibold text-white mb-2">{t.card1.title}</h2>
          <p className="text-gray-400 text-sm mb-3">{t.card1.location}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {t.card1.bullets.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        {/* OrchestraMC Card */}
        <div className="experienceCard">
          <h2 className="text-2xl font-semibold text-white mb-2">{t.card2.title}</h2>
          <p className="text-gray-400 text-sm mb-3">{t.card2.location}</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {t.card2.bullets.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        {/* UPEM Degree Card */}
        <div className="experienceCard md:col-span-2">
          <h2 className="text-2xl font-semibold text-white mb-2">{t.card3.title}</h2>
          <p className="text-gray-400 text-sm mb-3">{t.card3.location}</p>
          <p className="text-gray-300">
            {t.card3.desc}
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {t.card3.bullets.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}