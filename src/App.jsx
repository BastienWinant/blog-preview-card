import './App.css'
import BlogCard from './components/BlogCard/BlogCard'
import Footer from './components/Footer/Footer'
import thumbnailImg from './assets/images/illustration-article.svg'
import avatarImg from './assets/images/image-avatar.webp'

function App() {
  return (
    <>
      <main>
        <BlogCard
          thumbnailImg={thumbnailImg}
          tags={['learning']}
          date="21 Dec 2023"
          title="HTML & CSS Foundations"
          abstract="These languages are the backbone of every website, defining structure, content, and presentation."
          avatarImg={avatarImg}
          author="Greg Hooper"
        />
        <Footer>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/BastienWinant" target='_blank'>Bastien Winant</a>.
        </Footer>
      </main>
    </>
  )
}

export default App
