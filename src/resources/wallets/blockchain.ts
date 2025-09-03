import type {
    BlindpayApiResponse,
    BlockchainWallet,
    Network,
    PaginationMetadata,
    PaginationParams,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListBlockchainWalletsInput = {
    instanceId: string;
    params?: PaginationParams & {
        network?: Network;
    };
};

export type ListBlockchainWalletsResponse = {
    data: BlockchainWallet[];
    metadata: PaginationMetadata;
};

export type CreateBlockchainWalletInput = {
    instanceId: string;
    body: {
        address: string;
        network: Network;
        label?: string | null;
    };
};

export function createBlockchainWalletsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListBlockchainWalletsInput): Promise<
            BlindpayApiResponse<ListBlockchainWalletsResponse>
        > {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListBlockchainWalletsResponse>(
                `/instances/${instanceId}/blockchain_wallets${queryParams}`
            );
        },

        create({
            instanceId,
            body,
        }: CreateBlockchainWalletInput): Promise<BlindpayApiResponse<BlockchainWallet>> {
            return client.post<BlockchainWallet>(
                `/instances/${instanceId}/blockchain_wallets`,
                body
            );
        },
    };
}
