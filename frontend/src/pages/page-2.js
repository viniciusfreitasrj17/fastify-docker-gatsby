import React from "react"
import { Link } from "gatsby"
import {useStaticQuery, graphql}  from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allCustomApi {
        nodes {
          name,
          email,
          password
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>

      {data.allCustomApi.nodes.map(n => {
        return (
          <div>
            <p> {n.name} </p>
            <p> {n.email} </p>
            <p> {n.password} </p>
          </div>
        )
      })}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
