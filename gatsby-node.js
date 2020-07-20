/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  let parentNode = getNode(node.parent)
  if (node.internal.type === "MarkdownRemark") {
    if (parentNode.sourceInstanceName === "projects") {
      let slug = createFilePath({ node, getNode })
      slug = slug.replace(/\//g, "")
      actions.createNodeField({ node, name: "slug", value: slug })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // You could keep the GQL Query in here - I prefer to separate
  const { data } = await getPageData(graphql)

  data.projects.edges.forEach(({ node }) => {
    const {slug} = node.fields;
    actions.createPage({
      path: `/work/${slug}`,
      component: path.resolve("./src/templates/project.js"),
      context: {slug: slug},
    })
  })
}

async function getPageData(graphql) {
  return await graphql(`
    {
      projects: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
}
