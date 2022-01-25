import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";

import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AttachMoney, DeleteOutline, EditOutlined, Inventory2Outlined, MonitorHeartOutlined, SensorDoorOutlined } from "@mui/icons-material";

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            <p className="productListTitle">
            {params.row.name}
            </p>
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200,renderCell:(params)=>(
      <div className="productListStockContainer" >
          <p>{params.row.stock}</p>
          <Inventory2Outlined fontSize="small" />
      </div>
    ) },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell:(params)=>{
         var status= params.row.status
        return(
          <div className="productListStatusContainer">
            <p className={"productListStatus "+(status === "active" ? "activeStatus" : "passiveStatus" ) }>{status}</p>
            {
               status === "active" ? <MonitorHeartOutlined fontSize="small" className="check" /> : <SensorDoorOutlined fontSize="small" className="xxx" />
            }
          </div>
        )
      }
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
      renderCell:(params)=>(
        <div className="productListPriceContainer">
          <AttachMoney fontSize="small" className="attachMoney"/>  
          <p className="pricePrice">{params.row.price}</p>
        
        </div>
      )
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actionContainer">
            <Link to={"/product/" + params.row.id}>
              <EditOutlined fontSize="small" className="productListEdit"/>
            </Link>
            <DeleteOutline
              className="productListDelete" fontSize="small"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        autoHeight
        autoPageSize
      />
    </div>
  );
}