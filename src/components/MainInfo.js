import React from "react";
import styles from "../styles/MainInfo.module.css";
import { useAuth } from "../hooks/useAuth";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import RegisterForm from '../components/forms/RegisterForm';


function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "0"
  }
}));

const MainInfo = () => {
  const isLoggedIn = useAuth();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.mainInfo}>
      <h1 className={styles.mainInfoTitle}>Czym jest FindActive?</h1>
      <div className={styles.mainInfoText}>
        FindActive to wyszukiwarka obiektów sportowych w Polsce. Wyszukuj po
        kategoriach. Masz teraz łatwy dostęp do obiektów sportowych,
        gdziekolwiek jesteś!{" "}
      </div>
      {!isLoggedIn && (<>
        <button className={styles.mainInfoButton} onClick={handleOpen}>
          Zarejestruj się za darmo
        </button>
           <Modal
           aria-labelledby="simple-modal-title"
           aria-describedby="simple-modal-description"
           open={open}
           onClose={handleClose}
         >
           <div style={modalStyle} className={classes.paper}>
             <RegisterForm />
           </div>
         </Modal>
         </>
      )}
    </div>
  );
};

export default MainInfo;




// import React from "react";
// import styles from "../../styles/RegisterBtn.module.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import RegisterForm from "../forms/RegisterForm";

// function getModalStyle() {
//   return {
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)"
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
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     outline: "0"
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
//       <div>
//         <button className={styles.registerBtn} onClick={handleOpen}>
//          Zarejestruj się
//         </button>
//       </div>

//       <Modal
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//         open={open}
//         onClose={handleClose}
//       >
//         <div style={modalStyle} className={classes.paper}>
//           <RegisterForm />
//         </div>
//       </Modal>
//     </div>
//   );
// }
