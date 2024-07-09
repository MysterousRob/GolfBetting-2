

import  axios  from "axios"


export const fetchDataArray = async (func, endpoint) => {

    const response = await axios.get(endpoint)
    // console.log(`Fetch Data Clients: ${JSON.stringify(response.data)}`)
    func(response.data)
  }