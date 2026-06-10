// src/components/ui/Tag.jsx
// Reusable pill tag for technologies, labels, periods, etc.

export default function Tag({ text, color }) {
  const style = color
    ? {
        backgroundColor: `${color}18`,
        color,
        border: `1px solid ${color}45`,
      }
    : {}

  return (
    <span
      className={
        `inline-block px-3 py-0.5 rounded-full text-xs font-semibold font-mono tracking-wide
         ${color ? '' : 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800'}`
      }
      style={style}
    >
      {text}
    </span>
  )
}
