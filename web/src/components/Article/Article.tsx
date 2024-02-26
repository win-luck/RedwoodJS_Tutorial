import { Link, routes } from '@redwoodjs/router'

import type { Post } from 'types/graphql'

interface Props { // 마찬가지로 인터페이스로 Props를 정의한다.
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div>{article.body}</div>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
