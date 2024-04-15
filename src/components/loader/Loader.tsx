import React, { useLayoutEffect, useState } from "react"
import { Previewer } from "pagedjs"
import { fetchResumeData, ResumeData } from "data"
import "./Loader.css"

type ComponentProps = {
  data: ResumeData
}

interface LoaderProps {
  component: ({ data }: ComponentProps) => React.ReactElement
  paged?: boolean
}

const Loader = ({ component: Component, paged = false }: LoaderProps) => {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [data, setData] = useState<ResumeData>()

  /**
   * Executes the `fetchResumeData` function.
   */
  async function doFetch() {
    const d = await fetchResumeData()
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

  // Invoke `doPreview` if the data has been loaded and `paged` is true
  useLayoutEffect(() => {
    if (data && loaded && paged) doPreview()
  }, [data, loaded, paged])

  // Render the resume content if the data has been loaded
  if (data && loaded) {
    return <Component data={data} />
  }

  // Render a fallback component if the data is still loading
  return (
    <div className="loader">
      <div className="spinner"></div>
    </div>
  )
}

export default Loader
