import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer text-center static-footer ">
      {/* <div className="container">
         <div className="footer-landing-page">
            <a href="https://wavesindia.org/" target="_blank">Waves India</a>
            <span>All right reserved, Copyright© Powered by Waves Bazaar.</span>
            <a href="mailto:@info@wavesbazaar.com">For Queries: info@wavesbazaar.com</a>
         </div>
      </div> */}
       <div className="container">
          <div className="footer-landing-page">
            <a href="https://wavesindia.org/" target="_blank">
              Waves India
            </a>
            <a href="https://wavesbazaar.com/project/terms-and-conditions">
              Terms and conditions
            </a>
            <span>All right reserved, Copyright© Powered by Waves Bazaar.</span>
            <a href="mailto:@info@wavesbazaar.com">
              For Queries: info@wavesbazaar.com
            </a>
          </div>
        </div>
   </div>
    </>
  )
}

export default Footer