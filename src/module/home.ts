/* 액션 타입 */
const TITLE = "home/TITLE" as const;

/* 액션 생성 함수 */
export const actionFuncTitle = () => ({
  type: TITLE,
});

/* 액션 함수 타입 */
type typeHome = ReturnType<typeof actionFuncTitle>;

/* 리덕스(Redux) 상태(State) */
type stateType = { title: string };

/* 상태(State) 초기화(Init) */
const stateHome = {
  title: "안녕하세요!😎",
};

/* 리듀서(Reducer) */
function Home(state: stateType = stateHome, action: typeHome): stateType {
  switch (action.type) {
    case TITLE:
      return {
        title: state.title,
      };

    default:
      return state;
  }
}

export default Home;
