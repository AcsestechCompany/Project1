import React from "react";
import { render } from "react-dom";
import {HashRouter as Router, Route,Link} from "react-router-dom";
import {EmployeeHome} from "./EmployeeModule/EmployeeHome";
import {EmployeeLeaves} from "./EmployeeModule/EmployeeLeaves";
import {EmployeeAttendance} from "./EmployeeModule/EmployeeAttendance";
import {EmployeeProjects} from "./EmployeeModule/EmployeeProjects";
import {EmployeeSettings} from "./EmployeeModule/EmployeeSettings";
import {EmployeeClaims} from "./EmployeeModule/EmployeeClaims";
import {EmployeePayroll} from "./EmployeeModule/EmployeePayroll";
import {EventsListEmp} from "./EmployeeModule/EventsListEmp";
import {AnnouncementListEmp} from "./EmployeeModule/AnnouncementListEmp";
import {Home} from "./home/Home";
import {EmploymentStatus} from "./home/EmploymentStatus";
import {EventsList} from "./home/EventsList";
import {AnnouncementList} from "./home/AnnouncementList";
import {DepartmentsPage} from "./home/DepartmentsPage";
import {HolidayPage} from "./home/HolidayPage";
import {Attendance} from "./Attendance";
import {AttendanceSettings} from "./settings/AttendanceSettings";
import {Payments} from "./payroll/Payments";
import {Process} from "./payroll/Process";
import {Statement} from "./payroll/Statement";
import {AddClaims} from "./expenses/AddClaims";
import {ClaimList} from "./expenses/ClaimList";
import {Test} from "./Test";
import {CompanyDetails} from "./settings/CompanyDetails";
import {Departments} from "./settings/Departments";
import {ViewDepartment} from "./settings/ViewDepartment";
import {ViewShiftAttendance} from "./settings/ViewShiftAttendance";
import {Profile} from "./profileicon/Profile";
import {Logout} from "./profileicon/Logout";
import {LeaveList} from "./leaves/LeaveList";
import {EditLeave} from "./leaves/EditLeave";
import {LeaveTypes} from "./settings/LeaveTypes";
import {AddLeave} from "./settings/AddLeave";
import {ViewSalaryComponents} from "./settings/ViewSalaryComponents";
import {AddComponent} from "./settings/AddComponent";
import {LandingPage} from "./registration/LandingPage";
import {ViewFeatures} from "./registration/ViewFeatures";
import {ViewFeature1} from "./registration/ViewFeature1";
import {ViewFeature2} from "./registration/ViewFeature2";
import {ViewFeature3} from "./registration/ViewFeature3";
import {ViewFeature4} from "./registration/ViewFeature4";
import {SignUp} from "./registration/SignUp";
import {VerifyAccount} from "./registration/VerifyAccount";
import {CreatePassword} from "./registration/CreatePassword";
import {Login} from "./registration/Login";
import {AddEmployee} from "./employee/AddEmployee";
import {PersonalDetails} from "./employee/PersonalDetails";
import {ProfessionalDetails} from "./employee/ProfessionalDetails";
import {BankDetails} from "./employee/BankDetails";
import {LoginInfo} from "./employee/LoginInfo";
import {JobHistory} from "./employee/JobHistory";
import {EmpDocs} from "./employee/EmpDocs";
import {ViewEmployee} from "./employee/ViewEmployee";
import {NewJoiners} from "./employee/NewJoiners";
import {Leavers} from "./employee/Leavers";
import {AdminUsers} from "./admin/AdminUsers";
import {DemoPage} from "./DemoPage";
import {Contactus} from "./Contactus";
//import {Calendar1} from "./components/Calendar";
//import "../styles.css";
//import styles from "../styles.css";
export class App extends React.Component {
  render() {

    return (
  <Router>
      <div >

      <Route path="/LandingPage" component={LandingPage}/>
<Route path="/CreatePassword" component={CreatePassword}/>
<Route path="/ViewFeatures" component={ViewFeatures}/>
<Route path="/ViewFeature1" component={ViewFeature1}/>
<Route path="/ViewFeature2" component={ViewFeature2}/>
<Route path="/ViewFeature3" component={ViewFeature3}/>
<Route path="/ViewFeature4" component={ViewFeature4}/>
<Route path="/SignUp" component={SignUp}/>
<Route path="/VerifyAccount" component={VerifyAccount}/>
<Route path="/Login" component={Login}/>
              <Route path="/Home" component={Home}/>
              <Route path="/EmployeeHome" component={EmployeeHome}/>
              <Route path="/EmployeeAttendance" component={EmployeeAttendance}/>
              <Route path="/EmployeeLeaves" component={EmployeeLeaves}/>
              <Route path="/EmployeeProjects" component={EmployeeProjects}/>
              <Route path="/EmployeeSettings" component={EmployeeSettings}/>
              <Route path="/EmploymentStatus" component={EmploymentStatus}/>
              <Route path="/EmployeeClaims" component={EmployeeClaims}/>
              <Route path="/EmployeePayroll" component={EmployeePayroll}/>
              <Route path="/AnnouncementListEmp" component={AnnouncementListEmp}/>
              <Route path="/EventsListEmp" component={EventsListEmp}/>
              <Route path="/Leaves" component={LeaveList}/>
              <Route path="/EditLeave" component={EditLeave}/>
              <Route path="/LeaveTypes" component={LeaveTypes}/>
              <Route path="/Attendance" component={Attendance}/>
              <Route path="/EventsList" component={EventsList}/>
              <Route path="/NewJoiners" component={NewJoiners}/>
              <Route path="/Leavers" component={Leavers}/>
              <Route path="/Payments" component={Payments}/>
              <Route path="/Process" component={Process}/>
              <Route path="/Statement" component={Statement}/>
              <Route path="/DepartmentsPage" component={DepartmentsPage}/>
              <Route path="/AddClaims" component={AddClaims}/>
              <Route path="/ClaimList" component={ClaimList}/>
              <Route path="/Profile" component={Profile}/>
              <Route path="/Test" component={Test}/>
              <Route path="/AnnouncementList" component={AnnouncementList}/>
              <Route path="/CompanyDetails" component={CompanyDetails}/>
              <Route path="/AttendanceSettings" component={AttendanceSettings}/>
              <Route path="/Departments" component={Departments}/>
              <Route path="/ViewDepartment" component={ViewDepartment}/>
              <Route path="/ViewShiftAttendance" component={ViewShiftAttendance}/>
              <Route path="/AddLeave" component={AddLeave}/>
              <Route path="/ViewSalaryComponents" component={ViewSalaryComponents}/>
              <Route path="/AddComponent" component={AddComponent}/>
              <Route path="/Logout" component={Logout}/>
              <Route path="/ViewEmployee" component={ViewEmployee}/>
              <Route path="/AddEmployee" component={AddEmployee}/>
              <Route path="/PersonalDetails" component={PersonalDetails}/>
              <Route path="/ProfessionalDetails" component={ProfessionalDetails}/>
              <Route path="/BankDetails" component={BankDetails}/>
              <Route path="/LoginInfo" component={LoginInfo}/>
              <Route path="/JobHistory" component={JobHistory}/>
              <Route path="/EmpDocs" component={EmpDocs}/>
              <Route path="/AdminUsers" component={AdminUsers}/>
              <Route path="/DemoPage" component={DemoPage}/>
              <Route path="/HolidayPage" component={HolidayPage}/>
              <Route path="/Contactus" component={Contactus}/>
     </div>
</Router>

    );
  }
}
render(<App/>, window.document.getElementById("app"));
