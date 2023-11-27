import React,{useState} from 'react'
import Students from './Students';
import ModifyDomain from './ModifyForm';

/*
  This component is used for rendering a single Bills's view
  Show's the Bills details like name, bill amount, due date, etc.
  Also has the payment button next to it, on clicking which, the payment method is executed

  bill: The Bill object that has to be rendered
  payBill: Method that uses the axios service to pay the specified bill, i.e. send a DELETE request

  Note that the key attribute is not written here, its only written in the map() method that renders
  the collection
*/




const Domain = ({ domain, index, index1, modifyDomain}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isModOpen, setIsModOpen] = useState(false);
  /*
    Instruments are added to watchlists with the help of a dropdown list <select>.
    Add a <option> element with value=-1 in the <select> list that will serve as the default option.
    "value" property corresponds to index of a watchlist in the filteredWatchlists list.
    When user clicks an entry, the onChange of the <select> is triggered which will call createWatchlistInstrument.
    If user clicks default option, then nothing should happen which is why we check for watchlistIdx == -1
    in the createWatchlistInstrument function.
  */
  return (
    
    <tr>
      {/* Render the Bill's details */}
      <td style={{paddingLeft:"25px"}}>{domain.program}</td>
      <td style={{paddingLeft:"20px"}}>{domain.batch}</td>
      <td style={{paddingLeft:"20px"}}>{domain.capacity}</td>
      <td style={{paddingLeft:"20px"}}>{domain.qualification}</td>
      <td>
        {/* Payment button that calls the payBill() method with the given Bill object onClick */}
        <button id ={"button" + index} class="btn btn-outline-info mr-1 btn-space" data-toggle="modal" data-target="#form2" style={{marginRight:"5px"}}  onClick={()=>setIsOpen(true)}>
          View Students
        </button>
        {isOpen && <Students domain={domain} setIsOpen={setIsOpen}></Students>}
        <button id ={"btn" + index} class="btn btn-outline-warning" style={{marginLeft:"100px"}} data-toggle="modal" data-target="#form1" onClick={() => {setIsModOpen(true);}}>
          Modify Details
        </button>
        {isModOpen && <ModifyDomain domain={domain} setIsModOpen={setIsModOpen} modifyDomain={modifyDomain}></ModifyDomain>}
      </td>
    </tr>
  )

}
export default Domain