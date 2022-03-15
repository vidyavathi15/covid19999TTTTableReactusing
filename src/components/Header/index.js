import {ImArrowLeft, ImArrowRight, ImCross, ImArrowUp} from 'react-icons/im'

import {IoMdSearch} from 'react-icons/io'

import './index.css'

const Header = () => (
  <div className="header-container">
    <h1 className="header-title">Job Adventures For Geeks.</h1>
    <div className="search-and-navigation-container">
      <div className="navigation-container">
        <ImArrowLeft className="arrows" />
        <ImArrowRight className="arrows" />
        <ImCross className="arrows" />
        <ImArrowUp className="arrows" />
      </div>

      <input
        type="search"
        className="search-input"
        placeholder="https://www.geektrust.in/"
      />
      <div className="search-icon-container">
        <IoMdSearch />
      </div>
    </div>
  </div>
)

export default Header
