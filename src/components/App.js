import React from 'react'
import Header from './Header.js';
import {Main} from './Main.js'
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup';
import EditAvatarPopup from "./EditAvatarPopup";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import '../index.css';
import api from "../utils/api";

function App() {

    const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setPopupProfileState] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const userInfo = await api.getUserInfo();
            return userInfo;
        }
        fetchData()
            .then(data=> setCurrentUser(data))
            .catch(err => console.log(err));
    }, []);

    React.useEffect(() => {
        async function fetchData() {
            const cardsData = await api.getCards();
            return cardsData;
        }
        fetchData()
            .then(data=> setCards(data))
            .catch(err => console.log(err));
    }, []);

    function handleEditAvatarClick() {
        setAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setPopupProfileState(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleCloseAll() {
        setPopupProfileState(false);
        setAvatarPopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    function handleUpdateUser(userData) {
        api.setUserInfo(userData).then((data) => {
            setCurrentUser(data);
        }).catch((err) => { console.log(err); });
        handleCloseAll();
    }

    function handleUpdateAvatar(userData) {
        console.log(userData)
        api.setUserAvatar(userData).then((data) => {
            setCurrentUser(data);
        }).catch((err) => { console.log(err); });
        handleCloseAll();
    }


    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (!isLiked) {
            api.addLike(card).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            }).catch((err) => { console.log(err); });
        } else {
            api.deleteLike(card).then((newCard) => {
                setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
            }).catch((err) => { console.log(err); });
        }
    }

    function handleCardDelete(card) {
        api.deleteCard(card).then(() => {
            setCards(cards.filter((item) => item._id !== card._id));
        }).catch((err) => { console.log(err); });
    }

    function handleAddPlace(placeData) {
        api.addNewCard(placeData).then((data) => {
            setCards([data, ...cards]);
        }).catch((err) => { console.log(err); });
        handleCloseAll();
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
            <div className="page">
                <Header/>
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    cards={cards}
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                />
                <Footer/>
            </div>
            <EditProfilePopup
                           isOpen={isEditProfilePopupOpen}
                           closeIt={handleCloseAll}
                           onUpdateUser={handleUpdateUser}
            />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                closeIt={handleCloseAll}
                onUpdateAvatar={handleUpdateAvatar}
            />
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                closeIt={handleCloseAll}
                onUpdatePlace={handleAddPlace}
            />
            <PopupWithForm name='popup-confirm'
                           title='Вы уверены?'
                           buttonText='Да'
                           isOpen={false}
                           closeIt={handleCloseAll}
                           children={<>
                           </>}
            />
            {selectedCard._id && <ImagePopup card={selectedCard} closeIt={handleCloseAll}/>}
        </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
