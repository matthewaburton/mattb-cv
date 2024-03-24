import { useEffect } from "react"
import Resume from "Resume"

const ResumeRoute = (): React.ReactElement => {
  useEffect(() => {
    localStorage.setItem("viewedResumePage", String(true))
  }, [])

  return <Resume />
}

export default ResumeRoute
