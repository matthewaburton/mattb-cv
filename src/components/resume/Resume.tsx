import React, { useLayoutEffect, useState } from "react"
import { Previewer } from "pagedjs"
import ExperienceSection from "components/experience/ExperienceSection"
import FooterSection from "components/footer/FooterSection"
import HeaderSection from "components/header/HeaderSection"
import SkillsSection from "components/skills/SkillsSection"
import SummarySection from "components/summary/SummarySection"
import { fetchResumeData, ResumeData } from "data"

const Resume = (): React.ReactElement => {
  const [data, setData] = useState<ResumeData>()

  async function doFetch() {
    const d = await fetchResumeData()
    setData(d)
  }

  async function doPreview() {
    await new Previewer().preview()
  }

  useLayoutEffect(() => {
    doFetch()
  }, [])

  useLayoutEffect(() => {
    if (data) doPreview()
  }, [data])

  if (!data) {
    return <span></span>
  }

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

export default Resume
