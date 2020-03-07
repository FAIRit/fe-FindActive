// import React from "react";
// import styles from "../styles/RegisterBtn.module.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import RegisterForm from './forms/RegisterForm'



// function getModalStyle() {
//   return {
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)'
//   };
// }

// const useStyles = makeStyles(theme => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   paper: {
//     position: "absolute",
//     width: '80vw',
//     [theme.breakpoints.up('md')]: {
//       width: '40vw'
//     },
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3)
  
//   }
// }));

// export default function RegisterModal() {
//   const classes = useStyles();
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);
  
//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>

//    <button className={styles.registerBtn} onClick={handleOpen}>
//           Sign Up
//         </button>

//       <Modal
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//         open={open}
//         onClose={handleClose}
//       >
//         <div style={modalStyle} className={classes.paper}>
//           <RegisterForm/>
//         </div>
//       </Modal>
//     </div>
//   );
// }

