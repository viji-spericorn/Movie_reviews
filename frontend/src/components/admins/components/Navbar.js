// import React from 'react';
// import '../../../css/dashboard.css';
// import { Button } from 'react-bootstrap';
// import { CDBNavbar, CDBInput } from 'cdbreact';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <div style={{ background: '#333', color: '#fff' }}>
//       <CDBNavbar dark expand="md" scrolling className="justify-content-start">
//         <CDBInput
//           type="search"
//           size="md"
//           hint="Search"
//           className="mb-n4 mt-n3 input-nav"
//         />
//         <div className="navicon">
//           <Button as={Link} to="/admin/add" className="text-white">
//             Add Admins
//           </Button>
//           <img
//             alt="panelImage"
//             src="img/pane/pane4.png"
//             style={{ width: '3rem', height: '3rem' }}
//           />
//         </div>
//       </CDBNavbar>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBNavbarLink,
  MDBInputGroup,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Navbar = () => {
  return (
    <MDBNavbar light bgColor="light" className="stylenav">
      <MDBContainer fluid>
        <MDBNavbarBrand></MDBNavbarBrand>
        <MDBNavbarItem>
          <MDBDropdown>
            <MDBDropdownToggle
              tag="a"
              className="nav-link d-flex align-items-center"
              href="#"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
                className="rounded-circle"
                height="25"
                alt="Avatar"
                loading="lazy"
              />
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem>
                <MDBNavbarLink href="/admin" className="text-center">
                  Profile
                </MDBNavbarLink>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
