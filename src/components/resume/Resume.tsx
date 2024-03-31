import React from "react"
import ExperienceSection from "components/experience/ExperienceSection"
import FooterSection from "components/footer/FooterSection"
import HeaderSection from "components/header/HeaderSection"
import LinksSection from "components/links/LinksSection"
import Loader from "components/loader/Loader"
import SkillsSection from "components/skills/SkillsSection"
import SummarySection from "components/summary/SummarySection"
import { ResumeData } from "data"

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
        <LinksSection links={data.links} />
      </main>
      <FooterSection />
    </>
  )
}

const Resume = (): React.ReactElement => <Loader component={ResumeContent} />

export default Resume
