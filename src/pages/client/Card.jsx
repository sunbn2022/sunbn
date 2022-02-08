// import '../../assets/css/style.css';
import { Link } from 'react-router-dom';
import FooterNav from '../../components/FooterNav';
import Navbar from '../../components/Navbar';

const Card = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Add Card Action Sheet */}
        <div
          className="modal fade action-sheet"
          id="addCardActionSheet"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add a Card</h5>
              </div>
              <div className="modal-body">
                <div className="action-sheet-content">
                  <form>
                    <div className="form-group basic">
                      <div className="input-wrapper">
                        <label className="label" htmlFor="cardnumber1">
                          Card Number
                        </label>
                        <input
                          type="number"
                          id="cardnumber1"
                          className="form-control"
                          placeholder="Enter Card Number"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group basic">
                          <div className="input-wrapper">
                            <label className="label">Expiry Date</label>
                            <div className="row">
                              <div className="col-4">
                                <select
                                  className="form-control custom-select"
                                  id="exp-month"
                                >
                                  <option value="01">01</option>
                                  <option value="02">02</option>
                                  <option value="03">03</option>
                                  <option value="04">04</option>
                                  <option value="05">05</option>
                                  <option value="06">06</option>
                                  <option value="07">07</option>
                                  <option value="08">08</option>
                                  <option value="09">09</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                </select>
                              </div>
                              <div className="col-6">
                                <select
                                  className="form-control custom-select"
                                  id="exp-year"
                                >
                                  <option value="2020">2020</option>
                                  <option value="2021">2021</option>
                                  <option value="2022">2022</option>
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group basic">
                          <div className="input-wrapper">
                            <label className="label" htmlFor="cardcvv">
                              CVV
                              <Link
                                to="/card"
                                className="ml-05"
                                data-toggle="tooltip"
                                data-placement="top"
                                title
                                data-original-title="3-4 digit number back of your card"
                              >
                                What is this?
                              </Link>
                            </label>
                            <input
                              type="number"
                              id="cardcvv"
                              className="form-control"
                              placeholder="Enter 3 digit"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group basic mt-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg"
                        data-dismiss="modal"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* * Add Card Action Sheet */}
        {/* App Capsule */}
        <div id="appCapsule">
          <div className="section mt-2">
            {/* card block */}
            <div className="card-block mb-2">
              <div className="card-main">
                <div className="card-button dropdown">
                  <button
                    type="button"
                    className="btn btn-link btn-icon"
                    data-toggle="dropdown"
                  >
                    <ion-icon name="ellipsis-horizontal" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="javacript:;">
                      <ion-icon name="close-outline" />
                      Remove
                    </a>
                  </div>
                </div>
                <div className="balance">
                  <span className="label">BALANCE</span>
                  <h1 className="title">$5,800,000.00</h1>
                </div>
                <div className="in">
                  <div className="card-number">
                    <span className="label">Card Number</span>
                    •••• 9905
                  </div>
                  <div className="bottom">
                    <div className="card-expiry">
                      <span className="label">Expiry</span>
                      12 / 25
                    </div>
                    <div className="card-ccv">
                      <span className="label">CCV</span>
                      553
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* * card block */}
            {/* card block */}
            {/* * card block */}
          </div>
        </div>
        {/* * App Capsule */}
      </div>
      <FooterNav />
    </>
  );
};

export default Card;
