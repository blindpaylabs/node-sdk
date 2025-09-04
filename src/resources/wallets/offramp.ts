import type {
    BlindpayApiResponse,
    OfframpWallet,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListOfframpWalletsInput = {
    instanceId: string;
    receiverId: string;
    bankAccountId: string;
};

export type ListOfframpWalletsResponse = Array<OfframpWallet>

export type CreateOfframpWalletInput = {
    receiverId: string;
    instanceId: string;
    bankAccountId: string;
    body: {
        external_id: string;
        network: 'tron';
    };
};

export type CreateOfframpWalletResponse = {
    id: string;
    external_id: string;
    network: 'tron';
    address: string;
}

export type GetOfframpWalletInput = {
    receiverId: string;
    instanceId: string;
    bankAccountId: string;
    id: string;
};

export function createOfframpWalletsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
        }: ListOfframpWalletsInput): Promise<BlindpayApiResponse<ListOfframpWalletsResponse>> {
            return client.get(
                `/instances/${instanceId}/offramp_wallets`
            );
        },
        create({
            receiverId,
            instanceId,
            bankAccountId,
            body,
        }: CreateOfframpWalletInput): Promise<BlindpayApiResponse<CreateOfframpWalletResponse>> {
            return client.post(`/instances/${instanceId}/receivers/${receiverId}/bank-accounts/${bankAccountId}/offramp_wallets`, body);
        },
        get({
            receiverId,
            instanceId,
            bankAccountId,
            id,
        }: GetOfframpWalletInput): Promise<BlindpayApiResponse<OfframpWallet>> {
            return client.get(
                `/instances/${instanceId}/receivers/${receiverId}/bank-accounts/${bankAccountId}/offramp_wallets/${id}`
            );
        },
    };
}
