import React from 'react';
import { NavLink } from 'react-router-dom';

// Le composant NavLink fournit un moyen déclaratif pour naviguer dans l'application. Il est similaire au composant Link , mais il permet aussi d'appliquer les styles actifs au lien quand il est actif

function Message () {
    return (
        <div className='message'>
            <h1 className='message__title'>404</h1>
            <p className='message__details'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink className='message__link' to='/'>Retourner sur la page d'acceuil</NavLink>
        </div>
    );
}

export default Message;