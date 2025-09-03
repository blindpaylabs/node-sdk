import type {
    BlindpayApiResponse,
    Network,
    PaginationMetadata,
    PaginationParams,
    Payin,
    PayinStatus,
    StablecoinToken,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListPayinsInput = {
    instanceId: string;
    params?: PaginationParams & {
        quote_id?: string;
        status?: PayinStatus;
        network?: Network;
        token?: StablecoinToken;
    };
};

export type ListPayinsResponse = {
    data: Payin[];
    metadata: PaginationMetadata;
};

export type CreatePayinInput = {
    instanceId: string;
    body: {
        quote_id: string;
        sender_address: string;
        receiver_address: string;
        amount: number;
        token: StablecoinToken;
        network: Network;
        description?: string | null;
    };
};

export type GetPayinInput = {
    instanceId: string;
    payinId: string;
};

export function createPayinsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListPayinsInput): Promise<BlindpayApiResponse<ListPayinsResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListPayinsResponse>(`/instances/${instanceId}/payins${queryParams}`);
        },

        create({ instanceId, body }: CreatePayinInput): Promise<BlindpayApiResponse<Payin>> {
            return client.post<Payin>(`/instances/${instanceId}/payins`, body);
        },

        get({ instanceId, payinId }: GetPayinInput): Promise<BlindpayApiResponse<Payin>> {
            return client.get<Payin>(`/instances/${instanceId}/payins/${payinId}`);
        },
    };
}
