import React from "react"
import styled from "styled-components"
import { StyledUl } from "components/common"
import SectionTitle from "components/common/SectionTitle"
import * as hash from "util/hash"

const SkillCategory = styled.section`
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;

  :nth-child(2) {
    padding-top: 0;
  }

  :last-child {
    border-bottom: none;
  }

  h3 {
    display: inline-block;
    font-size: 1rem;
    margin: 0;
    vertical-align: top;
    width: 6.5rem;

    .fas {
      display: inline-block;
      font-size: 75%;
      padding: 0;
      text-align: center;
      top: -1px;
      width: 1.5rem;
    }

    .title {
      display: inline-block;
      width: 3.5rem;
    }
  }

  ul.skills {
    column-count: 3;
    column-width: 15rem;
    display: inline-block;
  }
`

const SkillsList = styled(StyledUl)`
  margin: 0;
`

interface SkillsSectionProps {
  categories: [
    {
      title: string
      icon: string
      skills: string[]
    },
  ]
}

const SkillsSection = ({ categories }: SkillsSectionProps): React.ReactElement => {
  return (
    <section>
      <SectionTitle title="Skills" />

      {categories?.map(c => (
        <SkillCategory key={hash.xxh32(c.title)}>
          <h3>
            <span className={`fas fa-${c.icon}`}></span>
            <span className="title">{c.title}</span>
          </h3>
          <SkillsList className="skills">
            {c.skills?.map(p => (
              <li key={hash.xxh32(p)}>{p}</li>
            ))}
          </SkillsList>
        </SkillCategory>
      ))}
    </section>
  )
}

export default SkillsSection
