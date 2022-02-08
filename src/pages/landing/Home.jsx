import '../../assets/css/style-starter.css';
import Logo from '../../assets/images/logo.jpeg';
import Banner from '../../assets/images/t2.jpg';
import About from '../../assets/images/about.jpg';
import Mobile from '../../assets/images/mobile.png';
import Stats from '../../assets/images/stats.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div>
        {/*header*/}
        <header id="site-header" className="fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg stroke px-0">
              <h1>
                {' '}
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} alt="logo" />{' '}
                  <span style={{ fontSize: '1.2rem' }}>Suntrust Bank</span>
                </a>
              </h1>
              <button
                className={
                  display
                    ? 'navbar-toggler bg-gradient'
                    : 'navbar-toggler collapsed bg-gradient'
                }
                type="button"
              >
                <span
                  onClick={() => setDisplay(!display)}
                  className="navbar-toggler-icon fa icon-close fa-times"
                />

                <span
                  onClick={() => setDisplay(!display)}
                  className="navbar-toggler-icon fa icon-expand fa-bars"
                />
              </button>
              <div
                className={
                  display
                    ? 'collapse navbar-collapse collapse show'
                    : 'collapse navbar-collapse'
                }
                id={display ? 'navbarTogglerDemo02' : ''}
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/login">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item @@about__active">
                    <Link className="nav-link" to="/login">
                      About
                    </Link>
                  </li>
                  <li className="nav-item @@services__active">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item @@contact__active">
                    <Link className="nav-link" to="/login">
                      Contact
                    </Link>
                  </li>
                  {/*/search-right*/}
                  <div className="search mr-3">
                    <input
                      className="search_box"
                      type="checkbox"
                      id="search_box"
                    />
                    <label className="fa fa-search" htmlFor="search_box" />
                    <div className="search_form">
                      <form>
                        <input type="text" placeholder="Search" />
                        <input type="submit" defaultValue="search" />
                      </form>
                    </div>
                  </div>
                  {/*//search-right*/}
                </ul>
              </div>
              {/* toggle switch for light and dark theme */}
              <div className="mobile-position">
                <nav className="navigation">
                  <div className="theme-switch-wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                      <input type="checkbox" id="checkbox" />
                      <div className="mode-container">
                        <i className="gg-sun" />
                        {/* <i className="gg-moon" /> */}
                      </div>
                    </label>
                  </div>
                </nav>
              </div>
              {/* //toggle switch for light and dark theme */}
            </nav>
          </div>
        </header>
        {/*/header*/}
        {/* main-slider */}
        <section className="w3l-main-slider" id="home">
          <div className="companies20-content">
            <div className="owl-one owl-theme">
              <div className="item">
                <li>
                  <div className="slider-info banner-view bg bg2">
                    <div className="banner-info">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 banner-info-bg">
                            <h5>The bank in your wallet </h5>
                            <p className="mt-md-4 mt-3">
                              Our Bank is the best option if you are looking for
                              high-quality and reliable banking services. We
                              provide reliable services for you
                            </p>
                            {/* <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="#book"> Book a
                                      card</a> */}
                            <Link
                              className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                              to="/login"
                            >
                              Read More
                            </Link>
                          </div>
                          <div className="col-lg-5 col-md-8 img offset-lg-1 mt-lg-0 mt-4">
                            <img
                              src={Banner}
                              alt="img"
                              className="img-fluid radius-image-curve"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </section>
        {/* /main-slider */}
        {/* home page block1 */}
        <section id="about" className="home-services pt-lg-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="box-wrap">
                  <div className="box-wrap-grid">
                    <div className="icon">
                      <span className="fa fa-user-circle" />
                    </div>
                    <div className="info">
                      <p>More than</p>
                      <h4>
                        <a href="index.html#url">32167</a>
                      </h4>
                      <h5>Issued Accounts</h5>
                    </div>
                  </div>
                  <p className="mt-4">
                    If you are looking for high-quality and reliable banking
                    services. Our Bank is the best option.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
                <div className="box-wrap">
                  <div className="box-wrap-grid">
                    <div className="icon">
                      <span className="fa fa-money" />
                    </div>
                    <div className="info">
                      <p>Upto</p>
                      <h4>
                        <Link to="/login">25%</Link>
                      </h4>
                      <h5>Cashback</h5>
                    </div>
                  </div>
                  <p className="mt-4">
                    If you are looking for high-quality and reliable banking
                    services. Our Bank is the best option.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
                <div className="box-wrap">
                  <div className="box-wrap-grid">
                    <div className="icon">
                      <span className="fa fa-line-chart" />
                    </div>
                    <div className="info">
                      <p>Upto</p>
                      <h4>
                        <Link to="/login">40%</Link>
                      </h4>
                      <h5>Fixed Deposit</h5>
                    </div>
                  </div>
                  <p className="mt-4">
                    If you are looking for high-quality and reliable banking
                    services. Our Bank is the best option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //home page block1 */}
        {/* about page about section */}
        <section className="w3l-index3" id="about">
          <div className="midd-w3 py-5">
            <div className="container py-lg-5 py-md-3">
              <div className="row">
                <div className="col-lg-7 mb-lg-0 mb-md-5 mb-4 align-self">
                  <h3 className="title-left mx-0">
                    Our bank introduces the new level of financial services. We
                    are still dedicated to the success of our clients.
                  </h3>
                  <p className="mt-md-4 mt-3" />
                  <Link
                    className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                    to="/login"
                  >
                    {' '}
                    Learn More
                  </Link>
                </div>
                <div className="col-lg-5">
                  <div className="position-relative">
                    <img src={About} alt className="radius-image img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //about page about section */}
        {/* /mobile section -*/}
        <section className="w3l-mobile-content-6 py-5">
          <div className="mobile-info py-lg-5 py-md-4 py-2">
            {/* /mobile-info*/}
            <div className="container">
              <h6 className="title-small text-center">
                Features and advantages
              </h6>
              <h3 className="title-big mb-5 text-center">
                The Best Banking Choice
              </h3>
              <div className="row mobile-info-inn mx-lg-0">
                <div className="col-lg-4 mobile-right text-right">
                  <div className="row mobile-right-grids mb-lg-5 mb-4">
                    <div className="col-10 mobile-right-info">
                      <h6>
                        <a href="index.html#url">Mobile Banking Apps</a>
                      </h6>
                      <p>
                        Instant access to your account on any device using our
                        apps.
                      </p>
                    </div>
                    <div className="col-2 mobile-right-icon">
                      <div className="mobile-icon">
                        <span className="fa fa-mobile" />
                      </div>
                    </div>
                  </div>
                  <div className="row mobile-right-grids mb-lg-5 mb-4">
                    <div className="col-10 mobile-right-info">
                      <h6>
                        <a href="index.html#url">Family Programs</a>
                      </h6>
                      <p>
                        Our Bank has special programs with benefits for family
                        members.
                      </p>
                    </div>
                    <div className="col-2 mobile-right-icon">
                      <div className="mobile-icon">
                        <span className="fa fa-users" />
                      </div>
                    </div>
                  </div>
                  <div className="row mobile-right-grids">
                    {/* <div class="col-10 mobile-right-info">
                      <h6><a href="#url">Various Locations </a></h6>
                      <p>We have offices in many countries including the USA and the UK.</p>
                  </div> */}
                    <div className="col-2 mobile-right-icon">
                      <div className="mobile-icon">
                        {/* <span class="fa fa-globe"></span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mobile-left px-lg-5">
                  <img src={Mobile} className="img-fluid radius-image" alt />
                </div>
                <div className="col-lg-4 mobile-right">
                  <div className="row mobile-right-grids mb-lg-5 mb-4">
                    <div className="col-2 mobile-right-icon">
                      <div className="mobile-icon">
                        <span className="fa fa-user" />
                      </div>
                    </div>
                    <div className="col-10 mobile-right-info">
                      <h6>
                        <a href="index.html#url">Personal Profile</a>
                      </h6>
                      <p>
                        Register your free personal profile online to begin
                        using our services.
                      </p>
                    </div>
                  </div>
                  <div className="row mobile-right-grids mb-lg-5 mb-4">
                    <div className="col-2 mobile-right-icon">
                      <div className="mobile-icon">
                        <span className="fa fa-cogs" />
                      </div>
                    </div>
                    <div className="col-10 mobile-right-info">
                      <h6>
                        <a href="index.html#url">Easy Account Setup</a>
                      </h6>
                      <p>
                        Registered clients can edit the account settings in 2
                        clicks.
                      </p>
                    </div>
                  </div>
                  <div className="row mobile-right-grids">
                    <div className="col-2 mobile-right-icon">
                      <div className="mobile-icon">
                        <span className="fa fa-support" />
                      </div>
                    </div>
                    <div className="col-10 mobile-right-info">
                      <h6>
                        <a href="index.html#url">24/7 support</a>
                      </h6>
                      <p>
                        Support team is always ready to help you solve any
                        banking issues
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="text-center">
          <a class="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="#book"> View more advanced features</a>
      </div> */}
            </div>
            {/* //mobile-info*/}
          </div>
        </section>
        {/* //mobile section -*/}
        {/* /bottom-grids*/}
        {/* //bottom-grids*/}
        {/* section */}
        <section className="w3l-statistics" id="statistical">
          <div className="midd-w3 py-5">
            <div className="container py-lg-5 py-md-3 py-2">
              <h6 className="title-small text-center">Banking statistics.</h6>
              <h3 className="title-big mb-md-5 mb-4 text-center">
                Statistical information
              </h3>
              <div className="row">
                <div className="col-lg-4 align-self w3l-progressblock pr-lg-4">
                  <p className="mb-4">
                    Our financial services deeply rely on certain banking
                    procedures that have been perfected over the years and
                    helped us get prestigious awards.
                  </p>
                  <div className="progress-info info1">
                    <h6 className="progress-tittle">
                      Financial consulting <span className>80%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-info info2">
                    <h6 className="progress-tittle">
                      Online Bank <span className>95%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-info info3">
                    <h6 className="progress-tittle">
                      Online reporting <span className>90%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: '90%' }}
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-info info4">
                    <h6 className="progress-tittle">
                      Online banking <span className>75%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: '75%' }}
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                  <div className="progress-info info2 mb-0">
                    <h6 className="progress-tittle">
                      24/7 support <span className>95%</span>
                    </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={{ width: '95%' }}
                        aria-valuenow={95}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5 align-self">
                  <div className="position-relative">
                    <div className="progress-circles">
                      <div className="circle1">
                        <div
                          id="progress"
                          data-dimension={170}
                          data-text="65%"
                          data-fontsize={30}
                          data-percent={65}
                          data-fgcolor="#1d0d44"
                          data-bgcolor="#eee"
                          data-width={15}
                          data-bordersize={5}
                          data-animationstep={2}
                        />
                        <h4>Economy</h4>
                      </div>
                      <div className="circle1">
                        <div
                          id="progress1"
                          data-dimension={170}
                          data-text="75%"
                          data-fontsize={30}
                          data-percent={75}
                          data-fgcolor="#1d0d44"
                          data-bgcolor="#eee"
                          data-width={15}
                          data-bordersize={5}
                          data-animationstep={2}
                        />
                        <h4>Stability</h4>
                      </div>
                      <div className="circle1">
                        <div
                          id="progress2"
                          data-dimension={170}
                          data-text="90%"
                          data-fontsize={30}
                          data-percent={90}
                          data-fgcolor="#1d0d44"
                          data-bgcolor="#eee"
                          data-width={15}
                          data-bordersize={5}
                          data-animationstep={2}
                        />
                        <h4>Cashback</h4>
                      </div>
                      <div className="circle1">
                        <div
                          id="progress3"
                          data-dimension={170}
                          data-text="100%"
                          data-fontsize={30}
                          data-percent={100}
                          data-fgcolor="#1d0d44"
                          data-bgcolor="#eee"
                          data-width={15}
                          data-bordersize={5}
                          data-animationstep={2}
                        />
                        <h4>Guarantee</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-md-5 mt-4">
                  <img src={Stats} alt className="radius-image img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // about section */}
        {/* forms */}
        {/* <section class="w3l-forms-9 py-5">
     <div class="container py-lg-3">
   <div class="row align-items-center">
       <div class="main-midd col-lg-7 text-lg-right">
           <h4 class="title-big">Choose Your Bank Card Now!</h4>
       </div>
       <div class="col-lg-5 mt-lg-0 mt-4">
           <a class="btn btn-style btn-dark" href="#book"> Book a card</a>
       </div>
   </div>
     </div>
 </section> */}
        {/* //forms */}
        {/* <div class="w3l-ordercard py-5">
    <div class="container py-lg-5 py-md-4 py-2">
  <h3 class="title-big mb-5 text-center">How to order a New Card</h3>
  <div class="row text-center">
      <div class="col-lg-3 col-sm-6">
          <div class="work-grids">
              <div class="icon">
                  <span class="fa fa-sign-in"></span>
              </div>
              <div class="content">
                  <h4 class="title">Online Registration</h4>
                  <p class="desc">Lorem ipsum dolor sit amet, dolor set elit Ut leo non.</p>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-sm-6 mt-sm-0 mt-5">
          <div class="work-grids">
              <div class="icon">
                  <span class="fa fa-file-text-o"></span>
              </div>
              <div class="content">
                  <h4 class="title">Filling Out a Form</h4>
                  <p class="desc">Lorem ipsum dolor sit amet, dolor set elit Ut leo non.</p>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5">
          <div class="work-grids">
              <div class="icon">
                  <span class="fa fa-pencil"></span>
              </div>
              <div class="content">
                  <h4 class="title">Signing an Agreement</h4>
                  <p class="desc">Lorem ipsum dolor sit amet, dolor set elit Ut leo non.</p>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-sm-6 mt-lg-0 mt-5">
          <div class="work-grids">
              <div class="icon">
                  <span class="fa fa-credit-card"></span>
              </div>
              <div class="content">
                  <h4 class="title">Using a card</h4>
                  <p class="desc">Lorem ipsum dolor sit amet, dolor set elit Ut leo non.</p>
              </div>
          </div>
      </div>
  </div>
    </div>
</div> */}
        {/*  News section */}
        {/* <div class="w3l-news" id="news">
    <section id="grids5-block" class="py-5">
  <div class="container py-lg-5 py-md-4 py-2">
      <h3 class="title-big text-center">Latest blog posts</h3>
      <div class="row mt-lg-5 mt-4">
          <div class="col-lg-4 col-md-6">
              <div class="grids5-info">
                  <a href="#blog-single" class="d-block zoom"><img src="assets/images/blog1.jpg" alt=""
                          class="img-fluid news-image" /></a>
                  <div class="blog-info">
                      <h4><a href="#blog-single">7 Banking services that can save retirees money</a></h4>
                      <p class="date"><span class="fa fa-calendar mr-2"></span> September 17, 2020</p>
                   
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
              <div class="grids5-info">
                  <a href="#blog-single" class="d-block zoom"><img src="assets/images/blog2.jpg" alt=""
                          class="img-fluid news-image" /></a>
                  <div class="blog-info">
                      <h4><a href="#blog-single">8 Ways to Drive Adoption of Your Banking App</a></h4>
                      <p class="date"><span class="fa fa-calendar mr-2"></span> September 17, 2020</p>
                    
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-lg-0 mt-5">
              <div class="grids5-info">
                  <a href="#blog-single" class="d-block zoom"><img src="assets/images/blog3.jpg" alt=""
                          class="img-fluid news-image" /></a>
                  <div class="blog-info">
                      <h4><a href="#blog-single">How is it progressing and what will 2020 bring?</a></h4>
                      <p class="date"><span class="fa fa-calendar mr-2"></span> September 17, 2020</p>
                     
                  </div>
              </div>
          </div>
      </div>
      <div class="text-center">
          <a class="btn btn-style btn-primary mt-sm-5 mt-4" href="#blog">View all blog posts</a>
      </div>
  </div>
    </section>
</div> */}
        {/*  //News section */}
        {/* footer */}
        <section className="w3l-footer-29-main">
          <div className="footer-29 py-5">
            <div className="container py-lg-4">
              <div className="row footer-top-29">
                <div className="col-lg-4 col-md-6 footer-list-29 footer-1 pr-lg-5">
                  <div className="footer-logo mb-4">
                    <a className="navbar-brand" href="index.html">
                      <span className="fa fa-university" /> Suntrust Bank
                    </a>
                  </div>
                  <p>
                    It is the leading financial establishment providing
                    high-quality international banking services. Our success is
                    attributed to our loyal customers. We provide reliable
                    services for you.
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-5 col-5 footer-list-29 footer-2 mt-md-0 mt-5">
                  <ul>
                    <h6 className="footer-title-29">Quick Links</h6>
                    <li>
                      <Link to="/login">About Us</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-7 col-7 footer-list-29 footer-3 mt-lg-0 mt-5">
                  {/* <h6 class="footer-title-29">Head Office</h6>
    <p class="mb-3"> Bank Card, 343 banking lane, #2214 cravel street, NY.</p> */}
                  {/* <p class="mb-2"> <span class="fa fa-phone"></span> <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a></p> */}
                  <p className="mb-2">
                    <span className="fa fa-envelope-o" />{' '}
                    <a href="mailto:suntrustbank1603@gmail.com">
                      info@suntrustbn.com
                    </a>
                  </p>
                  <p>
                    <span className="fa fa-support" />{' '}
                    <a href="mailto:suntrustbank1603@gmail.com">
                      info@suntrustbn.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* copyright */}
          <section className="w3l-copyright text-center">
            <div className="container">
              <p className="copy-footer-29">
                © 2022 Suntrust Bank . All rights reserved.
              </p>
            </div>
            {/* move top */}
            <button onclick="topFunction()" id="movetop" title="Go to top">
              ⤴
            </button>
            {/* /move top */}
          </section>
          {/* //copyright */}
        </section>
        {/* //footer */}
      </div>
    </>
  );
};

export default Home;
