import { TARGET_URL } from "@api/.";


/**------------------------ Archives ----------------------------- */
export const GET_ALBUM_DETAIL_URL = (familyId, albumId) =>
`${TARGET_URL}/api/v1/families/${familyId}/albums/?album=${albumId}`

export const GET_ALBUM_URL = (familyId) => 
`${TARGET_URL}/api/v1/families/${familyId}/albums`

export const DELETE_ALBUM_URL = (familyId, albumId) => 
`${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}`

export const PUT_ALBUM_URL = (familyId, albumId) => 
`${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}`

export const CREATE_ALBUM_URL = (familyId, albumId) => 
`${TARGET_URL}/api/v1/families/${familyId}/albums`

export const POST_LIKE_URL = (familyId, albumId, photoId) => 
`${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/likes/${photoId}`

export const DELETE_LIKE_URL = (familyId, albumId, photoId) => 
`${TARGET_URL}/api/v1/families/${familyId}/albums/${albumId}/likes/${photoId}`

export const POST_COMMENT_URL = (familyId, photoId) =>
`${TARGET_URL}/api/v1/families/${familyId}/photos/${photoId}`

export const DELETE_COMMNET_URL = (familyId, photoId, commentId) => `${TARGET_URL}/api/v1/families/${familyId}/photos/${photoId}/comments/${commentId}`

export const UPDATE_COMMNET_URL = (familyId, photoId, commentId) => `${TARGET_URL}/api/v1/families/${familyId}/photos/${photoId}/comments/${commentId}`


/**------------------------ Family ----------------------------- */
export const CREATE_FAMILY_URL = `${TARGET_URL}/api/v1/familes`

export const REGISTER_FAMILY_URL = (familyId) => `${TARGET_URL}/api/v1/familes/${familyId}/register`

export const UPDATE_FAMILY_INFO_URL = (familyId) => `${TARGET_URL}/api/v1/familes/${familyId}/register`

export const GET_FAMILY_URL = (familyId) => `${TARGET_URL}/api/v1/families/${familyId}`
export const DELETE_FAMILY_URL = (familyId) => `${TARGET_URL}/api/v1/families/${familyId}`
export const UPDATE_FAMILY_URL = (familyId) => `${TARGET_URL}/api/v1/families/${familyId}`


/**------------------------ Common ----------------------------- */
export const GET_HEADER_OPTION = {
    "withCredenitals" : true,
};