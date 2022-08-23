import {
  POST_FAMILY_URL,
  GET_FAMILY_VALIDATE_URL,
  PATCH_FAMILY_INFO_URL,
  GET_FAMILY_URL,
  DELETE_FAMILY_URL,
  PUT_FAMILY_URL,
} from "../../common/Constant/API";

import axios from "axios";

/**
 * axios 'withCredentials' property is set to true as a default
 *
 * import { GET_HEADER_OPTION } from "../../common/Constant/API";
 */
axios.defaults.withCredentials = true;

/**
 * ### 가족 생성
 * - POST
 * - creates family with request body
 * - returns created data of family with @familyId and request body
 * - sessionId cookie needed
 *
 * @body {family_name, cover_image, bio, password}
 * @data {id, family_name, cover_image, bio, password, created_at, updated_at}
 */
export const postFamily = async (body) => {
  const { data } = await axios.post(POST_FAMILY_URL(), body);
  return data;
};

/**
 * ### 가족 참여 전 가족 정보 보여주기
 * - GET
 * - returns data of family with @familyId
 * - NO sessionId cookie needed
 *
 * @familyId
 * @data {family_name, cover_image, bio, members}
 */
export const getValidateFamily = async (familyId) => {
  const { data } = await axios.get(GET_FAMILY_VALIDATE_URL(familyId));
  return data;
};

/**
 * ### 가족 비밀번호 검증 및 유저 정보 업데이트
 * - PATCH
 * - update data of family with @familyId
 * - if password is correct, "is_participant" is set to true
 * - returns true if password is correct
 * - sessionId cookie needed
 *
 * @familyId
 * @body {password}
 * @data
 */
export const updateFamilyInfo = async (familyId, body) => {
  const { data } = await axios.patch(PATCH_FAMILY_INFO_URL(familyId), body);
  return data;
};

/**
 * ### 가족 조회
 * - GET
 * - returns data of family with @familyId
 * - sessionId cookie needed
 *
 * @familyId
 * @data {family_name, cover_image, bio, members}
 */
export const getFamily = async (familyId) => {
  const { data } = await axios.get(GET_FAMILY_URL(familyId));
  return data;
};

/**
 * ### 가족 삭제
 * - DELETE
 * - deletes family with @familyId
 * - returns true if deletion is success
 * - sessionId cookie needed
 *
 * @familyId
 * @data
 */
export const deleteFamily = async (familyId) => {
  const { data } = await axios.delete(DELETE_FAMILY_URL(familyId));
  return data;
};

/**
 * ### 가족 수정
 * - PUT
 * - edits data of family with @familyId
 * - returns data of album that is edited
 *   - password returned is hashed with *bcrypt*
 * - sessionId cookie needed
 *
 * @familyId
 * @body {family_id, family_name, cover_image, bio, password}
 * @data {family_id, family_name, cover_image, bio, password}
 */
export const putFamily = async (familyId, body) => {
  const { data } = await axios.put(PUT_FAMILY_URL(familyId), body);
  return data;
};
