import IconButton from '@components/atoms/button/IconButton';
import LargeProductDetailImageSlider from '@components/molecules/imageSlider/LargeProductDetailImageSlider';
import colors from '@constants/colors';

type ImageSliderContainerProps = {
	images: string[];
	handleClose: () => void;
};

const ImageSliderContainer = ({
	images,
	handleClose,
}: ImageSliderContainerProps) => {
	return (
		<div className="w-screen h-screen top-0 left-0 flex items-start justify-center overflow-hidden">
			<LargeProductDetailImageSlider images={images} />
			<div className="absolute top-6 left-4 z-20">
				<IconButton
					icon={{
						id: 'close',
						color: colors.White,
						size: 24,
					}}
					onClick={handleClose}
				/>
			</div>
		</div>
	);
};

export default ImageSliderContainer;
