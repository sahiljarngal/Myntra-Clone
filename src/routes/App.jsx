import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import FetchItems from "../component/FetchItems";
import { useSelector } from "react-redux";
import Loadingbar from "../component/Loadingbar";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Loadingbar /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
