// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import { DoneAll } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";

// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//   borderBottom: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     // borderBottom: "4px",
//     borderBottom: `2px solid ${theme.palette.divider}`,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.7rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "none" : "none",
//   flexDirection: "row",
//   border: "none !important",
//   borderRadius: "none",
//   fontFamily: "Poppins",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//     fontFamily: "Poppins",
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
//   borderBottom: "1px solid rgba(0, 0, 0, .125)",
// }));

// export default function IndioverviewPage2Accordian({profileRoute}) {
//   const [expanded, setExpanded] = React.useState("panel1");

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   return (
//     <div>
//       <Accordion
//         expanded={expanded === "panel1"}
//         onChange={handleChange("panel1")}
//       >
//         <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
//           <Typography fontWeight={500} fontSize={"1.3rem"}>
//             <DoneAll sx={{ color: "green", marginRight: "1rem" }} /> Complete
//             Your Profile
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails sx={{ marginLeft: "1rem" }}>
//           <Typography>
//             Finish your profile to let people recognize you.
//           </Typography>

//           <Link to={profileRoute}>
//             <Button
//               color="success"
//               variant="contained"
//               sx={{ marginTop: "1rem" }}
//             >
//               Edit Profile
//             </Button>
//           </Link>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion
//         expanded={expanded === "panel2"}
//         onChange={handleChange("panel2")}
//       >
//         <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
//           <Typography fontWeight={500} fontSize={"1.3rem"}>
//             {" "}
//             <DoneAll sx={{ color: "green", marginRight: "1rem" }} />
//             Update Profile Category
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails sx={{ marginLeft: "1rem" }}>
//           <Typography>Update your category.</Typography>
//           <Link to={"/user/profilecategory"}>
//             <Button
//               color="success"
//               variant="contained"
//               sx={{ marginTop: "1rem" }}
//             >
//               Update Category
//             </Button>
//           </Link>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion
//         expanded={expanded === "panel3"}
//         onChange={handleChange("panel3")}
//       >
//         <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
//           <Typography fontWeight={500} fontSize={"1.3rem"}>
//             {" "}
//             <DoneAll sx={{ color: "green", marginRight: "1rem" }} />
//             Showcase Your Profile
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails sx={{ marginLeft: "1rem" }}>
//           <Typography>
//             Finish your profile to let people recognize you..
//           </Typography>
//           <Link to={profileRoute}>
//             <Button
//               color="success"
//               variant="contained"
//               sx={{ marginTop: "1rem" }}
//             >
//               Finish Profile
//             </Button>
//           </Link>
//         </AccordionDetails>
//       </Accordion>

//       <Accordion
//         expanded={expanded === "panel4"}
//         onChange={handleChange("panel4")}
//       >
//         <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
//           <Typography fontWeight={500} fontSize={"1.3rem"}>
//             {" "}
//             <DoneAll sx={{ color: "green", marginRight: "1rem" }} />
//             Update Link in Bio
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails sx={{ marginLeft: "1rem" }}>
//           <Typography>Update Your Bio Link.</Typography>
//           <Link to={"/user/profileDetails"}>
//             <Button
//               color="success"
//               variant="contained"
//               sx={{ marginTop: "1rem" }}
//             >
//               Update Bio
//             </Button>
//           </Link>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//   );
// }

import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const accordions = [
  {
    id: 1,
    question: "Complete Your Profile",
    answer: "Finish your profile to let people recognize you",
    btndata: "Edit Profile",
    routeProp: "",
  },
  {
    id: 2,
    question: "Update Profile Category",
    answer: "Update your category.",
    btndata: "Update Category",
    routeProp: "/user/profilecategory",
  },
  {
    id: 3,
    question: "Showcase Your Profile",
    answer: "Finish your profile to let people recognize you..",
    btndata: "Finish Your Profile",
    routeProp: "",
  },
  {
    id: 4,
    question: "Update Your Link in Bio",
    answer: "Update your link in Bio .",
    btndata: "Update Bio Link",
    routeProp: "/user/profileDetails",
  },
];

function IndioverviewPage2Accordian({ profileRoute }) {
  return (
    <div className="wrapper mt-1 pb-10">
      <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
        {accordions.map((item, id) => {
          // destruct
          const { question, answer } = item;
          return (
            <div className="bg-darkcolor p-5 rounded-md" key={id}>
              {(id === 0 ||id===2) ? (
                <Accordion
                  question={question}
                  answer={answer}
                  btndata={item.btndata}
                  profileRoute={"profileRoute"}
                />
              ) : (
                <Accordion
                  question={question}
                  answer={answer}
                  btndata={item.btndata}
                  profileRoute={item.routeProp}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IndioverviewPage2Accordian;

export const Accordion = ({ question, answer, btndata, profileRoute }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-xl font-semibold text-green">{question}</h1>
        <BiChevronDown
          className={`text-2xl transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="pt-3 text-sm md:text-base">{answer}</p>
            <Link to={profileRoute} className="relative">
              <button
                className="mt-4 font-bold p-2 rounded "
                style={{ background: "rgb(4, 223, 100)", }}
              >
                {btndata}
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
