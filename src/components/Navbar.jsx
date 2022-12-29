import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <div className="nav-container">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a> */}
    </div>
    
    </>
  )
}
