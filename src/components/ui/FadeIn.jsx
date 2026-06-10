// src/components/ui/FadeIn.jsx
// Wrap any element with <FadeIn> to animate it in when it enters the viewport.
// Props:
//   delay     — ms delay before animation starts (default 0)
//   direction — 'up' | 'left' | 'right' | 'none' (default 'up')

import { useInView } from '../../hooks/useInView'

const directionMap = {
  up:    'translate-y-6',
  left:  '-translate-x-6',
  right:  'translate-x-6',
  none:  '',
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionMap[direction]}`}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
