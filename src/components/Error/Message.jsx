import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Message.scss';

function Message () {
    return (
        <div className='message'>
            <h1 className='message__title'>404</h1>
            <p className='message__details'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className='message__link' to='/'>Retourner sur la page d'acceuil</NavLink>
        </div>
    )
}

export default Message;