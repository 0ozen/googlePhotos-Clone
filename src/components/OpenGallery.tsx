import { useEffect, useState } from "react";
import "react-google-photo/styles.css";
import GooglePhoto from "react-google-photo";

export default function OpenGallery({ image, open, handleClose }) {
	return (
		<>
			<GooglePhoto open={open} src={[...image]} onClose={handleClose} />
		</>
	);
}
