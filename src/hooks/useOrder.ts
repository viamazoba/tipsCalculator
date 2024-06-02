import { useState } from "react";
import { OrderItem } from "../types";

import { MenuItem } from "../types"


export default function useOrder() {
   const [order, setOrder] = useState<OrderItem[]>([])
   const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {

        const indexElement = order.findIndex(element => element.id === item.id)

        if(indexElement!= -1){
            const newOrder = order.map(element=> {
                if(element.id === item.id){
                    element.quantity = element.quantity + 1
                    return element
                }
                return element
            })
            setOrder(newOrder)
        }else{
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        }
    }

    const deleteItem = (id: MenuItem['id'])=>{
        const newOrder = order.filter(item => item.id !== id)
        setOrder(newOrder)
    }

    const totalOrder = ()=> {
        return order.reduce((total: number, item)=>{
            return total + item.price*item.quantity
        },0)
    }

    const placeOrder = ()=> {
       setOrder([])
       setTip(0)
    }

    return{
        addItem,
        order,
        tip,
        setTip,
        deleteItem,
        totalOrder,
        placeOrder
    }
}