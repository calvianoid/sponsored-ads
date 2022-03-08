const ads = [
  {
    title: 'INI SPONSORED',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Expedita est impedit doloribus sit sunt ipsum magnam ea. Voluptatem dolorem nam.',
    bookmarked: true,
    likes: 43,
  },
  {
    title: 'INI SPONSORED2',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Commodi consequatur laborum accusantium iure quis. Cupiditate sit consequatur ipsa quo temporibus voluptas officiis. Sed sit beatae temporibus dolorum.',
    bookmarked: true,
    likes: 29,
  },
  {
    title: 'INI SPONSORED3',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Commodi consequatur laborum accusantium iure quis. Cupiditate sit consequatur ipsa quo temporibus voluptas officiis. Sed sit beatae temporibus dolorum.',
    bookmarked: true,
    likes: 29,
  },
  {
    title: 'INI SPONSORED4',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Commodi consequatur laborum accusantium iure quis. Cupiditate sit consequatur ipsa quo temporibus voluptas officiis. Sed sit beatae temporibus dolorum.',
    bookmarked: true,
    likes: 29,
  },
]
const article = [
  {
    title: 'INI ARTICLE1',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Expedita est impedit doloribus sit sunt ipsum magnam ea. Voluptatem dolorem nam.',
    bookmarked: true,
    likes: 43,
  },
  {
    title: 'INI ARTICLE2',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Commodi consequatur laborum accusantium iure quis. Cupiditate sit consequatur ipsa quo temporibus voluptas officiis. Sed sit beatae temporibus dolorum.',
    bookmarked: true,
    likes: 29,
  },
  {
    title: 'INI ARTICLE3',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Libero facere eius aspernatur numquam officia tenetur. Veniam accusantium sunt et optio dolores libero accusantium quos. Consequatur at aut modi distinctio qui veniam eveniet neque dolorum. Atque esse odit architecto iusto. Reiciendis beatae saepe quia non aut quo. Maxime iste praesentium sed perspiciatis.',
    bookmarked: false,
    likes: 5,
  },
  {
    title: 'INI ARTICLE4',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Enim architecto modi harum fugit. Dolor consectetur facere voluptas labore non qui exercitationem. Quia facilis voluptatem quibusdam dolor quo architecto error doloribus velit.',
    bookmarked: false,
    likes: 25,
  },
  {
    title: 'INI ARTICLE5',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Qui eos dignissimos et. Sunt sunt voluptatem commodi sunt consequatur ea pariatur voluptas quasi. Quo itaque placeat. Et est a non ratione et quasi.',
    bookmarked: true,
    likes: 24,
  },
  {
    title: 'INI ARTICLE6',
    cover: 'http://placeimg.com/600/400/nightlife',
    summary:
      'Velit odio magni ipsum animi corporis deserunt facere eveniet quo. Ex ducimus dolores quae et consequatur minus dolorem. Esse ducimus adipisci architecto enim eligendi et aut nihil. Sunt adipisci sit in cum laudantium. Voluptas ut perspiciatis itaque minus cupiditate.',
    bookmarked: true,
    likes: 15,
  },
]

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
const data = [...article, ...ads]
const dataArticles = [...article]
const dataAds = [...ads]
console.log(...data)
const dataLength = data.length
const newData = []

for (let i = 1; i <= [...article, ...ads].length + 1; i++) {
  let item
  if (i > 2 && angkaPrima(i - 1)) {
    item = dataAds.splice(0, 1)
    console.log(...item)
    newData.push(...item)
  } else {
    item = dataArticles.splice(0, 1)
    newData.push(...item)
  }
}
console.log(newData)
console.log(newData.length)
