import { useState, useEffect } from "react";
import "react-google-photo/styles.css";
import Gallery from "react-photo-gallery-next";
import OpenGallery from "./OpenGallery";
import SelectedImage from "./SelectedImage";

export default function Images({ link = "", newImagen = "" }) {
	const [images, setImages] = useState([]);
	const [image, setSelectImage] = useState([{ src: "", width: 0, height: 0 }]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		fetch(link)
			.then((res) => res.json())
			.then((images) => {
				const newImages = images.map(
					({ download_url = "", width = 1, height = 1 }) => {
						return {
							src: download_url,
							width: (width * 0.1) | 0,
							height: (height * 0.11) | 0,
						};
					}
				);

				setImages(newImages);
			});
	}, []);

	const imageRenderer = ({ photo }) => {
    return <SelectedImage photo={photo} setSelectImage={setSelectImage} setOpen={setOpen} />
  }

	const handleClose = () => {
		setOpen(false)
	};

	// useEffect(() => {
	// 	if (newImagen)
	// 		setImages([{ src: newImagen, width: 100, heigth: 100 }, ...images]);
	// }, [newImagen]);

	return (
		<div>
			<div>
				<OpenGallery open={open} image={image} handleClose={handleClose} />
			</div>

			<Gallery photos={images} renderImage={imageRenderer} />
		</div>
	);
}
