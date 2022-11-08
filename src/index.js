import Basis from './main-div/basis'
import SearchBar from './main-div//search-bar'
import MainSection from './main-div/main-section';
import AddSection from './main-div/add-section';

import ConfirmSection from './add-dialog/add.confirm-section'
import HeadSection from './add-dialog/add.head-section';
import AddMainSection from './add-dialog/add.main-section';

import Item from './main-div/item'

import Mocks from './mocks/mocks';

import "./index.scss"

const contacts = Mocks()

const sortObjectA = (objectA) =>{
    objectA.sort((a,b) => {
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) 
            return -1
        if (nameA > nameB)
            return 1
        return 0
    })
}

const generateItem = (mass, inputName) => {
    let myNode = document.getElementById('main-section')
    while(myNode.firstChild) {
        myNode.removeChild(myNode.firstChild)
    }
    sortObjectA(mass)
    mass.forEach((item)=>{
        if (item.favorite === 'favorite')
        {
            const onClickDel = () => {
                let tmpId = mass.map(e => e.id).indexOf(item.id)
                if(tmpId !== 0)
                    mass.splice(tmpId,tmpId)
                else
                    mass.shift()
                generateItem(mass)
            }
            const onClickFav = () => {
                if(item.favorite === 'none')
                    item.favorite = 'favorite'
                else{
                    item.favorite = 'none'
                }
                generateItem(mass)
            }
            if((item.name.toLowerCase().includes(inputName)) || item.phone.includes(inputName) || inputName === undefined)
            {
                const itemElement = Item(item.name, item.phone, item.favorite, onClickFav,onClickDel)
                mainSection.appendChild(itemElement)
            }
            
        }
    })
    mass.forEach((item)=>{
        if (item.favorite === 'none')
        {
            const onClickDel = () => {
                let tmpId = mass.map(e => e.id).indexOf(item.id)
                if(tmpId !== 0)
                    mass.splice(tmpId,tmpId)
                else
                    mass.shift()
                generateItem(mass)
            }
            const onClickFav = () => {
                if(item.favorite === 'none')
                    item.favorite = 'favorite'
                else{
                    item.favorite = 'none'
                }
                generateItem(mass)
            }
            if((item.name.toLowerCase().includes(inputName)) || item.phone.includes(inputName) || inputName === undefined)
            {
                const itemElement = Item(item.name, item.phone, item.favorite, onClickFav,onClickDel)
                mainSection.appendChild(itemElement)
            }
        }
    })
}

const searchOnPress = () => {
    var inputName = document.getElementById('search-bar__input').value.toLowerCase()
    generateItem(contacts, inputName)
}

const ConfirmDialog = () => {
    const endFav = () => {
        if(document.getElementById('add-main-section__favorite-check').checked == true)
        {return 'favorite'}
        else {return 'none'} 
    }
    contacts.push({
        id: contacts.length,
        name: document.getElementById('add-main-section__input').value,
        phone: document.getElementById('add-main-section__phone').value,
        favorite: endFav()
    })
    document.getElementById('add-main-section__input').value = ""
    document.getElementById('add-main-section__phone').value = ""
    document.getElementById('add-main-section__favorite-check').checked = false

    document.getElementById('basis-main').classList.add('active')
    document.getElementById('basis-add').classList.remove('active')
    generateItem(contacts)
}

const basisWrapper = Basis();
basisWrapper.id = 'basis-main'
basisWrapper.classList.add('active')
document.body.appendChild(basisWrapper)

const searchBar = SearchBar(searchOnPress)
basisWrapper.appendChild(searchBar)

const mainSection = MainSection();
basisWrapper.appendChild(mainSection)

const addSection = AddSection()
basisWrapper.appendChild(addSection)

const addBasisWrapper = Basis();
addBasisWrapper.id = 'basis-add'
document.body.appendChild(addBasisWrapper)

const addheadSection = HeadSection()
addBasisWrapper.appendChild(addheadSection)

const addMainSection = AddMainSection()
addBasisWrapper.appendChild(addMainSection)

const confirmSection = ConfirmSection(ConfirmDialog)
addBasisWrapper.appendChild(confirmSection)

generateItem(contacts)