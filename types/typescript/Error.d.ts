/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Triggered when an error occurred
 */
export interface Error {
  eventName: "Error";
  domain: "E2EE" | "VOIP";
  name:
    | "UnknownError"
    | "OlmIndexError"
    | "OlmKeysNotSentError"
    | "OlmUnspecifiedError"
    | "VoipUserHangup"
    | "VoipIceFailed"
    | "VoipInviteTimeout"
    | "VoipIceTimeout"
    | "VoipUserMediaFailed";
  /**
   * Context - client defined, can be used for debugging
   */
  context?: string;
}
