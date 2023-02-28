import React, { useState } from 'react';
import '../../styles/Collapsible.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';


function Collapsible ({ label, children }) {
    const [ isOpen,  setIsOpen ] = useState(false)
    const openCollapse = () => {
        setIsOpen((Open) => !Open)
    }
        return (
            <div className='collapsible'>
            <div className='collapsible__toggle' onClick={openCollapse}>
                <h2>{label}</h2>
                {!isOpen ? (
                    <FontAwesomeIcon icon={faArrowDown} className='collapsible__arrow'/>) : (<FontAwesomeIcon icon={faArrowUp} className='collapsible__arrow'/>
                )}
            </div>
                { isOpen && 
            <div className='collapsible__content'>
                {children}
            </div>
                }
            </div>
        )
    }

export default Collapsible;