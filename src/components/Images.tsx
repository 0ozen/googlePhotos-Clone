import { useState, useEffect } from "react";
import "react-google-photo/styles.css";
import Gallery from "react-photo-gallery-next";
import OpenGallery from "./OpenGallery";
import SelectedImage from "./SelectedImage";

export default function Images({ link, newImagen }) {
	const [images, setImages] = useState([]);
	const [image, setSelectImage] = useState([{}, { open: false }]);

	useEffect(() => {
		fetch(link)
			.then((res) => res.json())
			.then((images) => {
				const newImages = images.map(({ download_url, width, height }) => {
					return {
						src: download_url,
						width: (width * 0.1) | 0,
						height: (height * 0.1) | 0,
					};
				});

				setImages(newImages);
			});
	}, []);

	const imageRenderer = ({ photo }) => (
		<SelectedImage photo={photo} setImage={setSelectImage} />
	);

	const handleClose = () => {
		const close = [...image];
		close[1].open = false;
		setSelectImage(close);
	};

	// useEffect(() => {
	// 	if (newImagen)
	// 		setImages([{ src: newImagen, width: 100, heigth: 100 }, ...images]);
	// }, [newImagen]);

	return (
		<div>
			<div>
				<OpenGallery
					open={image[1].open}
					image={[image[0]]}
					handleClose={handleClose}
				/>
			</div>

			<Gallery photos={images} renderImage={imageRenderer} />
		</div>
	);
}
