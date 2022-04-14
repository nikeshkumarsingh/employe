import React,{useState,useEffect}from"react";
import { Employeeinput } from "./Employeeinput";
import { Employeelist } from "./Employeelist";

export const Employee=()=>{
    const [formdata,setFormdata]=useState({
        Name:"",
        Age:"",
        Gender:"",
        Department:"",
        Role:"",
        Salry:"",
        Maritialstate:""
    })
    const [data,setData]=useState([])
    const handleChange=(e)=>{
        setFormdata({
            ...formdata,[e.target.id]:e.target.value
        })
    }
    const handleSubmit=async (e)=>{
     e.preventDefault();
     try{
    await fetch(` http://localhost:8080/posts`,{
         method:"POST",
         body : JSON.stringify(formdata),
         headers : {"Content-Type" : "application/json"}
     })
     getdata()
    }
    catch(err){
        console.log(err)
    }
    }
    
    const getdata=async()=>{
        try{
             let data=await fetch("http://localhost:8080/posts");
                data=await data.json();
             //console.log(data)
             setData(data);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        getdata();
    }, []);
    return(
        <div>
            <Employeeinput handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Employeelist data={data} />
        </div>
    )
}