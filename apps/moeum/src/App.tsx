import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Category from './page/category/Category'
import DefaultLayout from './components/layout/DefaultLayout'
import RateCalculator from './page/rateCalculator'
import Login from './page/Login/Login'
import GoogleCallback from './page/googleCallback/GoogleCallback'
import PaymentPage from './page/payment/Payment'
import ItemPage from './page/item/Item'
import CalendarPage from './page/calendar/Calendar'
import ItemPlanPage from './page/itemPlan/ItemPlan'
import InvestSettingPage from './page/investSetting/InvestSetting'
import InvestSummaryPage from './page/investSummary/InvestSummary'
import IconPage from './page/icon/Icon'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/oauth2/callback" element={<GoogleCallback />} />

        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Category />} />
          <Route path="/category" element={<Category />} />
          <Route path="/rate-calculator" element={<RateCalculator />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/item-plan" element={<ItemPlanPage />} />
          <Route path="/invest-setting" element={<InvestSettingPage />} />
          <Route path="/invest-summary" element={<InvestSummaryPage />} />
          <Route path="/icon" element={<IconPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
