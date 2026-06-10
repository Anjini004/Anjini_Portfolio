// src/components/ui/Card.jsx
// Universal card wrapper. Pass `hover={false}` to disable the lift effect.

export default function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        rounded-2xl overflow-hidden
        shadow-card
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-indigo-300 dark:hover:border-indigo-600' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
