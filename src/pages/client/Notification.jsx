import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../../components/FooterNav';
import Navbar from '../../components/Navbar';

const Notification = () => {
  const today = new Date();
  return (
    <>
      <Navbar />
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section full">
          <ul className="listview image-listview flush">
            <li className="active">
              <Link to="/dashboard" className="item">
                <div className="icon-box bg-primary"></div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Payment Received</strong>
                    </div>
                    <div className="text-small mb-05">
                      Credit <b>$5,800,000.00</b>
                    </div>
                    <div className="text-xsmall">15/01/2022 10:30 AM</div>
                  </div>
                  <span className="badge badge-primary badge-empty" />
                </div>
              </Link>
            </li>
            {/* <li className="active">
              <Link to="/dashboard" className="item">
                <div className="icon-box bg-primary"></div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Payment Sent</strong>
                    </div>
                    <div className="text-small mb-05">
                      Debit <b>$5,800,000.00</b>
                    </div>
                    <div className="text-xsmall">{today.toDateString()}</div>
                  </div>
                  <span className="badge badge-primary badge-empty" />
                </div>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* * App Capsule */}
      <FooterNav />
    </>
  );
};

export default Notification;
