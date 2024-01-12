import Header from '../Header';
import LeftBackHeader from '@components/molecules/headers/leftHeaders/LeftBackHeader';
import RightHeader from '@components/molecules/headers/rightHeaders/RightHeader';

const BackHeader = () => {
	return (
		<Header>
			<Header.Left>
				<LeftBackHeader />
			</Header.Left>
			<Header.Right>
				<RightHeader likeWithNum={false} />
			</Header.Right>
		</Header>
	);
};

export default BackHeader;
