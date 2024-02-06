import { MemberStatus, Provider } from '@type/userInfo';

export type userInfoResponseDTO = {
	id: number;
	name: string;
	email: string;
	point: number;
	account: string;
	accountBank: string;
	memberStatus: MemberStatus;
	provider: Provider;
};
