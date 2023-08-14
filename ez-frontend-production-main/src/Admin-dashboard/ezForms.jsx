import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllezKaroForms } from "../actions/ezKaroActions";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

const EzForms = () => {
  const dispatch = useDispatch();
  const { allFormsData } = useSelector((state) => state.ezKaro);

  const [rows, setRows] = useState([]);

  // console.log(rows);

  const theme = true;

  useEffect(() => {
    dispatch(getAllezKaroForms());
  }, [dispatch]);

  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "userName",
      headerName: "Name",
      minWidth: 100,

      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div
          className={`flex flex-col text-xs ${
            theme ? "text-black" : "text-white"
          }`}
        >
          <span className="opacity-80">{params.row.userName}</span>
        </div>
      ),
    },
    {
      field: "phone",
      headerName: "Contact",
      minWidth: 100,

      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div
          className={`flex flex-col text-xs ${
            theme ? "text-black" : "text-white"
          }`}
        >
          <span className="opacity-80">{params.row.phone}</span>
        </div>
      ),
    },
    {
      field: "category",
      headerName: "Service Category",
      minWidth: 150,
      flex: 1,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div
          className={`flex flex-col text-xs ${
            theme ? "text-black" : "text-white"
          }`}
        >
          <span className="opacity-80">{params.row.category}</span>
        </div>
      ),
    },

    {
      field: "description",
      headerName: "Description",
      minWidth: 150,
      flex: 2,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className="flex flex-col">
          <span className={`text-xs ${theme ? "text-black" : "text-white"}`}>
            {params.row.description}
          </span>
        </div>
      ),
    },

    {
      field: "budget",
      headerName: "Budget",
      minWidth: 100,

      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.budget}
        </div>
      ),
    },
    {
      field: "deliveryTime",
      headerName: "Delivery Time",
      minWidth: 100,
      flex: 1,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.deliveryTime}
        </div>
      ),
    },
    {
      field: "sellerType",
      headerName: "Seller Type",
      minWidth: 100,

      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.sellerType}
        </div>
      ),
    },
    {
      field: "isEzAssured",
      headerName: "Ez Assured",
      minWidth: 100,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.isEzAssured === true ? "Yes" : "No"}
        </div>
      ),
    },

    {
      field: "Action",
      headerName: "Action",

      minWidth: 150,
      flex: 1,
      headerClassName: "manage_table_header",
      renderCell: () => (
        <div
          className={`text-xs ${
            theme ? "text-black" : "text-white"
          } flex items-center justify-center gap-4`}
        >
          <Link to={"/ezform/view/"} className="bg-green-500 p-2 text-white">
            view
          </Link>
          <Link to={"/ezform/delete/"} className="bg-purple-500 p-2 text-white">
            Delete
          </Link>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (allFormsData && allFormsData.length > 0 && allFormsData !== null) {
      let rows = allFormsData.map((item) => {
        return {
          id: item?._id,
          userName: `${item?.ez_form_user_id?.firstName} ${item?.ez_form_user_id?.lastName}`,
          phone: item?.ez_form_user_id?.phone,
          category: item?.serviceCategory,
          description: item?.description,
          budget: item?.budget,
          deliveryTime: item?.deliveryTime,
          sellerType: item?.sellerType,
          isEzAssured: item?.isEzAssured,
        };
      });

      setRows(rows);
    }
  }, [allFormsData]);
  return (
    <div className="w-full bg-white p-4">
      <h1 className="text-2xl">All Forms</h1>
      <div className="w-full h-full">
        <Box
          sx={{
            width: "100%",
            height: "fit-content",
            mt: 5,
            borderRadius: 2,
          }}
          className={`${theme ? "bg-white" : "bg-gray-900"} p-3`}
        >
          <DataGrid
            // onRowClick={handleClick}
            sx={{
              ".MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-row:hover": {
                cursor: "pointer",
                bgcolor: `${theme ? "#faf5ff" : "#0a0f1a"}`,
              },
              "& .MuiDataGrid-columnHeaders": {
                background: "green",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                color: "#fff",
              },
              "& .MuiSvgIcon-root": {
                color: "#dbd2d2",
              },
              "& .MuiTablePagination-displayedRows": {
                color: "#9f63f4",
              },
              // "& .manage_table_header": {
              //   backgroundColor: "rgb(147 51 234)",
              //   color: "#fff",
              //   border: "1px solid #fff",
              // },
            }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default EzForms;
