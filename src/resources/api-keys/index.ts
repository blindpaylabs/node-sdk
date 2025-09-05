import type {
    BlindpayApiResponse,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

type ApiKey = {
    id: string;
    name: string;
    permission: "full_access";
    token: string;
    ip_whitelist?: string[];
    unkey_id: string;
    last_used_at: string | null;
    instance_id: string;
    created_at: string;
    updated_at: string;
}

export type ListApiKeysInput = {
    instanceId: string;
};

export type ListApiKeysResponse = ApiKey[]

export type CreateApiKeyInput = {
    instanceId: string;
    body: {
        name: string;
        permission: "full_access";
        ip_whitelist?: string[];
    };
};

export type CreateApiKeyResponse = {
    id: string;
    token: string;
}

export type GetApiKeyInput = {
    instanceId: string;
    id: string;
};

export type GetApiKeyResponse = ApiKey

export type DeleteApiKeyInput = {
    instanceId: string;
    id: string;
};

export type InitiateTosInput = {
    instanceId: string;
    body: {
        idempotency_key: string;
    }
};

export type InitiateTosResponse = {
    url: string;
}

export type AcceptTosInput = {
    body: {
    idempotency_key: string;
        session_token: string;
    }
};

export type AcceptTosResponse = {
    tos_id: string;
};

export function createApiKeysResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
        }: ListApiKeysInput): Promise<BlindpayApiResponse<ListApiKeysResponse>> {
            return client.get<ListApiKeysResponse>(
                `/instances/${instanceId}/api-keys`
            );
        },
        create({ instanceId, body }: CreateApiKeyInput): Promise<BlindpayApiResponse<CreateApiKeyResponse>> {
            return client.post(`/instances/${instanceId}/api-keys`, body);
        },
        get({ instanceId, id }: GetApiKeyInput): Promise<BlindpayApiResponse<GetApiKeyResponse>> {
            return client.get(`/instances/${instanceId}/api_keys/${id}`);
        },
        delete({ instanceId, id }: DeleteApiKeyInput): Promise<BlindpayApiResponse<void>> {
            return client.delete(`/instances/${instanceId}/api-keys/${id}`);
        },
        initiateTos({ instanceId, body }: InitiateTosInput): Promise<BlindpayApiResponse<InitiateTosResponse>> {
            return client.post(`/e/instances/${instanceId}/tos`, body);
        },
        acceptTos({ body }: AcceptTosInput): Promise<BlindpayApiResponse<AcceptTosResponse>> {
            return client.put(`/e/tos`, body);
        },
    };
}
