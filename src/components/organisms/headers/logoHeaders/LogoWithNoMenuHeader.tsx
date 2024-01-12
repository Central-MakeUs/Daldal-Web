import LeftLogoHeader from '@components/molecules/headers/leftHeaders/LeftLogoHeader';
import Header from '../Header';

const LogoWithNoMenuHeader = () => {
	return (
		<Header>
			<Header.Left>
				<LeftLogoHeader />
			</Header.Left>
			<Header.Right>
				<div />
			</Header.Right>
		</Header>
	);
};

export default LogoWithNoMenuHeader;
