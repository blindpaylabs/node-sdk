import type {
    BlindpayApiResponse,
    PaginationMetadata,
    PaginationParams,
    WebhookEndpoint,
    WebhookEventType,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListWebhookEndpointsInput = {
    instanceId: string;
    params?: PaginationParams;
};

export type ListWebhookEndpointsResponse = {
    data: WebhookEndpoint[];
    metadata: PaginationMetadata;
};

export type CreateWebhookEndpointInput = {
    instanceId: string;
    body: {
        url: string;
        events: WebhookEventType[];
    };
};

export type GetWebhookEndpointInput = {
    instanceId: string;
    webhookEndpointId: string;
};

export type UpdateWebhookEndpointInput = {
    instanceId: string;
    webhookEndpointId: string;
    body: {
        url?: string;
        events?: WebhookEventType[];
        is_active?: boolean;
    };
};

export type DeleteWebhookEndpointInput = {
    instanceId: string;
    webhookEndpointId: string;
};

export function createWebhookEndpointsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListWebhookEndpointsInput): Promise<BlindpayApiResponse<ListWebhookEndpointsResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params as any).toString()}` : "";
            return client.get<ListWebhookEndpointsResponse>(
                `/instances/${instanceId}/webhook_endpoints${queryParams}`
            );
        },

        create({
            instanceId,
            body,
        }: CreateWebhookEndpointInput): Promise<BlindpayApiResponse<WebhookEndpoint>> {
            return client.post<WebhookEndpoint>(`/instances/${instanceId}/webhook_endpoints`, body);
        },

        get({
            instanceId,
            webhookEndpointId,
        }: GetWebhookEndpointInput): Promise<BlindpayApiResponse<WebhookEndpoint>> {
            return client.get<WebhookEndpoint>(
                `/instances/${instanceId}/webhook_endpoints/${webhookEndpointId}`
            );
        },

        update({
            instanceId,
            webhookEndpointId,
            body,
        }: UpdateWebhookEndpointInput): Promise<BlindpayApiResponse<WebhookEndpoint>> {
            return client.patch<WebhookEndpoint>(
                `/instances/${instanceId}/webhook_endpoints/${webhookEndpointId}`,
                body
            );
        },

        delete({
            instanceId,
            webhookEndpointId,
        }: DeleteWebhookEndpointInput): Promise<BlindpayApiResponse<void>> {
            return client.delete<void>(
                `/instances/${instanceId}/webhook_endpoints/${webhookEndpointId}`
            );
        },
    };
}
