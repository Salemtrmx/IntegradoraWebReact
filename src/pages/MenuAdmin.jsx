import React, { useEffect, useState } from "react";
import Navbar2 from "../components/navbarAdmin"; 
import Headersss from "../components/header";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import axios from "axios";
import "../css/MenuAdmin.css";


const Menu = () => {
  const [rows, setRows] = useState([]);


  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token"); //jalar el token del login
  
      if (!token) {
        console.error("No hay token disponible");
        return;
      }
  
      const response = await axios.get("http://localhost:3000/api/users/listKeepers", {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
  
      if (Array.isArray(response.data)) {
        const formattedRows = response.data.map((item, index) => ({
          id: index + 1,
          name: item.name,
          email: item.email,
          phone: item.phone,
        }));

        setRows(formattedRows);
      } else {
        console.error("El api no devolvió nada", response.data);
      }
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);
  
  

  const columns = [
    { field: "name", headerName: "Nombre", width: 300},
    { field: "email", headerName: "Correo", width: 400},
    { field: "phone", headerName: "Teléfono", width: 700 },
    { field: "none", headerName: "Acción"}
  ];

  return (
    <div>
      <Headersss />
      <Navbar2 />

      <h1 className="solicitudes">Solicitudes pendientes</h1>
      <div className="fondo" />
      <div className="fondo2">
        <Box sx={{ height: 800, width: "100%", backgroundColor: "white", padding: 10, borderInlineColor: "transparent"}}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </Box>
      </div>
    </div>
  );
};

export default Menu;  
