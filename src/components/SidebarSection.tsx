import SkillBar from '@/components/SkillBar'
import Image from 'next/image'
import en from "@/locales/en.json"
import es from "@/locales/es.json"

type Skill = {
  title: string
  level: string
  percent: number
}

export default function SidebarSection({language}: {language: "EN" | "ES"}){
  const translations = { EN: en, ES: es }
  const t = translations[language].sidebar

  return(
    <aside className="w-72 bg-gradient-to-b from-purple-800 via-blue-800 to-indigo-900 p-6 flex flex-col items-center">
      <Image src="/profile.jpg" alt='Profile Image' width={200} height={200} 
      className="rounded-full ring-4 ring-white shadow-lg"/>
      <h2 className="mt-4 text-2xl font-bold text-center">Diego Jiménez Méndez</h2>
      <p className="text-gray-300 text-center">{t.titles}</p>

      {/* Skills */}
      <div className="mt-6 w-full">
        {t.skills.map((skill: Skill, i: number) => (
          <SkillBar
            key={i}
            skill={skill.title}
            level={skill.level}
            percent={skill.percent}
          />
        ))}
      </div>

      <a
        href={t.cv}
        download={t.cv}
        className="mt-6 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
      >
        {t.downloadButton}
      </a>
    </aside>
  )
}