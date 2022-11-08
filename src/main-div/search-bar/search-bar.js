import PhoneImg from '../../assets/img/PhoneImg.png'
import SearchImg from '../../assets/img/SearchIcon.png'
import './search-bar.scss'

const SearchBar = (searchOnPress) => {
    const searchBar = document.createElement('div')
    searchBar.className = 'search-bar'
    
    const phoneImg = document.createElement('img')
    phoneImg.src = PhoneImg
    phoneImg.className = 'search-bar__phone-img'
    
    const searchImg = document.createElement('img')
    searchImg.src = SearchImg
    searchImg.className = 'search-bar__search-img'

    const searchInput = document.createElement('input')
    searchInput.className = 'search-bar__input'
    searchInput.id = 'search-bar__input'
    searchInput.addEventListener('input', searchOnPress)

    searchBar.appendChild(phoneImg)
    searchBar.appendChild(searchImg)
    searchBar.appendChild(searchInput)
    
    return searchBar
}

export default SearchBar