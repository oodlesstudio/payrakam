import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

const activeLink = (arr) => {};

const dashboardPopover = (
  <Popover id="popover-basic" className="sidebarPopover">
    <Popover.Body>
      <ul className="subMenu">
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction DashBoard</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Distributor Home</span>
          </Link>
        </li>
        <li>
          <Link to="/atm-status">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Home</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Manage Bank IFSC Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Commission Master</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Franchise Commission Master</span>
          </Link>
        </li>
        <li>
          <Link to="/atm-status">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Franchise Wise Commission</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Client Commission Master</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Client Wise Commission</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Commission Request</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Commission Status</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">BBPS Commission Master</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">BBPS Commission Request</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">BBPS Commission Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">E-Collect Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Import Commission Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Commission Config Maker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Commission Config Cheker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Commission Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Franchise Commission Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Franchise Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Client Commission Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Client Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Client Commission Settlement</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">
              Franchise Commission Settlement
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Commission Settlement</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Maximus Commission</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Maximus Commission Summary</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Client Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Invoice Commission Approve</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Download Aggrements</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">BBPS Biller Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Manage Bank IFSC Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Import Billers</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">GST Commission Invoice</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Invoice Commission Approve</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Manages Pages</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Manages Users</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Create User</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Manage Permissions</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Create Roles</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Import ZOM Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">PUSH SMS</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">ZOM Details Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Terminal Log Configuration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Approved Agents</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Deactive Agents</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Declined Agents</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Terminated Agents</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Manual KYC Registration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Verification</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Onboard Agents</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Document Upload</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Edit Agent Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Status</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Update Agent ID</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent E-KYC</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">BBPS Biller Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">E-KYC Registration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction Log File</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">All Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Decline Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Reversal Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Current Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">DMT Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">BBPS Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">AEPS Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">MATM Transaction</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction Settlement Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Registration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Deactive Franchise</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Document Upload</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Acive Franchise</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Edit Franchise Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Verification</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Decline Franchise</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Terminate Franchise</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Onboared Franchise</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Registration</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Document Upload</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Verification</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Active Client</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Decline Clients </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Deactivated Clients</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Terminated Clients</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Edit Client Details</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Onboared Franchise</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Direct Credit/Debit Wallet</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Request Money</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Wallet Approval Maker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">My Wallet</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Balance Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Bank Transfer Approval</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Wallet Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">E-Collect Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Maximus Wallet Top-Up</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Client Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Franchise Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Agent Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Maximus Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Wallet To Wallet Ledger</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Wallet To Bank Transfer Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Current Balance Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Bulk Wallet To Wallet Transfer</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">MATM Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Wallet Approval Cheker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction Limit Master</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction Limit Requests</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction Limit Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Bank Transfer Limit Master</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Bank Transfer Limit Request</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Other Complaints</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
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
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction Settlement</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">Transaction Settlement Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">MATM Approval</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">MATM Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">MATM Report</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">WBT Settlement Request</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="subMenuLeft">
              <span class="icon-Icon-2"></span>
            </span>
            <span className="subMenuRight">WBT Settlement Approval</span>
          </Link>
        </li>
      </ul>
    </Popover.Body>
  </Popover>
);

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

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
          <span class="sidebarIconSize">
            {/* Dashboard Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3.16651C8.47487 3.16476 6.98109 3.59951 5.69508 4.41939C4.40908 5.23928 3.38456 6.41007 2.74254 7.79349C2.10051 9.1769 1.86779 10.7152 2.07186 12.2266C2.27594 13.738 2.90828 15.1594 3.8942 16.323L4.03958 16.4926H15.9604L16.1058 16.323C17.0917 15.1594 17.7241 13.738 17.9281 12.2266C18.1322 10.7152 17.8995 9.1769 17.2575 7.79349C16.6154 6.41007 15.5909 5.23928 14.3049 4.41939C13.0189 3.59951 11.5251 3.16476 10 3.16651ZM14.1674 7.76039L11.2987 10.5758C11.4453 10.8858 11.4776 11.2377 11.39 11.5692C11.3023 11.9007 11.1002 12.1905 10.8195 12.3875C10.5388 12.5845 10.1976 12.6758 9.85598 12.6455C9.51441 12.6152 9.19456 12.4651 8.95294 12.2218C8.71133 11.9785 8.5635 11.6575 8.5356 11.3158C8.50769 10.974 8.60149 10.6334 8.80043 10.3541C8.99937 10.0748 9.29064 9.87477 9.62277 9.78943C9.95489 9.7041 10.3065 9.73892 10.6154 9.88773L13.4793 7.07228L14.1674 7.76039ZM3.02195 10.7503H4.66954V11.7195H3.00256C3.00256 11.5305 2.97833 11.3463 2.97833 11.1525C2.97833 10.9587 2.98803 10.886 2.99772 10.7503H3.02195ZM5.38673 5.90442L6.57881 7.09651L5.86647 7.76524L4.66954 6.578C4.88437 6.33291 5.11591 6.10299 5.3625 5.88989L5.38673 5.90442ZM10.4846 5.85112H9.51541V4.15507H10C10.1793 4.15507 10.3392 4.15507 10.4846 4.1793V5.85112ZM17.0217 11.1573C17.0217 11.3463 17.0217 11.5402 16.9974 11.7243H15.2917V10.7551H17.0023C17.012 10.886 17.0217 11.0217 17.0217 11.1573Z"
                fill="#003087"
              />
            </svg>
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
          <span class=" sidebarIconSize">
            {/* Commission Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  d="M2.5 6.52617C2.5 8.51377 3.83663 9.55234 5.60025 9.55234C7.36386 9.55234 8.68193 8.51377 8.68193 6.52617C8.68193 4.53857 7.36386 3.5 5.60025 3.5C3.83663 3.5 2.5 4.53857 2.5 6.52617ZM5.58168 5.29063C6.13861 5.29063 6.49134 5.66667 6.49134 6.52617C6.49134 7.36777 6.13861 7.7438 5.58168 7.7438C5.02475 7.7438 4.69059 7.36777 4.69059 6.52617C4.69059 5.66667 5.02475 5.29063 5.58168 5.29063ZM6.02275 14.3136C5.51919 15.2018 6.16075 16.303 7.18175 16.303C7.66146 16.303 8.10414 16.0451 8.34074 15.6278L13.9772 5.6864C14.4808 4.79823 13.8392 3.69697 12.8183 3.69697C12.3385 3.69697 11.8959 3.95486 11.6593 4.37217L6.02275 14.3136ZM11.3366 13.4738C11.3366 15.4614 12.6547 16.5 14.4183 16.5C16.1819 16.5 17.5 15.4614 17.5 13.4738C17.5 11.4683 16.1819 10.4477 14.4183 10.4477C12.6547 10.4477 11.3366 11.4683 11.3366 13.4738ZM14.3998 12.2383C14.9567 12.2383 15.3094 12.6322 15.3094 13.4738C15.3094 14.3154 14.9567 14.6915 14.3998 14.6915C13.8428 14.6915 13.5087 14.3154 13.5087 13.4738C13.5087 12.6322 13.8428 12.2383 14.3998 12.2383Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Commission Report Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.02097 3.72088C4.06318 3.4854 4.31005 3.18546 4.5463 3.0826C4.68702 3.02131 5.35072 3.00411 7.6461 3.00229L10.5668 3V4.96861C10.5668 7.16513 10.5735 7.20916 10.9523 7.49812L11.1739 7.66732L13.2198 7.68417L15.2655 7.70102L15.2498 12.5674C15.2343 17.3785 15.2328 17.4355 15.1131 17.5958C15.0465 17.685 14.9191 17.8124 14.83 17.8789C14.6692 17.999 14.6266 18 9.62751 18C4.62843 18 4.58587 17.999 4.42506 17.8789C4.33588 17.8124 4.20849 17.685 4.14191 17.5958C4.0215 17.4346 4.02074 17.3965 4.00395 10.6718C3.99467 6.95284 4.0023 3.82491 4.02097 3.72088ZM11.5062 6.75734V4.87867C11.5062 3.8454 11.5129 3 11.5212 3C11.5295 3 12.3813 3.8454 13.4142 4.87867L15.2922 6.75734H13.3992H11.5062ZM7.25355 12.259C6.31296 12.259 5.60009 11.6997 5.60009 10.6295C5.60009 9.55923 6.31296 9 7.25355 9C8.19415 9 8.89712 9.55923 8.89712 10.6295C8.89712 11.6997 8.19415 12.259 7.25355 12.259ZM7.7288 10.6295C7.7288 10.1667 7.54068 9.96419 7.24365 9.96419C6.94662 9.96419 6.76841 10.1667 6.76841 10.6295C6.76841 11.0826 6.94662 11.2851 7.24365 11.2851C7.54068 11.2851 7.7288 11.0826 7.7288 10.6295ZM8.51098 15.8939H6.87732L10.6892 9.10606H12.3229L8.51098 15.8939ZM11.9565 16C11.0159 16 10.313 15.4408 10.313 14.3705C10.313 13.2906 11.0159 12.741 11.9565 12.741C12.8971 12.741 13.6001 13.2906 13.6001 14.3705C13.6001 15.4408 12.8971 16 11.9565 16ZM12.4318 14.3705C12.4318 13.9174 12.2437 13.7052 11.9466 13.7052C11.6496 13.7052 11.4714 13.9174 11.4714 14.3705C11.4714 14.8237 11.6496 15.0262 11.9466 15.0262C12.2437 15.0262 12.4318 14.8237 12.4318 14.3705Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Downloads Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.75023 14.3962C3.44692 14.4931 3.2291 14.6817 3.09676 14.962C3.02059 15.1234 3.01153 15.1713 3.00251 15.4603C2.99496 15.7021 3.00374 15.8193 3.03856 15.941C3.13138 16.2652 3.36309 16.5204 3.66914 16.6354L3.82066 16.6923H9.99974C16.1448 16.6923 16.1797 16.692 16.3274 16.6365C16.6379 16.5198 16.8499 16.2929 16.9496 15.9707C16.9977 15.8151 17.0055 15.732 16.9971 15.4626C16.988 15.171 16.979 15.1237 16.9027 14.962C16.7931 14.7303 16.6305 14.5659 16.404 14.4582L16.2219 14.3716L10.0408 14.3664C5.101 14.3623 3.83767 14.3683 3.75023 14.3962Z"
                  fill="#003087"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.02588 4.02839C8.82297 4.10649 8.6494 4.28466 8.5819 4.48407C8.55931 4.55084 8.55031 6.07687 8.55031 7.32998V9.08251L7.6634 9.09047C6.81681 9.09805 6.77305 9.10099 6.70098 9.15504C6.52134 9.28981 6.4545 9.50403 6.5342 9.68972C6.58099 9.79884 9.65529 13.041 9.79034 13.1237C9.90341 13.193 10.0963 13.193 10.2094 13.1237C10.3445 13.041 13.4188 9.79884 13.4655 9.68972C13.5452 9.50403 13.4784 9.28981 13.2988 9.15504C13.2267 9.10099 13.1829 9.09805 12.3369 9.09047L11.4506 9.08254L11.4432 7.29156C11.4349 5.29226 11.4464 4.41058 11.2397 4.20306C11.0436 4.00611 11.0479 4.00683 10.0272 4.00092C9.37172 3.9971 9.08676 4.00493 9.02588 4.02839Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Admin-Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.82659 3.6777C7.48076 4.41516 7.21713 4.54106 6.79449 4.64801C6.34406 4.762 6.01918 4.78686 4.9792 4.78695L4 4.78704V7.77703C4 11.0034 4.00423 11.1042 4.16728 11.7725C4.56439 13.4001 5.64674 14.813 7.11492 15.6202C7.37485 15.7631 10.0594 17 10.1096 17C10.1548 17 12.4422 15.9549 12.913 15.7192C14.558 14.8954 15.6971 13.4047 16.1109 11.5341L16.1946 11.1557L16.205 7.97135L16.2154 4.78704L15.235 4.78695C14.1896 4.78686 13.8636 4.76172 13.4211 4.64709C12.9905 4.5355 12.7444 4.41828 11.397 3.68273C10.7074 3.30628 10.1245 2.99905 10.1017 3C10.0789 3.00096 9.50508 3.30591 8.82659 3.6777ZM10.5627 5.91458C10.6979 5.94197 10.9201 6.02101 11.078 6.09793C11.5839 6.34438 11.8796 6.64005 12.1266 7.14636C12.8286 8.58558 11.8359 10.2667 10.2287 10.3603C9.50499 10.4025 8.76049 10.0646 8.33242 9.49979C8.03268 9.10426 7.8551 8.59015 7.8551 8.11785C7.8551 7.44885 8.20295 6.73908 8.72453 6.34379C9.25811 5.93944 9.92091 5.78468 10.5627 5.91458ZM9.91431 6.88881C9.25234 6.97825 8.75365 7.65373 8.86847 8.30545C8.96562 8.85692 9.36056 9.25449 9.91342 9.35731C10.429 9.45319 11.0131 9.14472 11.2354 8.65914C11.3578 8.39184 11.3857 8.16174 11.3293 7.88512C11.1911 7.2074 10.6059 6.79536 9.91431 6.88881ZM11.6023 11.1815C11.9609 11.282 12.2297 11.4425 12.5132 11.7255C12.7127 11.9248 12.8038 12.0443 12.8896 12.2197C13.0136 12.4728 13.0969 12.7785 13.0976 12.983L13.098 13.1141L12.859 13.1142C12.7276 13.1143 12.5076 13.1232 12.3701 13.1339L12.1202 13.1533L12.0999 13.0026C12.0541 12.6619 11.7903 12.3221 11.478 12.2017C11.3361 12.147 11.2331 12.1426 10.0911 12.1426H8.85743L8.6878 12.2232C8.38544 12.3668 8.16261 12.6621 8.1145 12.9828L8.09483 13.1141H7.5924H7.08994L7.10456 12.983C7.16513 12.4402 7.35039 12.0472 7.71166 11.6954C8.01853 11.3965 8.39953 11.2077 8.82754 11.1425C8.92879 11.1271 9.55289 11.1179 10.2144 11.122C11.2312 11.1284 11.4458 11.1376 11.6023 11.1815Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Agent Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.09494 3.03319C7.86242 3.15572 6.49844 3.79623 5.60437 4.67225C4.77034 5.48949 4.24237 6.58041 4.04749 7.88927C3.96654 8.4328 3.99263 9.47596 4.09873 9.93949C4.26336 10.6586 4.45954 11.0452 5.05589 11.8257C5.76885 12.7589 5.97337 13.1042 6.14741 13.6689C6.27852 14.0943 6.31432 14.5214 6.31432 15.6597C6.31432 16.7688 6.32106 16.8065 6.54257 16.9335C6.65469 16.9978 6.74311 17 9.19514 17C11.6456 17 11.7356 16.9977 11.8475 16.9336C12.0805 16.8001 12.0922 16.7561 12.1122 15.9439C12.1388 14.8634 12.0761 14.9122 13.4711 14.8876C14.3956 14.8713 14.4578 14.8661 14.6014 14.7941C14.7814 14.7039 14.9154 14.5476 14.9742 14.3596C15.0082 14.2509 15.0055 14.147 14.9609 13.8475C14.9302 13.6408 14.9147 13.4338 14.9267 13.3875C14.9385 13.3412 15.0113 13.2315 15.0884 13.1439C15.3033 12.8994 15.2733 12.7658 14.9549 12.5492L14.8481 12.4765L14.9708 12.4129C15.2218 12.2827 15.3915 12.1426 15.4006 12.0582C15.4055 12.0121 15.3294 11.7981 15.2315 11.5826L15.0535 11.1908L15.2533 11.0885C15.8418 10.7873 16.007 10.645 15.9998 10.4455C15.9977 10.3869 15.8892 10.1319 15.7588 9.87894C15.4283 9.23775 15.3763 9.04128 15.335 8.2775C15.2941 7.52175 15.253 7.20896 15.1377 6.7746C14.8232 5.59066 14.1099 4.66547 12.977 3.97214C12.1725 3.47982 11.6728 3.40224 11.0762 3.67707C10.6892 3.85534 10.3655 4.25117 10.2138 4.73157C10.1656 4.88428 10.1555 5.09864 10.1557 5.9582L10.1561 6.99975L10.4213 7.07546C10.9794 7.23472 11.544 7.6973 11.8185 8.22008C12.0265 8.61632 12.0869 8.89143 12.0664 9.3508C12.0471 9.78548 11.9586 10.0755 11.7457 10.4024L11.6094 10.6115L12.382 11.3176C12.8613 11.7555 13.1637 12.0576 13.1786 12.1132C13.2327 12.3161 13.0627 12.5366 12.8521 12.5366C12.7994 12.5366 12.2333 12.2895 11.5943 11.9876L10.4325 11.4384L10.1661 11.4935C9.83279 11.5624 9.37567 11.5633 9.06831 11.4957C8.93876 11.4673 8.69416 11.38 8.52476 11.3018C8.11054 11.1107 7.66232 10.6967 7.4636 10.3219C7.05953 9.55971 7.10218 8.68249 7.57644 8.00045C7.87311 7.57385 8.38162 7.20307 8.85995 7.06466L9.06831 7.00435V5.93582C9.06831 4.77641 9.09364 4.55568 9.27562 4.12817C9.37324 3.89892 9.66386 3.45621 9.77105 3.37344C9.80573 3.3467 9.85773 3.28179 9.88664 3.22921C9.93473 3.14175 9.93299 3.12774 9.86613 3.06488C9.78507 2.98866 9.61367 2.9816 9.09494 3.03319ZM9.36255 8.04331C9.10994 8.08277 8.77519 8.25191 8.61053 8.4233C8.53885 8.49792 8.4375 8.64511 8.38528 8.75043C8.30516 8.91208 8.29027 8.98983 8.2898 9.2493C8.28926 9.52764 8.30031 9.57787 8.40666 9.78101C8.54831 10.0516 8.8078 10.2909 9.09665 10.4174C9.27247 10.4945 9.35324 10.5083 9.62998 10.5086C9.91991 10.5089 9.98223 10.4973 10.1916 10.4037C10.4909 10.2699 10.716 10.0583 10.8586 9.77672C10.9582 9.57998 10.9707 9.52097 10.9707 9.24858C10.9707 8.98844 10.9562 8.91286 10.8753 8.75043C10.6848 8.36851 10.3832 8.14172 9.95118 8.05565C9.67466 8.00055 9.64092 7.99984 9.36255 8.04331Z"
                  fill="#003087"
                />
              </g>
            </svg>
          </span>
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
          <span class="sidebarIconSize">
            {/* Transaction Report Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.18748 3.22088C4.22969 2.9854 4.47656 2.68546 4.7128 2.5826C4.85352 2.52131 5.51722 2.50411 7.8126 2.50229L10.7333 2.5V4.46861C10.7333 6.66513 10.74 6.70916 11.1188 6.99812L11.3405 7.16732L13.3863 7.18417L15.432 7.20102L15.4163 12.0674C15.4008 16.8785 15.3993 16.9355 15.2796 17.0958C15.213 17.185 15.0856 17.3124 14.9965 17.3789C14.8357 17.499 14.7931 17.5 9.79401 17.5C4.79493 17.5 4.75237 17.499 4.59157 17.3789C4.50239 17.3124 4.37499 17.185 4.30842 17.0958C4.18801 16.9346 4.18724 16.8965 4.17045 10.1718C4.16118 6.45284 4.16881 3.32491 4.18748 3.22088ZM11.6727 6.25734V4.37867C11.6727 3.3454 11.6794 2.5 11.6877 2.5C11.696 2.5 12.5478 3.3454 13.5807 4.37867L15.4587 6.25734H13.5657H11.6727ZM12.3626 11.4341L12.6585 10.368H11.4747C11.4224 10.0637 11.3211 9.78701 11.171 9.53792C11.1452 9.49458 11.1178 9.45235 11.089 9.41123L12.3626 9.41585L12.6668 8.3335H8.40013H8.18347H7.15847L6.83347 9.59082H8.40013C8.95013 9.59082 9.35013 9.71696 9.60013 9.96924C9.71487 10.085 9.80327 10.2179 9.86535 10.368H7.13347L6.83347 11.4341H9.9079C9.87871 11.5264 9.84001 11.6132 9.7918 11.6945C9.67236 11.8979 9.49597 12.0566 9.26263 12.1706C9.03208 12.2818 8.74458 12.3374 8.40013 12.3374H6.95847L6.96263 13.2407L9.8793 16.6668H11.6168V16.5936L8.98347 13.4401L9.03347 13.4238C9.62236 13.3479 10.0987 13.196 10.4626 12.9681C10.8265 12.7402 11.0932 12.4486 11.2626 12.0933C11.3598 11.8896 11.429 11.6699 11.4705 11.4341H12.3626Z"
                  fill="#003087"
                />
              </g>
            </svg>
          </span>
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
          <span class="sidebarIconSize">
            {/* Franchise Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.59555 4.6446L3.28811 6.30094L10.0098 6.3025L16.7316 6.30406L13.441 4.65893C10.9382 3.4077 10.1208 3.01077 10.0267 3.00106C9.90808 2.98881 9.76693 3.05643 6.59555 4.6446ZM3.01761 7.19994C3.0464 7.3228 3.19638 7.67344 3.29551 7.84963C3.49769 8.209 3.84078 8.63501 3.99101 8.71322C4.09033 8.76494 4.21626 8.76604 10 8.76604C15.7837 8.76604 15.9097 8.76494 16.009 8.71322C16.1592 8.63501 16.5023 8.209 16.7045 7.84963C16.8036 7.67344 16.9536 7.3228 16.9824 7.19994L17 7.12472H10H3L3.01761 7.19994ZM4.64142 12.0624V14.538H5.88538H7.12933V12.0624V9.5867H5.88538H4.64142V12.0624ZM8.76971 12.0624V14.538H10H11.2303V12.0624V9.5867H10H8.76971V12.0624ZM12.8707 12.0624V14.538H14.1146H15.3586V12.0624V9.5867H14.1146H12.8707V12.0624ZM3.76712 15.3891C3.72983 15.4041 3.67565 15.4372 3.64669 15.4627C3.53031 15.5653 3.26785 15.9519 3.13588 16.215C3.01411 16.4577 2.99751 16.5103 3.00782 16.6204C3.02209 16.7726 3.10359 16.8955 3.23017 16.9556C3.31569 16.9962 3.89715 17 10.0046 17C16.4577 17 16.6887 16.9983 16.7807 16.9493C16.8976 16.887 16.9979 16.7194 16.9985 16.5853C16.9995 16.3774 16.5327 15.5977 16.3066 15.4297L16.2294 15.3724L10.0322 15.3672C5.98254 15.3638 3.81141 15.3714 3.76712 15.3891Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Client Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.2633 3.22041C8.04837 3.49797 7.03542 4.40894 6.66896 5.55351C6.51494 6.03462 6.47982 6.88748 6.593 7.39639C6.86554 8.62147 7.80269 9.60395 9.062 9.98481C9.49244 10.115 10.4576 10.1148 10.8912 9.98444C12.0138 9.64682 12.9373 8.76444 13.2813 7.70071C13.4533 7.16881 13.4749 6.26999 13.3287 5.73684C13.0005 4.54061 12.1261 3.64938 10.9173 3.27909C10.5239 3.15858 9.66698 3.12816 9.2633 3.22041ZM6.89659 10.4523C5.89547 10.7217 5.04051 11.3073 4.44894 12.1288C4.1107 12.5985 3.95212 12.9656 4.01264 13.1391C4.09792 13.3837 4.71143 14.1505 5.19333 14.6148C8.10601 17.4209 12.8123 17.1186 15.3457 13.9628C15.5333 13.7291 15.7572 13.4155 15.8434 13.2658L16 12.9937L15.8606 12.7161C15.5114 12.0209 14.8792 11.3372 14.2272 10.9498C13.6706 10.6191 13.0539 10.4093 12.6188 10.4025C12.2843 10.3973 12.2304 10.412 12.0022 10.5705C10.8454 11.3736 9.12928 11.369 7.92734 10.5596C7.60977 10.3457 7.38094 10.3219 6.89659 10.4523Z"
                fill="#003087"
              />
            </svg>
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
          <span class="sidebarIconSize">
            {/* Wallet Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.56596 4.05029C3.84428 4.20441 3.20233 4.85226 3.05106 5.57906C2.98298 5.90628 2.98298 14.5894 3.05106 14.9166C3.1677 15.4771 3.5863 16.0182 4.09858 16.2708C4.1632 16.3027 4.21164 16.33 4.2619 16.3535C4.58891 16.5062 4.99283 16.4943 10.4309 16.4863L16.0459 16.4781L16.2819 16.3614C16.5662 16.2209 16.7432 16.0401 16.8807 15.7498L16.9796 15.5412L16.9898 14.7683L17 13.9953V8.99866L16.9898 8.22573L16.9796 7.45281L16.8807 7.2442C16.7432 6.95389 16.5662 6.77304 16.2819 6.63258L16.046 6.51593L10.4362 6.50032L4.82653 6.4847L4.70855 6.3947C4.48379 6.22325 4.44263 5.9243 4.61305 5.70085C4.6335 5.67405 4.64584 5.65083 4.66203 5.63071C4.7751 5.49023 5.07605 5.50098 9.63415 5.50098C14.2022 5.50098 14.5481 5.51624 14.7045 5.35156C14.731 5.32368 14.7521 5.29066 14.7873 5.25152C14.9856 5.03092 15.0403 4.79758 14.9585 4.52089C14.9079 4.34934 14.6492 4.09064 14.4776 4.03996C14.2763 3.98046 4.84683 3.9903 4.56596 4.05029ZM7.48523 8.18199C7.68175 7.99113 8.1641 7.70694 8.5438 7.55829C8.71081 7.49291 8.8286 7.48403 8.95553 7.52728C9.01617 7.54795 9.08099 7.59765 9.22271 7.7322C9.50296 7.99823 9.67508 8.07421 9.99919 8.07496C10.3231 8.07571 10.5029 7.99585 10.7775 7.72921C10.9672 7.54496 11.0521 7.5 11.2102 7.5C11.4265 7.5 12.0273 7.79912 12.4125 8.09859C12.5976 8.24253 12.6411 8.28891 12.6857 8.38964C12.7433 8.51994 12.7454 8.62171 12.6937 8.77628C12.6344 8.95348 12.6198 9.20855 12.6592 9.37689C12.7412 9.72684 13.0019 10.0133 13.3425 10.1276C13.4109 10.1506 13.4773 10.1694 13.4901 10.1694C13.5511 10.1694 13.6889 10.2251 13.7577 10.2776C13.9108 10.3946 13.9748 10.6218 13.9973 11.1286C14.013 11.4816 13.958 11.9644 13.886 12.1054C13.8688 12.1392 13.816 12.2016 13.7686 12.2442C13.681 12.3229 13.665 12.3294 13.3945 12.3946C13.0096 12.4875 12.7154 12.7833 12.6248 13.1685C12.5847 13.3394 12.601 13.5711 12.668 13.7813C12.7283 13.9705 12.7281 14.0479 12.6671 14.1897C12.6186 14.3024 12.4728 14.4348 12.1873 14.6252C11.9624 14.7753 11.6013 14.9638 11.4372 15.0168C11.2294 15.0839 11.0298 15.015 10.8703 14.8211C10.5407 14.4204 10.0182 14.3131 9.56042 14.5521C9.44483 14.6125 9.36903 14.6797 9.15668 14.9101C9.05266 15.023 8.97193 15.0624 8.82635 15.0712C8.73812 15.0766 8.68988 15.0698 8.60946 15.0408C8.09047 14.8535 7.44469 14.4359 7.3406 14.2203C7.26633 14.0665 7.26676 13.9934 7.34327 13.7643C7.42505 13.5194 7.44042 13.3805 7.40667 13.1908C7.37097 12.9901 7.27839 12.8065 7.13778 12.6574C6.95875 12.4676 6.79012 12.3812 6.50021 12.3306C6.29053 12.294 6.14827 12.1947 6.08262 12.0391C5.98496 11.8076 5.97114 11.076 6.05584 10.6198C6.11207 10.3169 6.25087 10.1794 6.54572 10.1346C6.94701 10.0736 7.25413 9.81902 7.39279 9.43253C7.43094 9.32615 7.43668 9.28396 7.43672 9.10995C7.43677 8.93377 7.43104 8.89273 7.38903 8.76794C7.30538 8.51941 7.33717 8.32578 7.48523 8.18199ZM11.1177 10.5641C10.9297 10.2762 10.6636 10.0861 10.3164 9.99172C10.1863 9.95634 9.89936 9.94835 9.75728 9.97614C9.20766 10.0836 8.79463 10.4988 8.68814 11.0509C8.60773 11.4676 8.74947 11.9183 9.05795 12.2268C9.57702 12.7459 10.4124 12.7495 10.9329 12.2349C11.3834 11.7896 11.4608 11.0897 11.1177 10.5641Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Limit Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.29531 5.05826C3.14437 5.12859 2.08069 6.19162 2.03152 6.32128C1.98198 6.45187 1.99082 6.58109 2.05815 6.71121C2.12245 6.83549 3.15278 7.87232 3.27468 7.9354C3.44957 8.02595 3.7572 7.95428 3.85873 7.79934C4.00726 7.57266 3.97444 7.35214 3.7577 7.12043L3.61495 6.96783H10H16.385L16.2423 7.12043C16.0256 7.35214 15.9927 7.57266 16.1413 7.79934C16.2428 7.95428 16.5504 8.02595 16.7253 7.9354C16.8472 7.87232 17.8776 6.83549 17.9418 6.71121C18.0092 6.58109 18.018 6.45187 17.9685 6.32128C17.9159 6.18268 16.8545 5.12753 16.6948 5.05504C16.4364 4.93786 16.1428 5.08055 16.0677 5.35983C16.02 5.53687 16.0684 5.68103 16.2395 5.8713L16.3823 6.03011H10H3.61773L3.76086 5.87092C3.97694 5.63058 4.00626 5.42375 3.8566 5.19536C3.80278 5.11318 3.58619 5 3.48286 5C3.44848 5 3.36408 5.02622 3.29531 5.05826ZM4.98321 8.67517C4.60946 8.74259 4.35725 8.82561 4.01239 8.99474C2.35497 9.80765 1.58279 11.7469 2.22925 13.473C2.60343 14.472 3.45798 15.2925 4.46787 15.6223C5.03062 15.8061 4.68898 15.7942 9.76557 15.8064C12.9882 15.8141 14.5264 15.807 14.7588 15.7834C16.1253 15.6443 17.293 14.7485 17.7707 13.473C18.4169 11.7478 17.6442 9.80724 15.9876 8.99474C15.6339 8.82129 15.387 8.74162 14.9893 8.67264C14.5863 8.60274 5.37183 8.60509 4.98321 8.67517ZM6.60984 10.5475C7.17828 10.6926 7.63557 11.1073 7.84122 11.6642L7.87294 11.7502H12.0476C15.5363 11.7502 16.2393 11.7573 16.3259 11.7935C16.4849 11.8599 16.5797 12.0151 16.5797 12.209C16.5797 12.3838 16.5224 12.4899 16.3644 12.6078C16.2784 12.6721 16.2652 12.6723 12.0607 12.6804C8.73136 12.6868 7.84325 12.6967 7.84322 12.7273C7.84318 12.8106 7.65767 13.15 7.52052 13.3177C7.25858 13.638 6.86618 13.8474 6.40616 13.9125C5.68421 14.0146 4.90019 13.5487 4.62866 12.8563L4.5688 12.7035L4.1452 12.6879C3.68653 12.671 3.62967 12.6511 3.4848 12.4571C3.39093 12.3314 3.39603 12.0812 3.49533 11.942C3.60933 11.7822 3.72191 11.7502 4.17049 11.7502C4.51691 11.7502 4.5653 11.7438 4.58093 11.6955C4.75906 11.146 5.26212 10.6804 5.82565 10.5435C6.04724 10.4897 6.39038 10.4914 6.60984 10.5475ZM5.88839 11.5096C5.63342 11.6316 5.47467 11.8576 5.4455 12.1402C5.39852 12.5955 5.75242 12.9805 6.21787 12.9805C6.85033 12.9805 7.21316 12.2661 6.84136 11.7529C6.63356 11.466 6.20712 11.3572 5.88839 11.5096Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Complaint Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  d="M4.74585 3.72126C4.91876 3.39451 5.25701 3.13408 5.63866 3.03394C5.75788 3.00267 6.54813 2.99592 9.36975 3.00205C13.2638 3.01054 13.1484 3.00588 14.1091 3.1936C14.6782 3.30482 15.053 3.41483 16.084 3.77337L17 4.09185V7.36343V10.635L16.2689 11.033C15.3831 11.5152 15.1388 11.6655 14.7565 11.9628C14.3796 12.2561 14.2505 12.3813 12.8777 13.7855C11.5987 15.0938 11.4904 15.2135 11.3454 15.4793C11.1295 15.8752 11.1915 15.4469 11.1023 16.765C11.1368 18.2295 9.59104 18.0407 9.18471 17.9181C8.77837 17.7955 8.15207 17.1772 8.20766 16.321C8.27832 15.2327 8.61126 14.204 9.18471 13.3022C9.28951 13.1374 9.36746 12.9952 9.35788 12.9864C9.3483 12.9775 9.07859 12.9858 8.75849 13.0046C7.63146 13.0711 5.11449 13.1689 4.84723 13.1565C4.20666 13.1269 3.70151 12.709 3.58097 12.109C3.5037 11.7244 3.65388 11.2933 3.96481 11.0073C4.13049 10.8548 4.45556 10.6795 4.58914 10.6706C4.62101 10.6685 4.4921 10.6494 4.30272 10.6283C4.04262 10.5992 3.90618 10.5661 3.74508 10.4927C3.4834 10.3734 3.21539 10.1199 3.09062 9.87346C3.00941 9.71308 3 9.65892 3 9.35226C3 9.02495 3.00501 9.00084 3.11462 8.79862C3.25049 8.54803 3.49987 8.32303 3.78158 8.19691C3.95234 8.12047 4.02168 8.10896 4.37815 8.09786L4.78151 8.08529L4.58985 8.03038C4.18622 7.9148 3.89539 7.68138 3.71812 7.33083C3.39217 6.68613 3.71371 5.93708 4.4483 5.62983C4.59412 5.56885 4.68434 5.55921 5.21849 5.54733C5.81788 5.53401 5.82182 5.53345 5.63866 5.48971C5.25435 5.39793 4.95859 5.17092 4.75328 4.81013C4.6519 4.63199 4.64706 4.60714 4.64706 4.2657C4.64706 3.93294 4.65395 3.89489 4.74585 3.72126Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
          <span class="sidebarIconSize">
            {/* Settlement Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.55366 3.36271C9.55366 3.12901 9.59995 3.0666 10.271 2.39558C11.0499 1.61669 11.2187 1.53651 11.5098 1.80773C11.7407 2.02277 11.6972 2.32701 11.3876 2.66293C11.2104 2.85518 11.1542 2.9546 11.213 2.97194C11.2606 2.98597 11.5531 3.05835 11.8628 3.13282C14.1654 3.68638 16.0959 5.39386 17.0017 7.67802C17.6661 9.35369 17.6661 11.462 17.0017 13.1381C16.0679 15.4937 14.0945 17.1878 11.6208 17.7575C10.911 17.9209 9.32929 17.9497 8.63307 17.8117C6.58706 17.4065 4.85622 16.2472 3.70795 14.5128C2.89783 13.2892 2.50121 11.9425 2.5 10.4112C2.49816 7.99083 3.58859 5.80553 5.51612 4.36673C6.00493 4.00186 6.88565 3.52163 7.3502 3.36665C7.62384 3.27535 7.67336 3.27484 7.84129 3.3617C8.04306 3.46607 8.13004 3.68238 8.06858 3.9272C8.03811 4.04853 7.86593 4.16096 7.25224 4.46038C6.3373 4.90671 5.82449 5.2806 5.1729 5.97631C4.3749 6.8284 3.79982 7.94874 3.55926 9.11973C3.42707 9.76288 3.42707 11.0532 3.55926 11.6964C3.80464 12.8908 4.37287 13.9828 5.2162 14.8806C7.83767 17.6714 12.1585 17.6714 14.78 14.8806C15.6356 13.9697 16.1961 12.8831 16.4448 11.6534C16.6087 10.8431 16.5494 9.39839 16.321 8.63671C15.6599 6.43179 14.0761 4.81179 11.9153 4.13017C11.6254 4.03868 11.3729 3.96389 11.3542 3.96389C11.3354 3.96389 11.394 4.05183 11.4844 4.15925C11.7989 4.53295 11.6256 5.04321 11.1843 5.04321C11.0315 5.04321 10.8666 4.91338 10.2757 4.32788C9.5988 3.6573 9.55366 3.59693 9.55366 3.36271ZM5.62247 8.24415C6.3366 6.78809 7.80612 5.74394 9.40967 5.55322C10.3367 5.44294 11.2653 5.60458 12.125 6.0259C13.1485 6.52753 13.891 7.25994 14.3737 8.24415C14.7581 9.02786 14.8508 9.44823 14.8508 10.4081C14.8508 11.3686 14.7574 11.7917 14.3744 12.5667C13.8839 13.5592 13.1301 14.3035 12.125 14.7879C11.3618 15.1556 10.8214 15.2809 9.99809 15.2809C9.17387 15.2809 8.63332 15.1554 7.8712 14.7871C6.8621 14.2994 6.10296 13.5507 5.62006 12.5667C5.23817 11.7887 5.14541 11.3666 5.14541 10.4081C5.14541 9.44823 5.23804 9.02786 5.62247 8.24415ZM12.0329 9.98054L12.2442 9.12767H11.3987C11.3613 8.88423 11.289 8.66288 11.1817 8.46361C11.1633 8.42893 11.1438 8.39515 11.1232 8.36225L12.0329 8.36595L12.2502 7.50007H9.20254H9.04778H8.31564L8.08349 8.50593H9.20254C9.5954 8.50593 9.88111 8.60684 10.0597 8.80866C10.1416 8.90129 10.2048 9.00762 10.2491 9.12767H8.29778L8.08349 9.98054H10.2795C10.2587 10.0544 10.231 10.1238 10.1966 10.1889C10.1113 10.3516 9.98528 10.4786 9.81861 10.5697C9.65393 10.6587 9.44857 10.7032 9.20254 10.7032H8.17278L8.17576 11.4258L10.2591 14.1667H11.5002V14.1081L9.61921 11.5854L9.65492 11.5723C10.0756 11.5116 10.4158 11.39 10.6758 11.2077C10.9357 11.0255 11.1262 10.7922 11.2472 10.5079C11.3166 10.3449 11.366 10.1692 11.3957 9.98054H12.0329Z"
                  fill="#003087"
                />
              </g>
            </svg>
          </span>
        </OverlayTrigger>
      </div>

      {/* Alert Management */}
      <div className="sidebarSmallImg">
        <Link
          to="/housekeeping-activity"
          className={activeLink("/housekeeping-activity")}
        >
          <span class="sidebarIconSize">
            {/* Alert Management Small Icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.9">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.30616 3.07187C8.86752 3.24034 8.5839 3.41898 8.32726 3.68841C8.07904 3.94913 2.42196 13.3948 2.13168 14.0335C2.03258 14.2514 2.00195 14.4501 2.00013 14.8859C1.99806 15.396 2.01821 15.4975 2.19702 15.8773C2.44141 16.3963 2.8264 16.7944 3.31921 17.0379L3.69239 17.2222H10H16.3076L16.6808 17.0379C17.1736 16.7944 17.5586 16.3963 17.803 15.8773C17.9818 15.4975 18.0019 15.396 17.9999 14.8859C17.998 14.4501 17.9674 14.2514 17.8683 14.0335C17.7973 13.8772 16.4329 11.5472 14.8363 8.85566C12.8613 5.52615 11.8423 3.86761 11.6483 3.66675C11.2276 3.231 10.7289 3.02193 10.0628 3.0021C9.72799 2.99212 9.44619 3.01808 9.30616 3.07187ZM10.441 6.01501C10.6004 6.09684 10.7338 6.23096 10.8151 6.39141C10.9342 6.62631 10.9414 6.76055 10.9414 8.7331C10.9414 11.0471 10.9306 11.1191 10.5414 11.3985C10.3956 11.5031 10.2566 11.5393 10 11.5393C9.74343 11.5393 9.60441 11.5031 9.45855 11.3985C9.06936 11.1191 9.05857 11.0471 9.05857 8.7331C9.05857 6.76137 9.06585 6.62624 9.18478 6.39166C9.41675 5.93425 9.96397 5.7702 10.441 6.01501ZM10.7134 12.7307C10.861 12.8178 11.0644 13.009 11.1655 13.1558C11.3321 13.3977 11.3494 13.4712 11.3494 13.938C11.3494 14.3946 11.3297 14.483 11.1762 14.7163C11.081 14.8611 10.8854 15.0579 10.7415 15.1537C10.5132 15.3057 10.4188 15.3279 10 15.3279C9.58119 15.3279 9.48679 15.3057 9.25853 15.1537C9.11461 15.0579 8.91898 14.8611 8.82377 14.7163C8.67026 14.483 8.65061 14.3946 8.65061 13.938C8.65061 13.4728 8.66819 13.3972 8.83193 13.1595C9.01733 12.8904 9.30277 12.6764 9.60862 12.5772C9.89362 12.4847 10.4204 12.558 10.7134 12.7307Z"
                  fill="#003087"
                />
              </g>
            </svg>
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
