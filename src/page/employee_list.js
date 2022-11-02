import "./EmployeeListTable.css"
import { useSelector } from "react-redux"
import React from "react";
import Table from "../components/datatable/datatable";
import { Link } from 'react-router-dom';

/**
 * Employee table list component
 * @returns {JSX} 
 */

const EmployeeListTable = () => {
  
  const clickhandler = name => console.log("delete", name);

const data=useSelector((state) => state.listEmployee.employeeList)


  return (
    <>
      <h1>Current Employees</h1>
      <Table data={data} click={clickhandler} />
      <Link to='/'>Home</Link>
    </>
  )
}

export default EmployeeListTable
