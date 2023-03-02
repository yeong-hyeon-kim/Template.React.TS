import react from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "../component/home";
import { rootReducer } from "../module";

function HomeContainer() {
  const Title = useSelector((state: rootReducer) => state.Home.title);
  return <Home title={Title}></Home>;
}

export default HomeContainer;
