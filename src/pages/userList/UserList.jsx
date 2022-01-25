import "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../dummyData";
import { useState } from "react";
import { AttachMoney, DeleteForeverOutlined, EditOutlined, MailOutlined, MonitorHeartOutlined, SensorDoorOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleClick = (id) =>{
        setData(data.filter((d)=>d.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'user', headerName: 'User', width: 200,renderCell:(params)=>{
            return(
                <div className="userListUserInfo" >
                      <img className="userImg"  src={params.row.avatar} alt="" />
                      <p>{params.row.username}</p>
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 220,renderCell:(params)=>(
            <div className="emailContainer" >
                <p className="email">{params.row.email}</p>
                <MailOutlined  fontSize="small"/>
            </div>
        )  },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 200, renderCell:(params) =>(
              <div className="transactionContainer" >
                  <AttachMoney fontSize="small" className="dollarIcon"/>
                  <span className="transactionMoney">{params.row.transaction}</span>
              </div>
          )
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 200,
          renderCell: (params)=>{
              var status = params.row.status
              return(
                  <div className="statusContainer">
                      <p className={"statusTitle "+(status === "active" ? "activee": "passive")}>{status}</p>
                    {
                        status === "active" ? <MonitorHeartOutlined className="check" /> : <SensorDoorOutlined className="xxx"/*isim bulamadım */ />
                    }
                  </div>
              )
          }
        },
        {
            field:"action",
            headerName:"Action",
            width: 200,
            renderCell:(params)=>(
                <div className="actionContainer">
                    <div className="editIconContainer">
                        <Link to={"/user/"+params.row.id}>
                        <EditOutlined className="editIcon" />
                        </Link >
                    </div>
                    <div className="deletIconContainer">

                        <DeleteForeverOutlined onClick={()=>handleClick(params.row.id)} className="deleteIcon"/>
                    </div>
                </div>
            )
        }
       
      ];
      
    return (
    <div className="userList" >
        <h1 className="userListTitle">User List</h1>
      <DataGrid
      autoHeight
      disableColumnSelector
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[3]}
        checkboxSelection
        disableSelectionOnClick
        autoPageSize
          />
    </div>
  );
}
