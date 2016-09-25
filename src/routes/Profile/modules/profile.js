// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE = 'CHANGE_FORM_PROFILE'
export const SEND_SAVE = 'SEND_SAVE_PROFILE'
export const SUCCESS_SAVE = 'SUCCESS_SAVE_PROFILE'
export const ERROR_SAVE = 'ERROR_SAVE_PROFILE'
export const SEND_GET = 'SEND_GET_PROFILE'
export const SUCCESS_GET = 'SUCCESS_GET_PROFILE'
export const ERROR_GET = 'ERROR_GET_PROFILE'

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

export const save = (token, data) => {
  return (dispatch) => {
    dispatch({
      type: SEND_SAVE
    })
    fetch("/api/v1/profile", {
      method: "POST",
      body: data,
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(data => {
        if (status >= 200 && status < 300) {
          dispatch({
            type: SUCCESS_SAVE,
          });
          return Promise.resolve(true);
        } else {
          dispatch({
            type: ERROR_SAVE,
            errors: data.invalidAttributes
          });
          return Promise.resolve(false);
        }
      })
      .catch((e) => {
        dispatch({
          type: ERROR_SAVE,
          errors: {}
        });
      })
  }
}

export const load = (token) => {
  return (dispatch) => {
    dispatch({
      type: SEND_GET
    })
    fetch("/api/v1/profile", {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(data => {
        if (status >= 200 && status < 300) {
          dispatch({
            type: SUCCESS_GET,
            items: data.items,
            paginate: data.paginate
          });
        } else {
          dispatch({
            type: ERROR_GET,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: ERROR_GET,
        });
      })
  }
}

export const actions = {
  changeInput,
  save,
  load
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
  [SEND_SAVE]: (state, action) => ({
    ...state,
    isSend: true,
    isFail: false,
  }),
  [SUCCESS_SAVE]: (state, action) => ({
    ...state,
    isSend: false,
    isFail: false,
  }),
  [ERROR_SAVE]: (state, action) => ({
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
    name: "",
    lastName: "",
    avatar: ""
  },
  isSend: false,
  isFail: false
}
export default function profileReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
