import React from 'react';

const Contact = () => {
  return (
    <>
      <div>
        {/*/header*/}
        <div className="inner-banner"></div>
        <section className="w3l-breadcrumb">
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">
                <span className="fa fa-arrow-right mx-2" aria-hidden="true" />{' '}
                Contact Us
              </li>
            </ul>
          </div>
        </section>
        <div className="w3l-contact-info py-5" id="contact">
          <div className="container py-lg-5 py-md-4">
            <div className="title text-center">
              <h3 className="title-big">Get in touch with us</h3>
              <p className="mt-2 mx-lg-5">
                You will find yourself working in a true partnership that
                results in an incredible experience, and an end product that is
                the best.
              </p>
            </div>
            {/* <div class="row">
      <div class="col-lg-6">
      </div>
      <div class="align-self mt-lg-0 mt-md-5 mt-4">
          <div class="contact-infos">
              <div class="single-contact-infos">
                  <div class="icon-box"> <span class="fa fa-map-marker"></span></div>
                  <div class="text-box">
                   
                  </div>
              </div>
              <div class="single-contact-infos">
                  <div class="icon-box"> <span class="fa fa-phone"></span></div>
                  <div class="text-box">
                      <h3 class="mb-1">Call us on</h3>
                      <p><a href="tel:+1(21) 234 4567">+1(21) 234 4567</a></p>
                  </div>
              </div>
              <div class="single-contact-infos">
                  <div class="icon-box"> <span class="fa fa-envelope"></span></div>
                  <div class="text-box">
                      <h3 class="mb-1">Email us</h3>
                      <p> <a href="mailto:info@httbwi-dig.org">info@httbwi-dig.org</a></p>
                  </div>
              </div>
          </div>
      </div>
  </div> */}
            <div className="row mt-5">
              <div className="col-lg-6 map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
              <div className="col-lg-6 form-inner-cont mt-lg-0 mt-sm-5 mt-4">
                <form
                  action="https://sendmail.w3layouts.com/submitForm"
                  method="post"
                  className="signin-form"
                >
                  <div className="form-input">
                    <input
                      type="text"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-input">
                    <input
                      type="email"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div className="form-input">
                    <textarea
                      name="w3lMessage"
                      id="w3lMessage"
                      placeholder="Your message"
                      required
                      defaultValue={''}
                    />
                  </div>
                  <div className="text-right">
                    <button type="submit" className="btn btn-style btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
