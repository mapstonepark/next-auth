import Footer from "./Footer"
import type { ReactNode } from "react"
import Header from "./header"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      
      <main>{children}</main>
      <Footer />
    </>
  )
}
