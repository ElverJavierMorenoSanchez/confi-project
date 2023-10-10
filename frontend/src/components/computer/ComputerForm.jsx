"use client";
import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  Modal,
  ButtonGroup,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SelectForm from "../general/SelectForm";
import { useEffect, useState } from "react";
import { getModelsByBrand } from "@/libs/axios/general/model";
import DateInput from "../general/DateInput";
import {
  importComputers,
  postComputer,
  putComputer,
} from "@/libs/axios/computer/computer";
import BrandForm from "../general/brand/BrandForm";
import ModelForm from "./model/ModelForm";
import SystemForm from "./system/SystemForm";
import StorageForm from "./storage/StorageForm";
import ProccesorForm from "./proccesor/ProccesorForm";
import RamForm from "./ram/RamForm";
import DepartmentForm from "./department/DepartmentForm";
import CategoryForm from "../general/category/CategoryForm";
import SubcategoryForm from "../general/subcategory/SubcategoryForm";
import OfficeForm from "./office/OfficeForm";
import AvailabilityForm from "../general/availability/AvailabilityForm";
import StateForm from "../general/state/StateForm";

import { getCategories } from "@/libs/axios/general/category";
import { getSubcategories } from "@/libs/axios/general/subcategory";
import { getStates } from "@/libs/axios/general/state";
import { getAvailabilities } from "@/libs/axios/general/availability";
import { getDepartments } from "@/libs/axios/computer/department";
import { getSystems } from "@/libs/axios/computer/systems";
import { getProccesors } from "@/libs/axios/computer/proccesor";
import { getRams } from "@/libs/axios/computer/ram";
import { getStorages } from "@/libs/axios/computer/storage";
import { getBrands } from "@/libs/axios/general/brand";
import { getOffices } from "@/libs/axios/computer/office";
import OpenMenu from "../general/OpenMenu";
import ImportModal from "../general/ImportModal";

const typeDisks = [{ name: "HDD" }, { name: "SSD" }, { name: "Md2" }];

const ComputerForm = ({
  getComputers,
  computer,
  editable,
  filter,
  handleFilter,
}) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    serialNumber: computer.serialNumber || "",
    cnftLabel: computer.cnftLabel || "",
    accquisitionDate: computer.accquisitionDate || null,
    modelId: computer.modelId || "",
    systemId: computer.systemId || "",
    diskType: computer.diskType || "",
    storageId: computer.storageId || "",
    proccesorId: computer.proccesorId || "",
    ramId: computer.ramId || "",
    city: computer.city || "",
    departmentId: computer.departmentId || "",
    hostname: computer.hostname || "",
    categoryId: computer.categoryId || "",
    subcategoryId: computer.subcategoryId || "",
    officeId: computer.officeId || "",
    officeLicence: computer.officeLicence || "",
    actualUser: computer.actualUser || "",
    lastUser: computer.lastUser || "",
    availabilityId: computer.availabilityId || "",
    stateId: computer.stateId || "",
    observations: computer.observations || "",
    damages: computer.damages || "",
  });

  const [models, setModels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [states, setStates] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [systems, setSystems] = useState([]);
  const [proccesors, setProccesors] = useState([]);
  const [rams, setRams] = useState([]);
  const [storages, setStorages] = useState([]);
  const [brands, setBrands] = useState([]);
  const [offices, setOffices] = useState([]);
  const [date, setDate] = useState(computer.accquisitionDate);
  const [brandId, setBrandId] = useState(computer.brandId);

  const _getCategories = async () => setCategories(await getCategories());
  const _getSubcategories = async () =>
    setSubcategories(await getSubcategories());
  const _getStates = async () => setStates(await getStates());
  const _getAvailabilities = async () =>
    setAvailabilities(await getAvailabilities());
  const _getDepartments = async () => setDepartments(await getDepartments());
  const _getSystems = async () => setSystems(await getSystems());
  const _getProccesors = async () => setProccesors(await getProccesors());
  const _getRams = async () => setRams(await getRams());
  const _getStorages = async () => setStorages(await getStorages());
  const _getBrands = async () => setBrands(await getBrands());
  const _getOffices = async () => setOffices(await getOffices());

  useEffect(() => {
    _getCategories();
    _getSubcategories();
    _getStates();
    _getAvailabilities();
    _getDepartments();
    _getSystems();
    _getProccesors();
    _getRams();
    _getStorages();
    _getBrands();
    _getOffices();
    getModels(brandId);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleDate = (e) => {
    setDate(e["$d"]);
  };

  const handleBrand = (e) => {
    setBrandId(e.target.value);
    getModels(e.target.value);
  };

  const getModels = async (id) => {
    const response = await getModelsByBrand(id);
    setModels(response);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComputer = {
      ...form,
      accquisitionDate: date,
      brandId,
      userId: "1726789025",
    };

    if (filter) {
      handleFilter(newComputer);
      handleClose();
      return;
    }

    if (!editable) {
      const response = await postComputer(newComputer);

      if (response.errors[0]?.message) {
        alert(response.errors[0]?.message);
        return;
      }
      getComputers();
    } else {
      const response = await putComputer(computer.id, newComputer);
      window.location.reload();
    }
    handleClose();
  };

  return (
    <>
      {filter ? (
        <Button onClick={handleOpen} onKeyDown={handleKeyDown}>
          <FilterAltIcon />
        </Button>
      ) : editable ? (
        <Button
          variant="outlined"
          color="success"
          startIcon={<EditNoteIcon />}
          onClick={handleOpen}
        >
          {"Editar"}
        </Button>
      ) : (
        <ButtonGroup variant="outlined" color="success">
          <Button startIcon={<AddIcon />} onClick={handleOpen}>
            {"Nuevo"}
          </Button>
          <OpenMenu
            importModal={
              <ImportModal
                title={"computadores"}
                postAxios={importComputers}
                getData={getComputers}
              />
            }
          />
        </ButtonGroup>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onKeyDown={handleKeyDown}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxHeight: "90vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {filter ? "Filtar" : "Nuevo computador"}
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "64px",
              my: "30px",
            }}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <TextField
                label="Número de serie"
                variant="outlined"
                name="serialNumber"
                value={form.serialNumber}
                onChange={handleChange}
              />
              <TextField
                label="Código confiteca"
                variant="outlined"
                name="cnftLabel"
                value={form.cnftLabel}
                onChange={handleChange}
              />

              <FormControl fullWidth>
                <DateInput
                  title="Fecha de adquisición"
                  handleDate={handleDate}
                  date={form.accquisitionDate}
                  editable={editable}
                />
              </FormControl>

              <SelectForm
                label="Marca"
                options={brands}
                handleChange={handleBrand}
                selected={brandId}
                newData={<BrandForm width={"40%"} getBrands={_getBrands} />}
              />
              <SelectForm
                label="Modelo"
                options={models}
                name="modelId"
                handleChange={handleChange}
                selected={form.modelId}
                newData={
                  <ModelForm
                    brands={brands}
                    getModels={getModels}
                    getBrands={_getBrands}
                    width={"70%"}
                    _brandId={brandId}
                  />
                }
              />
              <SelectForm
                label="Sistema operativo"
                options={systems}
                name="systemId"
                handleChange={handleChange}
                selected={form.systemId}
                newData={<SystemForm width={"40%"} getSystems={_getSystems} />}
              />
              <SelectForm
                label="Tipo de disco"
                options={typeDisks}
                name="diskType"
                selected={form.diskType}
                handleChange={handleChange}
              />
              <SelectForm
                label="Almacenamiento"
                options={storages}
                name="storageId"
                handleChange={handleChange}
                selected={form.storageId}
                newData={
                  <StorageForm width={"40%"} getStorages={_getStorages} />
                }
              />
              <SelectForm
                label="Procesador"
                options={proccesors}
                name="proccesorId"
                handleChange={handleChange}
                selected={form.proccesorId}
                newData={
                  <ProccesorForm width={"40%"} getProccesors={_getProccesors} />
                }
              />
              <SelectForm
                label="Memoria ram"
                options={rams}
                name="ramId"
                handleChange={handleChange}
                selected={form.ramId}
                newData={<RamForm width={"40%"} getRams={_getRams} />}
              />
              <TextField
                label="Ciudad"
                variant="outlined"
                name="city"
                value={form.city || ""}
                onChange={handleChange}
              />
              <SelectForm
                label="Departamento"
                options={departments}
                name="departmentId"
                handleChange={handleChange}
                selected={form.departmentId}
                newData={
                  <DepartmentForm
                    width={"40%"}
                    getDeparments={_getDepartments}
                  />
                }
              />
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <TextField
                label="Hostname"
                variant="outlined"
                name="hostname"
                value={form.hostname}
                onChange={handleChange}
              />
              <SelectForm
                label="Categoria"
                options={categories}
                name="categoryId"
                handleChange={handleChange}
                selected={form.categoryId}
                newData={
                  <CategoryForm width={"40%"} getCategories={_getCategories} />
                }
              />
              <SelectForm
                label="Subcategoria"
                options={subcategories}
                name="subcategoryId"
                handleChange={handleChange}
                selected={form.subcategoryId}
                newData={
                  <SubcategoryForm
                    width={"70%"}
                    categories={categories}
                    getCategories={_getCategories}
                    getSubcategories={_getSubcategories}
                  />
                }
              />
              <SelectForm
                label="Office"
                options={offices}
                name="officeId"
                handleChange={handleChange}
                selected={form.officeId}
                newData={<OfficeForm width={"40%"} getOffices={_getOffices} />}
              />
              <TextField
                label="Licencia office"
                variant="outlined"
                name="officeLicence"
                value={form.officeLicence}
                onChange={handleChange}
              />
              <TextField
                label="Usuario actual"
                variant="outlined"
                name="actualUser"
                value={form.actualUser}
                onChange={handleChange}
              />
              <TextField
                label="Último usuario"
                variant="outlined"
                name="lastUser"
                value={form.lastUser}
                onChange={handleChange}
              />
              <SelectForm
                label="Disponibilidad"
                options={availabilities}
                name="availabilityId"
                handleChange={handleChange}
                selected={form.availabilityId}
                newData={
                  <AvailabilityForm
                    width={"40%"}
                    getAvailabilities={_getAvailabilities}
                  />
                }
              />
              <SelectForm
                label="Estado"
                options={states}
                name="stateId"
                handleChange={handleChange}
                selected={form.stateId}
                newData={<StateForm width={"40%"} getStates={_getStates} />}
              />
              <TextField
                label="Observaciones"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                name="observations"
                value={form.observations}
                onChange={handleChange}
              />
              <TextField
                label="Daños"
                multiline
                rows={2}
                variant="outlined"
                fullWidth
                name="damages"
                value={form.damages}
                onChange={handleChange}
              />
            </Box>
          </Box>
          <Button
            variant="outlined"
            color="success"
            sx={{
              bgcolor: "green",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            {filter ? "Aplicar Filtro" : "Guardar cambios"}
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{
              position: "absolute",
              bgcolor: "green",
              ml: "16px",
            }}
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ComputerForm;
