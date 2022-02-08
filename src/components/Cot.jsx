import React, { useState } from 'react';

const Cot = ({ setType }) => {
  const [cot, setCot] = useState('');
  const [fetching, setFetching] = useState(false);

  const handleCot = (e) => {
    e.preventDefault();
    setFetching(true);

    if (cot == '456909513') {
      setTimeout(() => {
        setFetching(false);
        setType('passcode');
      }, 5000);
    } else {
      alert('Wrong COT code');
    }
  };
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">COT Code</h5>
      </div>
      <div className="modal-body">
        <div className="action-sheet-content">
          <form>
            <div className="form-group basic ">
              <label className="label">Enter COT</label>
              <div className="input-group mb-2">
                <input
                  type="number"
                  className="form-control form-control-lg otpcode"
                  onChange={(e) => setCot(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group basic">
              <button
                type="button"
                className="btn btn-primary btn-block btn-lg otp-btn"
                onClick={handleCot}
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

export default Cot;
