import styled from "styled-components"
import SectionTitle from "components/common/SectionTitle"
import { Link } from "data"
import * as hash from "util/hash"

const LinkTable = styled.table`
  tr td {
    padding-bottom: 0.5rem;
  }

  tr td:first-child {
    text-align: center;
  }

  tr td:nth-child(2) {
    padding-right: 2rem;
  }

  a {
    color: blue;
  }
`

interface LinkSectionProps {
  links: Link[]
}

const key = (link: Link) => hash.xxh32(`${link.title}|${link.url}`)
const iconClasses = (names: string) =>
  names
    .split(" ")
    .map(name => `fa-${name}`)
    .join(" ")
    .trim()

const LinkSection = ({ links }: LinkSectionProps) => (
  <div>
    <SectionTitle title="Links" />

    <LinkTable>
      <tbody>
        {links.map(link => (
          <tr key={key(link)}>
            <td>
              <span className={`fas ${iconClasses(link.icon)}`}></span>
            </td>
            <td>{link.title}</td>
            <td>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </LinkTable>
  </div>
)

export default LinkSection
