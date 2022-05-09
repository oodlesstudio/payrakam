import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgentRegistration from "../pages/AgentRegistration";
// Components
import AllTransaction from "../pages/AllTransaction";
import AepsTransactions from "../pages/AepsTransactions";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgentRegistration />} />
        <Route path="/all-transaction" element={<AllTransaction />} />
        <Route path="/aeps-transactions" element={<AepsTransactions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
