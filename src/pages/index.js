import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Skus from "../components/Skus"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Skus />
  </Layout>
)

export default IndexPage
