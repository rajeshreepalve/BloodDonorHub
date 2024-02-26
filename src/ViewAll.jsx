import axios from "axios"
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { NavLink } from 'react-router-dom'
import { CiRead } from "react-icons/ci";
import "./css/viewall.css"
import { AiFillEye } from "react-icons/ai";

const ViewAll = () => {
    let[person,setPerson]=useState([])
    let fetchApi=async()=>{
        let{data}=await axios.get("http://localhost:5000/persons")

        setPerson(data)
    }
    console.log(person)

    useEffect(()=>{
        try{
            fetchApi();

        }
        catch(e){
            console.log(e)
        }
    },[])


    //for delete
    let deleteperson=(id)=>{
        console.log(id)
        axios.delete("http://localhost:5000/persons/" +id)
        window.location.assign("/viewall")
    }


  return (
    <>
   <NavBar/>
    <h1>🩸✍🏻INFORMATION OF ALL THE DONORS✍🏻🩸</h1>
   
        <table  border={5} radius={2} >
        <thead>
           <th>ID</th>
           <th>PERSON_NAME</th>
           <th>PERSON_EMAIL</th>
           <th>PERSON-AGE</th>
           <th>PERSON-PHONENO</th>
           <th>PERSON-BLOODGROUP</th>
           <th colSpan={3}>MORE OPTIONs</th>
        </thead>

        <tbody>
            {person.map((val)=>{
                console.log(val)
                return(
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.pname}</td>
                        <td>{val.pmail}</td>
                        <td>{val.page}</td>
                        <td>{val.ppho_no}</td>
                        <td>{val.pblood_group}</td>
                        <td>
                            <NavLink to={`/singlePerson/${val.id}`}>
                              <button>VIEW-MORE<AiFillEye /></button>
                            </NavLink>
                        </td>
                        <td>
                            <NavLink to={`/editPerson/${val.id}`}>
                                <button>EDIT</button>
                            </NavLink>
                        </td>
                        <td>
                            <button  onClick={()=>deleteperson(val.id)}>
                                DELETE
                            </button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
        </table>


    </>
  )
}

export default ViewAll