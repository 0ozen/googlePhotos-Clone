const SelectedImage = ({ photo, setOpen, setSelectImage }) => {
	
  const SelectImage = () => {
		setSelectImage([
			{
				src: photo.src,
				width: photo.width,
				height: photo.height,
			},
		]);
	};

	const showImage = () => {
		SelectImage();
		setOpen(true);
	};

	return (
		<div onClick={() => showImage()} className="imageCont">
			<img className="image" alt={photo.title} {...photo} />
			<span className="hoverImage"></span>
			<style>{` 
        .imageCont{
          position: relative;
          cursor: pointer;
          margin: 2px
        }
        .hoverImage{
          background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.26),
          transparent 56px,
          transparent
        );
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          transition: opacity 0.135s cubic-bezier(0, 0, 0.2, 1);
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hoverImage:hover{
          opacity: 1;
        } 
      `}</style>
		</div>
	);
};

export default SelectedImage;
