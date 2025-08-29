import { version } from "../package.json";
import { BlindpayError } from "./internal/blindpay-error";
import type { BlindpayApiResponse } from "../types";

export class Blindpay {
    private readonly baseUrl = "https://api.blindpay.com/";
    private readonly headers: Record<string, string>

    readonly apiKey: string;    

    constructor(apiKey: string) {

        if (!apiKey) {
            throw new BlindpayError("API key not provided");
        }

        this.apiKey = apiKey;
        this.headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": `blindpay-node/${version}`,
            "Authorization": `Bearer ${this.apiKey}`,
        };
    }

    async request <T>(method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH", path: string, body?: Record<string, unknown>): Promise<BlindpayApiResponse<T>> {
        try {
            const response = await fetch(`${this.baseUrl}${path}`, {
                method,
                headers: this.headers,
                body: JSON.stringify(body),
            })

            if (!response.ok) {
                const error = await response.json()

                return {
                    data: null,
                    error                }
            }

            const data = await response.json()

            return {
                data,
                error: null,
            }
        }

        catch (error) {
            if (error instanceof Error) {
                return {
                    data: null,
                    error                }
            }

           return {
            data: null,
            error,
           }
        }
    }

    async get<T>(path: string): Promise<BlindpayApiResponse<T>> {
        return this.request<T>("GET", path);
    }

    async post<T>(path: string, body?: Record<string, unknown>): Promise<BlindpayApiResponse<T>> {
        return this.request<T>("POST", path, body);
    }

    async put<T>(path: string, body?: Record<string, unknown>): Promise<BlindpayApiResponse<T>> {
        return this.request<T>("PUT", path, body);
    }

    async patch<T>(path: string, body?: Record<string, unknown>): Promise<BlindpayApiResponse<T>> {
        return this.request<T>("PATCH", path, body);
    }

    async delete<T>(path: string): Promise<BlindpayApiResponse<T>> {
        return this.request<T>("DELETE", path);
    }
}