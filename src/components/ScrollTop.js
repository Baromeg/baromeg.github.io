import userEvent from "@testing-library/user-event"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scroll({
      // x: -160,
      // y: 0,
      top: 0,
      left: 0,
    })
  }, [pathname])
  return null
}

export default ScrollTop
