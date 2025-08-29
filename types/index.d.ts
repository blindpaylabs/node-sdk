export type BlindpayApiResponse<T> = BlindpayErrorResponse | BlindpaySuccessResponse<T>

export type BlindpayErrorResponse = {
    data: null
    error: unknown;
}

export type BlindpaySuccessResponse<T> = {
    error: null;
    data: T;
}