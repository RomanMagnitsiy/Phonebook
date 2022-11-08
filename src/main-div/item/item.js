import ItemIcon from '../../assets/img/iconProfile.png'

import './item.scss'

const Item = (name, phone, favorite, onClickFav, onClickDel) => {
    const itemElement = document.createElement('div')
    itemElement.className = 'item'

    const itemIcon = document.createElement('img')
    itemIcon.src = ItemIcon
    itemIcon.className = 'item__icon'

    const itemTextSection = document.createElement('div')
    itemTextSection.className = 'item__text'
    
    const itemName = document.createElement('span')
    itemName.className = 'item__text-name'
    itemName.innerText = `${name}`
    
    const itemPhone = document.createElement('span')
    itemPhone.className = 'item__text-phone'
    itemPhone.innerText = `${phone}`
    
    const itemBtnSection = document.createElement('div')
    itemBtnSection.className = 'item__btn'

    const itemBtnDelete = document.createElement('button')
    itemBtnDelete.className = 'item__btn-delete'
    itemBtnDelete.addEventListener('click', onClickDel)
    const itemBtnDeleteIcon = document.createElement('i')
    itemBtnDeleteIcon.className = 'item__btn-delete-icon icon-x'

    
    const itemBtnFavorite = document.createElement('button')
    itemBtnFavorite.className = 'item__btn-favorite'
    itemBtnFavorite.addEventListener('click', onClickFav)
    const itemBtnFavoriteIcon = document.createElement('i')
    if(favorite === 'favorite')
    {
        itemBtnFavoriteIcon.className = 'item__btn-favorite-icon icon-heart'
    } else {
        itemBtnFavoriteIcon.className = 'item__btn-favorite-icon icon-heart-empty'
    }
    
    itemElement.appendChild(itemIcon)
    itemElement.appendChild(itemTextSection)
    
    itemTextSection.appendChild(itemName)
    itemTextSection.appendChild(itemPhone)
    
    itemElement.appendChild(itemBtnSection)
    itemBtnSection.appendChild(itemBtnDelete)
    itemBtnDelete.appendChild(itemBtnDeleteIcon)
    itemBtnSection.appendChild(itemBtnFavorite)
    itemBtnFavorite.appendChild(itemBtnFavoriteIcon)
    
    
    return itemElement
}

export default Item