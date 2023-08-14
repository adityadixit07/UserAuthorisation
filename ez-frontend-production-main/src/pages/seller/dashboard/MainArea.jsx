import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
const MainArea = ({ theme }) => {
  const columns = [
    // { field: "id", headerName: "ID", width: 90 },
    {
      field: "itemName",
      headerName: "Item",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div
          className={`flex flex-col text-xs ${
            theme ? "text-black" : "text-white"
          }`}
        >
          <span className="opacity-80">{params.row.itemName}</span>
        </div>
      ),
    },

    {
      field: "itemDescription",
      headerName: "Description",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className="flex flex-col">
          <span className={`text-xs ${theme ? "text-black" : "text-white"}`}>
            {params.row.itemDescription}
          </span>
        </div>
      ),
    },

    {
      field: "price",
      headerName: "Price",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.price}
        </div>
      ),
    },
    {
      field: "tags",
      headerName: "Tags",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.tags}
        </div>
      ),
    },
    {
      field: "isEzAssured",
      headerName: "EzAssured",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.isEzAssured}
        </div>
      ),
    },
    {
      field: "upVote",
      headerName: "UpVote",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.upVote}
        </div>
      ),
    },

    {
      field: "discount",
      headerName: "Discount",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: (params) => (
        <div className={`text-xs ${theme ? "text-black" : "text-white"}`}>
          {params.row.discount}
        </div>
      ),
    },
    {
      field: "Action",
      headerName: "Discount",
      flex: 1,
      minWidth: 150,
      headerClassName: "manage_table_header",
      renderCell: () => (
        <div
          className={`text-xs ${
            theme ? "text-black" : "text-white"
          } flex items-center justify-center gap-4`}
        >
          <Link to={"/edit/"} className="bg-purple-500 p-2">
            Edit
          </Link>
          <Link to={"/edit/"} className="bg-purple-500 p-2">
            Delete
          </Link>
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 122,
      itemName: "Summer Drink",
      itemDescription: "Best Drinks fro summer to buy",
      price: 200,
      discount: "30%",
      isEzAssured: "true",
      tags: "Drink, Cool, Healthy",
      upVote: 40,
    },
    {
      id: 1,
      itemName: "Summer Drink",
      itemDescription: "Best Drinks fro summer to buy",
      price: 200,
      discount: "30%",
      isEzAssured: "true",
      tags: "Drink, Cool, Healthy",
      upVote: 40,
    },
    {
      id: 132,
      itemName: "Summer Drink",
      itemDescription: "Best Drinks fro summer to buy",
      price: 200,
      discount: "30%",
      isEzAssured: "true",
      tags: "Drink, Cool, Healthy",
      upVote: 40,
    },
    {
      id: 331,
      itemName: "Summer Drink",
      itemDescription: "Best Drinks fro summer to buy",
      price: 200,
      discount: "30%",
      isEzAssured: "true",
      tags: "Drink, Cool, Healthy",
      upVote: 40,
    },
    {
      id: 111,
      itemName: "Summer Drink",
      itemDescription: "Best Drinks fro summer to buy",
      price: 200,
      discount: "30%",
      isEzAssured: "true",
      tags: "Drink, Cool, Healthy",
      upVote: 40,
    },
    {
      id: 13,
      itemName: "Summer Drink",
      itemDescription: "Best Drinks fro summer to buy",
      price: 200,
      discount: "30%",
      isEzAssured: "true",
      tags: "Drink, Cool, Healthy",
      upVote: 40,
    },
    {
      id: 12,
      itemName: "Summer Drink",
      itemDescription: "Best Drinks fro summer to buy",
      price: 200,
      discount: "30%",
      isEzAssured: "true",
      tags: "Drink, Cool, Healthy",
      upVote: 40,
    },
  ];
  return (
    <div className="w-full bg-white p-4">
      <h1 className="text-2xl">My Products</h1>
      <div className="w-full border-2 border-dotted p-4 mt-5 flex flex-col">
        <span>You dont have any product in Catalogue</span>
        <span className="my-4">
          <Link className="bg-green-500 text-white p-2 rounded">
            Add Product
          </Link>
        </span>
      </div>
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
                background: "#9f63f4",
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
          />
        </Box>
      </div>
    </div>
  );
};

export default MainArea;
