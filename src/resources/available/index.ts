import type {
    AvailableBankAccount,
    AvailableNetwork,
    AvailableToken,
    BlindpayApiResponse,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListAvailableBankAccountsResponse = {
    data: AvailableBankAccount[];
};

export type ListAvailableNetworksResponse = {
    data: AvailableNetwork[];
};

export type ListAvailableTokensResponse = {
    data: AvailableToken[];
};

export function createAvailableResource(client: InternalApiClient) {
    return {
        bankAccounts(): Promise<BlindpayApiResponse<ListAvailableBankAccountsResponse>> {
            return client.get<ListAvailableBankAccountsResponse>(`/available/bank_accounts`);
        },

        networks(): Promise<BlindpayApiResponse<ListAvailableNetworksResponse>> {
            return client.get<ListAvailableNetworksResponse>(`/available/networks`);
        },

        tokens(): Promise<BlindpayApiResponse<ListAvailableTokensResponse>> {
            return client.get<ListAvailableTokensResponse>(`/available/tokens`);
        },
    };
}
