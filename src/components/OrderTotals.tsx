/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderActions, OrderState } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderState
    dispatch:  Dispatch<OrderActions>
}
export default function OrderTotals({
    order,
    dispatch
}:OrderTotalsProps){
    useMemo(()=> dispatch({type: 'total-order'}),[order.orders])
    const tipAmount = useMemo(()=> order.totalOrder*order.tip, [order.tip, order.orders])
    const totalAmount = useMemo(()=>order.totalOrder+tipAmount, [order.tip, order.orders])
    return(
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y propinas</h2>
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(order.totalOrder)}</span>
                </p>
                <p>
                    Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p>
                    Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
        
            </div>
            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={totalAmount === 0 }
                onClick={()=> dispatch({type:'place-order'})}
            >
                Guardar Orden
            </button>
        </>
    )
}