import ComputersTable from "@/components/computer/ComputersTable";
import { getComputers } from "@/libs/axios/computer/computer";

import React from "react";
import TablePageLayout from "@/components/general/TablePageLayout";

const ComputerPage = async () => {
  const computers = await getComputers();

  return <TablePageLayout table={<ComputersTable _computers={computers} />} />;
};

export default ComputerPage;
