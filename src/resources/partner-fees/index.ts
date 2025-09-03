import type {
    BlindpayApiResponse,
    PaginationMetadata,
    PaginationParams,
    PartnerFee,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListPartnerFeesInput = {
    instanceId: string;
    params?: PaginationParams;
};

export type ListPartnerFeesResponse = {
    data: PartnerFee[];
    metadata: PaginationMetadata;
};

export type CreatePartnerFeeInput = {
    instanceId: string;
    body: {
        name: string;
        percentage?: number | null;
        fixed_amount?: number | null;
        min_amount?: number | null;
        max_amount?: number | null;
    };
};

export type GetPartnerFeeInput = {
    instanceId: string;
    partnerFeeId: string;
};

export type UpdatePartnerFeeInput = {
    instanceId: string;
    partnerFeeId: string;
    body: {
        name?: string;
        percentage?: number | null;
        fixed_amount?: number | null;
        min_amount?: number | null;
        max_amount?: number | null;
        is_active?: boolean;
    };
};

export type DeletePartnerFeeInput = {
    instanceId: string;
    partnerFeeId: string;
};

export function createPartnerFeesResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            params,
        }: ListPartnerFeesInput): Promise<BlindpayApiResponse<ListPartnerFeesResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListPartnerFeesResponse>(
                `/instances/${instanceId}/partner_fees${queryParams}`
            );
        },

        create({
            instanceId,
            body,
        }: CreatePartnerFeeInput): Promise<BlindpayApiResponse<PartnerFee>> {
            return client.post<PartnerFee>(`/instances/${instanceId}/partner_fees`, body);
        },

        get({
            instanceId,
            partnerFeeId,
        }: GetPartnerFeeInput): Promise<BlindpayApiResponse<PartnerFee>> {
            return client.get<PartnerFee>(`/instances/${instanceId}/partner_fees/${partnerFeeId}`);
        },

        update({
            instanceId,
            partnerFeeId,
            body,
        }: UpdatePartnerFeeInput): Promise<BlindpayApiResponse<PartnerFee>> {
            return client.patch<PartnerFee>(
                `/instances/${instanceId}/partner_fees/${partnerFeeId}`,
                body
            );
        },

        delete({
            instanceId,
            partnerFeeId,
        }: DeletePartnerFeeInput): Promise<BlindpayApiResponse<void>> {
            return client.delete<void>(`/instances/${instanceId}/partner_fees/${partnerFeeId}`);
        },
    };
}
