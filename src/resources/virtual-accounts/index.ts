import type {
    BlindpayApiResponse,
    PaginationMetadata,
    PaginationParams,
    VirtualAccount,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListVirtualAccountsInput = {
    instanceId: string;
    params?: PaginationParams & {
        receiver_id?: string;
    };
};

export type ListVirtualAccountsResponse = {
    data: VirtualAccount[];
    metadata: PaginationMetadata;
};

export type CreateVirtualAccountInput = {
    instanceId: string;
    body: {
        receiver_id: string;
    };
};

export type GetVirtualAccountInput = {
    instanceId: string;
    virtualAccountId: string;
};

export function createVirtualAccountsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListVirtualAccountsInput): Promise<BlindpayApiResponse<ListVirtualAccountsResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListVirtualAccountsResponse>(
                `/instances/${instanceId}/virtual_accounts${queryParams}`
            );
        },

        create({
            instanceId,
            body,
        }: CreateVirtualAccountInput): Promise<BlindpayApiResponse<VirtualAccount>> {
            return client.post<VirtualAccount>(`/instances/${instanceId}/virtual_accounts`, body);
        },

        get({
            instanceId,
            virtualAccountId,
        }: GetVirtualAccountInput): Promise<BlindpayApiResponse<VirtualAccount>> {
            return client.get<VirtualAccount>(
                `/instances/${instanceId}/virtual_accounts/${virtualAccountId}`
            );
        },
    };
}
