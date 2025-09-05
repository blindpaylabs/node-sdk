import type { BlindpayApiResponse, Rail } from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type GetBankDetailsResponse = {
    items: Array<{
        label: string;
        value: string;
        is_active: boolean;
    }>;
};

export type GetRailsResponse = Array<{
    label: string;
    value: Rail;
    country: boolean;
}>;

export function createAvailableResource(client: InternalApiClient) {
    return {
        getBankDetails(rail: Rail): Promise<BlindpayApiResponse<GetBankDetailsResponse>> {
            return client.get(`/available/bank-details?rail=${rail}`);
        },
        getRails(): Promise<BlindpayApiResponse<GetRailsResponse>> {
            return client.get("/available/rails");
        },
    };
}
