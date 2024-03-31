import React, { useLayoutEffect, useState } from "react"
import { Previewer } from "pagedjs"
import ExperienceSection from "components/experience/ExperienceSection"
import FooterSection from "components/footer/FooterSection"
import HeaderSection from "components/header/HeaderSection"
import SkillsSection from "components/skills/SkillsSection"
import SummarySection from "components/summary/SummarySection"
import { fetchResumeData, ResumeData } from "data"

type ResumeContentProps = {
  data: ResumeData
}

const ResumeContent = ({ data }: ResumeContentProps): React.ReactElement => {
  return (
    <>
      <HeaderSection contact={data.contact} />
      <main>
        <SummarySection points={data.summary.points} />
        <SkillsSection categories={data.skills.categories} />
        <ExperienceSection entries={data.experience.entries} />
      </main>
      <FooterSection />
    </>
  )
}

const Resume = (): React.ReactElement => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [data, setData] = useState<ResumeData>()

  /**
   * Executes the `fetchResumeData` function.
   */
  async function doFetch() {
    const d = await fetchResumeData()
    setData(d)
  }

  /**
   * Invokes the Page.js in-browser previewer.
   */
  async function doPreview() {
    await new Previewer().preview()
  }

  // Fetch resume data on component load
  useLayoutEffect(() => {
    doFetch()
  }, [])

  // Paged.js appears to need a brief moment for the DOM content to fully load
  // (a separate issue from network load time). 0.5 sec appears to be sufficient
  // based on testing/observation.
  useLayoutEffect(() => {
    if (data) setTimeout(() => setLoaded(true), 500)
  }, [data])

  // Invoke `doPreview` if the data has been loaded
  useLayoutEffect(() => {
    if (data && loaded) doPreview()
  }, [data, loaded])

  // Render the resume content if the data has been loaded
  if (data && loaded) {
    return <ResumeContent data={data} />
  }

  // Render a fallback component if the data is still loading
  return <span>Fallback</span>
}

export default Resume
