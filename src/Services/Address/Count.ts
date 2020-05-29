import Http from '../../Modules/Http';

const REACT_APP_API_PATH = 'https://geoniljang.com:7080';
export const Count = async (): Promise<any> => {
	try {
		const result: any = await Http.get(`${REACT_APP_API_PATH}/address/count`);
		if (result.data.status !== 'success') return Promise.reject(result);
		return Promise.resolve(result.data.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export default Count;
