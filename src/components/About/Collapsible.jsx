import React, { useState } from 'react';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


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
                        <FontAwesomeIcon icon={faChevronDown} className='collapsible__chevron'/>) : (<FontAwesomeIcon icon={faChevronUp} className='collapsible__chevron'/>
                    )}
                </div>
                    { isOpen && 
                <div className='collapsible__content'>
                {Array.isArray(children) ? (
                    <ul>
                        {children.map(children=>
                            <li>
                                <h3>{ children }</h3> 
                            </li>
                        )}
                    </ul>
                ):(
                    <h3>{children}</h3>
                )}
                </div>
                    }
            </div>
        )
    }

export default Collapsible;