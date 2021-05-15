import React from 'react';

export default function ImagePopup({isOpen, card, closeIt}) {
    const {name, link} = card
return (
    <div className={`popup popup-image popup_active`}>
        <div className="popup__container popup__container_image">
            <img className="popup__img" loading="lazy" src={link} alt={name}></img>
            <p className="popup__subtitle">{name}</p>
            <button
                onClick={closeIt}
                type="button"
                className="popup__button popup__button_close popup__image-view"></button>
        </div>
    </div>
    )
}