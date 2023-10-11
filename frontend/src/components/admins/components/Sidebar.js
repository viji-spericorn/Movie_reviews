import React from 'react';
import {
  CDBDropDownItem,
  CDBDropDownMenu,
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarSubMenu,
  CDBDropDown,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      className={`app`}
      style={{ display: 'flex', height: '100%', overflow: 'scroll initial' }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none m-lg-2"
            style={{ color: 'inherit' }}
          >
            <img
              src="https://preview.colorlib.com/theme/agenda/images/logo.png.webp"
              alt="logo"
              height="45px"
            ></img>
            Agenda
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="sticky-note">
                VenueManagement
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-calendar">
                EventsManagement
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-book">
                Bookings
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/subadmin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-user">
                UserManagement
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-building">
                CompanyManagement
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-users">
                ProfileManagemnt
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-key">
                ChangePassword
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="fa fa-sign-out">
                Logout
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
          <CDBSidebarMenu></CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            Agenda
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
