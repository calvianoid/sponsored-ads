import dataAds from '../utils/ads.json'
import { HeartIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/outline'
export default function ArticleAds() {
  const ads = dataAds
  return (
    <div className="flex flex-wrap justify-center">
      {ads.map((ad, index) => (
        <div
          key={ad.title}
          className="relative m-5 flex h-[479px] w-full flex-col items-center space-y-2 rounded-lg border bg-white p-3 shadow-xl sm:w-[420px]"
        >
          <img
            src={ad.cover}
            className="h-[266px] w-full rounded-lg bg-black object-cover sm:w-[400px]"
          ></img>
          <p className="flex w-full justify-start font-dm-sans text-2xl">
            {ad.title}
          </p>
          <p className="flex w-full font-dm-sans text-xs leading-4">
            {ad.summary}
          </p>
          <div className="flex h-full w-full items-end justify-between p-3">
            <div>
              <p className="font-dm-sans text-xs font-semibold text-blue-500">
                Sponsored Ads
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-dm-sans text-xs">{ad.likes}</p>
              <HeartIcon className="icon" />
              {ad.bookmarked ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              ) : (
                <BookmarkIcon className="icon" />
              )}
              <ShareIcon className="icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
