import React, { useCallback } from "react"
import AddPromo from "./components/AddPromo"
import PromoLists from "./components/PromoLists.js"
//import Countries from "./components/country"
import { useSelector, useDispatch } from "react-redux"
import PromoContext from "./context/PromoContext"
import { saveData } from "./actions/actions"
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = () => {
  const list = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
console.log("list",list)
  const saveDataHandler = useCallback(data => {
    dispatch(saveData(data))
  }, [dispatch])
  return (<PromoContext.Provider value={{ list }}>
    <AddPromo saveDataHandler={saveDataHandler} />
    <PromoLists />
    {/* <Countries/> */}
  </PromoContext.Provider>)
}

const App = React.memo(MyApp)
export default App;