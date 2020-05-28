import Http from '../../Modules/Http';
import { AddressType } from '../../Constants/Types/address';

interface CreateProps extends AddressType {
	name: string;
	postnumber: number;
	address: string;
	default: boolean;
}

const REACT_APP_API_PATH = "http://localhost:7080";

export const Create = async (addressInfo: CreateProps): Promise<any> => {
	try {
		const result: any = await Http.post(
			`${REACT_APP_API_PATH}/address/`,
			addressInfo,
			{}
		);
		if (result.data.status !== 'success') return Promise.reject(result);
		return Promise.resolve(result.data.data);
	} catch (err) {
		return Promise.reject(err);
	}
};

export default Create;
