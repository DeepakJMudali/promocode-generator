import React from "react"
export default function PromoList({list})
{
    return(<React.Fragment>
        <div className="container promo">
        {
            list.length === 0 ? (<>
            <div className="d-flex justify-content-center h-100">
                <h1 style={{backgroundColor: "#C0C0C0"}}> No Promo Codes Available</h1>
                
                </div>
                </>):(<>
                <div className="d-flex justify-content-center h-100">
                    <h1 style={{backgroundColor:"#C0C0C0"}}>
                    Promo Codes
                    </h1>
                </div>
                <div className="d-flex justify-content-center h-100">
                <table className="table" border="5px">
                    <thead className="thead-dark">
                    <tr>
                        <th>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <i>Code</i>
                        </th>
                        <th>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <i>Description</i>
                        </th>
                        <th>
                            <i>Free delivery</i>
                        </th>
                        <th>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <i>Discount</i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((li,index)=>{
                                return(<tr key={index}>
                                    <td>
                                        {li?.code}
                                    </td>
                                    <td>
                                        {li?.description}
                                    </td>
                                    <td>
                                        {
                                            li?.free_delivery === true?(<span style={{color:"green"}}>
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                            </span>):(<span style={{
                                                color:"red"
                                            }}>
                                            <i className="fa fa-times"></i>
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        {li.discount}
                                    </td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
                </div>
                </>)
        }
        
        </div>
    </React.Fragment>)
}
