# React Typescript Template

React Typescript With Redux

## Using

### 1. Compoents

  ``` typescript
  type prosType = {
    Title: string;
  };

  function Home({Title}){
    return (
      <div>
        <h1>{Title}</h1>
      </div>
    );
  }
  
  export default Home;
  ```

### 2. Reducers

* A. Component Reduce

  ``` typescript
    // Action Type
    const TITLE = "home/TITLE" as const;

    // Action Creation Function
    export const actionFuncTitle = () => ({
      type: TITLE,
    });

    type typeHome = ReturnType<typeof actionFuncTitle>;

    // State Type
    type stateType = {
      title: string;
    };

    // Init State
    const stateHome = {
      title: "Hello World!",
    };

    /* Reducer */
    function Home(state: stateType = stateHome, action: typeHome): stateType {
      switch (action.type) {
        case TITLE:
          return {
            title: state.title,
            data: SensorDatas,
          };

        default:
          return state;
      }
    }

    export default Home;
  ```

* B. Root Reducer

  ``` typescript
    import { combineReducers } from "redux";
    import Home from "./home";

    const rootReducer = combineReducers({ Home });

    export default rootReducer;
    export type RootState = ReturnType<typeof rootReducer>;

  ```

### 3. Containers

  ``` typescript
    function HomeContainer() {
      // Get State Value
      const Title = useSelector((state: RootState) => state.Home.title);

      // Call Action Function
      const updateData = () => {
        dispatch(actionFuncTitle());
      };

      retturn(
        // Get Component
       <Home element={Title}></Home>
      )
    }

    export default HomeContainer;
  ```

### 4. Store

* ConfigureStore

  ``` typescript
  import { configureStore } from "@reduxjs/toolkit";
  // Get Reducers
  import rootReducer from "./module";

  const store = configureStore({
    reducer: rootReducer,
  });

  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
  ```

## License

React Typescript Template is [MIT licensed](./Lisense).
