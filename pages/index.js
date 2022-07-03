const popupElement = document.querySelector('.popup'); 
const button = document.querySelector('.popup-button'); 
const closeButton = popupElement.querySelector('.popup__close-button'); 

document.addEventListener('click', function(evt) {
    const toggleClick = evt.target.closest('.more-function__button');
        if (toggleClick) {
            toggleClick.classList.toggle('more-function__button-active');
        }
})

openPopup = () => {
    popupElement.classList.add('popup_opened'); 
}

closePopup = () => {
    popupElement.classList.remove('popup_opened');
}

button.addEventListener('click', openPopup); 

closeButton.addEventListener('click', closePopup); 