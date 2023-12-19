import React from "react";

// function Featuresicon(props) {
//   const container = {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#fff",
//     gap: "10px",
//     padding: "2px",
//     cursor: "pointer",
//   };

//   const iconBox = {
//     padding: "3px",
//     borderRadius: "5px",
//     background: "rgba(224, 255, 234)",
//     padding: "5px 7px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//   return (
//     <div style={container}>
//       <div className="icon" style={iconBox}>
//         <props.icon size={28} style={{ color: props.color }} />
//       </div>
//       <p>{props.title}</p>
//     </div>
//   );
// }
function Featuresicon({ icon: Icon, title, color }) {
  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    gap: "10px",
    padding: "2px",
    cursor: "pointer",
  };

  const iconBox = {
    padding: "3px",
    borderRadius: "5px",
    background: "rgba(224, 255, 234)",
    padding: "5px 7px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={container}>
      <div className="icon" style={iconBox}>
        <Icon size={28} style={{ color: color }} />
      </div>
      <p>{title}</p>
    </div>
  );
}

export default Featuresicon;
