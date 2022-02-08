import React from 'react';
import { Link } from 'react-router-dom';
import FooterNav from '../../components/FooterNav';
import Navbar from '../../components/Navbar';
import Man from '../../assets/images/man.jpeg';

const Settings = () => {
  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user1');
    localStorage.setItem('totalBalance', 580000);
    window.location.reload(true);
  };
  return (
    <>
      <Navbar />
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section mt-3 text-center">
          <div className="avatar-section">
            <Link to="/settings">
              <img src={Man} alt="avatar" className="imaged w100 rounded" />
              <span className="button">
                <ion-icon name="camera-outline" />
              </span>
            </Link>
          </div>
        </div>
        <div className="listview-title mt-1">Notifications</div>
        <ul className="listview image-listview text inset">
          <li>
            <div className="item">
              <div className="in">
                <div>
                  Payment Alert
                  <div className="text-muted">
                    Send notification when new payment received
                  </div>
                </div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch4"
                    defaultChecked
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch4"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link to="/settings" className="item">
              <div className="in">
                <div>Notification Sound</div>
                <span className="text-primary">Beep</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="listview-title mt-1">Profile Settings</div>
        <ul className="listview image-listview text inset">
          {/*  */}
          <li>
            <div className="item">
              <div className="in">
                <div>Private Profile</div>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch2"
                  />
                </div>
              </div>
            </div>
            {/*  */}
          </li>
          <li>
            <Link to="/login" className="item">
              <div className="in">
                <div onClick={logout}>Log out all devices</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      {/* * App Capsule */}
      <FooterNav />
    </>
  );
};

export default Settings;
