import React from "react"
import FooterSection from "components/footer/FooterSection"
import HeaderSection from "components/header/HeaderSection"
import Loader from "components/loader/Loader"
import SectionTitle from "components/common/SectionTitle"
import { Factoid, ResumeData } from "data"
import * as hash from "util/hash"

type CoverLetterContentProps = {
  data: ResumeData
}

const paraKey = (p: string, i: number) => hash.xxh32(`${i}:${p}`)
const factKey = (f: Factoid) => hash.xxh32(f.title)

const CoverLetterContent = ({ data }: CoverLetterContentProps): React.ReactElement => {
  return (
    <>
      <HeaderSection contact={data.contact} />
      <main>
        <SectionTitle title="About Me" />

        {data.cover?.main.map((p: string, i: number) => (
          <p key={paraKey(p, i)}>{p}</p>
        ))}

        <p>
          {data.cover?.regards},<br />
          {data.cover?.signed}
        </p>

        <SectionTitle title="Interesting Factoids" />

        {data.cover?.factoids.map((f: Factoid) => (
          <p key={factKey(f)}>
            <strong>{f.title}:</strong> {f.value}
          </p>
        ))}
      </main>
      <FooterSection />
    </>
  )
}

const CoverLetter = (): React.ReactElement => <Loader paged component={CoverLetterContent} />

export default CoverLetter
