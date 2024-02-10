import { MemberStatus, Provider } from '@type/userInfo';

export type UserInfoResponseDTO = {
	id: number;
	name: string;
	email: string;
	point: number;
	depositor: string;
	account: string;
	accountBank: string;
	memberStatus: MemberStatus;
	provider: Provider;
};
