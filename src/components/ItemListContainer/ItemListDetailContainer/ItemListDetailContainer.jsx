import React from 'react';
import Loader from '../Loader/Loader.jsx';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useAppContext } from '../../Context/Context.jsx';


function ItemListDetailContainer() {

  const {item} = useAppContext();

  return (
    <section className='item-list-container'> 
        {

            item.length === 0 ?
            <>
                <Loader/>
            </>
            :
            <div>
               <ItemDetail item={item}/>
            </div>

        }
    </section>
  );
}

export default ItemListDetailContainer;