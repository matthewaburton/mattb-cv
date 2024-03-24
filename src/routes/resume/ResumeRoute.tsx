import { useEffect } from "react"
import Resume from "components/resume/Resume"

const ResumeRoute = (): React.ReactElement => {
  useEffect(() => {
    localStorage.setItem("viewedResumePage", String(true))
  }, [])

  return <Resume />
}

export default ResumeRoute
