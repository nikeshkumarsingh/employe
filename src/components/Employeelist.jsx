import React from"react";
import"./Employeelist.css"
export const Employeelist=({data})=>{
    return(
        <div className="main">
            <table id="top">
               <thead class="below">
                   <tr>
                       <th>Name</th>
                       <th>Age</th>
                       <th>Gender</th>
                       <th>Department</th>
                       <th>Role</th>
                       <th>Salry</th>
                       <th>Maratial State</th>
                   </tr>
               </thead>
               <tbody className="below">

                   {data.map((e)=>
                   <tr>
                   <td>{e.Name}</td>
                   <td>{e.Age}</td>
                   <td>{e.Gender}</td>
                   <td>{e.Department}</td>
                   <td>{e.Role}</td>
                   <td>{e.Salry}</td>
                   <td>{e.Maritialstate}</td>
                   </tr>
                   )}
                   
               </tbody>
            </table>
        </div>
    )
}