// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE = 'CHANGE_FORM_LOGIN'
export const SEND = 'SEND_SAVE_LOGIN'
export const SUCCESS = 'SUCCESS_SAVE_LOGIN'
export const ERROR = 'ERROR_SAVE_LOGIN'

// ------------------------------------
// Actions
// ------------------------------------
export const changeInput = (field, value) => {
  return {
    type: CHANGE,
    field: field,
    value: value
  }
}

export const save = (data) => {
  return (dispatch) => {
    dispatch({
      type: SEND
    })
    fetch("/api/v1/authorization/mail/login", {
      method: "POST",
      body: data
    })
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(data => {
        if (status >= 200 && status < 300) {
          dispatch({
            type: SUCCESS,
          });
          return Promise.resolve(true);
        } else {
          dispatch({
            type: ERROR,
            errors: data.invalidAttributes
          });
          return Promise.resolve(false);
        }
      })
      .catch((e) => {
        dispatch({
          type: ERROR,
          errors: {}
        });
      })
  }
}

export const actions = {
  changeInput,
  save
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE] : (state, action) => {
    let data = { ...action.data }
    data[action.field] = action.value
    return {
      ...state,
      data: data,
      isFail: false,
    }
  },
  [SEND]: (state, action) => ({
    ...state,
    isSend: true,
    isFail: false,
  }),
  [SUCCESS]: (state, action) => ({
    ...state,
    isSend: false,
    isFail: false,
  }),
  [ERROR]: (state, action) => ({
    ...state,
    isSend: false,
    isFail: true,
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  data: {
    mail: "",
    password: ""
  },
  isSend: false,
  isFail: false
}
export default function verifyReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
