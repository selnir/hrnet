import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, } from "react-redux";
import { savedNewEmployee } from "../features/employeeSlice";
import {Modal} from "react-modal-selnir"




function Home() {

  //state utilise pour gerer l'etat de l'afffichage de la modal
  const [showModal, setShowModal] = useState(false)
  const hideModal = () => showModal && setShowModal(false)

    const dispatch = useDispatch()

    //state du formulaire employee

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        startDate: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: "",
      })


      // fonction qui remplit le state employee par rapport a le nom de l'entree du formulaire

      const handleInput = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
      }

      // fonction de submission du formulaire envoyer les information sur state global affichage de la modal et vidage du formulaire

      const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savedNewEmployee(employee))
        setShowModal(true)
        e.target.reset()
      }




    return (<main>
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="container">
          <Link  to="Employee">View Current Employees</Link>     
          <h2>Create Employee</h2>

            <Modal show={showModal} onClickCloseBtn={hideModal}>
            <h1>Employee Created!</h1>
            </Modal>
          <form action="#" id="create-employee" onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" onChange={handleInput} required/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" onChange={handleInput} required/>

                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input type="date" name="dateOfBirth" onChange={handleInput} aria-label="employee's birthdate"/>

                <label htmlFor="startDate">Start Date</label>
                <input type="date" name="startDate" onChange={handleInput} aria-label="employee's start date"/>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street" onChange={handleInput} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" onChange={handleInput}/>

                    <label htmlFor="state">State</label>
                    <select
                    type="select" 
                    name="state" 
                    id="state"
                    defaultValue="" 
                    onChange={handleInput} >
                    
                    <option disabled value="">
                    Please Select
                    </option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FM">Federated States Of Micronesia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VI">Virgin Islands</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    </select>

                    <label htmlFor="zipCode">Zip Code</label>
                    <input id="zipCode" name="zipCode" type="number" onChange={handleInput}/>
                </fieldset>
                
                <label htmlFor="department">Department</label>
                <select 
                name="department" 
                id="department"
                defaultValue=""
                onChange={handleInput}
                >
                <option disabled value="">
                Please Select
                </option>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
        
        </main>
    );
    }
    export default Home;



