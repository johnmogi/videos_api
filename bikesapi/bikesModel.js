
  
    
$(function() {
 

    }); // RF


  let networks = bcCompanies.networks
  const citiesForCompanies = bcCompanies.networks.reduce((companiesObj, Bccompany) => {
    let companyName = Bccompany.company
   
    let companies = Bccompany.location
    let city = companies.city
    let beforeObj = companiesObj[city] || []
    // console.log(city)

   $("#callforbike").text("option").text(city)

    return {...companiesObj,[city]: [...beforeObj,companyName]}
    }, {})

