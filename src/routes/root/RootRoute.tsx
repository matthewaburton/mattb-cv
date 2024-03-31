import { useEffect } from "react"
import { Link, NavigationType, useNavigationType } from "react-router-dom"
import "./RootRoute.css"

/**
 * The <Previewer> component from paged.js breaks something in React Router in
 * such a way that navigating back to <RootRoute> will prevent the root route's
 * contents from being rendered. This workaround checks to see if the mot recent
 * navigation operation was "back" (i.e., "POP") and if the "viewedContentPage"
 * value in local storage is set. If so, the "viewedContentPage" value is deleted
 * from local storage, and the page is automatically refreshed. This a hack,
 * but it appears to be necessary as the <Previewer> component doesn't play
 * nicely with react-router-dom.
 *
 * @param navigationType The navigation type.
 */
const useRefreshIfNeeded = (navigationType: NavigationType) => {
  useEffect(() => {
    const viewedContentPage = Boolean(localStorage.getItem("viewedContentPage"))
    if (navigationType === "POP" && viewedContentPage) {
      // Remove the "viewedContentPage" value so we don't keep refreshing
      localStorage.removeItem("viewedContentPage")

      // Refresh the page to force the <RootRoute> contents to render
      window.location.reload()
    }
  })
}

const RootRoute = (): React.ReactElement => {
  const navigationType = useNavigationType()
  useRefreshIfNeeded(navigationType)

  return (
    <main>
      <div className="cards">
        <Link to="cover">
          <div className="card">Cover Letter</div>
        </Link>

        <Link to="resume">
          <div className="card">Resume</div>
        </Link>
      </div>
    </main>
  )
}

export default RootRoute
