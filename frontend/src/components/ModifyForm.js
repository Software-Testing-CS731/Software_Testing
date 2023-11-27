import React, { useState } from "react"

const ModifyForm = ({domain,setIsModOpen,modifyDomain})=>{
    console.log(domain.domainId)
    const close = ()=>{
        window.location.reload();
    }
   // console.log(props.domain.students.length)
    const [ program, setProgram ] = useState(domain.program)
    const [ batch, setBatch ] = useState(domain.batch)
    const [ capacity, setCapacity ] = useState(domain.capacity)
    const [ qualification, setQualification ] = useState(domain.qualification)
    const [ domainId, setDomainId ] = useState(domain.domainId)

    const handleModifyDomain = (event) => {
        setDomainId(domain.domainId)
      event.preventDefault()
      const data = {
        domainId,program,batch,capacity,qualification
      }

      modifyDomain(data)

      setProgram('')
      setBatch('')
      setCapacity('')
      setQualification('')
      setDomainId(domain.domainId)

      
    }

return(
    <div class="modal fade"  id="form1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" style={{backgroundColor:"#454d55"}}>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title" id="exampleModalLabel" style={{paddingLeft:"170px",color:"#2FEBD2"}}>Modify Domain</h5>
        <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>close()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form onSubmit={handleModifyDomain}>
        <div class="modal-body">
          <div class="form-group">
            <label for="program" style={{color:"#2FEBD2"}}>Program</label>
            <input
                type='text'
                className='form-control'
                placeholder='Program'
                value={program}
                onChange={event => setProgram(event.target.value)}
                id='program'
                required></input>
            {/* <small id="emailHelp" class="form-text text-muted">Your information is safe with us.</small> */}
          </div>
          <div class="form-group">
            <label for="batch" style={{color:"#2FEBD2"}}>Batch</label>
            <input type="text"
      className="form-control"
      placeholder="Batch"
      value={batch}
      onChange={event => setBatch(event.target.value)}
      id="batch"
      required></input>
          </div>
          <div class="form-group">
            <label for="capacity" style={{color:"#2FEBD2"}}>Capacity</label>
            <input type="number" min="0" step="1" class="form-control" 
      placeholder="Capacity"
      value={capacity}
      onChange={event => setCapacity(event.target.value)}
      id="capacity"
      required></input>
          </div>
          <div class="form-group">
            <label for="qualification" style={{color:"#2FEBD2"}}>Qualification</label>
            <input type="text" class="form-control" 
      placeholder="Qualification"
      value={qualification}
      onChange={event => setQualification(event.target.value)}
      id="qualification"
      required></input>
          </div>
        </div>
        <div class="modal-footer border-top-0 d-flex justify-content-center">
          <button id="submit" type="submit" class="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

)
}

export default ModifyForm

{/* <div className="card text-black mb-5" style={{width: '50rem', height:'25rem', marginLeft:'17%', zIndex:50}}>
<div className="card-header" style={{color : 'white', backgroundColor:'black'}}>Modify Domain
<button type="button" className="btn-close" onClick={() => setIsModOpen(false)} aria-label="Close" style={{float : 'right', backgroundColor : 'white'}}></button>
</div>
<div className="card-body" style={{width:'50rem'}}>
<form onSubmit={handleModifyDomain}>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Program</label>
    <div className="col-sm-10">
      <input
      type='text'
      className='form-control'
      placeholder='Program'
      value={program}
      onChange={event => setProgram(event.target.value)}
      id='program'
      required 
      />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Batch</label>
    <div className="col-sm-10">
      <input type="text"
      className="form-control"
      placeholder="Batch"
      value={batch}
      onChange={event => setBatch(event.target.value)}
      id="batch"
      required
      />
    </div>
  </div>
  <div className="form-group row">
  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Capacity</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" 
      placeholder="Capacity"
      value={capacity}
      onChange={event => setCapacity(event.target.value)}
      id="capacity"
      required/>
    </div>
  </div>
  <div className="form-group row">
  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Qualification</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" 
      placeholder="Qualification"
      value={qualification}
      onChange={event => setQualification(event.target.value)}
      id="qualification"
      required/>
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-2">Confirm</div>
    <div className="col-sm-10">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1" required/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Confirm Submission
        </label>
      </div>
    </div>
  </div>
  <div className="form-group row" style={{paddingTop:"30px"}}>
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Modify Domain</button>
    </div>
  </div>
</form>
</div>
</div> */}