export type userInfoResponseDTO = {
	id: number;
	name: string;
	email: string;
	point: number;
	account: string;
	accountBank: string;
	//TODO memberStatus 타입 모두 작성
	memberStatus: 'ACTIVE';
	provider: 'KAKAO' | 'APPLE';
};
