/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './header.css';
import { useStateValue } from '../../StateProvider'

function Header() {
  const [{ user }] = useStateValue();

  return (
    <>
      <div className="header__navBarWrapper">
        <div className="header__leftLogo">
          <img src="https://i.imgur.com/9bc4a53.png" alt="codepen logo" />
          {/*<div className="header__userName">{user?.displayName}</div>*/}
        </div>
        <div className="header__centerContent">
          <div id="explore">EXPLORE</div>
          <div className="header__centerInfo">

            <div className="header__pens">
              <a href="#">Pens</a>
            </div>
            <div className="header__projects">
              <a href="#">Projects</a>
            </div>
            <div className="header__posts">
              <a href="#">Posts</a>
            </div>
            <div className="header__collections">
              <a href="#">Collections</a>
            </div>
            <div className="header__spark">
              <a href="#">Spark</a>
              <a href="#">
                <i className="fas fa-angle-down"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="header__rightContent">
          <div className="header__rightContentButtons">
            <div className="header__createButton">
              <button id="header__borderChange">
                <span id="header__createId">Create</span><i className="fas fa-angle-down" id="hide-arrow"></i>

              </button>
              <i className="fas fa-window-close" id="close-pop-down"></i>

              <div id="header__popDown">
                <div id="header__newProject">
                  <i className="fas fa-th-large"></i><span>New Project</span>
                </div>
                <div id="header__newPen">
                  <i className="fas fa-th-large"></i><span>New Pen</span>
                </div>
                <div id="header__newPost">
                  <i className="fas fa-th-large"></i><span>New Post</span>
                </div>
              </div>
            </div>
            <div id="header__searchLogo">
              <a href="#">
                <form>
                  <i className="fas fa-search" id="header__searchButton"></i>
                  <i className="fas fa-window-close" style={{ display: "none" }} id="close"></i>
                  <input type="text" id="header__searchBar" style={{ position: "relative", display: "none" }} placeholder="Search Codepen Content..." />
                </form>
              </a>
            </div>
            <div className="header__loginButton">
              <a href="#">
                <button>
                  Log In
                        </button>
              </a>
            </div>
            <div className="header__signUp">
              <a href="#">
                <button>
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
