import DepartmentTable from "@/components/computer/department/DepartmentTable";
import TablePageLayout from "@/components/general/TablePageLayout";
import React from "react";

const DepartmentPage = () => {
  return <TablePageLayout table={<DepartmentTable />} />;
};

export default DepartmentPage;
