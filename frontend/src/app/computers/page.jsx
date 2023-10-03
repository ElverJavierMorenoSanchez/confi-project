import ComputersTable from "@/components/computer/ComputersTable";
import { getComputers } from "@/libs/axios/computer";

import React from "react";
import PageLayout from "@/components/general/PageLayout";

const ComputerPage = async () => {
  const computers = await getComputers();
  return <PageLayout table={<ComputersTable computers={computers} />} />;
};

export default ComputerPage;
