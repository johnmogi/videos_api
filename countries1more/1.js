$(document).ready(function() {
  var findAll = $("#findAll");
  const findOne = $("#findOne");
  const capital = $("#capital");

  const countryselect = $("#countryselect");
  const countryNames = $("#countryNames");
  const currencies = $("#currencies");

  //   a.	 Button – find all ,
  //   filter and show in the carousel only the flags of the countries whose name contain the input search

  $("#findOne").on("click", function() {
    findOneFunction()
    // console.log(filteredNames);
  });

  // $("#findAll").on("click", function() {
  //   findOneFunction()
  //   // console.log(filteredNames);
  // });

  $("#capital").on("click", function() {
    findCapital()
    // console.log(filteredNames);
  });

}); //drf

// flags
const newCountries = countries.map((country, index) => {
  const { flag } = country;
  return { flag };
});

// names
const filteredNames = countries.map((country, index) => {
  const { name } = country;
  return { name };
});



// starting with one...
const findOneFunction = function findOne() {
  const oneCountry = countries.find((country) => {
    let findInput = JSON.stringify(document.querySelector("#countryselect").value)
    let currentCountry = JSON.stringify(country.name)
    // .toLowerCase()
    const {
    name,
              flag
          } = country;
          console.log(currentCountry)
          console.log(findInput)  
          console.log(flag)  
          $( "li img" ).attr( "src", flag)
          $( "li h2" ).text( name )

                if (currentCountry === findInput) return {
          countryName: name,
          flag
         
      }
  })
  return oneCountry
}

// starting with one...
const findCapital = function findOneCap() {
  const oneCountry = countries.find((country) => {
    let findInput = JSON.stringify(document.querySelector("#countryselect").value)

    let CapitalCountry = JSON.stringify(country.capital)
    let currentCountry = JSON.stringify(country.name)

    // .toLowerCase()
    const {
    capital
          } = country;
          console.log(CapitalCountry)
          $( "li h2" ).text( capital )
         

                if (currentCountry === findInput) return {
          countryName: name,
          countryName: capital,
         
      }
  })
  return oneCountry
}
  
  