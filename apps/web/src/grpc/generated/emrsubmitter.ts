import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  AppointmentServiceClient as _learningmotors_pb_AppointmentServiceClient,
  AppointmentServiceDefinition as _learningmotors_pb_AppointmentServiceDefinition
} from "./learningmotors/pb/AppointmentService";
import type {
  ComposerServiceClient as _learningmotors_pb_composer_ComposerServiceClient,
  ComposerServiceDefinition as _learningmotors_pb_composer_ComposerServiceDefinition
} from "./learningmotors/pb/composer/ComposerService";
import type {
  EmrNoteTypesServiceClient as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceClient,
  EmrNoteTypesServiceDefinition as _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceDefinition
} from "./learningmotors/pb/emr_notetypes/EmrNoteTypesService";
import type {
  EMRSubmitterServiceClient as _learningmotors_pb_emrsubmitter_EMRSubmitterServiceClient,
  EMRSubmitterServiceDefinition as _learningmotors_pb_emrsubmitter_EMRSubmitterServiceDefinition
} from "./learningmotors/pb/emrsubmitter/EMRSubmitterService";
import type {
  PatientServiceClient as _learningmotors_pb_patients_PatientServiceClient,
  PatientServiceDefinition as _learningmotors_pb_patients_PatientServiceDefinition
} from "./learningmotors/pb/patients/PatientService";
import type {
  DiagnosisServiceClient as _suki_pb_diagnosis_DiagnosisServiceClient,
  DiagnosisServiceDefinition as _suki_pb_diagnosis_DiagnosisServiceDefinition
} from "./suki/pb/diagnosis/DiagnosisService";
import type {
  MsPatientChartsClient as _suki_pb_patientcharts_MsPatientChartsClient,
  MsPatientChartsDefinition as _suki_pb_patientcharts_MsPatientChartsDefinition
} from "./suki/pb/patientcharts/MsPatientCharts";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  Content: MessageTypeDefinition;
  SectionContent: MessageTypeDefinition;
  TextSource: EnumTypeDefinition;
  google: {
    protobuf: {
      Any: MessageTypeDefinition;
      Empty: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      Appointment: MessageTypeDefinition;
      AppointmentService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_AppointmentServiceClient> & {
        service: _learningmotors_pb_AppointmentServiceDefinition;
      };
      BackfillAppointmentDataRequest: MessageTypeDefinition;
      CreateOrUpdateAppointmentRequest: MessageTypeDefinition;
      CreateOrUpdateAppointmentResponse: MessageTypeDefinition;
      DeleteAppointmentsRequest: MessageTypeDefinition;
      GetAppointmentFromEMRRequest: MessageTypeDefinition;
      GetAppointmentFromEMRResponse: MessageTypeDefinition;
      GetAppointmentsRequest: MessageTypeDefinition;
      GetAppointmentsResponse: MessageTypeDefinition;
      GetMostRecentAppointmentRequest: MessageTypeDefinition;
      GetMostRecentAppointmentResponse: MessageTypeDefinition;
      MoveCompositionToNewAppointmentRequest: MessageTypeDefinition;
      MoveCompositionToNewAppointmentResponse: MessageTypeDefinition;
      PageRequest: MessageTypeDefinition;
      PageResponse: MessageTypeDefinition;
      UpdateAppointmentCompositionRequest: MessageTypeDefinition;
      UpdateAppointmentCompositionResponse: MessageTypeDefinition;
      address: {
        Address: MessageTypeDefinition;
      };
      common: {
        Person: MessageTypeDefinition;
      };
      composer: {
        Actor: EnumTypeDefinition;
        AddSectionRequest: MessageTypeDefinition;
        AddSectionResponse: MessageTypeDefinition;
        Author: MessageTypeDefinition;
        ComposerService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_composer_ComposerServiceClient> & {
          service: _learningmotors_pb_composer_ComposerServiceDefinition;
        };
        Composition: MessageTypeDefinition;
        CompositionUpdateEvent: MessageTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        Cursor: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        DeleteSectionRequest: MessageTypeDefinition;
        DetailedDisplay: MessageTypeDefinition;
        DiagnosisEntry: MessageTypeDefinition;
        EMRStatus: MessageTypeDefinition;
        Footer: MessageTypeDefinition;
        GetCompositionOrNoteRequest: MessageTypeDefinition;
        GetCompositionOrNoteResponse: MessageTypeDefinition;
        GetNeedsReviewNoScopeRequest: MessageTypeDefinition;
        GetNeedsReviewRequest: MessageTypeDefinition;
        GetNeedsReviewResponse: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        GetSectionsRequest: MessageTypeDefinition;
        GetSectionsResponse: MessageTypeDefinition;
        GetVersionedRequest: MessageTypeDefinition;
        GetVersionedResponse: MessageTypeDefinition;
        Metadata: MessageTypeDefinition;
        MetadataEntry: MessageTypeDefinition;
        MigrateCompositionsInput: MessageTypeDefinition;
        PartialDictation: MessageTypeDefinition;
        Section: MessageTypeDefinition;
        SectionContentFormat: EnumTypeDefinition;
        SectionEntries: MessageTypeDefinition;
        SectionEntry: MessageTypeDefinition;
        SectionS2: MessageTypeDefinition;
        SectionS2Entries: MessageTypeDefinition;
        SectionS2Entry: MessageTypeDefinition;
        SectionUpdateEvent: MessageTypeDefinition;
        Source: MessageTypeDefinition;
        SubmitRequest: MessageTypeDefinition;
        SubmitResponse: MessageTypeDefinition;
        Tag: MessageTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
        VersionedComposition: MessageTypeDefinition;
      };
      emr_notetypes: {
        CreateOrUpdateRequest: MessageTypeDefinition;
        CreateOrUpdateResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        EmrNoteType: MessageTypeDefinition;
        EmrNoteTypesService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceClient
        > & { service: _learningmotors_pb_emr_notetypes_EmrNoteTypesServiceDefinition };
        GetDefaultNoteTypeRequest: MessageTypeDefinition;
        GetDefaultNoteTypeResponse: MessageTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        SetDefaultNoteTypeRequest: MessageTypeDefinition;
        SpecialtyType: EnumTypeDefinition;
      };
      emrsubmitter: {
        EMRSubmitterService: SubtypeConstructor<
          typeof grpc.Client,
          _learningmotors_pb_emrsubmitter_EMRSubmitterServiceClient
        > & { service: _learningmotors_pb_emrsubmitter_EMRSubmitterServiceDefinition };
        OrderMedicationRequest: MessageTypeDefinition;
        OrderMedicationResponse: MessageTypeDefinition;
        SubmitCompositionRequest: MessageTypeDefinition;
        SubmitCompositionResponse: MessageTypeDefinition;
      };
      emrtypes: {
        EMRSecondaryType: EnumTypeDefinition;
        EMRType: EnumTypeDefinition;
      };
      patients: {
        AddToPatientListRequest: MessageTypeDefinition;
        AddToPatientListResponse: MessageTypeDefinition;
        CreateOrUpdatePatientsRequest: MessageTypeDefinition;
        CreateOrUpdatePatientsResponse: MessageTypeDefinition;
        DeletePatientsRequest: MessageTypeDefinition;
        GetPatientListRequest: MessageTypeDefinition;
        GetPatientListResponse: MessageTypeDefinition;
        GetPatientsRequest: MessageTypeDefinition;
        GetPatientsResponse: MessageTypeDefinition;
        Patient: MessageTypeDefinition;
        PatientList: MessageTypeDefinition;
        PatientService: SubtypeConstructor<typeof grpc.Client, _learningmotors_pb_patients_PatientServiceClient> & {
          service: _learningmotors_pb_patients_PatientServiceDefinition;
        };
        RemoveFromPatientListRequest: MessageTypeDefinition;
        RemoveFromPatientListResponse: MessageTypeDefinition;
        SearchPatientsRequest: MessageTypeDefinition;
        SearchPatientsResponse: MessageTypeDefinition;
      };
      scope: {
        Scope: MessageTypeDefinition;
      };
      textmarkuptag: {
        TextMarkupTag: MessageTypeDefinition;
      };
      user: {
        ActivateRequest: MessageTypeDefinition;
        Consent: MessageTypeDefinition;
        CreateRequest: MessageTypeDefinition;
        CreateResponse: MessageTypeDefinition;
        CreateUserRegistrationRequest: MessageTypeDefinition;
        CreateUserRegistrationResponse: MessageTypeDefinition;
        CreateWithPasswordRequest: MessageTypeDefinition;
        CreateWithPasswordResponse: MessageTypeDefinition;
        DeleteRequest: MessageTypeDefinition;
        DeleteUserRegistrationRequest: MessageTypeDefinition;
        EnhancedReviewOption: EnumTypeDefinition;
        GetRequest: MessageTypeDefinition;
        GetResponse: MessageTypeDefinition;
        GetUserRegistrationsRequest: MessageTypeDefinition;
        GetUserRegistrationsResponse: MessageTypeDefinition;
        RegisterMarketplaceUserRequest: MessageTypeDefinition;
        RegisterMarketplaceUserResponse: MessageTypeDefinition;
        RegisterRequest: MessageTypeDefinition;
        RegisterStage: EnumTypeDefinition;
        Role: MessageTypeDefinition;
        SendDemoEmailRequest: MessageTypeDefinition;
        SendGcpUsageMetricsRequest: MessageTypeDefinition;
        SendGcpUsageMetricsResponse: MessageTypeDefinition;
        SendVerificationEmailRequest: MessageTypeDefinition;
        Specialty: EnumTypeDefinition;
        SubscriptionStatus: EnumTypeDefinition;
        UpdateRegistrationStageRequest: MessageTypeDefinition;
        UpdateRequest: MessageTypeDefinition;
        UpdateResponse: MessageTypeDefinition;
        User: MessageTypeDefinition;
        UserConsent: MessageTypeDefinition;
        UserRegistration: MessageTypeDefinition;
        ValidateVerificationTokenRequest: MessageTypeDefinition;
        ValidateVerificationTokenResponse: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      accounts: {
        PasswordRecoveryQuestion: MessageTypeDefinition;
      };
      diagnosis: {
        Diagnosis: MessageTypeDefinition;
        DiagnosisService: SubtypeConstructor<typeof grpc.Client, _suki_pb_diagnosis_DiagnosisServiceClient> & {
          service: _suki_pb_diagnosis_DiagnosisServiceDefinition;
        };
        DiagnosisWithChildren: MessageTypeDefinition;
        ExistingDiagnosis: MessageTypeDefinition;
        GetHCCSuggestionsRequest: MessageTypeDefinition;
        GetHCCSuggestionsResponse: MessageTypeDefinition;
        HCCSuggestion: MessageTypeDefinition;
        ICD10EDGMapping: MessageTypeDefinition;
        LookupEDGRequest: MessageTypeDefinition;
        LookupEDGResponse: MessageTypeDefinition;
        SearchMLRequest: MessageTypeDefinition;
        SearchMLResponse: MessageTypeDefinition;
        SuggestionType: EnumTypeDefinition;
      };
      emr: {
        Destination: EnumTypeDefinition;
        Section: MessageTypeDefinition;
        SubmissionInformation: MessageTypeDefinition;
        SubmissionStatus: MessageTypeDefinition;
        SubmissionWarning: MessageTypeDefinition;
      };
      patientcharts: {
        Dosage: MessageTypeDefinition;
        DynamicChartData: MessageTypeDefinition;
        DynamicDataType: EnumTypeDefinition;
        EncounterDiagnoses: MessageTypeDefinition;
        EncounterDiagnosesList: MessageTypeDefinition;
        EncounterDiagnosisObject: MessageTypeDefinition;
        GetDynamicChartsDataRequest: MessageTypeDefinition;
        GetDynamicChartsDataResponse: MessageTypeDefinition;
        GetEncounterDiagnosesRequest: MessageTypeDefinition;
        GetEncounterDiagnosesResponse: MessageTypeDefinition;
        GetEncounterDiagnosesSectionsRequest: MessageTypeDefinition;
        GetEncounterDiagnosesSectionsResponse: MessageTypeDefinition;
        GetMedicationsRequest: MessageTypeDefinition;
        GetMedicationsResponse: MessageTypeDefinition;
        GetProblemListRequest: MessageTypeDefinition;
        GetProblemListResponse: MessageTypeDefinition;
        Medication: MessageTypeDefinition;
        MedicationList: MessageTypeDefinition;
        MedicationStructuredSig: MessageTypeDefinition;
        MsPatientCharts: SubtypeConstructor<typeof grpc.Client, _suki_pb_patientcharts_MsPatientChartsClient> & {
          service: _suki_pb_patientcharts_MsPatientChartsDefinition;
        };
        ProblemList: MessageTypeDefinition;
        ProblemObject: MessageTypeDefinition;
        RefreshDynamicDataType: EnumTypeDefinition;
        StoreMedicationsRequest: MessageTypeDefinition;
        SyncChartsDataRequest: MessageTypeDefinition;
        SyncChartsDataResponse: MessageTypeDefinition;
        SyncDynamicChartsDataRequest: MessageTypeDefinition;
        SyncDynamicChartsDataResponse: MessageTypeDefinition;
        SyncEMRNoteRequest: MessageTypeDefinition;
        SyncEMRNoteResponse: MessageTypeDefinition;
        UpsertEncounterDiagnosesRequest: MessageTypeDefinition;
        UpsertEncounterDiagnosesResponse: MessageTypeDefinition;
        UpsertProblemListRequest: MessageTypeDefinition;
        UpsertProblemListResponse: MessageTypeDefinition;
      };
      platform: {
        ClientType: EnumTypeDefinition;
      };
    };
  };
}
