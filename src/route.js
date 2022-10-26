import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./page/home";
import Employee from "./page/employee_list";



 function Routehrnet (){


return <BrowserRouter key="RouterBank">
        <Routes >
          <Route path="/" element={<App />}>
          <Route index element={<Home />} /> 
          <Route path="Employee" element={ <Employee />} /> 
          </Route>
        </Routes>
  </BrowserRouter>  
};
export default Routehrnet;