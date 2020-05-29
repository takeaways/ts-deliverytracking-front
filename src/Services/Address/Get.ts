import Http from "../../Modules/Http";

interface GetProps {
    offset: number;
}

const REACT_APP_API_PATH = "https://teamback.geoniljang.com";
export const Get = async ({offset = 0}: GetProps): Promise<any> => {
    try {
        const result: any = await Http.get(
            `${REACT_APP_API_PATH}/address/?offset=${offset}`
        );
        if (result.data.status !== "success") return Promise.reject(result);
        return Promise.resolve(result.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export default Get;
