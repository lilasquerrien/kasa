import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import your icons
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// style

function Collapsible ({ label, children, library }) {
    const [ Open,  setOpen ] = useState(false)
    const openCollapse = () => {
        setOpen((Open) => !Open)
    } 
        return (
            <div className="collapsible">
            <div className="toggle" onClick={openCollapse}>
                <h2>{label}</h2>
                {!Open ? (
                    <FontAwesomeIcon icon={faArrowDown}/>) : (<FontAwesomeIcon icon={faArrowUp}/>
                )}
            </div>
                { Open && 
            <div className="text_content">
                {children}
            </div>
                }
            </div>
        )
    }

export default Collapsible;