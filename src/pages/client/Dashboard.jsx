import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import FooterNav from '../../components/FooterNav';
import Navbar from '../../components/Navbar';
import Transfer from '../../components/Transfer';
import Otp from '../../components/Otp';
import Cot from '../../components/Cot';
import Passcode from '../../components/Passcode';

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [type, setType] = useState('');

  const totalBalance = localStorage.getItem('totalBalance');
  return (
    <>
      <div>
        {/* loader */}
        <div id="loader">
          <img
            src="assets/img/logo-icon.png"
            alt="icon"
            className="loading-icon"
          />
        </div>
        {/* * loader */}
        {/* NAVBAR */}
        <Navbar />
        {/* * App Header */}
        {/* App Capsule */}
        <div id="appCapsule">
          {/* Wallet Card */}
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              {/* Balance */}
              <div className="balance">
                <div className="left">
                  <span className="title">Total Balance</span>
                  <h1 className="total">{`$ ${totalBalance}`}</h1>
                  <p style={{ color: 'red' }} className="pending-transfer">
                    Pending Transfer
                  </p>
                </div>
              </div>
              {/* * Balance */}
              {/* Wallet Footer */}
              <div className="wallet-footer">
                <div className="item">
                  <Link
                    to="/dashboard"
                    data-toggle="modal"
                    data-target="#sendActionSheet"
                  >
                    <div className="icon-wrapper">
                      <ion-icon name="arrow-forward-outline" />
                    </div>
                    <strong>Transfer</strong>
                  </Link>
                </div>
              </div>
              {/* * Wallet Footer */}
            </div>
          </div>

          {/* * Withdraw Action Sheet */}
          {/* Send Action Sheet */}
          {/* TODO 1ST STEP */}
          <div
            className="modal fade action-sheet"
            id="sendActionSheet"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                {/* TODO CONTENT */}
                {/* <Transfer /> */}
                {/* <Otp /> */}
                {/* <Cot /> */}
                {/* <Passcode /> */}
                {(() => {
                  switch (type) {
                    case '':
                      return <Transfer setType={setType} show={show} />;
                    case 'otp':
                      return <Otp setType={setType} show={show} />;
                    case 'cot':
                      return <Cot setType={setType} show={show} />;
                    case 'passcode':
                      return <Passcode setType={setType} show={show} />;
                    default:
                      return null;
                  }
                })()}
                {/* TODO CONTENT */}
              </div>
            </div>
          </div>
          {/* TODO 1ST STEP */}
          {/* * Send Action Sheet */}

          <div className="transactions">
            <p className="transactions-credit" />
            <p className="transactions-debit" />
            <p className="transactions-credit" />
            <p className="transactions-debit" />
            <p className="transactions-credit" />
            <p className="transactions-debit" />
            <p className="transactions-credit" />
            <p className="transactions-debit" />
          </div>
          {/* Stats */}
          <div className="section">
            <div className="row mt-2">
              <div className="col-6">
                <div className="stat-box">
                  <div className="title">Total Balance</div>
                  <div className="value text-success">{`$ ${totalBalance}`}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-box">
                  <div className="title">Expenses</div>
                  <div className="value text-danger">$ 2, 000, 000</div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <div className="stat-box">
                  <div className="title">Available Balance</div>
                  <div className="value">{`$ ${totalBalance}`}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-box">
                  <div className="title">Savings</div>
                  <div className="value">$ 9, 700, 000</div>
                </div>
              </div>
            </div>
          </div>
          {/* * Stats */}

          {/* my cards */}
          <div className="section full mt-4">
            <div className="section-heading padding">
              <h2 className="title">My Cards</h2>
              <Link to="/card" className="link">
                View All
              </Link>
            </div>
            <div className="carousel-single owl-carousel owl-theme shadowfix">
              <div className="item">
                {/* card block */}
                <div className="card-block bg-primary">
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
                          <ion-icon name="pencil-outline" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="javacript:;">
                          <ion-icon name="close-outline" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="javacript:;">
                          <ion-icon name="arrow-up-circle-outline" />
                          Upgrade
                        </a>
                      </div>
                    </div>
                    <div className="balance">
                      <span className="label">BALANCE</span>
                      <h1 className="title">$ 1,256,90</h1>
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
              </div>
              <div className="item">
                {/* card block */}
                <div className="card-block bg-dark">
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
                          <ion-icon name="pencil-outline" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="javacript:;">
                          <ion-icon name="close-outline" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="javacript:;">
                          <ion-icon name="arrow-up-circle-outline" />
                          Upgrade
                        </a>
                      </div>
                    </div>
                    <div className="balance">
                      <span className="label">BALANCE</span>
                      <h1 className="title">$ 1,256,90</h1>
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
              </div>
              <div className="item">
                {/* card block */}
                <div className="card-block bg-secondary">
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
                          <ion-icon name="pencil-outline" />
                          Edit
                        </a>
                        <a className="dropdown-item" href="javacript:;">
                          <ion-icon name="close-outline" />
                          Remove
                        </a>
                        <a className="dropdown-item" href="javacript:;">
                          <ion-icon name="arrow-up-circle-outline" />
                          Upgrade
                        </a>
                      </div>
                    </div>
                    <div className="balance">
                      <span className="label">BALANCE</span>
                      <h1 className="title">$ 1,256,90</h1>
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
              </div>
            </div>
          </div>
          {/* * my cards */}
          {/*  */}
        </div>
        {/*  */}
        {/* app footer */}
        <div className="appFooter">
          <div className="footer-title">
            Copyright © Suntrust Bank 2022. All Rights Reserved.
          </div>
        </div>
        {/* * app footer */}
        {/* * App Capsule */}
        {/* FOOTER NAV BUTTONS */}
        <FooterNav />
        {/* * App Bottom Menu */}
        {/* SIDE BAR */}
      </div>
    </>
  );
};

export default Dashboard;
