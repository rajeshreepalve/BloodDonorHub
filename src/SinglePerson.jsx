import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./css/singleperson.css" // Import the CSS file

const SinglePerson = () => {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/persons/${id}`);
        setPerson(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const goToHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h1>📑🩸DETAILS OF DONOR🩸📑</h1>
      {person && (
        <table>
          <thead>
            <tr>
              <th>DETAILS</th>
              <th>DATA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{person.id}</td>
            </tr>
            <tr>
              <td>NAME</td>
              <td>{person.pname}</td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td>{person.pmail}</td>
            </tr>
            <tr>
              <td>AGE</td>
              <td>{person.page}</td>
            </tr>
            <tr>
              <td>PHONE NO</td>
              <td>{person.ppho_no}</td>
            </tr>
            <tr>
              <td>BLOOD GROUP</td>
              <td>{person.pblood_group}</td>
            </tr>
          </tbody>
        </table>
      )}
      <div className="buttons-container">
        <button onClick={goToHome}>GO TO HOME</button>
        <button onClick={goBack}>GO BACK</button>
      </div>
    </div>
  );
};

export default SinglePerson;
