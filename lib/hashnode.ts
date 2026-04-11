// Hashnode GraphQL API utility
// Fetches blog posts at build time - zero runtime performance impact

interface HashNodePost {
  id: string
  title: string
  brief: string
  slug: string
  dateAdded: string
  readTimeInMinutes: number
  tags: Array<{ name: string }>
}

interface HashnodeResponse {
  data: {
    publication: {
      posts: {
        edges: Array<{
          node: HashNodePost
        }>
      }
    }
  }
}

const HASHNODE_GRAPHQL = 'https://gql.hashnode.com/'

export async function getHashnodeBlogPosts(limit = 3) {
  try {
    const query = `
      query GetPagePosts($host: String!) {
        publication(host: $host) {
          posts(first: ${limit}) {
            edges {
              node {
                id
                title
                brief
                slug
                dateAdded
                readTimeInMinutes
                tags {
                  name
                }
              }
            }
          }
        }
      }
    `

    const response = await fetch(HASHNODE_GRAPHQL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables: { host: 'thebuildlog.hashnode.dev' },
      }),
      next: { revalidate: 86400 }, // Revalidate once per day
    })

    if (!response.ok) {
      console.error('Hashnode API error:', response.statusText)
      return null
    }

    const data: HashnodeResponse = await response.json()
    
    if (!data.data?.publication?.posts?.edges) {
      return null
    }

    return data.data.publication.posts.edges.map((edge) => {
      const post = edge.node
      return {
        id: post.id,
        title: post.title,
        excerpt: post.brief,
        slug: post.slug,
        date: new Date(post.dateAdded).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        readTime: `${post.readTimeInMinutes} min read`,
        tags: post.tags.map((t) => t.name),
        url: `https://thebuildlog.hashnode.dev/${post.slug}`,
      }
    })
  } catch (error) {
    console.error('Failed to fetch Hashnode posts:', error)
    return null
  }
}
