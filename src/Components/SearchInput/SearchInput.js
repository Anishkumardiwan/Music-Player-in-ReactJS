
import { searchIconGrey } from '../../assets';
import './SearchInput.css';

const SearchInput = (props) => {
    return(
        <div className="search-input-container flex">
            <img src={searchIconGrey} alt="" />
            <input type="text" placeholder="Find your music ......" />
        </div>
    );
}

export default SearchInput;