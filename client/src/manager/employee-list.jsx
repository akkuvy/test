
import { Action } from "@remix-run/router";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DataTable from 'react-data-table-component';




function EmployeeList(){
    
   
    
    

   const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true
        
    },
    {
        name: "Email",
        selector: row => row.email,
        sortable: true
    },
    {
        name: "Age",
        selector: row => row.age,
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
        name: 'Avanthika',
        email: 'avanthika@gmail.com',
        age:'23',

        
        
        
    },
    {
        id:2,
        name: 'Vyshali',
        email: 'vyshali@gmail.com',
        age:'24'
    },
    {
        id: 3,
        name: 'Anusha',
        email: 'anusha@gmail.com',
        age:'23'
        
            
        
        
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