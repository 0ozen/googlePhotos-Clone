import { useState, useCallback,useEffect } from "react";
import "react-google-photo/styles.css";
import Gallery from "react-photo-gallery-next";
import SelectedImage from "./SelectedImage";

export default function Images({ link }) {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch(link)
			.then((res) => res.json())
			.then((images) => {
	      const newImages = images
	      .map(({ download_url,width,height }) => {
	        return {
	          src: download_url,
	          width: width*0.1 | 0,
	          height: height*0.12| 0
	        }
	      } )

	      setImages(newImages)
	    })
	}, []);


  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={"2px"}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  );

	return (
		<>
			<Gallery photos={images} renderImage={imageRenderer} />
		</>
	)
}
