import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  var newValue = localStorage.getItem('newValue');
  console.log('newValue', newValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsFetching(true);

    // Check
    const checkAuth = async () => {
      if (newValue !== null) {
        localStorage.setItem('totalBalance', 5800);
        return null;
      } else {
        await auth();
      }
    };

    // username == localStorage.getItem('username') &&
    const auth = async () => {
      console.log('auth');
      localStorage.setItem('totalBalance', 5800000);
      if (
        password == 'lovechrist293' &&
        localStorage.getItem('totalBalance') >= 5800000
      ) {
        localStorage.setItem('user', true);
        localStorage.setItem('user2', true);
        localStorage.setItem('totalBalance', 5800000);
        localStorage.setItem('otp', null);
        localStorage.setItem('cot', null);
        localStorage.setItem('passcode', null);
        setTimeout(() => {
          setIsFetching(false);
          window.location.reload(true);
          navigate('/dashboard');
        }, 5000);
      } else {
        alert('Incorrect details');
        setIsFetching(false);
        setError('incorrect details');
      }
    };

    await checkAuth();
  };

  return (
    <>
      <div className="content">
        <div className="container">
          <div
            className="row align-items-center"
            style={{ paddingTop: '50px' }}
          >
            <div className="col-md-5" style={{ marginBottom: '30px' }}>
              {/*  */}
              <Link style={{ color: 'black' }} to="/">
                Back to Homepage
              </Link>
            </div>
            <div className="col-md-2 text-center">
              {/* &mdash; or &mdash; */}
            </div>
            <div className="col-md-5 contents">
              <div className="form-block">
                <div className="mb-4">
                  <h3>
                    Sign In to <strong>Suntrust Bank</strong>
                  </h3>
                  <p className="mb-4">
                    Secure Login Sign in to your Suntrust Bank Account.
                  </p>
                </div>
                <form action="dashboard.php.html" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0">
                      <span className="caption">Remember me</span>
                      <input type="checkbox" defaultChecked="checked" />
                      <div className="control__indicator" />
                    </label>
                    <span className="ml-auto">
                      <Link to="/login" className="forgot-pass">
                        Forgot Password
                      </Link>
                    </span>
                  </div>
                  <h5 style={{ color: 'red' }} id="error" />
                  <button
                    className="btn btn-pill text-white btn-block btn-primary"
                    onClick={handleSubmit}
                  >
                    {isFetching ? 'Submitting...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
