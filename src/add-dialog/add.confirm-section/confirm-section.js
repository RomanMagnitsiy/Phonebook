import './confirm-section.scss'

const ConfirmSection = (ConfirmDialog) => {
    const confirmSection = document.createElement('div')
    confirmSection.className = 'confirm-section'

    const confirmBtn = document.createElement('button')
    confirmBtn.className = 'confirm-section__btn'
    confirmBtn.type = 'submit'
    confirmBtn.innerText = 'Создать контакт'
    confirmBtn.setAttribute('form', 'add-main-section__form')

    
    confirmBtn.addEventListener('submit', (event) => {})
    onsubmit = (event) => {
        event.preventDefault();
        ConfirmDialog()
    }
    
    confirmSection.appendChild(confirmBtn)

    return confirmSection
}

export default ConfirmSection