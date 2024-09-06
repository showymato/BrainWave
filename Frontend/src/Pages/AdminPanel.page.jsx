import React from 'react'
import OrdersHeader from '../components/Orders/OrdersHeader'
import TotalOrderCard from '../components/Orders/TotalOrderCard'
import OrderTabs from '../components/Orders/OrderTabs'
import OrderInProcess from '../components/Orders/OrderInProcess'
import DroneCondition from '../components/Orders/DroneCondition'

function AdminPanelPage() {
  return (
    <div className="">
      <OrdersHeader/>

      <div className="flex mx-10">
        <div className="w-1/2 p-5">
          <OrderInProcess/>
        </div>
        <div className="w-1/2 p-5">
          <DroneCondition/>
        </div>
      </div>

      <TotalOrderCard/>
      <OrderTabs/>
    </div>
  )
}

export default AdminPanelPage
