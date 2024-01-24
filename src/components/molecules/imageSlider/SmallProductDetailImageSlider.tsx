import { IconButton } from '@components/atoms';
import ImageSlider from '@components/atoms/ImageSlider';

type SmallProductDetailImageSliderProps = {
	images: string[];
	handleOpenDetailImageSlider?: () => void;
};

const SmallProductDetailImageSlider = ({
	images,
	handleOpenDetailImageSlider,
}: SmallProductDetailImageSliderProps) => {
	return (
		<div className="relative">
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
			<IconButton
				icon={{
					id: 'max',
					size: 24,
				}}
				onClick={handleOpenDetailImageSlider || (() => {})}
				className="absolute bottom-3 right-3 !w-fit !p-0"
			/>
		</div>
	);
};

export default SmallProductDetailImageSlider;
