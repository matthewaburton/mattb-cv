import { useEffect } from "react"
import CoverLetter from "components/cover/CoverLetter"

const CoverLetterRoute = (): React.ReactElement => {
  useEffect(() => {
    localStorage.setItem("viewedContentPage", String(true))
  }, [])

  return <CoverLetter />
}

export default CoverLetterRoute
