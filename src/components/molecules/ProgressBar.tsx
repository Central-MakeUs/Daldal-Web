import Bar from '@components/atoms/Bar';
import BarContainer from '@components/atoms/BarContainer';
import { useNProgress } from '@tanem/react-nprogress';

const ProgressBar = ({ isAnimating }: { isAnimating: boolean }) => {
	const { animationDuration, progress, isFinished } = useNProgress({
		isAnimating,
	});
	return (
		<BarContainer animationDuration={animationDuration} isFinished={isFinished}>
			<Bar animationDuration={500} progress={progress} />
		</BarContainer>
	);
};

export default ProgressBar;
