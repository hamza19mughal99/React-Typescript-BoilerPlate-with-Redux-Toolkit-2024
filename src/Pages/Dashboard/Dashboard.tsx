import { useEffect } from "react";
import { errorNotify, successNotify } from "../../Helpers/Toast";

const Dashboard = () => {
  useEffect(() => {
    successNotify("Success")
    errorNotify("Error")
  }, [])

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  )
}
export default Dashboard;