import type { BlindpayApiResponse } from "../../../types";
import type { InternalApiClient } from "../../internal/api-client";

export type InstanceMemberRole =
    | "owner"
    | "admin"
    | "finance"
    | "checker"
    | "operations"
    | "developer"
    | "viewer";

export type GetInstanceMembersInput = {
    instanceId: string;
};

export type GetInstanceMembersResponse = Array<{
    id: string;
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    image_url: string;
    created_at: string;
    role: InstanceMemberRole;
}>;

export type UpdateInstanceInput = {
    instanceId: string;
    body: {
        name: string;
        receiver_invite_redirect_urL?: string;
    };
};

export type DeleteInstanceInput = {
    instanceId: string;
};

export type DeleteInstanceMemberInput = {
    instanceId: string;
    id: string;
};

export type UpdateInstanceMemberRoleInput = {
    instanceId: string;
    id: string;
    body: {
        role: InstanceMemberRole;
    };
};

export function createInstancesResource(client: InternalApiClient) {
    return {
        getMembers({
            instanceId,
        }: GetInstanceMembersInput): Promise<BlindpayApiResponse<GetInstanceMembersResponse>> {
            return client.get(`/instances/${instanceId}/members`);
        },
        update({ instanceId, body }: UpdateInstanceInput): Promise<BlindpayApiResponse<void>> {
            return client.put(`/instances/${instanceId}`, body);
        },
        delete({ instanceId }: DeleteInstanceInput): Promise<BlindpayApiResponse<void>> {
            return client.delete(`/instances/${instanceId}`);
        },
        deleteMember({
            instanceId,
            id,
        }: DeleteInstanceMemberInput): Promise<BlindpayApiResponse<void>> {
            return client.delete(`/instances/${instanceId}/members/${id}`);
        },
        updateMemberRole({
            instanceId,
            id,
            body,
        }: UpdateInstanceMemberRoleInput): Promise<BlindpayApiResponse<void>> {
            return client.put(`/instances/${instanceId}/members/${id}`, body);
        },
    };
}
