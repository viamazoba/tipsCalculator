import { MenuItem, OrderItem } from "../types";

export type OrderActions = 
{ type: 'save-order', payload: {newOrder: MenuItem } } |
{ type: 'delete-order', payload: {id: OrderItem['id'] } } |
{ type: 'save-tip', payload: { tip: number } } |
{ type: 'place-order' } |
{ type: 'total-order' }

export type OrderState = {
    orders : OrderItem[]
    orderId: OrderItem['id']
    tip: number
    totalOrder: number
}

export const initialState: OrderState = {
    orders: [],
    orderId: 0,
    tip: 0,
    totalOrder: 0
}


export const orderReducer = (
    state: OrderState,
    action: OrderActions
) => {

    if(action.type === 'save-order'){
        const findOrder = state.orders.find((order)=> order.id === action.payload.newOrder.id)
        if(findOrder === undefined) {
            const newOrder = {
                ...action.payload.newOrder,
                quantity : 1
            }
            return {
                ...state,
                orders: [...state.orders,newOrder]
            }
        }else {
            const newOrders = state.orders.map((order)=>{
                if(order.id === findOrder.id) {
                    return {
                        ...order,
                        quantity: order.quantity + 1
                    }
                }
                return order
            })

            return {
                ...state,
                orders: [...newOrders]
            }
        }
    }


    if (action.type === 'delete-order') {
        return {
            ...state,
            orders: state.orders.filter( order => order.id !== action.payload.id)
        }
    }

    if (action.type === 'save-tip') {
        return {
            ...state,
            tip: action.payload.tip
        }
    }

    if(action.type === 'place-order') {
        return {
            ...initialState
        }
    }

    if(action.type === 'total-order') {
        const total = state.orders.reduce((total: number, item)=>{
            return total + item.price*item.quantity
        },0)

        return {
            ...state,
            totalOrder: total
        }
    }


    return state
}
