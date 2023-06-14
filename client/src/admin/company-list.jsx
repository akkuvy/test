
import { Action } from "@remix-run/router";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';




function EmployeeList(){
    
   
    
    

   const columns = [
    {
        name: 'Company',
        selector: row => row.company,
        sortable: true
        
    },
    {
        name: "Manager",
        selector: row => row.manager,
        sortable: true
    },
    {
        name: "Email",
        selector: row => row.email,
        sortable: true
        
        
    
    },
    {
        name: "Action",
        selector: row=> row.action,
        sortable: true,
        cell: row => (
            <div class="button-row">
        <button class='delete-button'>Delet</button>
        <button class='edit-button'>Edit</button>
        </div> 
        )
        
    }
   ] ;


   const data= [
    {
        id: 1,
        company: 'infinite',
        manager: 'Avanthika',
        email: 'avanthika@gmail.com',

        
        
        
    },
    {
        id: 1,
        company: 'infinite',
        manager: 'Avanthika',
        email: 'avanthika@gmail.com',

    },
    {
        id: 1,
        company: 'infinite',
        manager: 'Avanthika',
        email: 'avanthika@gmail.com',

        
            
        
        
    }
    

   ];
   return (
    <div className='container mt-5'>
      <button class='add-button'>Add</button> 
      <DataTable 
        columns={columns}
        data={data}
        fixedHeader
      />
    </div>
  );
  
   
   

   }
    
export default EmployeeList;