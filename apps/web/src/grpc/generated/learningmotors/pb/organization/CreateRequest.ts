// Original file: node_modules/protobufs/src/learningmotors/pb/organization/organization.proto

import type {
  Organization as _learningmotors_pb_organization_Organization,
  Organization__Output as _learningmotors_pb_organization_Organization__Output
} from "../../../learningmotors/pb/organization/Organization";

export interface CreateRequest {
  organization?: _learningmotors_pb_organization_Organization | null;
  link_to_nvoq?: boolean;
}

export interface CreateRequest__Output {
  organization: _learningmotors_pb_organization_Organization__Output | null;
  link_to_nvoq: boolean;
}
