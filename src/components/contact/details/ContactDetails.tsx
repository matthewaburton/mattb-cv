import React from "react"
import ContactDetail from "./ContactDetail"

const LocationIcon = <span className="fas fa-map-marker-alt" />
const PhoneIcon = <span className="fas fa-phone-alt" />
const EmailIcon = <span className="fas fa-envelope" />

interface ContactDetailsProps {
  location?: string
  phone?: string
  email?: string
  className?: string
}

const ContactDetails = ({
  location,
  phone,
  email,
  className,
}: ContactDetailsProps): React.ReactElement => {
  return (
    <div className={className}>
      {location && <ContactDetail icon={LocationIcon} detail={location} />}
      {phone && <ContactDetail icon={PhoneIcon} detail={phone} />}
      {email && <ContactDetail icon={EmailIcon} detail={email} />}
    </div>
  )
}

export default ContactDetails
