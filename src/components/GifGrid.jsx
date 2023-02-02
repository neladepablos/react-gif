import { useEffect, useState } from 'react';
import { useFetchGifs } from '../customHooks/useFetchGifs';

import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  // }

  // useEffect(() => {
  //   getImages();

  // }, [])

  // ---------------------- Custom hook
  const {images, isLoading } = useFetchGifs(category);
  // console.log({images, isLoading})


  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2> 
        
      }

      <div className='card-grid'>      
        {
          images.map(image => {
            // Componente especializado para mostrar las tarjetas
            return (
              <GifItem key={image.id}  title= {image.title} url={image.url} />

            )
          })
        }
      </div>
      
    </>
  )
}


