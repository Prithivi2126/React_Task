import React, { useState, useRef, useCallback, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import Sidenav from "./Sidenav";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDataRequest,
  getDataRequest,
  getapiDataRequest,
} from "../redux/action/action";

export default function Sagalist() {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.reducer);
  let nav = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const toast = useRef(null);
  const dt = useRef(null);

  const getdata = useCallback(() => {
    console.log("log");
    dispatch(getDataRequest());
  }, [dispatch]);

  useEffect(() => {
    getdata();
  }, [getdata]);

  const editProduct = (product) => {
    dispatch(getapiDataRequest(product.id));
    nav(`/sagaform/${product.id}`);
  };

  const confirmDeleteProduct = (id) => {
    dispatch(deleteDataRequest(id));
  };

  const exportCSV = () => {
    dt.current.exportCSV();
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          onClick={submit}
        />
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          disabled={!selectedProducts || !selectedProducts.length}
        />
      </div>
    );
  };

  const submit = () => {
    nav("/sagaform");
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        className="p-button-help"
        onClick={exportCSV}
      />
    );
  };

  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-center">
      <h4 className="m-0">Manage Products</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  const actionBodyTemplate = (product) => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success p-mr-2 me-3"
          onClick={() => editProduct(product)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => confirmDeleteProduct(product.id)}
        />
      </div>
    );
  };

  return (
    <div className="d-flex mt-5">
      <div className="list">
        <Sidenav />
      </div>
      <Toast ref={toast} />
      <div className="card ml-5">
        <Toolbar
          className="mb-4"
          left={leftToolbarTemplate}
          right={rightToolbarTemplate}
        ></Toolbar>
        <DataTable
          ref={dt}
          value={state.array}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          globalFilter={globalFilter}
          header={header}
        >
          <Column
            field="name"
            header="Name"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="email"
            header="Email"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="number"
            header="Number"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="password"
            header="Password"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="c_password"
            header="Confirm Password"
            sortable
            style={{ minWidth: "10rem" }}
          ></Column>
          <Column
            field="gender"
            header="Gender"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="language"
            header="Language"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            field="date"
            header="Date"
            sortable
            style={{ minWidth: "8rem" }}
          ></Column>
          <Column
            header="Action"
            body={actionBodyTemplate}
            style={{ minWidth: "8rem" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
}
