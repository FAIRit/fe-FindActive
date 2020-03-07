
import React from "react";

import styles from "../styles/RegisterBtn.module.css";


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function RegisterModal() {
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
        <div>
            <div>
        <button
          className={styles.registerBtn}
          onClick={handleOpen}
        >
          Sign Up
        </button>
      </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Simple React Modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim, non pharetra est ultrices et.
                    </p>
                </div>
            </Modal>
        </div>
    );
}






// import React from "react";
// import styles from "../styles/RegisterBtn.module.css";
// import RegisterModal from "./RegisterModal";
// class RegisterBtn extends React.Component {
//   state = {
//     showRegisterPopup: false
//   };

//   displayRegisterPopup = () => {
//     this.setState({
//       showRegisterPopup: true
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button
//           className={styles.registerBtn}
//         >
//           Sign Up
//         </button>
//         {this.state.showRegisterPopup ? <RegisterModal /> : ""}
//       </div>
//     );
//   }
// }

// export default RegisterBtn;
