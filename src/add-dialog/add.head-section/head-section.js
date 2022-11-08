import PhoneImg from '../../assets/img/PhoneImg.png'
import './head-section.scss'

const HeadSection = () => {
    const headSection = document.createElement('div')
    headSection.className = 'head-section'
    
    const phoneImg = document.createElement('img')
    phoneImg.src = PhoneImg
    phoneImg.className = 'head-section__phone-img'
    
    const addContactText = document.createElement('span')
    addContactText.innerText = 'Добавить контакт'
    addContactText.className = 'head-section__contact-text'
    
    headSection.appendChild(phoneImg)
    headSection.appendChild(addContactText)
    
    return headSection
}

export default HeadSection