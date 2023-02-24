import React, { useState } from 'react';
// import '../styles/Collapsible.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Collapsible ({ label, children }) {
    const [ Open,  setOpen ] = useState(false)
    const openCollapse = () => {
        setOpen((Open) => !Open)
    } 
        return (
            <div className='collapsible'>
            <div className='collapsible__toggle' onClick={openCollapse}>
                <h2>{label}</h2>
                {!Open ? (
                    <FontAwesomeIcon icon={faArrowDown} className='collapsible__arrow'/>) : (<FontAwesomeIcon icon={faArrowUp} className='collapsible__arrow'/>
                )}
            </div>
                { Open && 
            <div className='collapsible__content'>
                {children}
            </div>
                }
            </div>
        )
    }

export default Collapsible;