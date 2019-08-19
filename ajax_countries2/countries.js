$(function () {

    function getCountries(callback) {
        $.ajax({
            url: "https://restcountries.eu/rest/v2/all",
            method: "GET",
            success: function (result, status, response) {
                //  console.log(status, response)
                callback(result)
            },
            error: function (err) {
                $("#stage").html("<h1>No Data!</h1>")
            }
        })
    }

    function getCountriesByName(name, callback) {
        $.ajax({
            // url: `https://restcountries.eu/rest/v2/all/${ search.value }`,
            url: `https://restcountries.eu/rest/v2/currency/${ search.value   }`,
            method: "GET",
            success: function (result, status, response) {
                debugger;
                // console.log(status, response)
                callback(result)
            },
            error: function (err) {
                $("#countries").html("<h1>No Data!</h1>")
            }
        })
    }
    $(function () {

        $("#butcap").on("click", function () {
            if ($("#search").val() == "") return;

            //  $("#load").html(`<div class="loader"></div>`)
            const cName = $("#search").val()
            getCountriesByName(cName, (result) => {
                $(".row").append(getCountriesNames(result))
            })
        })

    })

    function getCountriesNames(countries) {
        return countries.map(c =>
            `
            <div class="col-sm">
            <div class="card">
          
            <img src="${c.flag}" class="card-img-top" alt="${c.name}" />
            <div class="card-body">
            <h5 class="card-title">${c.name}</h5>
            <p class="card-text">Capital is : ${c.capital}</p>
      </div>
      </div>
        
        
        `)
    }
    getCountries((countries) => {
        $(".card").html(getCountriesNames(countries))
    });


}); //rf