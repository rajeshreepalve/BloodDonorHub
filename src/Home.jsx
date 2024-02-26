import React, { useState } from 'react';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AiFillPhone } from "react-icons/ai";
import { FaUserAstronaut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoBandage } from "react-icons/io5";
import { MdBloodtype } from "react-icons/md";
import "./css/home.css"

const Home = () => {
    let [person, setPerson] = useState({
        pname: "", //1st input
        pmail: "",  //2nd input
        page:"",
        ppho_no:"",
        pblood_group:""
    })

    let { pname, pmail,page,ppho_no,pblood_group } = person;

    let navigate=useNavigate();

    let handleInput = e => {
        let { name, value } = e.target;
        setPerson({ ...person, [name]: value })
    }

    let handleSubmit = e => {
        e.preventDefault();
        console.log(person)

        try {
            if (pname === "" || pmail === "" || page === "" || ppho_no === "" || pblood_group === "") {
                alert("please fill in all fields")
            } else {
                let payload = { pname, pmail ,page,ppho_no,pblood_group}
                axios.post("http://localhost:5000/persons", payload)
                navigate("/viewall")
                toast.success("successfully added")
            }
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setPerson({
                pname: "",
                pmail: "",
                page:"",
                ppho_no:"",
                pblood_group:""
            })
        }
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <h1>🩸BLOOD DONATE REGISTRATION FORM🩸</h1>
                <h2>-----------------------------------------------</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">NAME<FaUserAstronaut /></label>
                        <input 
                          id="name" type="text"
                            placeholder="Enter Person Name"
                            value={pname}
                            name="pname"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="mail">E-MAIL<MdEmail /></label>
                        <input type="email"
                        id="mail"
                            placeholder="Enter Person Email"
                            value={pmail}
                            name="pmail"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">AGE<IoBandage /></label>

                        <input type="number"
                        id="age"
                            placeholder="Enter Person Age"
                            value={page}
                            name="page"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="number">NUMBER<AiFillPhone /></label>
                        <input type="number"
                        id="number"
                            size={10}
                            placeholder="Enter Person Phone Number"
                            value={ppho_no}
                            name="ppho_no"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="blood">BLOOD-GROUP<MdBloodtype /></label>
                        <input type="text"
                        id="blood"
                            placeholder="Enter Person Blood Group"
                            value={pblood_group}
                            name="pblood_group"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <button type="submit">SUBMIT
</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Home;
