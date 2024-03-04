import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { NavLink, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaMedalSolid } from "react-icons/lia";
import { MdMenuBook } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { IoNotificationsCircle } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { HiOutlinePlusSm } from "react-icons/hi";
import { Popover, OverlayTrigger } from "react-bootstrap";
import image2 from "../images/profilepic.jpg";
import { SiReduxsaga } from "react-icons/si";
import "../style.css";

const Sidenav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showClassesDropdown, setShowClassesDropdown] = useState(false);
  const [isClassesSelected, setIsClassesSelected] = useState(false);
  const [showClassesDropdownPopup, setShowClassesDropdownPopup] =
    useState(false);

  const toggleClassesDropdown = () => {
    if (isOpen) {
      setShowClassesDropdown(!showClassesDropdown);
      setIsClassesSelected(!isClassesSelected);
      setShowClassesDropdownPopup(false);
    } else {
      if (!isOpen) {
        setShowClassesDropdownPopup(!showClassesDropdownPopup);
      }
    }
  };

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      name: "Saga",
      icons: <SiReduxsaga />,
      path: "/sagalist",
    },
    {
      name: "Dashboard",
      icons: <LuLayoutDashboard />,
      path: "/dashboard",
    },
    {
      name: "Messages",
      icons: [<SiGooglemessages />],
      ico: (
        <>
          <span className="badge message-badge text-dark">3</span>
        </>
      ),
    },
    {
      name: "Chat",
      icons: [<IoChatbubblesOutline />],
      ico: [<IoIosAddCircleOutline className="addcircle" />],
    },
    {
      name: "Challenges",
      icons: <LiaMedalSolid />,
    },
    {
      name: "Classes",
      icons: <MdMenuBook />,
    },
    {
      name: "Timetable",
      icons: <GrSchedules />,
    },
    {
      name: "Notifications",
      icons: [<IoNotificationsCircle />],
      ico: (
        <>
          <span class="badge notification-badge text-dark">5</span>
        </>
      ),
    },
  ];

  const undermenu = [
    {
      name: "Settings",
      icons: <IoSettingsOutline />,
    },
    {
      name: "Logout",
      icons: <CiLogout />,
    },
  ];

  const classesDropdownItems = [
    {
      name: "Maths",
    },
    {
      name: "English",
    },
    {
      name: "Economics",
    },
    {
      name: "Accounts",
    },
  ];

  const dashboardPopover = (
    <Popover
      id="dashboard-popover"
      style={{ display: isOpen ? "none" : "block" }}
    >
      <div
        className="line-drop"
        style={{ marginLeft: isOpen ? "20px" : "-40px" }}
      >
        {classesDropdownItems.map((classItem, index) => (
          <NavLink
            to={classItem.path}
            key={index}
            className="link text-decoration-none curve-line-drop"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={classItem.name}
          >
            <div className="link_text classdrop text-white">
              {classItem.name}
            </div>
          </NavLink>
        ))}
      </div>
    </Popover>
  );

  return (
    <div className="sidenav-container">
      <div
        style={{
          width: isOpen ? "220px" : "100px",
          height: "100vh",
          overflowY: "auto",
          position: "fixed", 
          transition: "all 0.0s", 
        }}
        className="sidebar"
      >
        <div
          className="circle mt-3 p-3 "
          style={{
            display: "flex",
            justifyContent: isOpen ? "flex-start" : "center",
          }}
        >
          <div className="circleR me-1">
            <FaCircle />
          </div>
          <div className="circleY me-1">
            <FaCircle />
          </div>
          <div className="circleG">
            <FaCircle />
          </div>
        </div>
        <div className="top_section">
          <h1>
            <img
              src={image2}
              alt=""
              style={{
                width: isOpen ? "40px" : "40px",
                height: isOpen ? "40px" : "40px",
                marginLeft: isOpen ? "0px" : "10px",
              }}
              className="img-fluid profile rounded  "
            />
          </h1>
          {isOpen && (
            <div className="name-section d-flex flex-column mx-2 justify-content-start align-items-start">
              <div className="user-name">hello👋</div>
              <div className="fs-6 fw-bold">Prithivi</div>
            </div>
          )}
        </div>
        <hr
          style={{
            margin: "5px 16px",
            border: "1px solid #ffffff",
          }}
        />
        {menuItem.map((item, index) => (
          <div key={index}>
            {item.name === "Classes" ? (
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={dashboardPopover}
              >
                <div className="classmenu">
                  <div
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={item.name}
                    className="link text-decoration-none "
                    style={{
                      backgroundColor: isClassesSelected ? "#303338" : "",
                      justifyContent: isOpen ? "flex-start" : "center",
                      color: "#848484",
                    }}
                    onClick={toggleClassesDropdown}
                  >
                    <div className="icon fs-4">{item.icons}</div>
                    <div
                      className="link_text mt-2 fs-6 text-white "
                      style={{
                        display: isOpen ? "block" : "none",
                      }}
                    >
                      {item.name}
                      <IoIosArrowUp
                        className="up arrowup "
                        style={{
                          display: showClassesDropdown ? "inline" : "none",
                        }}
                      />
                    </div>
                  </div>
                  {showClassesDropdown && (
                    <div
                      className="line-drop"
                      style={{ left: isOpen ? "230px" : "160px", top: "0" }}
                    >
                      {classesDropdownItems.map((classItem, index) => (
                        <NavLink
                          to={classItem.path}
                          key={index}
                          className="link text-decoration-none curve-line-drop"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={classItem.name}
                        >
                          <div
                            className="link_text classdrop text-white"
                            style={{
                              display: isOpen ? "block" : "none",
                            }}
                          >
                            {classItem.name}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                  {/* {showClassesDropdownPopup && !isOpen && renderClassesPopover()} */}
                </div>
              </OverlayTrigger>
            ) : (
              <NavLink
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={item.name}
                to={item.path}
                key={index}
                className="link text-decoration-none"
                activeClassName="active"
                style={{ justifyContent: isOpen ? "flex-start" : "center" }}
              >
                <div className="icon fs-4">{item.icons}</div>
                <div
                  className="link_text mt-2 fs-6 text-white"
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                >
                  {item.name}
                  <span>{item.ico}</span>
                </div>
              </NavLink>
            )}
          </div>
        ))}
        <hr
          style={{
            margin: "5px 16px",
            border: "1px solid #ffffff",
          }}
        />
        {undermenu.map((item, index) => (
          <NavLink
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={item.name}
            to={item.path}
            key={index}
            className="link text-decoration-none"
            activeClassName="active"
            style={{
              justifyContent: isOpen ? "flex-start" : "center",
            }}
          >
            <div className="icon fs-4 ">{item.icons}</div>
            <div
              className="link_text mt-2 fs-6 text-white"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <hr
          style={{
            margin: "5px 16px",
            border: "1px solid #ffffff",
          }}
        />
        <div>
          {isOpen ? (
            <div
              className="transparent-card dashed"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <div className="d-flex justify-conetent-center align-items-center flex-column">
                <div>
                  <button className="pluscircle  mt-4   border-0 rounded-pill ">
                    <HiOutlinePlusSm className="text-light " />
                  </button>
                </div>
                <div>
                  <h6 className="text-center mt-2">Upload new class</h6>
                  <p className="para text-center fw-light mt-2">
                    Drag and drop
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-conetent-center align-items-center flex-column">
              <div>
                <button className="plus footer mt-3  border-0 rounded-pill">
                  <HiOutlinePlusSm className="text-light " />
                </button>
              </div>
              <div>
                <h6 className="text-center mt-2 mb-4">Upload </h6>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div
          className="scroll-icon"
          style={{ zIndex: 100, left: isOpen ? "217px" : "98px" }}
        >
          {isOpen ? (
            <FaAngleLeft onClick={toggle} className="FaAngleLeft" />
          ) : (
            <FaAngleRight onClick={toggle} className="FaAngleRight" />
          )}
        </div>
      </div>
      <main>{children}</main>
      <Outlet />
    </div>
  );
};

export default Sidenav;
