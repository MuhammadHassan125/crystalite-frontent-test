import React from 'react'
import './header.scss'
const Header = () => {

  const headerList = ['Home', 'SEO', 'Web Design', 'About', 'Blogs', 'Contact Us']

  return (
    <>
    <main className='header'>

      {/* my logo div  */}
        <div className='logo'>
          <img src='/logo.png'/>
        </div>

{/* center list div  */}
        <div className='nav-items'>
            {headerList.map((item, index) =>  (
            <li key={index}>{item}</li>
            )
            )}
        </div>

        {/* right side div  */}
        <div className='right-side-header'>
              <div className='phone-no'>
                  <img src='/phone.png' alt='phone'/>
                  <p>(833)-800-0083</p>
              </div>

              <div className='get-a-call'>
                  <button><p>Get A Call</p></button>
              </div>
        </div>
    </main>
    </>
  )
}

export default Header