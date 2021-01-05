import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Context} from '../Context'
import {useContext} from 'react'


export default function Search() {
  const {
    setSearchReq
  } = useContext(Context)

  const search = (e) => {
    setSearchReq(e.target.value)
  }

  return (
    <div className='search-container'>
      <div className='search'>
        <button className='search__button'>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
        <input className='search__input' onChange={search} type="text" placeholder='Filter by author...'/>
      </div>
    </div>
  )
}