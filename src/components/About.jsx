import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function About() {
	return (
		<StaticQuery
			query={graphql`
        		query {
  					markdownRemark {
    					html
						id
  					}
				}
      `}
			render={data => (
				<div id="about-expanded" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
				</div>
			)}
		/>
	)
}