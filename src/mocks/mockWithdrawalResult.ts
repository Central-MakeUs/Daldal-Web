type MockWithdrawalResultType = {
	requestDate: string;
	approvedDate: string;
	prevPoint: string;
	requestPoint: string;
	remainedPoint: string;
};

const mockWithdrawalResult: MockWithdrawalResultType = {
	requestDate: '2023-12-12T12:12:12:32',
	approvedDate: '2023-12-22T23:16:12:32',
	prevPoint: '3000',
	requestPoint: '1000',
	remainedPoint: '2000',
};

export default mockWithdrawalResult;
