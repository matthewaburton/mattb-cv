import React from "react"
import ExperienceSection from "components/experience/ExperienceSection"
import FooterSection from "components/footer/FooterSection"
import HeaderSection from "components/header/HeaderSection"
import SkillsSection from "components/skills/SkillsSection"
import SummarySection from "components/summary/SummarySection"
import { ResumeData } from "data"
import Loader from "components/loader/Loader"
import LinkSection from "components/links/LinksSection"

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
        <LinkSection links={data.links} />
      </main>
      <FooterSection />
    </>
  )
}

const Resume = (): React.ReactElement => <Loader component={ResumeContent} />

export default Resume
