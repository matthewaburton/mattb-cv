import yaml from "yaml"
import contactYamlUrl from "./contact.yaml"
import coverYamlUrl from "./cover.yaml"
import experienceYamlUrl from "./experience.yaml"
import linksYamlUrl from "./links.yaml"
import skillsYamlUrl from "./skills.yaml"
import summaryYamlUrl from "./summary.yaml"

function readYamlFile(url: string): any {
  return fetch(url).then(async r => yaml.parse(await r.text()))
}

export interface Factoid {
  title: string
  value: string
}

export interface CoverLetterData {
  main: string[]
  regards: string
  signed: string
  factoids: Factoid[]
}

export interface ResumeContactData {
  name: string
  details?: {
    location?: string
    phone?: string
    email?: string
  }
}

export interface ResumeSummaryData {
  points?: string[]
}

export interface ResumeSkillsData {
  categories: [
    {
      title: string
      icon: string
      skills: string[]
    },
  ]
}

export interface ResumeExperienceData {
  entries: [
    {
      title: string
      organization: string
      dateFrom: string
      dateTo: string
    },
  ]
}

export interface Link {
  title: string
  url: string
  icon: string
}

export type ResumeLinkData = Array<Link>

export interface ResumeData {
  cover: CoverLetterData
  contact: ResumeContactData
  summary: ResumeSummaryData
  skills: ResumeSkillsData
  experience: ResumeExperienceData
  links: ResumeLinkData
}

export async function fetchResumeData(): Promise<ResumeData> {
  const cover = readYamlFile(coverYamlUrl)
  const contact = readYamlFile(contactYamlUrl)
  const summary = readYamlFile(summaryYamlUrl)
  const skills = readYamlFile(skillsYamlUrl)
  const experience = readYamlFile(experienceYamlUrl)
  const links = readYamlFile(linksYamlUrl)

  return {
    cover: await cover,
    contact: await contact,
    summary: await summary,
    skills: await skills,
    experience: await experience,
    links: await links,
  }
}
