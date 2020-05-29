import Http from "../../Modules/Http";

interface SetProps {
    addressId: number;
}

const REACT_APP_API_PATH = "https://teamback.geoniljang.com";
export const SetDefault = async ({addressId}: SetProps): Promise<any> => {
    try {
        const result: any = await Http.put(
            `${REACT_APP_API_PATH}/address/${addressId}`
        );
        if (result.data.status !== "success") return Promise.reject(result);
        return Promise.resolve(result.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export default SetDefault;
