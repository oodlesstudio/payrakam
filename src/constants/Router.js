import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgegingQueueWise from "../pages/AgegingQueueWise";
// Components
import BranchTerminalRegistration from "../pages/BranchTerminalRegistration";
import FieldIdentificationConfig from "../pages/FieldIdentificationConfig";
import ManualKycRegistration from "../pages/ManualKycRegistration";
import OnlineCbrEntry from "../pages/OnlineCbrEntry";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/branch-terminal-registration"
          element={<BranchTerminalRegistration />}
        />
        <Route
          path="/field-identification-config"
          element={<FieldIdentificationConfig />}
        />
        <Route path="/online-cbr-entry" element={<OnlineCbrEntry />} />
        {/* <Route path="/" element={<TicketCentre />} /> */}
        <Route path="/ageging-queue-wise" element={<AgegingQueueWise />} />
        <Route path="/" element={<ManualKycRegistration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
