import React, {useContext} from "react"
import PromoContext from "../context/PromoContext"
import PromoList from "./PromoList"


const Promos=()=>{
    const {list} = useContext(PromoContext)
    return (<React.Fragment>
        <PromoList list={list}/>
    </React.Fragment>)
}

const PromoLists= React.memo(Promos);
export default PromoLists