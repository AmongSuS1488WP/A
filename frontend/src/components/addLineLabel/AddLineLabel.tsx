import React, { useState } from "react";
import styles from "./AddLineLabel.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../app/hooks";
import { UpdateApp } from "../../app/UpdateAppSlice";
import { CloseAddLineMenu } from "./AddLineSlice";
import { SetErrorMessage } from "../errorLabel/ErrorMessageSlice";
import { OpenErrorMenu } from "../errorLabel/ErrorSlice";

export default function AddLineLabel() {
  const dispatch = useAppDispatch();

  let [CompanySignatureName, setCompanySignatureName] = useState("");
  let [DocumentName, setDocumentName] = useState("");
  let [DocumentStatus, setDocumentStatus] = useState("");
  let [DocumentType, setDocumentType] = useState("");
  let [EmployeeNumber, setEmployeeNumber] = useState("");
  let [EmployeeSignatureName, setEmployeeSignatureName] = useState("");

  let [IncorrectDataEmployerNumber, setIncorrectDataEmployerNumber] =
    useState("");
  let [IncorrectDataDocumentName, setIncorrectDataDocumentName] = useState("");
  let [IncorrectSignatureName, setIncorrectIncorrectSignatureName] =
    useState("");
  let [IncorrectEmployerSignatureName, setIncorrectEmployerSignatureName] =
    useState("");

  async function AddRecord() {
    await fetch(`${process.env.REACT_APP_API_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companySigDate: new Date().toISOString(),
        companySignatureName: CompanySignatureName,
        documentName: DocumentName,
        documentStatus: DocumentStatus,
        documentType: DocumentType,
        employeeNumber: EmployeeNumber,
        employeeSigDate: new Date().toISOString(),
        employeeSignatureName: EmployeeSignatureName,
      }),
    }).catch((error) => {
      console.error("Error:", error);
      dispatch(SetErrorMessage(error));
      dispatch(OpenErrorMenu());
    });
  }

  return (
    <div className={styles.AddLineLabel}>
      <h1>AddLine?</h1>
      <Box>
        <TextField
          id="input-with-icon-textfield"
          label="Вес"
          placeholder="Введите данные"
          helperText={IncorrectSignatureName}
          onChange={(event) => {
            setCompanySignatureName(
              (CompanySignatureName = event.target.value)
            );
          }}
          InputProps={{
            value: CompanySignatureName,
          }}
          variant="standard"
        />

        <br />

        <TextField
          id="input-with-icon-textfield"
          label="Модель"
          placeholder="Введите данные"
          helperText={IncorrectDataDocumentName}
          onChange={(event) => {
            setDocumentName((DocumentName = event.target.value));
          }}
          InputProps={{
            value: DocumentName,
          }}
          variant="standard"
        />

        <br />

        <TextField
          id="input-with-icon-textfield"
          label="Тип оборудования"
          placeholder="Введите данные"
          onChange={(event) => {
            setDocumentStatus((DocumentStatus = event.target.value));
          }}
          InputProps={{
            value: DocumentStatus,
          }}
          variant="standard"
        />

        <br />

        <TextField
          id="input-with-icon-textfield"
          label="Размер"
          placeholder="Введите данные"
          onChange={(event) => {
            setDocumentType((DocumentType = event.target.value));
          }}
          InputProps={{
            value: DocumentType,
          }}
          variant="standard"
        />

        <br />

        <TextField
          id="input-with-icon-textfield"
          label="Текущее состояние оборудования"
          helperText={IncorrectDataEmployerNumber}
          placeholder="Введите данные"
          onChange={(event) => {
            setIncorrectDataEmployerNumber("");
            setEmployeeNumber((EmployeeNumber = event.target.value));
          }}
          InputProps={{
            value: EmployeeNumber,
          }}
          variant="standard"
        />

        <br />

        <TextField
          id="input-with-icon-textfield"
          label="Кем в последний раз обслуживалось"
          placeholder="Введите данные"
          helperText={IncorrectEmployerSignatureName}
          onChange={(event) => {
            setEmployeeSignatureName(
              (EmployeeSignatureName = event.target.value)
            );
          }}
          InputProps={{
            value: EmployeeSignatureName,
          }}
          variant="standard"
        />
      </Box>

      <Button
        className={styles.LoginButton}
        variant="contained"
        size="large"
        onClick={() => {
          AddRecord();
          dispatch(CloseAddLineMenu());
          dispatch(UpdateApp());
        }}
      >
        CONFIRM
      </Button>

      <Button
        className={styles.LoginButton}
        variant="contained"
        color="error"
        size="large"
        onClick={() => {
          dispatch(CloseAddLineMenu());
        }}
      >
        CANCEL
      </Button>
    </div>
  );
}
