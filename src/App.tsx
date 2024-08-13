import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Pages/Auth/Login";
import Dashboard from './Pages/Dashboard/Dashboard';
import NotFound from "./Pages/NoFoundPage/NotFoundPage";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center" autoClose={3000} hideProgressBar={false}
        newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss
        draggable pauseOnHover theme="light"
      />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path='/dashboard' element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;