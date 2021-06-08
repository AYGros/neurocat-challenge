import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="main-footer">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* anfang linke col-box */}
            <div className="col-md-7 my-3 text-center">
              <h3 >Contact Details</h3>
              {/* anfang innerer flexcontainer */}
              <div className="row">
                {/* anfang adress-col */}

                <div className="col-sm col-md4 ">
                  <div className="row justify-content-center">
                    <div className="p-2">
                      <i class="fa fa-map-marker" aria-hidden="true" ></i>
                    </div>
                    <div className="p-2">
                      <p>Address</p>
                    </div>
                  </div>
                  
                  <a href="https://www.google.de/maps/place/Rudower+Chaussee+29,+12489+Berlin" target="_blank">
                   <p >IGZ Berlin-Adlershof</p> 
                   <p >Rudower Chaussee 29</p>
                   <p >12489 Berlin</p>
                   <p >Germany</p>
                    
                   </a>
                  
                </div>
                {/* ende addess-col */}
                <div className="col-12 col-md-4">
                <div className="row justify-content-center">
                    <div className="p-2">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="p-2">
                      <p >Email</p>
                    </div>
                  </div>
                  <a href="mailto:meow@neurocat.ai" >meow@neurcat.ai</a>
                </div>
                <div className="col-12 col-md-4">
                <div className="row justify-content-center">
                    <div className="p-2">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="p-2">
                        <p>Phone</p>
                    </div>
                  </div>
                  <p >+49 (0) 30 340 65 918</p>
                  <p >Skype: neurocat GmbH</p>
                </div>
              </div>
              {/* ende innerer container */}
              <section className="social">
                <div className="row justify-content-center">
                  <h6 >Find Us On Social Media</h6>
                </div>
                <div className="row justify-content-center">
                  <div className="p-2">
                    <a href="https://www.facebook.com/neurocatai/">
                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="p-2">
                  <a href="https://twitter.com/neurocatgmbh?lang=en">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div className="p-2">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </div>
              </section>
            </div>
            {/* ende linke col-box */}
            <div className="col-md-5 my-3 text-center md-text-right">
            <Link to="/contact" >
              <button className=" btn btn-primary btn-lg">Use Our Contact Form</button>
            </Link>
            </div>
           
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
