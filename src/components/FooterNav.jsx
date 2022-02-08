import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = () => {
  return (
    <>
      {/* App Bottom Menu */}
      <div className="appBottomMenu">
        <Link to="/dashboard" className="item active">
          <div className="col">
            <ion-icon name="pie-chart-outline" />
            <strong>Overview</strong>
          </div>
        </Link>
        <Link to="/card" className="item">
          <div className="col">
            <ion-icon name="card-outline" />
            <strong>My Cards</strong>
          </div>
        </Link>
        <Link to="/settings" className="item">
          <div className="col">
            <ion-icon name="settings-outline" />
            <strong>Settings</strong>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FooterNav;
