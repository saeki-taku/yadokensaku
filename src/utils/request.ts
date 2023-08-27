// types
import Axios from "axios";
import { REQUEST_CONFIG } from "@/types/common/http";

/**
 * request
 */
export async function request(this: REQUEST_CONFIG) {
    const {
        data,
        url,
        method,
        cbSuccess
    } = this;

    let headers: any = {
        // "Content-Type": "application/json",
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
        const response = await Axios.request({
            url: url,
            data,
            method: method || "POST",
            params: data,
            headers,
        });

        if(cbSuccess) {
            await cbSuccess(response.data);
        }

        return response;
    } catch (err: any) {
            return "error__";
    }
}
