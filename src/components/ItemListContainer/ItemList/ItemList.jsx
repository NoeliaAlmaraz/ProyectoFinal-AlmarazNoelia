import React from 'react'
import './ItemList.css'
import Item from '../item/Item'



  const ItemList = ({item}) => {
  

    
    return ( 
      item.map((element, index) =>{
        return (

              <Item  
              title={element.title} 
              author_name={element.author_name} 
              cover={element.cover_i} 
              price={element.want_to_read_count} 
              key={index}
              index = {index}

  
              />


            
          
        )
      })
    )
  }




export default ItemList