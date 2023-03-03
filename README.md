# 리액트 타입스크립트 템플릿(React Typescript Template)

리액트 타입스크립트 템플릿에 리덕스(Redux)를 적용하는 템플릿을 작성합니다.

## 액션(Action)

상태(State)에 어떤 변화를 발생시키는 역할을 합니다.
`type` 속성을 필수적으로 가지고 있어야 합니다.
리듀서에서 액션 타입을 구분합니다.

## 액션 생성 함수(Action Creator)

컴포넌트에서 더욱 쉽게 액션을 발생시키기 위해 사용합니다.
액션을 만드는 함수로 파라미터를 받아와서 액션 객체 타입으로 만듭니다.

## 리듀서(Reducer)

상태(State)를 변화시키는 함수입니다. 매개변수로 이전 상태, 전달 받은 액션를 받습니다.

* 리듀서는 상태를 변화시키는 동작 이외에는 다른 작업(비동기 처리)은 미들웨어를 사용해야합니다.

## 스토어(Store)

하나의 애플리케이션 안에는 하나의 스토어를 가지고 현재 상태를 보관합니다.  

### 내장 함수(Built In Function)

* 디스패치(Store-Dispatch)
  * 액션을 발생 시키는 역할을 합니다.
* 구독(Store-Subscribe)
  * 스토어 내장 함수로 함수 형태의 값을 매개변수로 받습니다.
  * 특정 함수를 전달하면 액션이 디스패치(발생)되었을때 전달해준 함수가 호출
  * `Connect`, `useSelector` 등 훅(Hook) 사용하여 리덕스 스토어 상태 구독합니다.

## 컴포넌트(Component)

리덕스 스토어에 직접 접근하지 않고 필요한 값 또는 함수를 컨테이너로부터 매개 변수(Props)로 받아와서 사용합니다.
