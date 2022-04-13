import React, {useEffect, useRef, useState} from 'react';
import * as service from '../services/storage-service'
import Preformatted from "../components/preformatted";

const Media = () => {
  const [src, setSrc] = useState()
  const [srcs, setSrcs] = useState([])
  const filesRef = useRef()

  const image = 'nasa.jpg'

  const getImages = async () => {
    const urls = await service.listAllImages()
    setSrcs(urls)
  }

  const getImage = async () => {
    const url = await service.getImageSrc(image)
    setSrc(url)
  }

  const handleUpload = () => {
    Object
      .entries(filesRef.current.files)
      .forEach(([key, file]) => {
        service.uploadImage(file)
      })
  }
  const handleDelete = (src) => {
    service.deleteImage(src)
  }
  useEffect(() => {
    getImage()
    getImages()
  }, [])
  return (
    <div>
      <button
        onClick={handleUpload}
        className="float-end btn btn-primary">
        Upload
      </button>
      <input
        multiple
        ref={filesRef}
        type="file"
        className="form-control w-75"/>
      {
        srcs.map(src =>
        <span>
          <span onClick={() => handleDelete(src)}>&times;</span>
          <img src={src} height={50}/>
        </span>
        )
      }
      <Preformatted obj={srcs}/>

    </div>
  );
};

export default Media;