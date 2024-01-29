import { loginImagesList } from '@assets/images/loginImageSlider/loginImagesList';
import ImageSlider from '@components/atoms/ImageSlider';

const LoginImageSlider = () => {
	return (
		<ImageSlider
			totalImageNumber={loginImagesList.length}
			options={{ dots: true, autoplay: true, infinite: true }}
			className="w-[40vh] mb-[37px] mt-4"
		>
			{loginImagesList.map((image, idx) => (
				<div key={`Image#${idx}`}>
					<div style={{ position: 'relative' }}>
						<img src={image} alt="login image" className="aspect-square" />
					</div>
				</div>
			))}
		</ImageSlider>
	);
};

export default LoginImageSlider;
