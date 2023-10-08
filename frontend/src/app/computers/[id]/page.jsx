import ComputerInformation from "@/components/computer/ComputerInformation";
import InformationPageLayout from "@/components/general/InformationPageLayout";
import { getComputer } from "@/libs/axios/computer/computer";

import React from "react";

const InformationPage = async ({ params }) => {
  const { id } = params;
  const computer = await getComputer(id);

  return (
    <InformationPageLayout
      infomationComponent={<ComputerInformation _computer={computer} />}
      category={"computers"}
    />
  );
};

export default InformationPage;
