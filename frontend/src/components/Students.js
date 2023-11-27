import React from 'react'

const Students=(props) => {
    const close = ()=>{
        window.location.reload();
    }
    console.log(props.domain.students.length)
    return(
        <div class="modal fade"  id="form2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content" style={{width:'2500px',backgroundColor:"#454d55"}}>
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title" id="exampleModalLabel" style={{marginLeft:"38%",color:"#2FEBD2"}}>Students List</h5>
        <button type="button" id ="close" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>close()}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <table className="table table-striped table-dark" style={{color:"white"}}>
             <thead>
                 <tr style={{color:"#2FEBD2"}}>
                 <th>Roll Number</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Email</th>
                 <th>CGPA</th>
                 <th>Graduation Year</th>
                 <th>Total Credits</th>
                 </tr>
             </thead>
             {props.domain.students.map(student => {
            return ( <tbody key = {student.rollNumber}>
                
                <tr>
                <td>{student.rollNumber}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.cgpa}</td>
                <td>{student.graduationYear}</td>
                <td>{student.totalCredits}</td>
                </tr>
            </tbody>
            )
})}
        </table>
    </div>
  </div>
</div>
//     <div className="card text-black mb-5" style={{maxWidth: '75rem', height:'37rem', marginLeft:'10%',marginRight:'10%', zIndex:50,position:"relative"}}>
//     <div className="card-header" style={{color : 'white', backgroundColor:'black'}}>Students
//     <button type="button" className="btn-close" onClick={() => props.setIsOpen(false)} aria-label="Close" style={{float : 'right', backgroundColor : 'white'}}></button>
//     </div>
//     <div className="card-body" style={{color:"black"}}>
//         <table>
//             <thead>
//                 <tr>
//                 <th>Roll Number</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Email</th>
//                 <th>CGPA</th>
//                 <th>Graduation Year</th>
//                 <th>Total Credits</th>
//                 </tr>
//             </thead>
//             {props.domain.students.map(student => {
//             return ( <tbody>
                
//                 <tr>
//                 <td>{student.rollNumber}</td>
//                 <td>{student.firstName}</td>
//                 <td>{student.lastName}</td>
//                 <td>{student.email}</td>
//                 <td>{student.cgpa}</td>
//                 <td>{student.graduationYear}</td>
//                 <td>{student.totalCredits}</td>
//                 </tr>
//             </tbody>
//             )
// })}
//         </table>
//     </div>
//     </div>
    )
}

export default Students