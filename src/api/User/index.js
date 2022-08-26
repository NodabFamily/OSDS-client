import {
  POST_USER_URL,
  GET_USER_URL,
  DELETE_USER_URL,
  PUT_USER_URL,
  LOGIN_USER_URL,
  LOGOUT_USER_URL,
} from "../../common/Constant/API";

import axios from "axios";

/**
 * axios 'withCredentials' property is set to true as a default
 *
 * import { GET_HEADER_OPTION } from "../../common/Constant/API";
 */
axios.defaults.withCredentials = true;

/**
 * ### 회원 가입
 * - POST
 * - creates user with request body
 * - returns created data of user without "password"
 * - NO sessionId cookie needed
 *
 * @body {username, password, name, birth, bio, avatar, nickname, is_participant}
 * @data {id, username, name, birth, bio, avatar, nickname, is_participant}
 */
export const postSignUpUser = (body) => {
  const data = axios.post(POST_USER_URL(), body);
  return data;
};

/**
 * ### 유저 조회
 * - GET
 * - returns data of user without "password"
 * - NO sessionId cookie needed
 *
 * @userId
 * @data {id, username, name, birth, bio, avatar, nickname, is_participant}
 */
export const getUser = (userId) => {
  const data = axios.get(GET_USER_URL(userId));
  return data;
};

/**
 * ### 유저 삭제
 * - DELETE
 * - deletes user with @userId
 * - returns deleted data of user without "password"
 * - NO sessionId cookie needed
 *
 * @userId
 * @data {id, username, name, birth, bio, avatar, nickname, is_participant}
 */
export const deleteUser = async (userId) => {
  const data = await axios.delete(DELETE_USER_URL(userId));
  return data;
};

/**
 * ### 유저 수정
 * - PUT
 * - edits user with @userId
 *   - NOT ALLOWED TO EDIT "password", "is_participant"
 * - returns deleted data of user without "password"
 * - NO sessionId cookie needed
 *
 * @userId
 * @body {id, username, name, birth, bio, avatar, nickname}
 * @data {id, username, name, birth, bio, avatar, nickname}
 */
export const putUser = async (userId, body) => {
  const data = await axios.put(PUT_USER_URL(userId), body);
  return data;
};

/**
 * ### 로그인
 * - POST
 * - do login with @body
 * - returns logined data of user
 *  - and sessionId
 * - NO sessionId cookie needed
 *
 * @body {username, password}
 * @data {id, username, name, birth, bio, avatar, nickname, is_participant}
 */
export const loginUser = async (body) => {
  const data = await axios.post(LOGIN_USER_URL(), body);
  return data;
};

/**
 * ### 로그아웃
 * - POST
 * - do logout with @body
 *  > ***Remove the authenticated user's ID from the request and flush their session data.***
 * - returns success if logout is success
 * - sessionId cookie needed
 *
 * @body None
 * @data
 */
export const logoutUser = async (body) => {
  const data = await axios.post(LOGOUT_USER_URL(), body);
  return data;
};
