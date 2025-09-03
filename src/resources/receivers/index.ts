import type {
    Address,
    BlindpayApiResponse,
    IdentificationDocumentType,
    PaginationMetadata,
    PaginationParams,
    Receiver,
    ReceiverType,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListReceiversInput = {
    instanceId: string;
    params?: PaginationParams;
};

export type ListReceiversResponse = {
    data: Receiver[];
    metadata: PaginationMetadata;
};

export type CreateReceiverInput = {
    instanceId: string;
    body: {
        type: ReceiverType;
        email: string;
        first_name: string;
        last_name: string;
        business_name?: string | null;
        phone_number?: string | null;
        address: Address;
        identification_type?: IdentificationDocumentType | null;
        identification_value?: string | null;
        date_of_birth?: string | null;
    };
};

export type GetReceiverInput = {
    instanceId: string;
    receiverId: string;
};

export type UpdateReceiverInput = {
    instanceId: string;
    receiverId: string;
    body: {
        email?: string;
        first_name?: string;
        last_name?: string;
        business_name?: string | null;
        phone_number?: string | null;
        address?: Address;
        identification_type?: IdentificationDocumentType | null;
        identification_value?: string | null;
        date_of_birth?: string | null;
    };
};

export function createReceiversResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListReceiversInput): Promise<BlindpayApiResponse<ListReceiversResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListReceiversResponse>(
                `/instances/${instanceId}/receivers${queryParams}`
            );
        },

        create({ instanceId, body }: CreateReceiverInput): Promise<BlindpayApiResponse<Receiver>> {
            return client.post<Receiver>(`/instances/${instanceId}/receivers`, body);
        },

        get({ instanceId, receiverId }: GetReceiverInput): Promise<BlindpayApiResponse<Receiver>> {
            return client.get<Receiver>(`/instances/${instanceId}/receivers/${receiverId}`);
        },

        update({
            instanceId,
            receiverId,
            body,
        }: UpdateReceiverInput): Promise<BlindpayApiResponse<Receiver>> {
            return client.patch<Receiver>(`/instances/${instanceId}/receivers/${receiverId}`, body);
        },
    };
}
