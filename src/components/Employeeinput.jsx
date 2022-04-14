import React from"react";
import"./Employeeinput.css"
export const Employeeinput=({handleChange,handleSubmit})=>{
    return (
        <div className="main">
            <h1>Fill the Form and POST the data on server</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text" id='Name' placeholder = 'Name'/>
          <input  onChange={handleChange} type="number" id='Age' placeholder = 'Age'/>
          <input  onChange={handleChange} type="text" id='Gender' placeholder = 'Gender'/>
          <input  onChange={handleChange}type="text" id='Department' placeholder = 'Department'/>
          <input  onChange={handleChange} type="text" id='Role' placeholder = 'Role'/>
          <input  onChange={handleChange} type="number" id='Salry' placeholder = 'Salary'/>
          <input  onChange={handleChange} type="text" id='Maritialstate' placeholder = 'Maritial State'/>
          <input  type="submit" />
        </form>
        </div>
    )
}