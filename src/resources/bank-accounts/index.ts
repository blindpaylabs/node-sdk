import type {
    BankAccount,
    BankAccountType,
    BlindpayApiResponse,
    PaginationMetadata,
    PaginationParams,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListBankAccountsInput = {
    instanceId: string;
    receiverId: string;
    params?: PaginationParams;
};

export type ListBankAccountsResponse = {
    data: BankAccount[];
    metadata: PaginationMetadata;
};

export type CreateBankAccountInput = {
    instanceId: string;
    receiverId: string;
    body: {
        account_holder_name: string;
        account_number: string;
        routing_number: string;
        account_type: BankAccountType;
        bank_name: string;
        swift_code?: string | null;
        iban?: string | null;
        is_primary?: boolean;
    };
};

export type GetBankAccountInput = {
    instanceId: string;
    receiverId: string;
    bankAccountId: string;
};

export type UpdateBankAccountInput = {
    instanceId: string;
    receiverId: string;
    bankAccountId: string;
    body: {
        account_holder_name?: string;
        account_type?: BankAccountType;
        bank_name?: string;
        swift_code?: string | null;
        iban?: string | null;
        is_primary?: boolean;
    };
};

export type DeleteBankAccountInput = {
    instanceId: string;
    receiverId: string;
    bankAccountId: string;
};

export function createBankAccountsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            receiverId,
            params,
        }: ListBankAccountsInput): Promise<BlindpayApiResponse<ListBankAccountsResponse>> {
            const queryParams = params ? `?${new URLSearchParams(params).toString()}` : "";
            return client.get<ListBankAccountsResponse>(
                `/instances/${instanceId}/receivers/${receiverId}/bank_accounts${queryParams}`
            );
        },

        create({
            instanceId,
            receiverId,
            body,
        }: CreateBankAccountInput): Promise<BlindpayApiResponse<BankAccount>> {
            return client.post<BankAccount>(
                `/instances/${instanceId}/receivers/${receiverId}/bank_accounts`,
                body
            );
        },

        get({
            instanceId,
            receiverId,
            bankAccountId,
        }: GetBankAccountInput): Promise<BlindpayApiResponse<BankAccount>> {
            return client.get<BankAccount>(
                `/instances/${instanceId}/receivers/${receiverId}/bank_accounts/${bankAccountId}`
            );
        },

        update({
            instanceId,
            receiverId,
            bankAccountId,
            body,
        }: UpdateBankAccountInput): Promise<BlindpayApiResponse<BankAccount>> {
            return client.patch<BankAccount>(
                `/instances/${instanceId}/receivers/${receiverId}/bank_accounts/${bankAccountId}`,
                body
            );
        },

        delete({
            instanceId,
            receiverId,
            bankAccountId,
        }: DeleteBankAccountInput): Promise<BlindpayApiResponse<void>> {
            return client.delete<void>(
                `/instances/${instanceId}/receivers/${receiverId}/bank_accounts/${bankAccountId}`
            );
        },
    };
}
