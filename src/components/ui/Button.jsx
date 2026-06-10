// src/components/ui/Button.jsx
// Reusable button. variant: 'primary' | 'outline' | 'ghost'

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
}) {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary: `
      bg-indigo-600 text-white border-2 border-indigo-600
      hover:bg-indigo-700 hover:border-indigo-700
      hover:-translate-y-0.5
      shadow-accent hover:shadow-lg
    `,
    outline: `
      bg-transparent text-indigo-600 dark:text-indigo-400
      border-2 border-indigo-600 dark:border-indigo-400
      hover:bg-indigo-50 dark:hover:bg-indigo-950
      hover:-translate-y-0.5
    `,
    ghost: `
      bg-transparent text-slate-600 dark:text-slate-400
      border border-slate-200 dark:border-slate-700
      hover:bg-slate-50 dark:hover:bg-slate-800
    `,
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
