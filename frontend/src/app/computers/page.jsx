import ComputersTable from "@/components/computer/ComputersTable";
import { getComputers } from "@/libs/axios/computer";

import React from "react";
import TablePageLayout from "@/components/general/TablePageLayout";
import ComputerForm from "@/components/computer/ComputerForm";

const ComputerPage = async () => {
  const computers = await getComputers();
  return (
    <TablePageLayout
      table={<ComputersTable computers={computers} />}
      formComponent={<ComputerForm />}
    />
  );
};

export default ComputerPage;
