import React from 'react';
import "./ModalWindow.css"

const ModalWindow = ({isVisible, setVisible, children}) => {
    const classes = ["modal"]

    if (isVisible) {
        classes.push("active")
    }

    return (
        <div className={classes.join(" ")} onClick={() => setVisible(false)}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;