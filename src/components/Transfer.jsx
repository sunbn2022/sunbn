import React, { useState } from 'react';

const Transfer = ({ setType }) => {
  const [amount, setAmount] = useState('');
  const [fetching, setFetching] = useState(false);

  var user1 = localStorage.getItem('user1');

  const handleTransfer = (e) => {
    setFetching(true);
    e.preventDefault();

    setTimeout(() => {
      localStorage.setItem('amount', amount);
      setFetching(false);
      setType('otp');
    }, 5000);
  };
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">Send Money</h5>
      </div>
      <div className="modal-body">
        <div className="action-sheet-content">
          <form>
            <div className="form-group basic">
              <div className="input-wrapper">
                <label className="label" htmlFor="account2">
                  From
                </label>
                <select className="form-control custom-select" id="account2">
                  <option value={0}>Suntrust Bank(1647589779)</option>
                </select>
              </div>
            </div>
            <div className="form-group basic">
              <div className="input-wrapper">
                <label className="label" htmlFor="text11">
                  To
                  <span style={{ color: 'red', fontSize: 18 }}>*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text11"
                  placeholder="Enter bank Name"
                  required
                />
                <i className="clear-input">
                  <ion-icon name="close-circle" />
                </i>
              </div>
            </div>
            <div className="form-group basic">
              <div className="input-wrapper">
                <label className="label" htmlFor="text11">
                  Iban/Routing number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text11"
                  placeholder="Iban/Routing Number"
                  required
                />
                <i className="clear-input">
                  <ion-icon name="close-circle" />
                </i>
              </div>
            </div>
            <div className="form-group basic">
              <div className="input-wrapper">
                <label className="label" htmlFor="text11">
                  Account number{' '}
                  <span style={{ color: 'red', fontSize: 18 }}>*</span>
                </label>
                <input
                  type="text account-number"
                  className="form-control"
                  id="text11"
                  placeholder="Account Number"
                  required
                />
                <i className="clear-input">
                  <ion-icon name="close-circle" />
                </i>
              </div>
            </div>
            <div className="form-group basic">
              <label className="label">
                Enter Amount
                <span style={{ color: 'red', fontSize: 18 }}>*</span>
              </label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="input14">
                    $
                  </span>
                </div>
                <input
                  type="number"
                  className="form-control form-control-lg transfer-amount"
                  placeholder={0}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group basic">
              <div className="input-wrapper">
                <label className="label" htmlFor="text11d">
                  Transfer Description
                </label>
                <input
                  type="textarea"
                  className="form-control"
                  id="text11d"
                  placeholder="Enter Transfer Description"
                  required
                />
                <i className="clear-input">
                  <ion-icon name="close-circle" />
                </i>
              </div>
            </div>
            <div className="form-group basic">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg finaltransfer-btn"
                data-toggle="modal"
                data-target="#withdrawActionSheet"
                onClick={handleTransfer}
              >
                {fetching ? 'Loading...' : 'Transfer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Transfer;
