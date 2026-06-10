// src/components/ui/SectionHeading.jsx
// Reusable section title with an optional small label above and a gradient divider line.

export default function SectionHeading({ label, title, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-2">
          {label}
        </p>
      )}
      <div
        className={`flex items-center gap-4 ${center ? 'justify-center' : ''}`}
      >
        <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          {title}
        </h2>
        {!center && (
          <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-400/60 to-transparent rounded-full" />
        )}
      </div>
    </div>
  )
}
