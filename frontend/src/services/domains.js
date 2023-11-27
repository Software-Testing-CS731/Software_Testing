import axios from 'axios'

// The API endpoint where bills are located
const domainsUrl = `http://localhost:8080/api/domain`

const viewStudentsUrl = `http://localhost:8080/api/viewStudents?domainId=`

const addDomainUrl = `http://localhost:8080/api/domain/add`

const modifyDomainUrl = `http://localhost:8080/api/domain/update`


// Gets all bills which belong to a user
const getUserDomains = async () => {
  // Get bills of the given user, using query parameter, ?user={user.studentId}
  const response = await axios.get(`${domainsUrl}`)
  
  // The .data field would now contain the bills of the users
  return response.data
}

// Pays the bill which is specified, after paying, the record of the bill is deleted
// So this translates to a delete request from axios to the bill API endpoint at the backend
const viewStudents = async (domain) => {
  // console.log(domain)
  const response = await axios.get(`${viewStudentsUrl+domain.domainId}`)
  //const response = await axios.delete(`${billsUrl}/${bill.billId}`)
  return response.data
}

const addDomain = async (data) => {
  const response = await axios.post(addDomainUrl,data)
  return response.data
}

const modifyDomain = async(data) => {
  const response = await axios.post(modifyDomainUrl,data)
  return response.data
}
const exportObject = { getUserDomains, viewStudents , addDomain,modifyDomain}

export default exportObject