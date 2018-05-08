<Icon icon={longRight} size={12} style={{color:'black'}} />
border: solid 1px #ccc;
-webkit-border-radius: 10em;
-moz-border-radius: 10em;
border-radius: 10em;
<ul id={mainmenu}>
<NavItem className={navitemStyleHome}><NavLink to="/Home"  className={linkStyle1}>HOME</NavLink></NavItem>
<UncontrolledDropdown nav inNavbar className={navitemStyle} id={navspace}>
  <DropdownToggle nav  style={{color:'white'}}>EMPLOYEES<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
    <DropdownMenu className={dropDownStyle}>
      <DropdownItem id={dropItem}><Link to="/AddEmployee" id={hyperLink}>Add Employee</Link></DropdownItem>
      <DropdownItem id={dropItem}><Link to="/ViewEmployee" id={hyperLink}>Employees List</Link></DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
  <UncontrolledDropdown nav inNavbar className={navitemStyle} id={navspace}>
        <DropdownToggle nav style={{color:'white'}}>LEAVES & TIME<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
      <DropdownMenu className={dropDownLeaves}>
        <DropdownItem id={dropItem}><Link to="/Leaves" id={hyperLink}>Leave List</Link></DropdownItem>
    <DropdownItem id={dropItem}><Link to="/Attendance" id={hyperLink}>Attendance List</Link></DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
  <UncontrolledDropdown nav inNavbar className={navitemStyle} id={navspace}>
      <DropdownToggle nav  style={{color:'white'}}  >CLAIMS<Icon icon={angleDown} className={downIcon} /></DropdownToggle>
      <DropdownMenu className={dropDownClaims} >
        <DropdownItem id={dropItem}><Link to="/AddClaims" id={hyperLink}>Add Claims</Link></DropdownItem>
        <DropdownItem id={dropItem}><Link to="/ClaimList" id={hyperLink}>Claims List</Link></DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
    <UncontrolledDropdown nav inNavbar className={navitemStyle}>
      <DropdownToggle nav style={{color:'white'}}>PAYROLL<Icon icon={angleDown} className={downIcon}/></DropdownToggle>
    <DropdownMenu className={dropDownPayroll}>
      <DropdownItem id={dropItem}><Link to="/Payments" id={hyperLink}>Payments</Link></DropdownItem>
      <DropdownItem id={dropItem}><Link to="/Process" id={hyperLink}>Process</Link></DropdownItem>
      <DropdownItem id={dropItem}><Link to="/Statement" id={hyperLink}>Statement</Link></DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>



</ul>

  <NavItem  className={navitemStyleHome1}><NavLink to="/Home"  className={linkStyle1}>HOME</NavLink></NavItem>
AdminUsers


<table class="table table-bordered table-responsive-md" id={exampletable}>
<thead>
      <tr className={orange}>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email ID</th>
          <th>Effective Date</th>
          <th>Status</th>
          <th>Actions</th>
      </tr>
  </thead>
  <tbody>
     <tr>
         <td>E123</td>
         <td>Enosh David</td>
         <td >Product Manager</td>
         <td>1,00,000</td>
         <td>01/01/2018</td>
          <td className={inProgress}>Active</td>
         <td>
         <span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter">
           <Icon icon={ic_create} size={20}/>
         </span>
         <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
           <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLongTitle" className={orange}>Edit Admin User</h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                 </button>
               </div>
               <div class="modal-body">
               <div class="form-row">
                 <div class="col-md-6 mb-3">
                   <label className={labelStyle1}>First Name</label>
                   <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                 </div>
                 <div class="col-md-6 mb-3">
                   <label className={labelStyle1}>Last Name</label>
                   <input type="text" class="form-control" id={inputstyle} placeholder="" />
                 </div>
                 </div>
                 <div class="form-row">
                   <div class="col-md-6 mb-3">
                     <label className={labelStyle1}>Phone</label>
                     <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                   </div>
                   <div class="col-md-6 mb-3">
                     <label className={labelStyle1}>Email ID</label>
                     <input type="text" class="form-control" id={inputstyle} placeholder="" />
                   </div>
                   </div>
                   <div class="form-row">
                     <div class="col-md-6 mb-3">
                       <label className={labelStyle2}>Effective Date</label>
                       <input type="text" class="form-control"  id={inputstyle} placeholder=""/>
                     </div>
                     <div class="col-md-6 mb-3">
                       <label className={labelStyle1}>Status</label>
                       <input type="text" class="form-control" id={inputstyle} placeholder="" />
                     </div>
                     </div>
               </div>
                 <button type="button" class="btn btn-outline-warning" data-dismiss="modal" id={buttonStyle}>Save</button>

             </div>
           </div>
         </div>

             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>
     <tr>
         <td>E555</td>
         <td>Arul Prem</td>
         <td >MIS Executive</td>
         <td>2,00,000</td>
         <td>05/02/2018</td>
          <td className={closed}>inActive</td>
         <td><span class="btn btn-link" data-toggle="modal" id={modalbutton} data-target="#exampleModalCenter">
           <Icon icon={ic_create} size={20}/>
         </span>
             <Icon icon={ic_delete} style={{marginLeft:'1vw'}} size={20} /> </td>
     </tr>


     </tbody>
     </table>
