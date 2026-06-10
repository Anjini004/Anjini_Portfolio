// src/components/ui/SkillBar.jsx
// Animated skill progress bar. `visible` controls whether the bar animates in.

export default function SkillBar({ name, level, icon, index = 0, visible }) {
  return (
    <div
      className="transition-all duration-500 ease-out"
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? 'none' : 'translateX(-16px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Label row */}
      <div className="flex justify-between items-center mb-2">
        <span className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
          <span>{icon}</span>
          {name}
        </span>
        <span className="text-xs font-bold font-mono text-indigo-600 dark:text-indigo-400">
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="h-2 bg-indigo-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1200ms] ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${index * 80}ms`,
            background: 'linear-gradient(90deg, #4f46e5, #10b981)',
          }}
        />
      </div>
    </div>
  )
}
