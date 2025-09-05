import type { BlindpayApiResponse, Network } from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type BlockchainWallet = {
    id: string;
    name: string;
    network: Network;
    address?: string;
    signature_tx_hash?: string;
    is_account_abstraction: boolean;
    receiver_id: string;
};

export type GetBlockchainWalletMessage = {
    receiverId: string;
    instanceId: string;
};

export type GetBlockchainWalletMessageResponse = {
    message: string;
};

export type ListBlockchainWalletsInput = {
    instanceId: string;
    receiverId: string;
};

export type ListBlockchainWalletsResponse = {
    data: BlockchainWallet[];
};

export type CreateBlockchainWalletInput = {
    instanceId: string;
    receiverId: string;
    body: {
        name: string;
        network: Network;
        address: string;
        is_account_abstraction?: boolean;
        signature_tx_hash?: string;
    };
};

export type GetBlockchainWalletInput = {
    instanceId: string;
    receiverId: string;
    id: string;
};

export type DeleteBlockchainWalletInput = {
    instanceId: string;
    receiverId: string;
    id: string;
};

export type GetBlockchainWalletResponse = BlockchainWallet;

export type CreateBlockchainWalletResponse = BlockchainWallet;

export type CreateAssetTrustlineInput = {
    instanceId: string;
    body: {
        address: string;
    };
};

export type CreateAssetTrustlineResponse = {
    xdr: string;
};

export type MintUsdbStellarInput = {
    instanceId: string;
    body: {
        address: string;
        amount: string;
        signedXdr: string;
    };
};

export function createBlockchainWalletsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            receiverId,
        }: ListBlockchainWalletsInput): Promise<
            BlindpayApiResponse<ListBlockchainWalletsResponse>
        > {
            return client.get<ListBlockchainWalletsResponse>(
                `/instances/${instanceId}/receivers/${receiverId}/blockchain-wallets`
            );
        },
        create({
            instanceId,
            body,
        }: CreateBlockchainWalletInput): Promise<
            BlindpayApiResponse<CreateBlockchainWalletResponse>
        > {
            return client.post(`/instances/${instanceId}/blockchain-wallets`, body);
        },
        getWalletMessage({
            receiverId,
            instanceId,
        }: GetBlockchainWalletMessage): Promise<
            BlindpayApiResponse<GetBlockchainWalletMessageResponse>
        > {
            return client.get(
                `/instances/${instanceId}/receivers/${receiverId}/blockchain-wallets/sign-message`
            );
        },
        get({
            instanceId,
            receiverId,
            id,
        }: GetBlockchainWalletInput): Promise<BlindpayApiResponse<BlockchainWallet>> {
            return client.get(
                `/instances/${instanceId}/receivers/${receiverId}/blockchain-wallets/${id}`
            );
        },
        delete({
            instanceId,
            receiverId,
            id,
        }: DeleteBlockchainWalletInput): Promise<BlindpayApiResponse<void>> {
            return client.delete(
                `/instances/${instanceId}/receivers/${receiverId}/blockchain-wallets/${id}`
            );
        },
        createAssetTrustline({
            instanceId,
            body,
        }: CreateAssetTrustlineInput): Promise<BlindpayApiResponse<CreateAssetTrustlineResponse>> {
            return client.post(`/instances/${instanceId}/create-asset-trustline`, body);
        },
        mintUsdbStellar({
            instanceId,
            body,
        }: MintUsdbStellarInput): Promise<BlindpayApiResponse<void>> {
            return client.post(`/instances/${instanceId}/mint-usdb-stellar`, body);
        },
    };
}
