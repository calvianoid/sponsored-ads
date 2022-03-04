import { useState } from 'react'
import dataArticles from '../utils/articles.json'
import CardArticle from './CardArticle'
export default function Content() {
  const [article, setArticles] = useState(dataArticles)
  return (
    <div className="flex flex-wrap justify-center">
      {article.map((article, index) => (
        <div
          key={article.title}
          className="relative m-5 flex min-h-[479px] w-[420px] flex-col items-center space-y-2 rounded-lg border bg-white p-3 shadow-xl"
        >
          <CardArticle index={index} {...article} />
        </div>
      ))}
    </div>
  )
}
