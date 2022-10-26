import React from "react";
import { Link } from "react-router-dom";





function Home() {
    return (<main>
        <div className="title">
        <h1>HRnet</h1>
        </div>
        <div className="container">
        <Link  to="Employee">View Current Employees</Link>     
        </div>
        </main>
    );
    }
    export default Home;



