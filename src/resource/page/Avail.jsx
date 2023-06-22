import React from 'react'

const Avail = () => {
  return (
    <div><div className="object absolute animate-sway">
    <div className="object-rope h-full w-5 bg-blue-500"></div>
    <div className="object-shape bg-blue-500 w-100 h-100 rounded-full text-white text-center relative">
      Coming <span className="soon text-white">Soon</span>
    </div>
  </div>
  <div className="content flex flex-col items-center mx-auto max-w-500px pt-35vh px-20px">
    <img className="logo max-w-300px" src="https://s3-ap-southeast-2.amazonaws.com/images.fitseeker.com.au/logo.svg" alt="Logo" />
    <p className="message mt-40px text-center">Our brand new website will be launching in June 2018. Shoot us an email if you want to get in contact (remove spaces).</p>
    <p className="mailtoaddress italic">admin @ fitseeker.com.au</p>
  </div></div>
  )
}

export default Avail