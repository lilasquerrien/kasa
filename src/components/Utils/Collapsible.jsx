import React, { useState } from 'react';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapsible (props) {
    const [ Open,  setOpen ] = useState(false) // Open est l'état, setOpen est la fonction qui permet de modifier cet état, false est la valeur initiale de l'état
    const openCollapse = () => {
        setOpen((Open) => !Open)
    }
        return (
            <div className='collapsible'>
                <div className='collapsible__toggle' onClick={openCollapse}> 
                    <h2>{props.label}</h2>
                    {!Open ? (
                        <FontAwesomeIcon icon={faChevronDown} className='collapsible__chevron'/>) : (<FontAwesomeIcon icon={faChevronUp} className='collapsible__chevron'/>
                    )}
                </div> 
                    { Open && // Si collapse ouvert alors on affiche le content
                <div className='collapsible__content'>
                {Array.isArray(props.children) ? ( // La méthode Array.isArray() permet de déterminer si l'objet passé en argument est un objet Array, elle renvoie true si le paramètre passé à la fonction est de type Array et false dans le cas contraire
                    <h3>
                        {props.children.map(children=>
                            <p>{ children }</p> 
                        )}
                    </h3>
                ):(
                    <h3>{ props.children }</h3>
                )}
                </div>
                    }
            </div>
        );
    }

export default Collapsible;