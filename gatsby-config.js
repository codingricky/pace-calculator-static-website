module.exports = {
	siteMetadata: {
		title: 'Pace Calculator',
		author: 'Polymorph Solutions',
		description: 'Pace Calculator to see how fast you need to run to break your Personal Best',
		keywords: `running pace calculator personal best fitness fast`,
		siteUrl: `https://www.pacecalculator.com.au`
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/icon.png',
				orientation: 'portrait'
			}
		},
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: ['G-XXXXXXXXXX'], // Replace with your GA4 measurement ID
			}
		},
		`gatsby-plugin-sitemap`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	]
};
