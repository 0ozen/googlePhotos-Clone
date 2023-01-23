import { useEffect, useState } from "react";
import "react-google-photo/styles.css";
import GooglePhoto from "react-google-photo";

export default function OpenGallery({ image = [{src:"",width:0,height:0}], open , handleClose  }) {
	return (
		<>
			<GooglePhoto open={open} src={image} onClose={handleClose} />
		</>
	);
}
