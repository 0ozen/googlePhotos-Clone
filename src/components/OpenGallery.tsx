import { useEffect, useState } from "react";
import 'react-google-photo/styles.css';
import GooglePhoto from 'react-google-photo';

export default function OpenGallery({ link }) {
	const [images, setImages] = useState([]);
  {link}
	// useEffect(() => {
	// 	fetch(link)
	// 		.then((res) => res.json())
	// 		.then((images) => {
  //       const newImages = images
  //       .map(({ download_url,width,height }) => {
  //         return {
  //           src: download_url,
  //           width: width/12 | 0,
  //           height: height/12 | 0
  //         }
  //       } )
        
  //       setImages(newImages)
  //     })  
	// }, []);
  
  const handleClose = () => {}

	return (
		<>
       {/* <GooglePhoto 
        open={false}
        src={images}
        onClose={handleClose}
        /> */}
		</>
	);
}
