import React from 'react'
import { FontSizes } from '@pterodactylpaultest/foundation'

interface TextProps {
  children?: React.ReactNode
  size?: keyof typeof FontSizes
}

const Text: React.FC<TextProps> = ({ size = FontSizes.base, children }) => {
  const className = `dse-text dse-text-${size}`

  return <p className={className}>{children}</p>
}

export default Text