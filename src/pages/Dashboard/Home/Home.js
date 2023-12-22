import React from 'react'
import DashboardCart from '../../../components/DashboardCart'
import { images } from '../../../assets/dashboard/cart'

import LinChart from './LinChart'
export default function Home() {
  
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name="TOTAL DOCTORS" total="23" icon="fa-money-check-dollar" img={images.cart1} bg="#7ac74f" />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name="TOTAL APPOINTMENT" total="43" icon="fa-sack-dollar" img={images.cart2} bg="#f8961e" />
          </div>
         
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name="Total USERS" total="1" percent="343% (30days)" icon="fa-user" img={images.cart4} bg="#001f54" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <LinChart/>
          </div>
        </div>
      </div>
    </>
  )
}
