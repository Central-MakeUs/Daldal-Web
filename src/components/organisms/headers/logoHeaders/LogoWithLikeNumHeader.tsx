import Header from '../Header';
import LeftLogoHeader from '@components/molecules/headers/leftHeaders/LeftLogoHeader';
import RightHeader from '@components/molecules/headers/rightHeaders/RightHeader';

const LogoWithLikeNumHeader = () => {
	return (
		<Header>
			<Header.Left>
				<LeftLogoHeader />
			</Header.Left>
			<Header.Right>
				<RightHeader likeWithNum={true} />
			</Header.Right>
		</Header>
	);
};

export default LogoWithLikeNumHeader;
