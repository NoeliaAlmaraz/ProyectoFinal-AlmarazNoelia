import React from 'react';
import './Searcher.css'


const Searcher = ({
   search, 
   handleChange,
   isChecked,
   handleCheckboxChange,
   selectedOption,
   handleSelectChange

   }) => {
  
  
    return (
    <aside className='search-container' >
      <input
        type='text'
        placeholder='Buscar libros...'
        value={search}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Disponible en ebook
      </label>



      
    </aside>
  );
};

export default Searcher;