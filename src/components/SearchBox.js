import React,{ useRef} from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchCocktails } from '../redux/features/cocktailSlice';

const SearchBox = () => {
    const searchTerm = useRef();
    const dispatch = useDispatch();

    const handleChange = () => {
        const searchText =searchTerm.current.value;
        dispatch(fetchSearchCocktails({searchText}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
    <>
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
<form onSubmit={handleSubmit} onChange={handleChange}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label"></label>
    <input type="email" ref={searchTerm} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search Here" style={{width:"300px"}} />
    <div id="emailHelp" className="form-text"></div>
  </div>
</form>

    </div>
    </>
  )
  }

export default SearchBox