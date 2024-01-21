import ImageSlider from '@components/atoms/ImageSlider';
import { mockImages } from '@mocks/images';

const LoginImageSlider = () => {
	// TODO: 디자이너님 이미지 추가해주시면 이미지 변경

	return (
		<ImageSlider
			totalImageNumber={mockImages.length}
			options={{ dots: true, autoplay: true, infinite: true }}
			className="w-[287px]"
		>
			{mockImages.map((image, idx) => (
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
