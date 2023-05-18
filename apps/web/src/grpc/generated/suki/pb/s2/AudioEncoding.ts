// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_AudioEncoding_Type {
  ENCODING_UNSPECIFIED = 0,
  LINEAR16 = 1,
  FLAC = 2,
  MULAW = 3,
  AMR = 4,
  AMR_WB = 5,
  OGG_OPUS = 6
}

export interface AudioEncoding {
  type?: _suki_pb_s2_AudioEncoding_Type | keyof typeof _suki_pb_s2_AudioEncoding_Type;
  sample_rate_hertz?: number;
}

export interface AudioEncoding__Output {
  type: keyof typeof _suki_pb_s2_AudioEncoding_Type;
  sample_rate_hertz: number;
}
