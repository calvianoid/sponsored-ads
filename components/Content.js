import dataArticles from '../utils/articles.json'
import dataAds from '../utils/ads.json'
import CardArticle from './CardArticle'
export default function Content() {
  const articles = dataArticles
  const ads = dataAds

  const newArticles = [...articles]
  const newAds = [...ads]
  const newData = []

  function angkaPrima(num) {
    let x = 0
    let newNum = num + 1
    for (let i = 2; i <= Math.floor(newNum / 2); i++) {
      x++
      if (newNum % i === 0) {
        return false
      }
    }
    return true
  }

  for (let i = 1; i <= [...articles, ...ads].length + 1; i++) {
    let item = ''
    if (i > 2 && angkaPrima(i - 1)) {
      item = newAds.splice(0, 1)
      newData.push(...item)
    } else {
      item = newArticles.splice(0, 1)
      newData.push(...item)
    }
  }
  console.log(newData)
  return (
    <div className="flex flex-wrap justify-center">
      {newData.map((newData, index) => (
        <div
          key={newData.title}
          className="relative m-5 flex h-[600px] w-full flex-col items-center space-y-2 rounded-lg border bg-white p-3 shadow-xl sm:w-[420px]"
        >
          <CardArticle index={index} {...newData} />
        </div>
      ))}
    </div>
  )
}
