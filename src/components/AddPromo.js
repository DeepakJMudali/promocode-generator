import React, { useState, useEffect } from "react"
import { Switch } from "antd"

const Add = ({ saveDataHandler }) => {
    const [toggle, setToggle] = useState(false);

    const [code, setCode] = useState("")
    const [description, setDescription] = useState("")
    const [discount, setDiscount] = useState("")


    const toggler = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    useEffect(() => {
        console.log(toggle)
    }, [toggle])

    const changeCode = (e) => {
        setCode(e.target.value)
    }
    const changeDescription = (e) => {
        setDescription(e.target.value)
    }
    const changeDiscount = (e) => {
        const DisValue = e.target.value
        setDiscount(DisValue)
    }

    const SubmitData = (e) => {
        e.preventDefault()
        saveDataHandler({ code, description, discount, free_delivery: toggle })
        setCode("")
        setDescription("")
        setDiscount("")
    }


    return (<React.Fragment>
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-start">
                            <div>
                                <i className="fa fa-plus"></i>&nbsp;<span>Create New Promo Code</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={SubmitData}>
                            <div className="input-group form-group">
                                <label className="col-sm-12 label-control" htmlFor="code">Code<i style={{ color: "red" }}>*</i></label>
                                <input type="text"
                                    className="form-control col-sm-12"
                                    id="code"
                                    placeholder="DISCOUNT20"
                                    onChange={changeCode}
                                    value={code}
                                    required
                                />
                            </div>
                            <div className="input-group form-group">
                                <label className="col-sm-12 label-control" htmlFor="description">Description <i style={{ color: "red" }}>*</i></label>
                                <input
                                    type="text"
                                    className="form-control col-sm-12"
                                    id="description"
                                    value={description}
                                    onChange={changeDescription}
                                    placeholder="A discount code for our winter promotion"
                                    required
                                />
                            </div>
                            <div className="input-group form-group">
                                <label className="col-sm-4 label-control" htmlFor="discount">Discount(USD)<i style={{ color: "red" }}>*</i></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="discount"
                                    value={discount}
                                    onChange={changeDiscount}
                                    placeholder="0"
                                    required
                                />
                                <label htmlFor="checkbox4" className="label-control col-sm-3">Free delivery</label>
                                <div className="col-sm-3"><Switch id="checkbox4" onClick={toggler} /></div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <input type="submit" value="Create promo Code" className="col-sm-8 btn btn-secondary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>)

}
const AddPromo = React.memo(Add)
export default AddPromo;
