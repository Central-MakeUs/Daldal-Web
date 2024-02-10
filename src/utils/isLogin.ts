import { getAccessToken } from './localStorage/token';

const isLogin = () => !!getAccessToken();

export default isLogin;
