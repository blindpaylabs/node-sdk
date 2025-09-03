import type {
    ApiKey,
    BlindpayApiResponse,
    PaginationMetadata,
    PaginationParams,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListApiKeysInput = {
    instanceId: string;
    params?: PaginationParams;
};

export type ListApiKeysResponse = {
    data: ApiKey[];
    metadata: PaginationMetadata;
};

export type CreateApiKeyInput = {
    instanceId: string;
    body: {
        name: string;
    };
};

export type GetApiKeyInput = {
    instanceId: string;
    apiKeyId: string;
};

export type DeleteApiKeyInput = {
    instanceId: string;
    apiKeyId: string;
};

export function createApiKeysResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListApiKeysInput): Promise<BlindpayApiResponse<ListApiKeysResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListApiKeysResponse>(
                `/instances/${instanceId}/api_keys${queryParams}`
            );
        },

        create({ instanceId, body }: CreateApiKeyInput): Promise<BlindpayApiResponse<ApiKey>> {
            return client.post<ApiKey>(`/instances/${instanceId}/api_keys`, body);
        },

        get({ instanceId, apiKeyId }: GetApiKeyInput): Promise<BlindpayApiResponse<ApiKey>> {
            return client.get<ApiKey>(`/instances/${instanceId}/api_keys/${apiKeyId}`);
        },

        delete({ instanceId, apiKeyId }: DeleteApiKeyInput): Promise<BlindpayApiResponse<void>> {
            return client.delete<void>(`/instances/${instanceId}/api_keys/${apiKeyId}`);
        },
    };
}
