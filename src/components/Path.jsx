import React from 'react'
import {Link} from 'react-router-dom';

export default function Path() {
  return (
  <>
   <div className='dcontainer'>
        <div className='home-after'>
        <ul className='home-btn'>
            <li><Link className="home-link" to='/dbs'>Diwali Billionaire Series</Link></li>
            <li><Link className="home-link" to='/contact-us'>Contact Us</Link></li>
            {/* <li><Link className="home-link" to='/privacy-policy'>Privacy Policy</Link></li>
            <li><Link className="home-link" to='/term-of-use'>Term Of Use</Link></li> */}
            <li><Link className="home-link" to='/rummy'>Rummy English</Link></li>
            <li><Link className="home-link" to='/rummy-hi'>Rummy Hindi</Link></li>
        </ul>
        </div>
    </div>
  </>
  )
}
