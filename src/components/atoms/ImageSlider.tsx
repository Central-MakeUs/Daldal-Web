import { ReactNode, useState } from 'react';

import { IndexIndicator } from '@components/atoms';
import Slider from 'react-slick';

import '@styles/slick.css';

type ImageSliderProps = {
	children: ReactNode;
	className?: string;
	options?: {
		dots: boolean;
		autoplay: boolean;
		infinite: boolean;
	};
	totalImageNumber: number;
};

const initOptions = {
	dots: false,
	autoplay: false,
	infinite: false,
};

const ImageSlider = ({
	children,
	className,
	options = initOptions,
	totalImageNumber,
}: ImageSliderProps) => {
	const [currentIndex, setCurrentIndex] = useState(1);

	const CustomDotsAndIndexIndicator = (dots: ReactNode) => (
		<div className="relative">
			{!options.dots && (
				<div className="absolute bottom-10 right-3">
					<IndexIndicator
						currentIndex={currentIndex}
						totalImageNumber={totalImageNumber}
					/>
				</div>
			)}
			<div
				style={{
					width: '100%',
					display: options.dots ? 'flex' : 'none',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<ul> {dots} </ul>
			</div>
		</div>
	);

	const settings = {
		slide: 'div',
		dots: true,
		autoplay: options.autoplay,
		arrows: false,
		autoplaySpeed: 5000,
		infinite: options.infinite,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendDots: (dots: ReactNode) => CustomDotsAndIndexIndicator(dots),
		dotsClass: options.dots ? 'dots_custom' : 'slick-dots',
		beforeChange: (_: number, newIndex: number) => {
			setCurrentIndex(newIndex + 1);
		},
	};

	return (
		<Slider {...settings} className={`${className}`}>
			{children}
		</Slider>
	);
};

export default ImageSlider;
