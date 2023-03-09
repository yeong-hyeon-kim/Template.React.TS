import { useSelector, useDispatch } from "react-redux";
import Home from "../component/home";
import { RootState } from "../module";
import { DATA_AsyncActions } from "../module/alias_saga";

function HomeContainer() {
  const Title = useSelector((state: RootState) => state.Home.title);

  const dispatch = useDispatch();
  const RequestData = () => {
    // 리덕스 사가(Saga) 액션 함수 호출
    dispatch(DATA_AsyncActions.request(""));
  };

  return <Home title={Title} onRequestData={RequestData}></Home>;
}

export default HomeContainer;
