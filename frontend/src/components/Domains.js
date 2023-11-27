import React from 'react'
import Domain from './Domain'

const Domains = ({ domains,modifyDomain}) => {  
  // If there's no Bills for the student, then render nothing. Can instead render a message like "No Bills Remaining"
  if (domains === [])
    return null

  return (
    <div className='m-5 p-2 rounded regular-shadow' id="domains" style={{display:"inline-block",width:"1815px"}}>
      <table id = "table" className="table table-striped table-dark"  style={{borderRadius:"15px",overflowY:"scroll"}}>
      <thead>
      <tr style={{color:"#2FEBD2"}}>
        <th scope="col" style={{paddingLeft:"20px"}}>Program</th>
        <th scope="col">Batch</th>
        <th scope="col">Capacity</th>
        <th scope="col">Qualification</th>
      </tr>
    </thead>
        <tbody id = "data">
        { 
          // Render each Bill as its separate component and for this you use the map() method
          // Whenever you use the map() method to render a collection of Components, React requires that you specify a unique
          // attribute of each component in this collection and for this case, we are using the id of each Bill as the key
          // for React to uniquely identify each Bill
          // We also pass on the Bill object that has to be rendered by the component and the payBill method that will
          // execute the payment
          domains.map((b,index) =>
            <Domain
              domain={b}
              key={b.domainId}
              index  = {index}
              modifyDomain={modifyDomain}
            /> 
          )
        }
        </tbody>
      </table>
    </div>
  )
}

export default Domains