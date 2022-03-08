import { HeartIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/outline'
export default function CardArticle({
  cover,
  title,
  summary,
  bookmarked,
  likes,
  index,
}) {
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
  return (
    <>
      <p>{index + 1}</p>
      <img
        src={cover}
        className="h-[266px] w-full rounded-lg bg-black object-cover sm:w-[400px]"
      ></img>
      <p className="flex w-full justify-start font-dm-sans text-2xl">{title}</p>
      <p className="flex w-full font-dm-sans text-xs leading-4">{summary}</p>
      <div className="flex h-full w-full items-end justify-between p-3">
        <div>
          <p
            className={`${
              index > 1 && index < 25
                ? angkaPrima(index)
                  ? 'text-blue-500'
                  : 'hidden'
                : 'hidden'
            } font-dm-sans text-xs font-semibold`}
          >
            Sponsored Ads
          </p>
        </div>
        <div className="flex items-center space-x-1">
          <p className="font-dm-sans text-xs">{likes}</p>
          <HeartIcon className="icon" />
          {bookmarked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          ) : (
            <BookmarkIcon className="icon" />
          )}
          <ShareIcon className="icon" />
        </div>
      </div>
    </>
  )
}
