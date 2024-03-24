import React from "react"

interface ContactNameProps {
  className?: string
  children: React.ReactNode
}

const ContactName = ({ className, children }: ContactNameProps): React.ReactElement => (
  <h1 className={className}>{children}</h1>
)

export default ContactName
