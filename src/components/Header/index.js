import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'

import {BsInfoCircleFill} from 'react-icons/bs'

import {IoMdClose} from 'react-icons/io'

import {AiFillHome} from 'react-icons/ai'

import 'reactjs-popup/dist/index.css'

import Paragraph from './styledComponents'

import './index.css'

const Header = () => (
  <div className="container-header">
    <nav>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo-hamburger-image"
        />
      </Link>
    </nav>
    <Popup
      modal
      trigger={
        <button
          className="trigger-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hamburgericon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="background-color-of-react-icons">
          <button
            type="button"
            data-testid="closeButton"
            className="trigger-button"
            onClick={() => close()}
          >
            <IoMdClose className="hamburgericon" />
          </button>
          <ul className="unorderlist-home-about-one">
            <li>
              <Link to="/" className="link-items">
                <AiFillHome className="home-about-react-icons" />
                <Paragraph>Home</Paragraph>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-items">
                <BsInfoCircleFill className="home-about-react-icons" />
                <Paragraph>About</Paragraph>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
