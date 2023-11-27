import React, { useState } from "react"

const AddForm = ({setPortalName,addDomain})=>{
  const close = ()=>{
    window.location.reload();
    setPortalName('Admin - Domain Portal')
}
    const [ program, setProgram ] = useState('')
    const [ batch, setBatch ] = useState('')
    const [ capacity, setCapacity ] = useState('')
    const [ qualification, setQualification ] = useState('')

    const handleAddDomain = (event) => {
      event.preventDefault()

      const data = {
        program,batch,capacity,qualification
      }

      addDomain(data)

      setProgram('')
      setBatch('')
      setCapacity('')
      setQualification('')
    }
return(
  <div class="modal fade"  id="form" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" style={{backgroundColor:"#454d55"}}>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title" id="exampleModalLabel" style={{paddingLeft:"170px",color:"#2FEBD2"}}>Add Domain</h5>
        <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>close()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form onSubmit={handleAddDomain}>
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

export default AddForm

{/* <div className="card text-black mb-5" style={{maxWidth: '75rem', height:'37rem', marginLeft:'17%', zIndex:50}}>
<div className="card-header" style={{color : 'white', backgroundColor:'black'}}>Students
<button type="button" className="btn-close" onClick={() => setIsFormOpen(false)} aria-label="Close" style={{float : 'right', backgroundColor : 'white'}}></button>
</div>
<div className="card-body">
<form onSubmit={handleAddDomain}>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Program</label>
    <div class="col-sm-10">
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
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Batch</label>
    <div class="col-sm-10">
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
  <div class="form-group row">
  <label for="inputPassword3" class="col-sm-2 col-form-label">Capacity</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" 
      placeholder="Capacity"
      value={capacity}
      onChange={event => setCapacity(event.target.value)}
      id="capacity"
      required/>
    </div>
  </div>
  <div class="form-group row">
  <label for="inputPassword3" class="col-sm-2 col-form-label">Qualification</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" 
      placeholder="Qualification"
      value={qualification}
      onChange={event => setQualification(event.target.value)}
      id="qualification"
      required/>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-2">Confirm</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1" required/>
        <label class="form-check-label" for="gridCheck1">
          Confirm Submission
        </label>
      </div>
    </div>
  </div>
  <div class="form-group row" style={{paddingTop:"30px"}}>
    <div class="col-sm-10">
      utton type="submit" class="btn btn-primary">Add Domain</button>
    </div>
  </div>
</form>
</div>
</div> */}