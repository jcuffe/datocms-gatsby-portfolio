import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default ({ data }) => (
  <article className="sheet">
    <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
    <div className="sheet__inner">
      <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
      <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
        }}
      />
    </div>
  </article>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
