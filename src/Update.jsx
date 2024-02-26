// Update.jsx

import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import "./css/update.css";

const Update = () => {
    let [person, setPerson] = useState({
        ename: "", //1st input
        email: "",  //2nd input
        page:"",
        ppho_no:"",
        pblood_group:""
    });

    let { pname, pmail ,page,ppho_no,pblood_group} = person;
    let navigate = useNavigate();
    let {id} = useParams();

    let fetchApi = async () => {
        try {
            let {data} = await axios.get("http://localhost:5000/persons/"+id);
            setPerson(data);
        } catch(e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    let handleInput = e => {
        let { name, value } = e.target;
        setPerson({ ...person, [name]: value });
    };

    let handleSubmit = e => {
        e.preventDefault();
        try {
            if (pname === "" || pmail === "" || page === "" || ppho_no === "" || pblood_group === "") {
                alert("Please fill in all fields");
            } else {
                let payload = { pname, pmail ,page,ppho_no,pblood_group};
                axios.put("http://localhost:5000/persons/"+id, payload);
                navigate("/viewall");
                toast.success("successfully Updated")
            }
        } catch (e) {
            console.log(e);
        } finally {
            setPerson({
                pname: "",
                pmail: "",
                page:"",
                ppho_no:"",
                pblood_group:""
            });
        }
    };

    return (
        <>
            <NavBar />
            <div className="container">
                <h1>📑🩸UPDATE DONOR DETAILS🩸📑</h1>
                <h2>------------------------------------------------</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">NAME</label>
                        <input 
                            id="name" type="text"
                            placeholder="Enter Person Name"
                            value={pname}
                            name="pname"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="mail">E-MAIL</label>
                        <input type="email"
                            id="mail"
                            placeholder="Enter Person Email"
                            value={pmail}
                            name="pmail"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">AGE</label>
                        <input type="number"
                            id="age"
                            placeholder="Enter Person Age"
                            value={page}
                            name="page"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="number">NUMBER</label>
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
                        <label htmlFor="blood">BLOOD-GROUP</label>
                        <input type="text"
                            id="blood"
                            placeholder="Enter Person Blood Group"
                            value={pblood_group}
                            name="pblood_group"
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <button type="submit" className="buttons-container">UPDATE</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Update;
