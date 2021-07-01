import yaml from "yaml"
import contactYamlUrl from "./contact.yaml"
import experienceYamlUrl from "./experience.yaml"
import skillsYamlUrl from "./skills.yaml"
import summaryYamlUrl from "./summary.yaml"

function readYamlFile(url: string): any {
  return fetch(url).then(async r => yaml.parse(await r.text()))
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

export interface ResumeSkilsData {
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

export interface ResumeData {
  contact: ResumeContactData
  summary: ResumeSummaryData
  skills: ResumeSkilsData
  experience: ResumeExperienceData
}

export async function fetchResumeData(): Promise<ResumeData> {
  const contact = readYamlFile(contactYamlUrl)
  const summary = readYamlFile(summaryYamlUrl)
  const skills = readYamlFile(skillsYamlUrl)
  const experience = readYamlFile(experienceYamlUrl)

  return {
    contact: await contact,
    summary: await summary,
    skills: await skills,
    experience: await experience,
  }
}
