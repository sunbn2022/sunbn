import Man from '../assets/images/man.jpeg';
import Logo from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalBalance = localStorage.getItem('totalBalance');

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user1');
    localStorage.setItem('totalBalance', 580000);
    window.location.reload(true);
  };
  return (
    <>
      {/* App Header */}
      <div className="appHeader bg-primary text-light">
        <div className="left">
          <a
            style={{ cursor: 'pointer' }}
            className="headerButton"
            data-toggle="modal"
            data-target="#sidebarPanel"
          >
            <ion-icon name="menu-outline" />
          </a>
        </div>
        <div className="pageTitle">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="right">
          <Link to="/notification" className="headerButton">
            <ion-icon className="icon" name="notifications-outline" />
            <span className="badge badge-danger">1</span>
          </Link>
          <Link to="/settings" className="headerButton">
            <img src={Man} alt="image" className="imaged w32" />
            <span className="badge badge-danger" />
          </Link>
        </div>
      </div>

      {/* SIDE BAR */}
      {/* App Sidebar */}
      <div
        className="modal fade panelbox panelbox-left"
        id="sidebarPanel"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              {/* profile box */}
              <div className="profileBox pt-2 pb-2">
                <div className="image-wrapper">
                  <img src={Man} alt="image" className="imaged  w36" />
                </div>
                <div className="in">
                  <strong>Sergio William</strong>
                  <div className="text-muted">April 20 1975</div>
                  <div className="text-muted">
                    3052 Pine Cove Place Eustis, Florida 32700
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  className="btn btn-link btn-icon sidebar-close"
                  data-dismiss="modal"
                >
                  <ion-icon name="close-outline" />
                </Link>
              </div>
              {/* * profile box */}
              {/* balance */}
              <div className="sidebar-balance">
                <div className="listview-title">Balance</div>
                <div className="in">
                  <h1 className="amount">{`$ ${totalBalance}`}</h1>
                </div>
              </div>
              {/* * balance */}
              {/* action group */}
              <div className="action-group">
                <Link
                  to="/dashboard"
                  className="action-button"
                  data-toggle="modal"
                  data-target="#sendActionSheet"
                >
                  <div className="in">
                    <div className="iconbox">
                      <ion-icon name="arrow-forward-outline" />
                    </div>
                    Transfer
                  </div>
                </Link>
              </div>
              {/* others */}
              <div className="listview-title mt-1">Others</div>
              <ul className="listview flush transparent no-line image-listview">
                <li>
                  <Link to="/settings" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="settings-outline" />
                    </div>
                    <div className="in">Settings</div>
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link to="/login" className="item">
                    <div className="icon-box bg-primary">
                      <ion-icon name="log-out-outline" />
                    </div>
                    <div className="in" onClick={logout}>
                      Log out
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
