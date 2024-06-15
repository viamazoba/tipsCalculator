import { OrderItem } from "../types";

export type OrderActions = 
{ type: 'save-order', payload: {newOrder: OrderItem } } |
{ type: 'delete-order', payload: {id: OrderItem['id'] } }

export type OrderState = {
    orders : OrderItem[]
    orderId: OrderItem['id']
}

export const initialState: OrderState = {
    orders: [],
    orderId: 0
}


export const orderReducer = (
    state: OrderState,
    action: OrderActions
) => {

    if(action.type === 'save-order'){
        const findOrder = state.orders.find((order)=> order.id === state.orderId)
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
                        ...action.payload.newOrder,
                        quantity: action.payload.newOrder.quantity + 1
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

    // if (action.type === 'setActiveId') {
    //     return {
    //         ...state,
    //         activeId: action.payload.id
    //     }
    // }

    // if (action.type === 'delete-activity') {
    //     return {
    //         ...state,
    //         activities: state.activities.filter( activity => activity.id !== action.payload.id)
    //     }
    // }

    // if(action.type === 'restart-app') {
    //     return {
    //         activities: [],
    //         activeId: ''
    //     }
    // }
    return state
}
