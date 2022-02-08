import React, { useState } from 'react';

const Passcode = () => {
  const [passcode, setPasscode] = useState('');
  const [fetching, setFetching] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePasscode = (e) => {
    setFetching(true);
    e.preventDefault();

    if (passcode == '7307') {
      setTimeout(() => {
        var totalBalance = localStorage.getItem('totalBalance');
        var amount = localStorage.getItem('amount');
        var newValue = totalBalance - amount;
        console.log('amount', amount);
        console.log('totalBalance', totalBalance);
        console.log('newValue', newValue);
        localStorage.setItem('totalBalance', newValue);
        localStorage.setItem('newValue', newValue);
        localStorage.setItem('username', 'Sergiow2022');
        localStorage.setItem('user2', 'notallow');
        setFetching(false);
        setSuccess(true);
        success && alert('Transfer Successful');
        window.location.reload(true);
      }, 7000);
    } else {
      alert('Wrong Transfer code');
    }
  };
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">Transfer Code</h5>
      </div>
      <div className="modal-body">
        <div className="action-sheet-content">
          <form>
            <div className="form-group basic ">
              <label className="label">Enter Transfer Code</label>
              <div className="input-group mb-2">
                <input
                  type="number"
                  className="form-control form-control-lg otpcode"
                  onChange={(e) => setPasscode(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group basic">
              <button
                type="button"
                className="btn btn-primary btn-block btn-lg otp-btn"
                onClick={handlePasscode}
              >
                {fetching ? 'Confirming...' : 'Confirm'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Passcode;
