import React, { useLayoutEffect, useState } from "react"
import { Previewer } from "pagedjs"
import { ResumeData, fetchResumeData } from "./data"
import ExperienceSection from "components/experience/ExperienceSection"
import HeaderSection from "components/header/HeaderSection"
import SkillsSection from "components/skills/SkillsSection"
import SummarySection from "components/summary/SummarySection"
import FooterSection from "components/footer/FooterSection"

const Resume = (): React.ReactElement => {
  const [data, setData] = useState<ResumeData>()

  async function doFetch() {
    const d = await fetchResumeData()
    setData(d)
    console.info("d", d)
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
