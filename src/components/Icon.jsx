import * as Lucide from 'lucide-react'

// Renders a Lucide icon by name, e.g. <Icon name="Printer" size={24} />
export default function Icon({ name, size = 24, ...rest }) {
  const Cmp = Lucide[name] || Lucide.Circle
  return <Cmp size={size} strokeWidth={1.75} aria-hidden="true" {...rest} />
}
