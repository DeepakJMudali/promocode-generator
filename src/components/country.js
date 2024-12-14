import React,{useState} from "react"


const Countries=(props)=>{
    const countries=[{name:"India",value:"IND",cities:[{city:"Delhi"}]},{name:"Pakistan",value:"Pak",cities:[{city:"Lahore"}]}]
    const[country,setCountry]=useState(0)

const onChangeCountry=(e)=>{
setCountry(e.target.value)
console.log(e.target.value)

}

return(<div style={{marginLeft:"10rem"}}>
    
    <select value= {country} onChange={onChangeCountry}>
    {
        countries.map((item,index)=>{
        
        return(<option value={index}>{item.name}</option>)
        
        })
    }
    </select>
    <select value={country} onChange={onChangeCountry}> 
    
          {
            
           countries[country].cities.map((city)=>{
            
            return(<option value={city.city}>{city.city}</option>)
           })
          }
        
        
    
    </select>
</div>)
}
export default Countries