/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[]
    totalOrder: () => number
}
export default function OrderTotals({
    totalOrder,
    order
}:OrderTotalsProps){
    const subtotalAmount = useMemo(()=> totalOrder(),[order])
    return(
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas</h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                <p>
                    Propina: {''}
                    <span className="font-bold">$0</span>
                </p>
                <p>
                    Total a pagar: {''}
                    <span className="font-bold">$0</span>
                </p>
            
                {/* {
                    order.reduce((total,item) => {
                        total + item.price * item.quantity
                    }, 0)
                } */}
            </div>
            <button>X</button>
        </>
    )
}