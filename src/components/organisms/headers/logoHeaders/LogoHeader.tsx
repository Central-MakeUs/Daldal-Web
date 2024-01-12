import Header from '../Header';
import RightHeader from '@components/molecules/headers/rightHeaders/RightHeader';
import LeftLogoHeader from '@components/molecules/headers/leftHeaders/LeftLogoHeader';

const LogoHeader = () => {
	return (
		<Header>
			<Header.Left>
				<LeftLogoHeader />
			</Header.Left>
			<Header.Right>
				<RightHeader likeWithNum={false} />
			</Header.Right>
		</Header>
	);
};

export default LogoHeader;
