import React, { useLayoutEffect, useState } from "react"
import { Previewer } from "pagedjs"
import FooterSection from "components/footer/FooterSection"
import HeaderSection from "components/header/HeaderSection"
import SectionTitle from "components/common/SectionTitle"
import { Factoid, fetchResumeData, ResumeData } from "data"
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

const CoverLetter = (): React.ReactElement => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [data, setData] = useState<ResumeData>()

  /**
   * Executes the `fetchResumeData` function.
   */
  async function doFetch() {
    const d = await fetchResumeData()
    console.debug("data", d)
    setData(d)
  }

  /**
   * Invokes the Page.js in-browser previewer.
   */
  async function doPreview() {
    await new Previewer().preview()
  }

  // Fetch resume data on component load
  useLayoutEffect(() => {
    doFetch()
  }, [])

  // Paged.js appears to need a brief moment for the DOM content to fully load
  // (a separate issue from network load time). 0.5 sec appears to be sufficient
  // based on testing/observation.
  useLayoutEffect(() => {
    if (data) setTimeout(() => setLoaded(true), 500)
  }, [data])

  // Invoke `doPreview` if the data has been loaded
  useLayoutEffect(() => {
    if (data && loaded) doPreview()
  }, [data, loaded])

  // Render the resume content if the data has been loaded
  if (data && loaded) {
    return <CoverLetterContent data={data} />
  }

  // Render a fallback component if the data is still loading
  return <span>Fallback</span>
}

export default CoverLetter
