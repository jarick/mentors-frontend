
export const load = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SEND_TASKS"
    })
    return fetch("/api/v1/tasks", {
      method: "GET",
      body: data
    }).then(() => {
      dispatch({
        type: "SUCCESS_TASKS"
      })
    }, (err) => {
      dispatch({
        type: "ERROR_TASKS"
      })
      console.log(err)
    })
  }
}

const initialState = {
  items: [],
  pagination: {},
  isSend: false,
  isFail: false
}
export default function registryReducer (state = initialState, action) {
  switch (action.type) {
    case 'SEND_TASKS':
      return {
        isSend: true,
        isFail: false,
        ...state
      }
    case 'SUCCESS_TASKS':
      return {
        isSend: false,
        isFail: false,
        items: action.items,
        pagination: action.pagination,
        ...state
      }
    case 'ERROR_TASKS':
      return {
        isSend: false,
        isFail: true,
        ...state
      }
    default:
      return state
  }
}
