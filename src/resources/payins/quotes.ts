import type {
    BlindpayApiResponse,
    Currency,
    CurrencyType,
    Network,
    StablecoinToken,
    TransactionDocumentType,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type CreateQuoteInput = {
    instanceId: string;
    body: {
        bank_account_id: string;
        currency_type: CurrencyType;
        network: Network;
        request_amount: number;
        token: StablecoinToken;
        cover_fees: boolean | null; // TODO: figure out what's the default value
        description: string | null;
        partner_fee_id: string | null;
        transaction_document_file: string | null;
        transaction_document_id: string | null;
        transaction_document_type: TransactionDocumentType | null;
    };
};

export type CreateQuoteResponse = {
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

export type GetFxRateResponse = {
    blindpay_quotation: number;
    commercial_quotation: number;
    instance_flat_fee: number;
    instance_percentage_fee: number;
};

export type GetFxRateInput = {
    instanceId: string;
    body: {
        currency: CurrencyType
        from: Currency,
        to: Currency,
        request_amount: number;
    }
}

export function createQuoteResource(client: InternalApiClient) {
    return {
        create({
            instanceId,
            body,
        }: CreateQuoteInput): Promise<BlindpayApiResponse<CreateQuoteResponse>> {
            return client.post<CreateQuoteResponse>(`/instances/${instanceId}/payin-quotes`, body);
        },
        getFxRate({
            instanceId,
            body,
        }: GetFxRateInput): Promise<BlindpayApiResponse<GetFxRateResponse>> {
            return client.post<GetFxRateResponse>(`/instances/${instanceId}/payin-quotes/fx`, body);
        },
    };
}
