import SearchInput from "../search-input/SearchInput"
import logo from "/src/assets/images/logo.svg"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__nav-brand">
        <img src={logo} className="w-36" alt="" />
      </div>
      <SearchInput />
    </div>
  )
}
