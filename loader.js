const matter = require('gray-matter')

// 1. get rid of the frontmatter and keep the content only
// 2. add in the BlogPost import and child exports
module.exports = async function(content) {
    const callback = this.async()

    const obj = matter(content)

    const document = 
`
import BlogPost from '~/components/blogpost'
export const fm = ${JSON.stringify(obj.data)};
export const metadata = {
  title: fm.title,
  description: fm.description
}

${obj.content}

export default ({ children }) => <BlogPost fm={fm}>{children}</BlogPost>
`
    return callback(null, document)
}
