import ImageSlider from '@components/atoms/ImageSlider';

type SmallDetailImageSliderProps = {
	images: string[];
};

const SmallDetailImageSlider = ({ images }: SmallDetailImageSliderProps) => {
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
							alt="detail small image"
							className="w-full h-[calc(100vw*1.2)] max-h-[654px] object-cover"
						/>
					</div>
				</div>
			))}
		</ImageSlider>
	);
};

export default SmallDetailImageSlider;
