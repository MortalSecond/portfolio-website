interface SkillBarProps {
  skill: string;
  level: string;
  percent: number;
}

export default function SkillBar({ skill, level, percent }: SkillBarProps) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm">
        <span>{skill}</span>
        <span className="text-gray-400">{level}</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div
          className="h-2 rounded bg-blue-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}