export type BlindpayApiResponse<T> = BlindpayErrorResponse | BlindpaySuccessResponse<T>

export type BlindpayErrorResponse = {
    data: null
    error: unknown;
}

export type BlindpaySuccessResponse<T> = {
    error: null;
    data: T;
}

export type CurrencyType = "sender" | "receiver";

export type Network = "base" | "sepolia" | "arbitrum_sepolia" | "base_sepolia" | "arbitrum" | "polygon" | "polygon_amoy" | "ethereum" | "stellar" | "stellar_testnet" | "tron"

export type StablecoinToken = "USDC" | "USDT" | "USDB"  

export type TransactionDocumentType = "invoice" | "purchase_order" | "delivery_slip" | "contract" | "customs_declaration" | "bill_of_lading" | "others";

export type PayoutStatus = "pending" | "processing" | "completed" | "failed" | "cancelled";

export type PayinStatus = "pending" | "processing" | "completed" | "failed" | "expired";

export type ReceiverType = "business" | "individual";

export type BankAccountType = "checking" | "savings";

export type IdentificationDocumentType = "passport" | "national_id" | "driver_license" | "tax_id" | "other";

export type Currency = "USDC" | "USDT" | "USDB" | "BRL" | "USD " | "MXN" | "COP" | "ARS";

export type Rail = "wire" | "ach" | "pix" | "spei_bitso" | "transfers_bitso" | "ach_cop_bitso" | "international_swift" | "rtp";
    
export type AccountClass = "individual" | "business";
    
export type AchCopDocumentType = "CC" | "CE" | "NIT" | "PASS" | "PEP";

export type WebhookEventType = 
    | "receiver.new"
    | "receiver.updated"
    | "receiver.deleted"
    | "receiver.verified"
    | "receiver.rejected"
    | "bank_account.new"
    | "bank_account.updated"
    | "bank_account.deleted"
    | "bank_account.verified"
    | "bank_account.rejected"
    | "payout.new"
    | "payout.processing"
    | "payout.complete"
    | "payout.failed"
    | "payout.cancelled"
    | "payin.new"
    | "payin.processing"
    | "payin.complete"
    | "payin.failed"
    | "payin.expired"
    | "quote.new"
    | "quote.expired";

export type Country = 
        | "AF"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "CV"
        | "KH"
        | "CM"
        | "CA"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CD"
        | "CG"
        | "CK"
        | "CR"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "CI"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "SZ"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KP"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "MK"
        | "RO"
        | "RU"
        | "RW"
        | "RE"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "UM"
        | "US"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW"
        | "AX";

export type PaginationParams = {
    limit?: `${number}`;
    offset?: `${number}`;
    starting_after?: string;
    ending_before?: string;
}

export type PaginationMetadata = {
    has_more: boolean;
    total_count: number;
}

export type Address = {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
}

export type Receiver = {
    id: string;
    instance_id: string;
    type: ReceiverType;
    email: string;
    first_name: string;
    last_name: string;
    business_name?: string | null;
    phone_number?: string | null;
    address: Address;
    identification_type?: IdentificationDocumentType | null;
    identification_value?: string | null;
    date_of_birth?: string | null;
    created_at: string;
    updated_at: string;
}

export type BankAccount = {
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
}

export type Payout = {
    id: string;
    instance_id: string;
    receiver_id: string;
    bank_account_id: string;
    amount: number;
    currency: string;
    description?: string | null;
    reference?: string | null;
    status: PayoutStatus;
    transaction_hash?: string | null;
    network?: Network | null;
    token?: StablecoinToken | null;
    exchange_rate?: number | null;
    fee?: number | null;
    created_at: string;
    updated_at: string;
    completed_at?: string | null;
    failed_at?: string | null;
}

export type Payin = {
    id: string;
    instance_id: string;
    quote_id: string;
    sender_address: string;
    receiver_address: string;
    amount: number;
    token: StablecoinToken;
    network: Network;
    status: PayinStatus;
    transaction_hash?: string | null;
    description?: string | null;
    created_at: string;
    updated_at: string;
    completed_at?: string | null;
    failed_at?: string | null;
}

export type Instance = {
    id: string;
    name: string;
    description?: string | null;
    webhook_url?: string | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type ApiKey = {
    id: string;
    instance_id: string;
    name: string;
    key?: string; // Only returned on creation
    last_used_at?: string | null;
    created_at: string;
}

export type WebhookEndpoint = {
    id: string;
    instance_id: string;
    url: string;
    events: WebhookEventType[];
    is_active: boolean;
    secret?: string; // Only returned on creation
    created_at: string;
    updated_at: string;
}

export type BlockchainWallet = {
    id: string;
    instance_id: string;
    address: string;
    network: Network;
    label?: string | null;
    created_at: string;
}

export type PartnerFee = {
    id: string;
    instance_id: string;
    name: string;
    percentage?: number | null;
    fixed_amount?: number | null;
    min_amount?: number | null;
    max_amount?: number | null;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type TermsOfService = {
    version: string;
    content: string;
    effective_date: string;
    created_at: string;
}

export type VirtualAccount = {
    id: string;
    instance_id: string;
    receiver_id: string;
    account_number: string;
    routing_number: string;
    bank_name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export type OfframpWallet = {
    id: string;
    external_id: string;
    instance_id: string;
    receiver_id: string;
    bank_account_id: string;
    network: 'tron';
    address: string;
    created_at: string;
    updated_at: string;
}

export type AvailableBankAccount = {
    country: string;
    currency: string;
    account_types: BankAccountType[];
    required_fields: string[];
}

export type AvailableNetwork = {
    network: Network;
    is_active: boolean;
    min_amount: number;
    max_amount: number;
}

export type AvailableToken = {
    token: StablecoinToken;
    networks: Network[];
    is_active: boolean;
}