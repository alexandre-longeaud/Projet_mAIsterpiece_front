export const CLEAR_JWT = 'CLEAR_JWT';
// Action type Login Page
export const UPDATE_EMAIL_FORM_AUTH = 'UPDATE_EMAIL_FORM_AUTH';
export const UPDATE_PASSWORD_AUTH = 'UPDATE_LOGIN_PASSWORD_AUTH';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const SAVE_CONNECTED_USER = 'SAVE_CONNECTED_USER';
// Action type Register Page
export const UPDATE_LOGIN_FORM_REGISTER = 'UPDATE_LOGIN_FORM_REGISTER';
export const UPDATE_EMAIL_FORM_REGISTER = 'UPDATE_EMAIL_FORM_REGISTER';
export const UPDATE_PASSWORD_REGISTER = 'UPDATE_PASSWORD_REGISTER';
export const UPDATE_CONFIRM_PASSWORD_REGISTER = 'UPDATE_CONFIRM_PASSWORD_REGISTER';
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const CLEAR_REGISTER_FIELDS = 'CLEAR_REGISTER_FIELDS';
export const SAVE_INFOS_CONNECTED_USER = 'SAVE_INFOS_CONNECTED_USER';
// Profile
export const UPDATE_TEXTAREA_BIO = 'UPDATE_TEXTAREA_BIO';
export const SEND_PROFILE = 'SEND_PROFILE';
export const UPDATE_URL_AVATAR = 'UPDATE_URL_AVATAR';
// for member page
export const LOAD_MEMBER_PICTURES = 'LOAD_MEMBER_PICTURES';
export const UPDATE_MEMBER_PICTURES = 'UPDATE_MEMBER_PICTURES';

// - action creators LoginPage

export const actionClearJwt = () => ({
  type: CLEAR_JWT,
});

/**
 * action creator qui renvoie l'action UPDATE_LOGIN_FORM_AUTH
 * @return {Object} action
 */
export const actionUpdateEmailFormAuth = (newValue) => ({
  type: UPDATE_EMAIL_FORM_AUTH,
  payload: {
    newValue,
  },
});

/**
 * action creator qui renvoie l'action UPDATE_PASSWORD_AUTH
 * @return {Object} action
 */
export const actionUpdatePasswordFormAuth = (newValue) => ({
  type: UPDATE_PASSWORD_AUTH,
  payload: {
    newValue,
  },
});

/**
 * action pour demander au authMiddleware de faire la requete au back pour savoir si le user est bien authentifié
 * @return {Action} l'action à dispatcher
 */
export const actionCheckLogin = () => ({
  type: CHECK_LOGIN,
});

/**
 * action pour demander au reducer de mettre isLogged à true et de sauvegarder l'avatar
 * @param {String} avatar and token jwt
 * @return {Action} l'action à dispatcher
 */
// export const actionSaveConnectedUser = (avatar, jwt) => ({
//   type: SAVE_CONNECTED_USER,
//   payload: {
//     avatar,
//     jwt,
//   },
// });
export const actionSaveConnectedUser = (jwt) => ({
  type: SAVE_CONNECTED_USER,
  payload: {
    jwt,
  },
});

// - action creators RegisterPage

/**
 * action creator qui renvoie l'action UPDATE_LOGIN_FORM_REGISTER
 * @return {Object} action
 */
export const actionUpdateLoginFormRegister = (newValue) => ({
  type: UPDATE_LOGIN_FORM_REGISTER,
  payload: {
    newValue,
  },
});

/**
 * action creator qui renvoie l'action UPDATE_EMAIL_FORM_REGISTER
 * @return {Object} action
 */
export const actionUpdateEmailFormRegister = (newValue) => ({
  type: UPDATE_EMAIL_FORM_REGISTER,
  payload: {
    newValue,
  },
});
/**
 * action creator qui renvoie l'action UPDATE_PASSWORD_REGISTER
 * @return {Object} action
 */
export const actionUpdatePasswordFormRegister = (newValue) => ({
  type: UPDATE_PASSWORD_REGISTER,
  payload: {
    newValue,
  },
});

/**
 * action creator qui renvoie l'action UPDATE_CONFIRM_PASSWORD_REGISTER
 * @return {Object} action
 */
export const actionUpdateConfirmPasswordFormRegister = (newValue) => ({
  type: UPDATE_CONFIRM_PASSWORD_REGISTER,
  payload: {
    newValue,
  },
});

/**
 * Registers the new user on the backend
 * @return {Action}
 */
export const actionRegister = () => ({
  type: REGISTER_NEW_USER,
});

/**
 * clear all register fields (and identify a first connection)
 * @return {Action}
 */
export const actionClearRegisterFields = () => ({
  type: CLEAR_REGISTER_FIELDS,
});

/**
 * action creator for UPDATE_TEXTAREA_BIO
 * @return {Object} action
 */
export const actionUpdateTextAreaBio = (newValue) => ({
  type: UPDATE_TEXTAREA_BIO,
  payload: {
    newValue,
  },
});

/**
 * action creator for SEND_PROFILE
 * @return {Object} action
 */
export const actionSendProfile = (newAvatarFile) => ({
  type: SEND_PROFILE,
  payload: {
    newAvatarFile,
  },
});

/**
 * action creator for UPDATE_URL_AVATAR
 * @return {Object} action
 */
export const actionUpdateUrlAvatar = (newUrlAvatar) => ({
  type: UPDATE_URL_AVATAR,
  payload: {
    newUrlAvatar,
  },
});



/**
 * Loading one member's pictures
*/
export const actionLoadMemberPictures = (id) => ({
  type: LOAD_MEMBER_PICTURES,
  payload: id,
});

/**
 * Updating one member's pictures
 * @param { Array } listMemberPicture list of pictures from the id's member
*/
export const actionUpdateMemberPictures = (listMemberPicture) => ({
  type: UPDATE_MEMBER_PICTURES,
  payload: listMemberPicture,
});

/**
 * Saving in state the connected user's infos
 * @param { Array }
*/
export const actionSaveInfosConnectedUser = (datas) => ({
  type: SAVE_INFOS_CONNECTED_USER,
  payload: datas,
});
