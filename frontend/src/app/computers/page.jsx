import ComputersTable from "@/components/computer/ComputersTable";
import { getComputers } from "@/libs/axios/computer/computer";

import React from "react";
import TablePageLayout from "@/components/general/TablePageLayout";
import ComputerForm from "@/components/computer/ComputerForm";
import { getCategories } from "@/libs/axios/general/category";
import { getSubcategories } from "@/libs/axios/general/subcategory";
import { getStates } from "@/libs/axios/general/state";
import { getAvailabilities } from "@/libs/axios/general/availability";
import { getModels } from "@/libs/axios/general/model";
import { getDepartments } from "@/libs/axios/computer/department";
import { getSystems } from "@/libs/axios/computer/systems";
import { getProccesors } from "@/libs/axios/computer/proccesor";
import { getRams } from "@/libs/axios/computer/ram";
import { getStorages } from "@/libs/axios/computer/storage";
import { getBrands } from "@/libs/axios/general/brand";

const ComputerPage = async () => {
  const computers = await getComputers();
  const categories = await getCategories();
  const subcategories = await getSubcategories();
  const states = await getStates();
  const availabilities = await getAvailabilities();
  const departments = await getDepartments();
  const systems = await getSystems();
  const proccesors = await getProccesors();
  const rams = await getRams();
  const storages = await getStorages();
  const brands = await getBrands();

  return (
    <TablePageLayout
      table={<ComputersTable computers={computers} />}
      newDataComponent={
        <ComputerForm
          selectOptions={{
            categories,
            subcategories,
            states,
            availabilities,
            departments,
            brands,
            systems,
            proccesors,
            rams,
            storages,
          }}
        />
      }
    />
  );
};

export default ComputerPage;
