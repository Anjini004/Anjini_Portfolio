// src/components/ui/Badge.jsx
// Availability / status badge with animated pulse dot.

export default function Badge({ children, color = '#10b981' }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold font-mono border"
      style={{
        backgroundColor: `${color}18`,
        color,
        borderColor: `${color}40`,
      }}
    >
      <span
        className="w-2 h-2 rounded-full animate-pulse-dot inline-block"
        style={{ backgroundColor: color }}
      />
      {children}
    </span>
  )
}
