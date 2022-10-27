import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../components/modal/modal";
import useModal from "../components/modal/useModal";



function Home() {
    const { isShowing: ismodalcreated, toggle: togglemodalcreated } = useModal();


    const dispatch = useDispatch()

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

      const handleInput = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
      }


      const handleSubmit = (e) => {
        e.preventDefault()
        togglemodalcreated()


      }

    return (<main>
        <div className="title">
          <h1>HRnet</h1>
        </div>
        <div className="container">
          <Link  to="Employee">View Current Employees</Link>     
          <h2>Create Employee</h2>
            <Modal
            isShowing={ismodalcreated}
            hide={togglemodalcreated}
            title="Employee Created!"
            ></Modal>
          <form action="#" id="create-employee" onSubmit={handleSubmit}>

                <label for="first-name">First Name</label>
                <input type="text" id="first-name" onChange={handleInput} required/>

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" onChange={handleInput} required/>

                <label for="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" onChange={handleInput} />

                <label for="start-date">Start Date</label>
                <input id="start-date" type="text" onChange={handleInput} />

                <fieldset class="address">
                    <legend>Address</legend>

                    <label for="street">Street</label>
                    <input id="street" type="text" onChange={handleInput} />

                    <label for="city">City</label>
                    <input id="city" type="text" onChange={handleInput}/>

                    <label for="state">State</label>
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

                    <label for="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onChange={handleInput}/>
                </fieldset>
                
                <label for="department">Department</label>
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



