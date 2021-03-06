import { CREATE_ORDER_REQ, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL, GET_ORDER_BY_NAME_REQ,
         GET_ORDER_BY_NAME_SUCCESS, GET_ORDER_BY_NAME_FAIL, GET_OPEN_ORDER_BY_USER_REQ,
         GET_OPEN_ORDER_BY_USER_SUCCESS, GET_OPEN_ORDER_BY_USER_FAIL, UPDATE_ORDER_BY_NAME_REQ,
         UPDATE_ORDER_BY_NAME_SUCCESS, UPDATE_ORDER_BY_NAME_FAIL, GET_ALL_ORDER_FOR_USER_REQ,
         GET_ALL_ORDER_FOR_USER_SUCCESS, GET_ALL_ORDER_FOR_USER_FAIL, GET_PAID_ORDER_FOR_USER_REQ,
         GET_PAID_ORDER_FOR_USER_SUCCESS, GET_PAID_ORDER_FOR_USER_FAIL, GET_CANCELLED_ORDER_FOR_USER_REQ,
         GET_CANCELLED_ORDER_FOR_USER_SUCCESS, GET_CANCELLED_ORDER_FOR_USER_FAIL } from '../Constants/OrderConstant'

const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQ:
            return { loading: true }
        case CREATE_ORDER_SUCCESS:
            return { loading: false, createdOrder: action.payload }
        case CREATE_ORDER_FAIL:
            return { loading: false, err: action.payload }
        case GET_ORDER_BY_NAME_REQ:
            return { loading: true }
        case GET_ORDER_BY_NAME_SUCCESS:
            return {...state, loading: false, orderByName: action.payload }
        case GET_ORDER_BY_NAME_FAIL:
            return {...state, loading: false, err: action.payload }
        case GET_OPEN_ORDER_BY_USER_REQ:
            return {...state, loading: true }
        case GET_OPEN_ORDER_BY_USER_SUCCESS:
            return {...state, loading: false, openOrderUser: action.payload }
        case GET_OPEN_ORDER_BY_USER_FAIL:
            return {...state, loading: false, err: action.payload }
        case UPDATE_ORDER_BY_NAME_REQ:
            return { loading: true }
        case UPDATE_ORDER_BY_NAME_SUCCESS:
            return { loading: false, updateOrder: action.payload }
        case UPDATE_ORDER_BY_NAME_FAIL:
            return { loading: false, err: action.payload }
        case GET_ALL_ORDER_FOR_USER_REQ:
            return {...state, loading: true }
        case GET_ALL_ORDER_FOR_USER_SUCCESS:
            return {...state, loading: false, allOrderUser: action.payload }
        case GET_ALL_ORDER_FOR_USER_FAIL:
            return {...state, loading: false, err: action.payload }
        case GET_PAID_ORDER_FOR_USER_REQ:
            return {...state, loading: true }
        case GET_PAID_ORDER_FOR_USER_SUCCESS:
            return {...state, loading: false, paidOrderUser: action.payload }
        case GET_PAID_ORDER_FOR_USER_FAIL:
            return {...state, loading: false, err: action.payload }
        case GET_CANCELLED_ORDER_FOR_USER_REQ:
            return {...state, loading: true }
        case GET_CANCELLED_ORDER_FOR_USER_SUCCESS:
            return {...state, loading: false, cancelOrderUser: action.payload }
        case GET_CANCELLED_ORDER_FOR_USER_FAIL:
            return {...state, loading: false, err: action.payload }
        default:
            return state
    }
}

export default orderReducer