import ImageSlider from '@components/atoms/ImageSlider';
import PageLayout from '@layouts/PageLayout';
import { mockImages } from '@mocks/images';

const ProductDetail = () => {
	return (
		<PageLayout leftType="back">
			{/**회원가입 화면 */}
			<ImageSlider
				totalImageNumber={mockImages.length}
				options={{ dots: true, autoplay: true }}
				className="w-[287px]"
			>
				{mockImages.map((image, idx) => (
					<div key={`Image#${idx}`}>
						<div style={{ position: 'relative', display: 'inline-block' }}>
							<img src={image} alt="login image" className="aspect-square" />
						</div>
					</div>
				))}
			</ImageSlider>

			{/**상세 페이지 작은 사진 화면 */}
			<ImageSlider
				totalImageNumber={mockImages.length}
				options={{ dots: false, autoplay: false }}
				className="w-full"
			>
				{mockImages.map((image, idx) => (
					<div key={`Image#${idx}`}>
						<div style={{ position: 'relative', display: 'inline-block' }}>
							<img
								src={image}
								alt="detail small image"
								className="w-full h-[350px]"
							/>
						</div>
					</div>
				))}
			</ImageSlider>

			{/**상세 페이지 큰 사진 화면 */}
			<ImageSlider
				totalImageNumber={mockImages.length}
				options={{ dots: false, autoplay: false }}
				className="w-full"
			>
				{mockImages.map((image, idx) => (
					<div key={`Image#${idx}`}>
						<div style={{ position: 'relative', display: 'inline-block' }}>
							<img
								src={image}
								alt="detail large image"
								className="w-full h-screen"
							/>
						</div>
					</div>
				))}
			</ImageSlider>
		</PageLayout>
	);
};

export default ProductDetail;
