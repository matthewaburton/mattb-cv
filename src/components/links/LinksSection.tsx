import styled from "styled-components"
import SectionTitle from "components/common/SectionTitle"
import { Link } from "data"
import * as hash from "util/hash"

const LinkTable = styled.table`
  tr td {
    padding-bottom: 0.5rem;
  }

  tr td:first-child {
    padding-right: 2rem;
  }

  a {
    color: blue;
  }
`

interface LinkSectionProps {
  links: Link[]
}

const key = (l: Link) => hash.xxh32(`${l.title}|${l.url}`)

const LinkSection = ({ links }: LinkSectionProps) => (
  <div>
    <SectionTitle title="Links" />

    <LinkTable>
      {links.map(l => (
        <tr key={key(l)}>
          <td>{l.title}</td>
          <td>
            <a href={l.url} target="_blank" rel="noopener noreferrer">
              {l.url}
            </a>
          </td>
        </tr>
      ))}
    </LinkTable>
  </div>
)

export default LinkSection
