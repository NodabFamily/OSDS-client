/**------------------------ Common ----------------------------- */
export const GET_HEADER_OPTION = {
  withCredenitals: true,
};

const TARGET_URL = "http://localhost:3000";

/** ------------------------ Albums ----------------------------- */
export const GET_ALBUM_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums`;

export const CREATE_ALBUM_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums`;

export const GET_ALBUM_DETAIL_URL = (familyId, albumId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}`;

export const PUT_ALBUM_URL = (familyId, albumId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}`;

export const DELETE_ALBUM_URL = (familyId, albumId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}`;

/** ------------------------ Families ----------------------------- */

export const CREATE_FAMILY_URL = () => `${TARGET_URL}/api/v1/families`;

export const GET_FAMILY_VALIDATE_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/validate`;

export const PATCH_FAMILY_INFO_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/validate`;

export const GET_FAMILY_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}`;

export const DELETE_FAMILY_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}`;

export const PUT_FAMILY_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}`;

/** ------------------------ Photo ----------------------------- */

export const DELETE_PHOTO_URL = (familyId, albumId, photoId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/photos/${photoId}`;

export const GET_PHOTO_URL = (familyId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/photo`;

/** ------------------------ User ----------------------------- */

export const POST_USER_URL = () => `${TARGET_URL}/api/v1/users`;

export const GET_USER_URL = (userId) => `${TARGET_URL}/api/v1/users/${userId}`;

export const DELETE_USER_URL = (userId) =>
  `${TARGET_URL}/api/v1/users/${userId}`;

export const PUT_USER_URL = (userId) => `${TARGET_URL}/api/v1/users/${userId}`;

export const LOGIN_USER_URL = (userId) =>
  `${TARGET_URL}/api/v1/users/${userId}`;

export const LOGOUT_USER_URL = (userId) =>
  `${TARGET_URL}/api/v1/users/${userId}`;

/** ------------------------ Like ----------------------------- */

export const POST_LIKE_URL = (familyId, albumId, photoId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/likes/${photoId}`;

export const DELETE_LIKE_URL = (familyId, albumId, photoId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/likes/${photoId}`;

/**------------------------ Comment ----------------------------- */

export const POST_COMMENT_URL = (familyId, photoId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/photos/${photoId}`;

export const PUT_COMMNET_URL = (familyId, photoId, commentId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/photos/${photoId}/comments/${commentId}`;

export const DELETE_COMMNET_URL = (familyId, photoId, commentId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/photos/${photoId}/comments/${commentId}`;

export const GET_COMMNET_URL = (familyId, photoId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/photos/${photoId}/comments`;

/**------------------------ Bookmark ----------------------------- */

export const POST_BOOKMARK_URL = (familyId, albumId, photoId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/bookmarks/${photoId}`;

export const DELETE_BOOKMARK_URL = (familyId, albumId, photoId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/bookmarks/${photoId}`;

export const GET_BOOKMARK_URL = (familyId, userId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/bookmarks/${userId}`;

/**------------------------ Tag ----------------------------- */

export const POST_TAG_URL = (familyId, albumId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/tags`;

export const DELETE_TAG_URL = (familyId, albumId, tagId) =>
  `${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/tags/${tagId}`;