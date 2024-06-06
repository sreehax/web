import type { PostMetadata } from "~/types"
import { Fragment } from "react"
import Link from "next/link"
import { getPosts } from "~/utils/posts"

const Page = async () => {
  const posts = await getPosts()

  return (
    <Fragment>
      <ol style={{ listStyle: "none" }}>
        {posts.map((post: PostMetadata) => {
	  return <li key={post.id}>
	    <article className="post-list-item"
	    itemScope
	    itemType="http://schema.org/Article">
	      <header>
	        <h2>
		  <Link href={`/posts/${encodeURIComponent(post.id)}`}>
		    {post.title}
		  </Link>
		</h2>
	      </header>
	    </article>
	  </li>
        })}
      </ol>
    </Fragment>
  )
}

export default Page
