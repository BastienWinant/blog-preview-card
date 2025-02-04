import './index.css'

export default function Footer({children}) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {children}
      </div>
    </footer>
  )
}