import type {
    BlindpayApiResponse,
    Currency,
    CurrencyType,
    Network,
    StablecoinToken,
    TransactionDocumentType,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type CreatePayinQuoteInput = {
    instanceId: string;

    bank_account_id: string;
    currency_type: CurrencyType;
    network: Network;
    request_amount: number;
    token: StablecoinToken;
    cover_fees: boolean;
    description: string | null;
    partner_fee_id: string | null;
    transaction_document_file: string | null;
    transaction_document_id: string | null;
    transaction_document_type: TransactionDocumentType | null;
};

export type CreatePayinQuoteResponse = {
    id: string;
    expires_at: number;
    commercial_quotation: number;
    blindpay_quotation: number;
    receiver_amount: number;
    sender_amount: number;
    partner_fee_amount: number | null;
    flat_fee: number | null;
    contract: {
        abi: Record<string, unknown>;
    };
    address: string;
    functionName: "approve";
    blindpayContractAddress: string;
    amount: string;
    network: {
        name: Network;
        chainId: number;
    };
    reicever_local_amount: number | null;
    description: string | null;
};

export type GetPayinFxRateResponse = {
    blindpay_quotation: number;
    commercial_quotation: number;
    instance_flat_fee: number;
    instance_percentage_fee: number;
};

export type GetPayinFxRateInput = {
    instanceId: string;

    currency: CurrencyType;
    from: Currency;
    to: Currency;
    request_amount: number;
};

export function createPayinQuotesResource(client: InternalApiClient) {
    return {
        create({
            instanceId, 
            ...data
        }: CreatePayinQuoteInput): Promise<BlindpayApiResponse<CreatePayinQuoteResponse>> {
            return client.post(`/instances/${instanceId}/payin-quotes`, data);
        },
        getFxRate({
            instanceId,
            ...data
        }: GetPayinFxRateInput): Promise<BlindpayApiResponse<GetPayinFxRateResponse>> {
            return client.post(`/instances/${instanceId}/payin-quotes/fx`, data);
        },
    };
}
