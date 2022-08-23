import {
  POST_ALBUM_URL,
  GET_ALBUM_URL,
  GET_ALBUM_DETAIL_URL,
  PUT_ALBUM_URL,
  DELETE_ALBUM_URL,
} from "../../common/Constant/API";

import axios from "axios";

/**
 * axios 'withCredentials' property is set to true as a default
 *
 * import { GET_HEADER_OPTION } from "../../common/Constant/API";
 */
axios.defaults.withCredentials = true;

/**
 * ### 앨범 조회
 * - GET
 * - returns lists of albums with @familyId
 * - sessionId cookie needed
 *
 * @familyId
 * @data {id, family_id, user_id, title, album_image, like_count, comment_count, tag_set_all, created_at, updated_at}
 */
export const getAlbum = async (familyId) => {
  const { data } = await axios.get(GET_ALBUM_URL(familyId));
  return data;
};

/**
 * ### 앨범 생성
 * - POST
 * - creates album with @familyId
 * - returns data of album that is created
 * - sessionId cookie needed
 *
 * @familyId
 * @body {title, cover_image, album_image, tag_set_all}
 * @data {id, title, user_id, family_id, cover_image, created_at, updated_at}
 */
export const postAlbum = async (familyId, body) => {
  const { data } = await axios.post(POST_ALBUM_URL(familyId), body);
  return data;
};

/**
 * ### 앨범 상세 조회
 * - GET
 * - returns data of photos with @familyID @albumId
 * - sessionId cookie needed
 *
 * @familyId
 * @albumId
 * @data [{id, album_id, family_id, photo_image, like_count, comment_count, created_at, updated_at, my_like, my_bookmark}]
 */
export const getAlbumDetail = async (familyId, albumId) => {
  const { data } = await axios.get(GET_ALBUM_DETAIL_URL(familyId, albumId));
  return data;
};

/**
 * ### 앨범 전체 내용 수정
 * - PUT
 * - edits 'title' of album with @familyId @albumId
 * - returns data of album that is edited
 * - sessionId cookie needed
 *
 * @familyId
 * @albumId
 * @body {title}
 * @data {new_title}
 */
export const updateAlbum = async (familyId, albumId, body) => {
  const { data } = await axios.update(PUT_ALBUM_URL(familyId, albumId), body);
  return data;
};

/**
 * ### 앨범 삭제
 * - DELETE
 * - deletes album with @familyId @albumId
 * - returns data of album that is deleted
 * - sessionId cookie needed
 *
 * @familyId
 * @albumId
 * @data
 */
export const deleteAlbum = async (familyId, albumId) => {
  const { data } = await axios.delete(DELETE_ALBUM_URL(familyId, albumId));
  return data;
};
