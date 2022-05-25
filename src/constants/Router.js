import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgentRegistration from "../pages/AgentRegistration";
// Components
import AllTransaction from "../pages/AllTransaction";
// import AepsTransactions from "../pages/AepsTransactions";
// import TransferMoney from '../pages/TransferMoney';
// import BeneficiaryRegistration from "../pages/BeneficiaryRegistration";
// import FundTransfer from "../pages/FundTransfer";
// import RemitterRegistration from "../pages/RemitterRegistration";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgentRegistration />} />
        <Route path="/agent-management/manual-kyc-registration" element={<AgentRegistration />} />
        <Route path="/transaction-report/all-Transaction" element={<AllTransaction />} />
        {/* <Route path="/aeps-Transactions" element={<AepsTransactions />} /> */}
        {/* <Route path="/transfer-money" element={<TransferMoney />} /> */}
        {/* <Route path="/beneficiary-registration" element={<BeneficiaryRegistration />} /> */}
        {/* <Route path="/fund-transfer" element={<FundTransfer />} /> */}
        {/* <Route path="/remitter-registration" element={<RemitterRegistration />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default router;
