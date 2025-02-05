import './index.css'
import { nanoid } from 'nanoid'

export default function BlogCard(props) {
  const {thumbnailImg, tags, date, title, abstract, author, avatarImg} = props

  const tagElements = tags.map(tag => <p key={nanoid()} className="blog-card-tag">{tag}</p>)

  return (
    <figure className="blog-card">
      <img src={thumbnailImg} alt="Blog article thumbnail." className="blog-card-img" />
      <figcaption className="blog-card-caption">
        <hgroup className="blog-card-header">
          <span className="blog-card-tags">
            {tagElements}
          </span>
          <p className="blog-card-date">{date}</p>
          <a href='#' className="blog-card-link">
            <h2 className="blog-card-title">{title}</h2>
          </a>
        </hgroup>
        <p className="blog-card-abstract">
          {abstract}
        </p>
        <footer className="blog-card-footer">
          <img src={avatarImg} className="blog-card-avatar" alt="Blog author avatar" />
          <p className="blog-card-author">{author}</p>
        </footer>
      </figcaption>
    </figure>
  )
}