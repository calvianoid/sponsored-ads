import { HeartIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/outline'
export default function Card() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="relative m-5 flex min-h-[479px] w-[420px] flex-col items-center space-y-2 rounded-lg border bg-white p-3 shadow-xl">
        <img
          src="http://placeimg.com/600/400/nightlife"
          className="h-[266px] w-[400px] rounded-lg bg-black"
        ></img>
        <p className="flex w-full justify-start font-dm-sans text-2xl">
          Long Title Text That May Get Wrapped to New Line
        </p>
        <p className="flex w-full font-dm-sans text-xs leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sed cum
          nemo itaque ut. At dolores officia dolore! Unde sequi nemo ratione
          deserunt. Quam facere illum error. Esse libero voluptatem, odit animi
          a, corporis quo laudantium dolores corrupti aperiam expedita. Fuga
          similique culpa corrupti corporis nisi sapiente eveniet labore
          voluptatem!
        </p>
        <div className="flex h-full w-full items-end justify-between p-3">
          <div>
            <p className="font-dm-sans text-xs font-semibold text-blue-500">
              Sponsored Ad
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <p className="font-dm-sans text-xs">72</p>
            <HeartIcon className="icon" />
            <BookmarkIcon className="icon" />
            <ShareIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
