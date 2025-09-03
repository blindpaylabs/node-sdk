import type {
    BlindpayApiResponse,
    Network,
    OfframpWallet,
    PaginationMetadata,
    PaginationParams,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListOfframpWalletsInput = {
    instanceId: string;
    params?: PaginationParams & {
        network?: Network;
    };
};

export type ListOfframpWalletsResponse = {
    data: OfframpWallet[];
    metadata: PaginationMetadata;
};

export type CreateOfframpWalletInput = {
    instanceId: string;
    body: {
        wallet_address: string;
        network: Network;
        label?: string | null;
    };
};

export type GetOfframpWalletInput = {
    instanceId: string;
    offrampWalletId: string;
};

export function createOfframpWalletsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListOfframpWalletsInput): Promise<BlindpayApiResponse<ListOfframpWalletsResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListOfframpWalletsResponse>(
                `/instances/${instanceId}/offramp_wallets${queryParams}`
            );
        },

        create({
            instanceId,
            body,
        }: CreateOfframpWalletInput): Promise<BlindpayApiResponse<OfframpWallet>> {
            return client.post<OfframpWallet>(`/instances/${instanceId}/offramp_wallets`, body);
        },

        get({
            instanceId,
            offrampWalletId,
        }: GetOfframpWalletInput): Promise<BlindpayApiResponse<OfframpWallet>> {
            return client.get<OfframpWallet>(
                `/instances/${instanceId}/offramp_wallets/${offrampWalletId}`
            );
        },
    };
}
