import Http from "../../Modules/Http";

interface GetProps {

}


export const Get = async (): Promise<any> => {
    try {
        const result: any = await Http.get(`${process.env.REACT_APP_API_PATH}/address/`);
        if (result.data.status !== 'success') return Promise.reject(result);
        return Promise.resolve(result.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export default Get;
