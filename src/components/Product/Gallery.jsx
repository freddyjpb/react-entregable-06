import React, { useState } from 'react';

import '../../css/gallery.css'

const Gallery = ({ images = [] }) => {

  const [currentImage, setCurrentImage] = useState(1);

  const percent = 100 / images.length;

  const listStyles = {
    width: `${100 * images.length}%`,
    transform: `translateX(-${(currentImage - 1) * percent}%)`
  }

  return (

    <div className="images-gallery">
      <div className="gallery">
        <div className="button-gallery left">
          <button
            onClick={() => setCurrentImage(currentImage - 1)}
            disabled={currentImage <= 1}
          >
            <i className='bx bxs-chevrons-left' ></i>
          </button>
        </div>
        <div className="button-gallery right">
          <button
            onClick={() => setCurrentImage(currentImage + 1)}
            disabled={currentImage >= images.length}
          >
            <i className='bx bxs-chevrons-right' ></i>
          </button>
        </div>

        <ul className="images-list" style={listStyles}>
          {
            images.map(image => (
              <li key={image.id}>
                <img src={image.url} alt="" />
              </li>
            ))
          }
        </ul>
      </div>

      <ul className="images-preview">
        {
          images.map((image, i) => (
            <li
              key={image.id}
              className={currentImage === i + 1 ? 'selected' : ''}
            >
              <img
                src={image.url}
                alt=""
                onClick={() => setCurrentImage(i + 1)}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Gallery