import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import type { ArticlesQuery } from 'types/graphql'
import Article from '../Article'

export const QUERY = gql`
  query ArticlesQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <>
      {posts.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </>
  )
}
