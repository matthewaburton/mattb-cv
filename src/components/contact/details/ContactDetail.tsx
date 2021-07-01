import React from "react"

interface ContactDetailProps {
  detail?: React.ReactNode
  icon?: React.ReactNode
}

const ContactDetail = ({ detail, icon }: ContactDetailProps): React.ReactElement => {
  return (
    <>
      {icon}
      {detail}
    </>
  )
}

export default ContactDetail
