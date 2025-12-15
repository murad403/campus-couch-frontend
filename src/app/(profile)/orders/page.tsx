"use client"
import OrderDetailsModal from '@/components/modal/OrderDetailsModal'
import { orders, TOrder } from '@/libs/orders'

const Orders = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-white overflow-hidden min-w-[640px] border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F5F5F5] border-b border-gray-200 *:text-[20px] *:text-title">
              <th className="px-4 md:px-6 py-3 md:py-4 text-center font-medium border-r border-gray-200">
                Order
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-center font-medium border-r border-gray-200">
                Date
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-center font-medium border-r border-gray-200">
                Status
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-center font-medium border-r border-gray-200">
                Total
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-center font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: TOrder) => (
              <tr key={order.id} className="border-b border-gray-200 last:border-0">
                <td className="px-4 md:px-6 py-3 md:py-4 text-[20px] text-title text-center border-r border-gray-200">
                  {order.id}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 text-[20px] text-title text-center border-r border-gray-200 whitespace-nowrap">
                  {order.date}
                </td>
                <td
                  className={`px-4 md:px-6 py-3 md:py-4 text-[20px] text-center border-r border-gray-200 ${order.status === "Pending" ? "text-yellow-400" : null} ${order.status === "Approved" ? "text-green-400" : null} ${order.status === "Cancelled" ? "text-red-400" : null}`}
                >
                  {order.status}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 text-[20px] text-title text-center border-r border-gray-200 whitespace-nowrap">
                  {order.total}
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4 text-[20px] text-center">
                  {
                    order.status === "Pending" ? <button onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement).showModal()} className="text-blue-600 hover:text-blue-800 underline">
                    View
                  </button> : null
                  }
                  <OrderDetailsModal order={order}></OrderDetailsModal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
