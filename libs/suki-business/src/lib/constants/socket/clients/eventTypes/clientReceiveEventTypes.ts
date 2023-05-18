enum ClientReceiveEventTypes {
  ACTION_RESPONSE = "ACTION_RESPONSE",
  COMPOSITION_CREATED_IN_NOTEPAD = "COMPOSITION_CREATED_IN_NOTEPAD",
  COMPOSITION_OR_NOTE_RESPONSE = "COMPOSITION_OR_NOTE_RESPONSE",
  COMPOSITION_UPDATED = "COMPOSITION_UPDATED",
  COPY_FORWARD_SECTION = "COPY_FORWARD_SECTION",
  CREATE_COMPOSITION_ACKNOWLEDGEMENT = "CREATE_COMPOSITION_ACKNOWLEDGEMENT",
  INTENT = "INTENT",
  IS_COMPOSITION_CREATED = "IS_COMPOSITION_CREATED",
  NOTIFICATION = "NOTIFICATION",
  NO_MATCHING_SECTION_FOUND_FOR_MACRO = "NO_MATCHING_SECTION_FOUND_FOR_MACRO",
  NO_SECTION_IN_FOCUS_FOR_ANY_SECTION_MACRO = "NO_SECTION_IN_FOCUS_FOR_ANY_SECTION_MACRO",
  RESOURCE_EXHAUSTED_ERROR = "RESOURCE_EXHAUSTED_ERROR",
  S2_CONNECTION_FAILURE = "S2_CONNECTION_FAILURE",
  S2_ERROR = "S2_ERROR",
  SAME_SECTION_NAME_ADDED = "SAME_SECTION_NAME_ADDED",
  SCRIPT_CHANGE_SECTION = "SCRIPT_CHANGE_SECTION",
  SCRIPT_INSERT_SUCCESS = "SCRIPT_INSERT_SUCCESS",
  SECTION_ADD_RESPONSE = "SECTION_ADD_RESPONSE",
  SECTION_DELETE_RESPONSE = "SECTION_DELETE_RESPONSE",
  SECTION_RESPONSE_TYPE = "SECTION_RESPONSE_TYPE",
  SECTION_UPDATE = "SECTION_UPDATE",
  SERVER_SUBMIT_COMPOSITION_RESPONSE = "SERVER_SUBMIT_COMPOSITION_RESPONSE",
  TRANSFER_TO_CURSOR = "TRANSFER_TO_CURSOR",
  TURN_OFF_AGENT = "TURN_OFF_AGENT",
  TURN_ON_AGENT = "TURN_ON_AGENT",
  UNDO = "UNDO",
  UNDO_LAST_UPDATE = "UNDO_LAST_UPDATE",
  UPDATE_PATIENT = "UPDATE_PATIENT"
}

export { ClientReceiveEventTypes };
