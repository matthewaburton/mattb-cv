import React, { useEffect } from "react"

interface ContactNameProps {
  className?: string
  children: React.ReactNode
}

const ContactName = ({ className, children }: ContactNameProps): React.ReactElement => {
  useEffect(() => {
    console.info("className", className)
    console.info("children", children)
  }, [className, children])

  return <h1 className={className}>{children}</h1>
}

export default ContactName
