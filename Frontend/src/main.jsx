import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import HomePage from './Pages/Home.page.jsx'
import OrdersPage from './Pages/Orders.page.jsx'
import DronesPage from './Pages/Drones.page.jsx'
import WeatherForcastPage from './Pages/WeatherForcast.page.jsx'
import OrganisationsPage from './Pages/Organisations.page.jsx'
import AdminPanelPage from './Pages/AdminPanel.page.jsx'
import DashboardPage from './Pages/Dashboard.page.jsx'
import RequestPage from './Pages/Request.page.jsx'
import OrganForm from './components/Forms/Organ.form.jsx'
import MedicineForm from './components/Forms/Medicines.form.jsx'
import BloodForm from './components/Forms/Blood.form.jsx'
import MedkitForm from './components/Forms/Medkit.form.jsx'
import Jatayu from './components/Drone/Jatayu.jsx'
import Sudarshan from './components/Drone/Sudarshan.jsx'
import Drone3 from './components/Drone/Drone3.jsx'
import NewOrder from './components/Orders/NewOrder.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<HomePage/>}/>
      <Route path='myorders' element={<OrdersPage/>}/>
      <Route path='drones' element={<DronesPage/>}></Route>
      <Route path='organisations' element={<OrganisationsPage/>}/>
      <Route path='weather_forecast' element={<WeatherForcastPage/>}/>
      <Route path='admin_panel' element={<AdminPanelPage/>}/>
      <Route path='dashboard' element={<DashboardPage/>}/>
      <Route path='requestType' element={<RequestPage/>}/>
      <Route path='organForm' element={<OrganForm/>}/>
      <Route path='medicineForm' element={<MedicineForm/>}/>
      <Route path='bloodForm' element={<BloodForm/>}/>
      <Route path='medkitForm' element={<MedkitForm/>}/>
      <Route path='newOrder' element={<NewOrder/>}/>
      <Route path="/drones/jatayu" element={<Jatayu />} />
      <Route path="/drones/sudarshan" element={<Sudarshan />} />
      <Route path="/drones/drone3" element={<Drone3 />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
