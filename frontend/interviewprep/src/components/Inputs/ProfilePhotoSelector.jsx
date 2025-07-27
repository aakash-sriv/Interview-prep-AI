import React, { useRef, useState } from 'react';
import {LuUser , LuUpload , LuTrash} from "react-icons/lu"

const ProfilePhotoSelector = ({image,setImage , preview , setPreview}) => {

    const inputRef = useRef(null);
    const [previewUrl , setpreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if(file){
            //Update the image state
            setImage(file);

            //generate preview url from the file
            const preview = URL.createObjectURL(file);
            if(setpreview){
                setPreview(preview)
            }
            setpreviewUrl(preview);
        }
    };









  return (
    <div>ProfilePhotoSelector</div>
  )
}

export default ProfilePhotoSelector