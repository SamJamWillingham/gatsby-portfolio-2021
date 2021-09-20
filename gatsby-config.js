/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		{
			resolve: `gatsby-plugin-fontawesome-css`
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `markdown`,
				path: `${__dirname}/src/markdown`,
			},
		},
		`gatsby-transformer-remark`,
	],
}