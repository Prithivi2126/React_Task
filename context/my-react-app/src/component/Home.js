// import React, { useState } from "react";
// import "@fortawesome/fontawesome-free/css/all.css";
// import { NavLink } from "react-router-dom";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { FaAngleLeft } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { SiGooglemessages } from "react-icons/si";
// import { IoChatbubblesOutline } from "react-icons/io5";
// import { LiaMedalSolid } from "react-icons/lia";
// import { MdMenuBook } from "react-icons/md";
// import { GrSchedules } from "react-icons/gr";
// import { IoNotificationsCircle } from "react-icons/io5";
// import { FaCircle } from "react-icons/fa";
// import "./style.css";


// const Home = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showClassesDropdown, setShowClassesDropdown] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       // path:"/",
//       name: "Dashboard",
//       icons: <LuLayoutDashboard />,
//     },
//     {
//       // path:"/",
//       name: "Messages",
//       icons: <SiGooglemessages />,
//     },
//     {
//       // path:"/",
//       name: "Chat",
//       icons: <IoChatbubblesOutline />,
//     },
//     {
//       // path:"/",
//       name: "Challenges",
//       icons: <LiaMedalSolid />,
//     },
//     {
//       // path:"/",
//       name: "Classes",
//       icons: <MdMenuBook />,
//       submenus: [
//         { name: "Maths", path: "/maths" },
//         { name: "English", path: "/english" },
//         { name: "Economics", path: "/economics" },
//         { name: "Accounts", path: "/accounts" },
//       ],
//     },
//     {
//       // path:"/",
//       name: "Timetable",
//       icons: <GrSchedules />,
//     },
//     {
//       // path:"/",
//       name: "Notifications",
//       icons: <IoNotificationsCircle />,
//     },
//   ];
//   return (
//     <div className="">
//     <div style={{ width: isOpen ? "200px" : "60px",height: "100vh", 
//           overflowY: "auto", }} className="sidebar">
//        <div className='circle d-flex justify-content-start mt-3 p-3 align-items-start'>
//           <div className='circleR me-1'><FaCircle /></div>
//           <div className='circleY me-1'><FaCircle /></div>
//           <div className='circleG'><FaCircle /></div>
//           </div>
//       <div className="top_section">
//         <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
//           <CgProfile /> 
//         </h1>

//         <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
//           <FaAngleLeft onClick={toggle}  />
//         </div>
//       </div>
//       {isOpen && (
//           <hr style={{ margin: "5px 0", border: "1px solid #ffffff" }} />
//         )}
//       {menuItem.map((item, index) => (
//         <div key={index}>
//           {item.submenus ? (
//             <div className="submenu">
//               <div
//                 className="icon  fs-4 "
//                 onClick={() => setShowClassesDropdown(!showClassesDropdown)} 
//               >
//                 {item.icons}
//               </div>
//               <div
//                 className="link_text mt-2 fs-6 text-white"
//                 style={{
//                   display: isOpen ? "block" : "none",
//                   marginLeft: item.name === "Classes" ? "50" : "0px",
//                 }}
//               >
//                 {item.name}
//               </div>
//               {showClassesDropdown && (
//                 <div className="submenu-items">
//                   {item.submenus.map((submenuItem, subIndex) => (
//                     <NavLink
//                       to={submenuItem.path}
//                       key={subIndex}
//                       className="link text-decoration-none"
//                       activeClassName="active"
//                     >
//                       <div className="icon  fs-4"></div>
//                       <div className="link_text  mt-2 fs-6 text-white">
//                         {submenuItem.name}
//                       </div>
//                     </NavLink>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ) : (
//             <NavLink
//               to={item.path}
//               key={index}
//               className="link text-decoration-none"
//               activeClassName="active"
//             >
//               <div className="icon fs-4 ">{item.icons}</div>
//               <div
//                 className="link_text mt-2 fs-6 text-white"
//                 style={{ display: isOpen ? "block" : "none" }}
//               >
//                 {item.name}
//               </div>
//             </NavLink>
//           )}
//         </div>
//       ))}
//        {isOpen && (
//           <hr style={{ margin: "5px 0", border: "1px solid #ffffff" }} />
//         )}

//     </div>
//     <main>{children}</main>
//   </div>
//   );
// };

// export default Home;
