import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LinearProgress } from "@mui/material";
import {  getStudentsData, saveStudentsData} from "../utils/api";
import { useState } from "react";
import { useEffect } from "react";


export default function StudentsTable() {
    const [loading,setLoading] = useState(true);
    const [studentsData, setStudentsData] = useState([]);
    

    useEffect(() => {
      // getStudentsData()
      //     .then((res) => {
      //       console.log(res);
      //     //   setStudentsData(res)
      //       return res;
      //     }).then((data)=>{
      //         console.log(data)
      //         const keyList = Object.keys(data);
      //         const dataList =[];
      //         keyList.map((key)=>{
      //             dataList.push(data[key])
      //             return dataList;
      //         })
      //         console.log(dataList)
      //         setStudentsData(dataList)
      //         setLoading(false)
      //     })
      getStudentsData().then((res) => {
            const data = res.data
            console.log(data)
            const keyList = Object.keys(data);
            const dataList = [];
            keyList.map((key) => {
              dataList.push(data[key]);
              return dataList;
            });
            console.log(dataList);
            setStudentsData(dataList);
            setLoading(false);
          })
    },[]);
  return (
    <>{
        loading ? (
            <div style={{marginTop:"200px"}}>
                <LinearProgress color="primary"/></div>
        ):(
            <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell >Last Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell >Age</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsData.map((row) => (
              <TableRow
                key={row.firstName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.gender}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        )}
    </>
  );
}
