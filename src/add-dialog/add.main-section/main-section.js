import './main-section.scss'
import { InputMask } from 'imask';

const MainSection = () => {
    const mainSection = document.createElement('div')
    mainSection.className = 'add-main-section'

    const mainForm = document.createElement('form')
    mainForm.className = 'add-main-section__form'
    mainForm.id = 'add-main-section__form'

    const nameText = document.createElement('span')
    nameText.className = 'add-main-section__text'
    nameText.innerText = 'Имя'
    
    const nameInput = document.createElement('input')
    nameInput.className = 'add-main-section__input'
    nameInput.id = 'add-main-section__input'
    nameInput.required = true

    const phoneText = document.createElement('span')
    phoneText.className = 'add-main-section__text'
    phoneText.innerText = 'Номер телефона'
    
    const phoneInput = document.createElement('input')
    phoneInput.className = 'add-main-section__input'
    phoneInput.id = 'add-main-section__phone'
    phoneInput.required = true
    phoneInput.placeholder = '+7(900)000-00-00'
    const maskOption = {
        mask: '+7(900)000-00-00',
    }
    const regExpMask = IMask(phoneInput, maskOption)

    const favDiv = document.createElement('div')
    favDiv.className = 'add-main-section__fav-div'
    
    const favoriteCheck = document.createElement('input')
    favoriteCheck.type = 'checkbox'
    favoriteCheck.className = 'add-main-section__favorite-check'
    favoriteCheck.id = 'add-main-section__favorite-check'

    const favoriteText = document.createElement('label')
    favoriteText.className = 'add-main-section__favorite-text'
    favoriteText.innerText= 'Избранный'
    favoriteText.setAttribute('for', 'main-section__favorite-check')
    
    mainSection.appendChild(mainForm)
    mainForm.appendChild(nameText)
    mainForm.appendChild(nameInput)
    mainForm.appendChild(phoneText)
    mainForm.appendChild(phoneInput)
    mainForm.appendChild(favDiv)
    favDiv.appendChild(favoriteCheck)
    favDiv.appendChild(favoriteText)

    return mainSection
}

export default MainSection