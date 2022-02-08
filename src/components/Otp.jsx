import React, { useState } from 'react';

const Otp = ({ setType }) => {
  const [otp, setOtp] = useState('');
  const [fetching, setFetching] = useState(false);

  const handleOtp = (e) => {
    setFetching(true);
    e.preventDefault();

    if (otp == '833627') {
      setTimeout(() => {
        setFetching(false);
        setType('cot');
      }, 5000);
    } else {
      alert('Wrong OTP code');
    }
  };
  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">OTP Code</h5>
      </div>
      <div className="modal-body">
        <div className="action-sheet-content">
          <form>
            <div className="form-group basic ">
              <label className="label">Enter OTP</label>
              <div className="input-group mb-2">
                <input
                  type="number"
                  className="form-control form-control-lg otpcode"
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group basic">
              <button
                type="button"
                className="btn btn-primary btn-block btn-lg otp-btn"
                onClick={handleOtp}
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

export default Otp;
