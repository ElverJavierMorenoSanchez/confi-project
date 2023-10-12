import ComputersTable from "@/components/computer/ComputersTable";

import React from "react";
import TablePageLayout from "@/components/general/TablePageLayout";
import { Container } from "@mui/material";

const ComputerPage = async () => {
  return <TablePageLayout table={<ComputersTable />} />;
};

export default ComputerPage;
