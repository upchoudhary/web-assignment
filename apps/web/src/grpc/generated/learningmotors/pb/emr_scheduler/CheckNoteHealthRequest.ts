// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  User as _learningmotors_pb_emraccounts_User,
  User__Output as _learningmotors_pb_emraccounts_User__Output
} from "../../../learningmotors/pb/emraccounts/User";

export interface CheckNoteHealthRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  emr_user?: _learningmotors_pb_emraccounts_User | null;
}

export interface CheckNoteHealthRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  emr_user: _learningmotors_pb_emraccounts_User__Output | null;
}
