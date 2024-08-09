import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../Context/Context.jsx';
import { useState } from 'react';
import './ItemDetail.css'
import ItemCount from './ItemCount/ItemCount.jsx'





function ItemDetail({item}) {
  
  
  const {id} = useParams();

  
    const itemIndex = item[id];


      

      const title = String(itemIndex.title || ''); 
      const authorName = String(itemIndex.author_name || '');
      const cover = String(itemIndex.cover_i || '');
      const price = itemIndex.want_to_read_count;
      const index = itemIndex.id;

    



        return (
          <article key={itemIndex.index} className='card-item'>
            <img src={`https://covers.openlibrary.org/b/id/${cover}-M.jpg`} alt={`Cover of ${title}`}></img>
            <h2>{title}</h2>
            <p >{authorName}</p>
            <p>{price/10}$</p>
            <ItemCount  itemIndex={itemIndex} />
        </article>
          
        )
}

export default ItemDetail;