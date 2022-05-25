import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  // agent management Path
  let agentManagementPath = matchPath("/agent-management/*", path);
  if (agentManagementPath) {
    agentManagementPath = agentManagementPath.pathnameBase;
  }

  // Transaction Report Path
  let transactionReportPath = matchPath("/transaction-report/*", path);
  if (transactionReportPath) {
    transactionReportPath = transactionReportPath.pathnameBase;
  }

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    }
    if (arr === agentManagementPath) {
      return "activeTab";
    }
    if (arr === transactionReportPath) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const dashboardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction DashBoard</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Maximus Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ageging-queue-wise"
              className={activeLink("/ageging-queue-wise")}
            >
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Distributor Home</span>
            </Link>
          </li>
          <li>
            <Link to="/atm-status">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Home</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manage Bank IFSC Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Trend</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const CommissionManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Commission Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Wise Commission</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ageging-queue-wise"
              className={activeLink("/ageging-queue-wise")}
            >
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Franchise Commission Master</span>
            </Link>
          </li>
          <li>
            <Link to="/atm-status">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Franchise Wise Commission</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Commission Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Wise Commission</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Commission Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Commission Status</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BBPS Commission Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BBPS Commission Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BBPS Commission Tracker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">E-Collect Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Import Commission Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Commission Config Maker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Commission Config Cheker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Commission Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  const CommissionReportPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Commission Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Commission Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Franchise Commission Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Franchise Commission Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Commission Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Commission Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Commission Settlement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Franchise Commission Settlement
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Commission Settlement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Maximus Commission</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Maximus Commission Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Wallet Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Invoice Commission Approve</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Commission Slab Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const DownloadsPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Download Aggrements</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BBPS Biller Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manage Bank IFSC Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Import Billers</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">GST Commission Invoice</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Invoice Commission Approve</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Escalation Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const AdminManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manages Pages</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manages Users</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Create User</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manage Permissions</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Create Roles</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Import ZOM Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">PUSH SMS</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">ZOM Details Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Terminal Log Configuration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Pull Terminal Log</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const agentManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Approved Agents</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Deactive Agents</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Declined Agents</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Terminated Agents</span>
            </Link>
          </li>
          <li
            className={activeLink("/agent-management/manual-kyc-registration")}
          >
            <Link to="/agent-management/manual-kyc-registration">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Manual KYC Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Onboard Agents</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Document Upload</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Edit Agent Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Status</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Update Agent ID</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent E-KYC</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BBPS Biller Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">E-KYC Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Device E-KYC Registration</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const transactionReportPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Log File</span>
            </Link>
          </li>
          <li className={activeLink("/transaction-report/all-transaction")}>
            <Link to="/transaction-report/all-transaction">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">All Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Decline Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Reversal Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Current Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">DMT Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BBPS Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">AEPS Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MATM Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Transaction Settlement Tracker
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">ZOM Details Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  const franchiseManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Deactive Franchise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Document Upload</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Acive Franchise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Edit Franchise Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Decline Franchise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Terminate Franchise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Onboared Franchise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Franchise Status</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  const clientManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Document Upload</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Client</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Decline Clients </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Deactivated Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Terminated Clients</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Edit Client Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Onboared Franchise</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Status</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );
  const walletManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Direct Credit/Debit Wallet</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Request Money</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Wallet Approval Maker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">My Wallet</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Balance Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Bank Transfer Approval</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Wallet Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">E-Collect Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Maximus Wallet Top-Up</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Client Wallet Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Franchise Wallet Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Wallet Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Maximus Wallet Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Wallet To Wallet Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Wallet To Bank Transfer Report
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Current Balance Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Bulk Wallet To Wallet Transfer
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MATM Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Wallet Approval Cheker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Wallet Bank Transfer Settlement
              </span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const limitManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Limit Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Limit Requests</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Limit Tracker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Bank Transfer Limit Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Bank Transfer Limit Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Bank Transfer Limit Tracker</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const complaintManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Other Complaints</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">BBPS Complaints</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const settlementManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Settlement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Transaction Settlement Tracker
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MATM Approval</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MATM Tracker</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MATM Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">WBT Settlement Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">WBT Settlement Approval</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="sidebarSmall">
      {/* Dashboard */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dashboardPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-dashboard">
            {/* Dashboard Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Commission Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={CommissionManagementPopover}
          rootClose
        >
          <span className=" sidebarIconSize icon-commission-management">
            {/* Commission Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Commission Report */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={CommissionReportPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-commission-report">
            {/* Commission Report Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Downloads */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={DownloadsPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-download">
            {/* Downloads Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Admin Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={AdminManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-admin-management">
            {/* Admin-Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Agent Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={agentManagementPopover}
          rootClose
        >
          <div className={activeLink("/agent-management")}>
            <span className="sidebarIconSize icon-agent-management">
              {/* Agent Management Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Transaction Report */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={transactionReportPopover}
          rootClose
        >
          <div className={activeLink("/transaction-report")}>
            <span className="sidebarIconSize icon-Transaction-report">
              {/* Transaction Report Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* Franchise Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={franchiseManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-franchise-management">
            {/* Franchise Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Client Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={clientManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-client-management">
            {/* Client Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Wallet Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={walletManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-wallet">
            {/* Wallet Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Limit Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={limitManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-limit">
            {/* Limit Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Complaint Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={complaintManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-complaint">
            {/* Complaint Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Settlement Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={settlementManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-settle">
            {/* Settlement Management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Alert Management */}
      <div className="sidebarSmallImg">
        <Link
          to="/housekeeping-activity"
          className={activeLink("/housekeeping-activity")}
        >
          <span className="sidebarIconSize icon-alert">
            {/* Alert Management Small Icon */}
          </span>
        </Link>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
