import ImageSlider from '@components/atoms/ImageSlider';

type LargeDetailImageSliderProps = {
	images: string[];
};

const LargeDetailImageSlider = ({ images }: LargeDetailImageSliderProps) => {
	return (
		<ImageSlider
			totalImageNumber={images.length}
			className="w-screen max-w-[600px]"
		>
			{images.map((image, idx) => (
				<div key={`Image#${idx}`}>
					<div style={{ position: 'relative' }}>
						<img
							src={image}
							alt="detail large image"
							className="w-full h-screen"
						/>
					</div>
				</div>
			))}
		</ImageSlider>
	);
};

export default LargeDetailImageSlider;
