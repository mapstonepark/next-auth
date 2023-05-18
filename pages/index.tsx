import Layout from "../components/layout"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Article from "../components/Article"

export default function IndexPage() {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Article />
    </Layout>
  )
}
