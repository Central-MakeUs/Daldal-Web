import Bar from '@components/atoms/Bar';
import BarContainer from '@components/atoms/BarContainer';
import { useNProgress } from '@tanem/react-nprogress';

type ProgressBarProps = {
	isAnimating: boolean;
};

const ProgressBar = ({ isAnimating }: ProgressBarProps) => {
	const { animationDuration, progress, isFinished } = useNProgress({
		isAnimating,
	});
	return (
		<BarContainer animationDuration={animationDuration} isFinished={isFinished}>
			<Bar animationDuration={animationDuration} progress={progress} />
		</BarContainer>
	);
};

export default ProgressBar;
