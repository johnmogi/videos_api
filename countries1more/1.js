$(document).ready(function() {
  var findAll = $("#findAll");
  const findOne = $("#findOne");
  const capital = $("#capital");

  const countryselect = $("#countryselect");
  const countryNames = $("#countryNames");
  const currencies = $("#currencies");

  //   a.	 Button – find all ,
  //   filter and show in the carousel only the flags of the countries whose name contain the input search

  $("#findAll").on("click", function() {
    console.log(filteredNames);
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

$("#findOne").on("click", function() {
  const filteredNames = countries.map((country, index) => {
    const { name } = country;
    const ctitle = $("li h2").html(name);
    return { name };
  });

  //   console.log(countryselect.value);
});
