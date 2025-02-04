import './index.css'

export default function BlogCard(props) {
  const {thumbnailImg, date, title, author, abstract, avatarImg} = props
  return (
    <figure className="blog-card">
      <img src={thumbnailImg} alt="Blog article thumbnail." className="blog-card-img" />
      <figcaption className="blog-card-caption">
        <hgroup className="blog-card-header">
          <div className="blog-card-tags">
            <span className="blog-card-tag">Learning</span>
          </div>
          <p className="blog-card-date">{date}</p>
          <h2 className="blog-card-title">{title}</h2>
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