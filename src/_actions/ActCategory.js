import Api from "../utils/Api"

export const CategoryN = () => {
    return {
        type: "GET_CATEGORY",
        payload: Api.get("categories")
    };
}