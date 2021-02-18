import React, {useState, useEffect} from 'react';

import './global.css';

import Menu from './pages/Menu';
import MainScreen from './pages/MainScreen';
import Solutions from './pages/Solutions'
import Contact from './pages/Contact';
import Attendance from './pages/Attendance';
import Company from './pages/Company';
import ClientsSection from './pages/ClientsSection';


function App() {
  const [childData, setChildData] = useState("");
  const [mainScreenDisplay, setMainScreenDisplay] = useState(true);
  const [solutionsDisplay, setSolutionsDisplay] = useState(false);
  const [companyDisplay, setCompanyDisplay] = useState(false);
  const [clientSectionDisplay, setClientSectionDisplay] = useState(false);
  const [attendanceDisplay, setAttendanceDisplay] = useState(false);
  const [contactDisplay, setContactDisplay] = useState(false);

  useEffect(() => {
    if(childData === 'Home'){
      setMainScreenDisplay(true);
      setSolutionsDisplay(false);
      setCompanyDisplay(false);
      setClientSectionDisplay(false);
      setAttendanceDisplay(false);
      setContactDisplay(false);
    } else if(childData === 'Soluções'){
      setMainScreenDisplay(false);
      setSolutionsDisplay(true);
      setCompanyDisplay(false);
      setClientSectionDisplay(false);
      setAttendanceDisplay(false);
      setContactDisplay(false);
    } else if(childData === 'A Empresa'){
      setMainScreenDisplay(false);
      setSolutionsDisplay(false);
      setCompanyDisplay(true);
      setClientSectionDisplay(false);
      setAttendanceDisplay(false);
      setContactDisplay(false);
    } else if(childData === 'Clientes'){
      setMainScreenDisplay(false);
      setSolutionsDisplay(false);
      setCompanyDisplay(false);
      setClientSectionDisplay(true);
      setAttendanceDisplay(false);
      setContactDisplay(false);
    } else if(childData === 'Atendimento'){
      setMainScreenDisplay(false);
      setSolutionsDisplay(false);
      setCompanyDisplay(false);
      setClientSectionDisplay(false);
      setAttendanceDisplay(true);
      setContactDisplay(false);
    } else if(childData === 'Contato'){
      setMainScreenDisplay(false);
      setSolutionsDisplay(false);
      setCompanyDisplay(false);
      setClientSectionDisplay(false);
      setAttendanceDisplay(false);
      setContactDisplay(true);
    }
  })  

  console.log("childdata:",childData)
  return(
    <div className="container">
      <Menu setChildData={setChildData} display={mainScreenDisplay}/>
      <MainScreen display={mainScreenDisplay}/>
      <Solutions display={solutionsDisplay}/>
      <Company display={companyDisplay}/>
      <ClientsSection display={clientSectionDisplay}/>
      <Attendance display={attendanceDisplay}/>
      <Contact display={contactDisplay}/>      
    </div>   
  );
}

export default App;