import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"
import { Dispatch } from "react"

type MenuItemsProps = {
    item: MenuItem
    dispatch: Dispatch<OrderActions>
}

export function MenuItem ({ 
    item,
    dispatch
}: MenuItemsProps) {
    return (
        <button className=" border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200 focus:bg-teal-100 outline-none rounded" onClick={() => dispatch({ type: 'save-order', payload: { newOrder: item } })}>
            <p>{item.name}</p>
            <p className=" font-black">${item.price}</p>
        </button>
    )
}