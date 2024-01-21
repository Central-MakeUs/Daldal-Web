import ImageSlider from '@components/atoms/ImageSlider';

type LargeProductDetailImageSliderProps = {
	images: string[];
};

const LargeProductDetailImageSlider = ({
	images,
}: LargeProductDetailImageSliderProps) => {
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

export default LargeProductDetailImageSlider;
