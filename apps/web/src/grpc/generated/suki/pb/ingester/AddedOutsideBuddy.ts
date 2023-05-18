// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type { AddStatus as _suki_pb_ingester_AddStatus } from "../../../suki/pb/ingester/AddStatus";

export interface AddedOutsideBuddy {
  project_id?: string;
  buddy_user_id?: string;
  status?: _suki_pb_ingester_AddStatus | keyof typeof _suki_pb_ingester_AddStatus;
  error?: string;
}

export interface AddedOutsideBuddy__Output {
  project_id: string;
  buddy_user_id: string;
  status: keyof typeof _suki_pb_ingester_AddStatus;
  error: string;
}
