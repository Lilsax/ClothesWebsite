import React , {useState} from 'react';

import './Nav.scss';

export default function Nav() {
    const [isHover , setHover] = useState(false);
    const [nav , setNav] = useState(false);    


    const  changeScolle = () => {
        if(window.scrollY > 100)
        {
            setNav(true)
        }
        else
        setNav(false)
    }

    window.addEventListener('scroll' , changeScolle);
 
    return (
        <div className={nav ? "nav-class active" : "nav-class" }>
        <div className="first-nav-div">
          <span className={isHover? "female" : "women-span"}  onMouseEnter= {() => setHover(true)} onMouseLeave={() => setHover(false)}> Women </span>
          <span className="men-span"> Men</span>
          <span className="denim-span">Denim</span>
          <span className="about-span">About</span>
        </div>
        <span className={nav ? "activehh" : "hhh" }>LONDON</span>
        <div className="second-nav-div">
          <span> Log In</span>
          <span>Sign Up</span>
        </div>

        <div className={ !isHover ?"woman-div-hidden" : "woman-div-show"} onMouseEnter= {() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div>
              <ul>
                  <li>
                      Feature
                  </li>
                  <li>
                      New Arrives
                  </li> <li>
                      Best-Sellers
                  </li> <li>
                      100% Human
                  </li> <li>
                      The Demnim Guide
                  </li> <li>
                      Face Mask
                  </li> <li>
                      The More Collaction
                  </li> <li>
                      Sale
                  </li>
              </ul>
          </div>

          <div>
              <ul>
                  <li>
                      Feature
                  </li>
                  <li>
                      New Arrives
                  </li> <li>
                      Best-Sellers
                  </li> <li>
                      100% Human
                  </li> <li>
                      The Demnim Guide
                  </li> <li>
                      Face Mask
                  </li> <li>
                      The More Collaction
                  </li> <li>
                      Sale
                  </li> 
              </ul>
          </div>

          <div>
              <ul>
                  <li>
                      Feature
                  </li>
                  <li>
                      New Arrives
                  </li> <li>
                      Best-Sellers
                  </li> <li>
                      100% Human
                  </li> <li>
                      The Demnim Guide
                  </li> <li>
                      Face Mask
                  </li> <li>
                      The More Collaction
                  </li> <li>
                      Sale
                  </li>
              </ul>
          </div>

        </div>
          
  
  </div>
    )
}
