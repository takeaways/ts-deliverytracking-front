import Http from "../../Modules/Http";

interface RemoveProps {
    addressId: number
}


export const Remove = async ({addressId}: RemoveProps): Promise<any> => {
    try {
        const result: any = await Http.delete(
            `${process.env.REACT_APP_API_PATH}/address/${addressId}`
        );
        if (result.data.status !== 'success') return Promise.reject(result);
        return Promise.resolve(result.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export default Remove;
