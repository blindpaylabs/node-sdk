import type {
    BlindpayApiResponse,
    Instance,
    PaginationMetadata,
    PaginationParams,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListInstancesInput = {
    params?: PaginationParams;
};

export type ListInstancesResponse = {
    data: Instance[];
    metadata: PaginationMetadata;
};

export type CreateInstanceInput = {
    body: {
        name: string;
        description?: string | null;
        webhook_url?: string | null;
    };
};

export type GetInstanceInput = {
    instanceId: string;
};

export type UpdateInstanceInput = {
    instanceId: string;
    body: {
        name?: string;
        description?: string | null;
        webhook_url?: string | null;
        is_active?: boolean;
    };
};

export function createInstancesResource(client: InternalApiClient) {
    return {
        list({
            params,
        }: ListInstancesInput = {}): Promise<BlindpayApiResponse<ListInstancesResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListInstancesResponse>(`/instances${queryParams}`);
        },

        create({ body }: CreateInstanceInput): Promise<BlindpayApiResponse<Instance>> {
            return client.post<Instance>(`/instances`, body);
        },

        get({ instanceId }: GetInstanceInput): Promise<BlindpayApiResponse<Instance>> {
            return client.get<Instance>(`/instances/${instanceId}`);
        },

        update({ instanceId, body }: UpdateInstanceInput): Promise<BlindpayApiResponse<Instance>> {
            return client.patch<Instance>(`/instances/${instanceId}`, body);
        },
    };
}
