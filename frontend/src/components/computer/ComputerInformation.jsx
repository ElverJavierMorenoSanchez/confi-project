import React from "react";
import RowTable from "../general/RowTable";

const ComputerInformation = ({ computer }) => {
  return (
    <>
      <table className="w-1/2">
        <tbody>
          <RowTable
            title={"Numero de serie"}
            description={computer.serialNumber}
          />
          <RowTable
            title={"Etiqueta confiteca"}
            description={computer.cnftLabel}
          />
          <RowTable title={"Categoria"} description={computer.categoryName} />
          <RowTable
            title={"Subcategoria"}
            description={computer.subcategoryName}
          />
          <RowTable title={"Ciudad"} description={computer.city} />
          <RowTable
            title={"Departamento"}
            description={computer.departmentName}
          />
          <RowTable title={"Ultimo usuario"} description={computer.lastUser} />
          <RowTable
            title={"Usuario Actual"}
            description={computer.actualUser}
          />
          <RowTable
            title={"Estado actual"}
            description={computer.stateDescription}
          />
          <RowTable
            title={"Disponibilidad"}
            description={computer.availabilityDescription}
          />
          <RowTable title={"Hostname"} description={computer.hostname} />
          <RowTable title={"Marca"} description={computer.brand} />
          <RowTable title={"Modelo"} description={computer.modelName} />
          <RowTable title={"Tipo de disco"} description={computer.diskType} />
          <RowTable
            title={"Capacidad de almacenamiento"}
            description={computer.storageDescription}
          />
          <RowTable
            title={"Tipo de sistema"}
            description={computer.systemName}
          />
          <RowTable
            title={"Tipo de procesador"}
            description={computer.proccesorName}
          />
          <RowTable
            title={"Tipo de memoria RAM"}
            description={computer.ramDescription}
          />
          <RowTable
            title={"Capacidad de memoria RAM"}
            description={computer.serialNumber}
          />
          <RowTable
            title={"Tipo de office"}
            description={computer.officeDescription}
          />
          <RowTable
            title={"Licencia de Office"}
            description={computer.serialNumber}
          />
          <RowTable
            title={"Fecha de adquisicion"}
            description={computer.accquisitionDate}
          />
        </tbody>
      </table>
      <table className="w-1/2">
        <tbody>
          <RowTable
            title={"Observaciones"}
            description={computer.observations}
          />
          <RowTable title={"Daños"} description={computer.damages} />
        </tbody>
      </table>
    </>
  );
};

export default ComputerInformation;
