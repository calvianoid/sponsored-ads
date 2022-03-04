import CardArticle from './CardArticle'
import CardSponsored from './CardSponsored'
import CardBookmark from './CardBookmark'
import React from 'react'

export default {
  title: 'Components/Card',
  component: CardArticle,
}

export const Article = () => <CardArticle />
export const SponsoredAd = () => <CardSponsored />
export const Bookmark = () => <CardBookmark />
