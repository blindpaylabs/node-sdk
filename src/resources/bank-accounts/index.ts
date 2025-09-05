import type {
    AccountClass,
    BankAccountType,
    BlindpayApiResponse,
    Country,
    Rail,
} from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type ListBankAccountsInput = {
    instanceId: string;
    receiverId: string;
};

export type AchCopDocumentType = "CC" | "CE" | "NIT" | "PASS" | "PEP";

export type ListBankAccountsResponse = {
    data: Array<{
        id: string;
        type: Rail;
        name: string;
        pix_key?: string;
        beneficiary_name?: string;
        routing_number?: string;
        account_number?: string;
        account_type?: BankAccountType;
        account_class?: AccountClass;
        address_line_1?: string;
        address_line_2?: string;
        city?: string;
        state_province_region?: string;
        country?: Country;
        postal_code?: string;
        spei_protocol?: string;
        spei_institution_code?: string;
        spei_clabe?: string;
        transfers_type?: "CVU" | "CBU" | "ALIAS";
        transfers_account?: string;
        ach_cop_beneficiary_first_name?: string;
        ach_cop_beneficiary_last_name?: string;
        ach_cop_document_id?: string;
        ach_cop_document_type?: AchCopDocumentType;
        ach_cop_email?: string;
        ach_cop_bank_code?: string;
        ach_cop_bank_account?: string;
        swift_code_bic?: string;
        swift_account_holder_name?: string;
        swift_account_number_iban?: string;
        swift_beneficiary_address_line_1?: string;
        swift_beneficiary_address_line_2?: string;
        swift_beneficiary_country?: Country;
        swift_beneficiary_city?: string;
        swift_beneficiary_state_province_region?: string;
        swift_beneficiary_postal_code?: string;
        swift_bank_name?: string;
        swift_bank_address_line_1?: string;
        swift_bank_address_line_2?: string;
        swift_bank_country?: Country;
        swift_bank_city?: string;
        swift_bank_state_province_region?: string;
        swift_bank_postal_code?: string;
        swift_intermediary_bank_swift_code_bic?: string;
        swift_intermediary_bank_account_number_iban?: string;
        swift_intermediary_bank_name?: string;
        swift_intermediary_bank_country?: Country;
        tron_wallet_hash?: string;
        offramp_wallets?: Array<{
            address: string;
            id: string;
            network: "tron";
            external_id: string;
        }>;
        created_at: string;
    }>;
};

export type CreateBankAccountInput = {
    instanceId: string;
    receiverId: string;
    body: {
        type: Rail;
        name: string;
        pix_key: string;
        beneficiary_name: string;
        routing_number: string;
        account_number: string;
        account_type: BankAccountType;
        account_class: AccountClass;
        address_line_1: string;
        address_line_2: string;
        city: string;
        state_province_region: string;
        postal_code: string;
        country: Country;
        checkbook_account_id: string;
        checkbook_user_key: string;
        spei_protocol: string;
        spei_institution_code: string;
        spei_clabe: string;
        transfers_type: "CVU" | "CBU" | "ALIAS";
        transfers_account: string;
        ach_cop_beneficiary_first_name: string;
        ach_cop_beneficiary_last_name: string;
        ach_cop_document_id: string;
        ach_cop_document_type: AchCopDocumentType;
        ach_cop_email: string;
        ach_cop_bank_code: string;
        ach_cop_bank_account: string;
        swift_code_bic: string;
        swift_account_holder_name: string;
        swift_account_number_iban: string;
        swift_beneficiary_address_line_1: string;
        swift_beneficiary_address_line_2: string;
        swift_beneficiary_country: Country;
        swift_beneficiary_city: string;
        swift_beneficiary_state_province_region: string;
        swift_beneficiary_postal_code: string;
        swift_bank_name: string;
        swift_bank_address_line_1: string;
        swift_bank_address_line_2: string;
        swift_bank_country: Country;
        swift_bank_city: string;
        swift_bank_state_province_region: string;
        swift_bank_postal_code: string;
        swift_intermediary_bank_swift_code_bic: string;
        swift_intermediary_bank_account_number_iban: string;
        swift_intermediary_bank_name: string;
        swift_intermediary_bank_country: Country;
        bank_name: string;
        swift_code: string;
    };
};

export type CreateBankAccountResponse = {
    id: string;
    type: Rail;
    name: string;
    pix_key?: string;
    beneficiary_name: string;
    routing_number?: string;
    account_number?: string;
    account_type?: BankAccountType;
    account_class?: AccountClass;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state_province_region?: string;
    country?: Country;
    postal_code?: string;
    spei_protocol?: string;
    spei_institution_code?: string;
    spei_clabe?: string;
    transfers_type?: "CVU" | "CBU" | "ALIAS";
    transfers_account?: string;
    ach_cop_beneficiary_first_name?: string;
    ach_cop_beneficiary_last_name?: string;
    ach_cop_document_id?: string;
    ach_cop_document_type?: AchCopDocumentType;
    ach_cop_email?: string;
    ach_cop_bank_code?: string;
    ach_cop_bank_account?: string;
    swift_code_bic?: string;
    swift_account_holder_name?: string;
    swift_account_number_iban?: string;
    swift_beneficiary_address_line_1?: string;
    swift_beneficiary_address_line_2?: string;
    swift_beneficiary_country?: Country;
    swift_beneficiary_city?: string;
    swift_beneficiary_state_province_region?: string;
    swift_beneficiary_postal_code?: string;
    swift_bank_name?: string;
    swift_bank_address_line_1?: string;
    swift_bank_address_line_2?: string;
    swift_bank_country?: Country;
    swift_bank_city?: string;
    swift_bank_state_province_region?: string;
    swift_bank_postal_code?: string;
    swift_intermediary_bank_swift_code_bic?: string;
    swift_intermediary_bank_account_number_iban?: string;
    swift_intermediary_bank_name?: string;
    swift_intermediary_bank_country?: Country;
    tron_wallet_hash?: string;
    offramp_wallets?: Array<{
        address: string;
        id: string;
        network: "tron";
        external_id: string;
    }>;
    created_at: string;
};

export type GetBankAccountInput = {
    instanceId: string;
    receiverId: string;
    id: string;
};

export type GetBankAccountResponse = {
    id: string;
    receiver_id: string;
    account_holder_name: string;
    account_number: string;
    routing_number: string;
    account_type: BankAccountType;
    bank_name: string;
    swift_code?: string | null;
    iban?: string | null;
    is_primary: boolean;
    created_at: string;
    updated_at: string;
};

export type DeleteBankAccountInput = {
    instanceId: string;
    receiverId: string;
    id: string;
};

export function createBankAccountsResource(client: InternalApiClient) {
    return {
        list({
            instanceId,
            receiverId,
        }: ListBankAccountsInput): Promise<BlindpayApiResponse<ListBankAccountsResponse>> {
            return client.get(`/instances/${instanceId}/receivers/${receiverId}/bank-accounts`);
        },
        create({
            instanceId,
            receiverId,
            body,
        }: CreateBankAccountInput): Promise<BlindpayApiResponse<CreateBankAccountResponse>> {
            return client.post(
                `/instances/${instanceId}/receivers/${receiverId}/bank-accounts`,
                body
            );
        },
        get({
            instanceId,
            receiverId,
            id,
        }: GetBankAccountInput): Promise<BlindpayApiResponse<GetBankAccountResponse>> {
            return client.get(
                `/instances/${instanceId}/receivers/${receiverId}/bank-accounts/${id}`
            );
        },
        delete({
            instanceId,
            receiverId,
            id,
        }: DeleteBankAccountInput): Promise<BlindpayApiResponse<void>> {
            return client.delete(
                `/instances/${instanceId}/receivers/${receiverId}/bank-accounts/${id}`
            );
        },
    };
}
