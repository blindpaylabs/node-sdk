import type {
    BlindpayApiResponse,
    Network,
    PaginationMetadata,
    PaginationParams,
    Payout,
    PayoutStatus,
    StablecoinToken,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListPayoutsInput = {
    instanceId: string;
    params?: PaginationParams & {
        receiver_id?: string;
        bank_account_id?: string;
        status?: PayoutStatus;
    };
};

export type ListPayoutsResponse = {
    data: Payout[];
    metadata: PaginationMetadata;
};

export type CreatePayoutInput = {
    instanceId: string;
    body: {
        receiver_id: string;
        bank_account_id: string;
        amount: number;
        currency: string;
        description?: string | null;
        reference?: string | null;
        network?: Network | null;
        token?: StablecoinToken | null;
    };
};

export type GetPayoutInput = {
    instanceId: string;
    payoutId: string;
};

export function createPayoutsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListPayoutsInput): Promise<BlindpayApiResponse<ListPayoutsResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListPayoutsResponse>(
                `/instances/${instanceId}/payouts${queryParams}`
            );
        },

        create({ instanceId, body }: CreatePayoutInput): Promise<BlindpayApiResponse<Payout>> {
            return client.post<Payout>(`/instances/${instanceId}/payouts`, body);
        },

        get({ instanceId, payoutId }: GetPayoutInput): Promise<BlindpayApiResponse<Payout>> {
            return client.get<Payout>(`/instances/${instanceId}/payouts/${payoutId}`);
        },
    };
}
