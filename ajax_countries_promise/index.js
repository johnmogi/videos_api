const config = {
    codeUrl: "https://restcountries.eu/rest/v2/alpha",
    currencyUrl: "https://api.exchangeratesapi.io/latest?base=",
    langUrl: "https://restcountries.eu/rest/v2/lang"
}

let tempArray1 = []
let tempArray2 = []


function retrieveCountry(countryCode) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${config.codeUrl}/${countryCode}`,
            method: "GET",
            success: function (country) {
                // if (country.name === "Israel") reject("Israel return!!!")
                resolve(country)
            },
            error: function (tempArray2) {
                reject(tempArray2, "there is some error")
            }

        })
    })

}



$(function () {
    $("#search").on("click", () => {

        const alpha3code = $("#searchCountry").val()
        if (alpha3code == "") return;
        retrieveCountry(alpha3code).
        then(result => {
            return result
        }).
        then(country => retrieveLanguage(country)).
        // then(deleteMulti(arr)).
        catch(error => console.error("custom error", error))

    })
})


function retrieveCountryLang(lang) {
    return $.ajax({
        url: `${config.langUrl}/${lang}`,
        method: "GET",
    })
}

function retrieveLanguage(language) {
    tempArray1 = []
    const {
        languages
    } = language
    languages.filter(item => item.name).forEach(language => {
        const {
            iso639_1
        } = language
        retrieveCountryLang(iso639_1)
            .then(result => {
                return result.map((item) => {
                    const {
                        name,
                        flag
                    } = item;
                    tempArray1.push({
                        name,
                        flag
                    })
                })
            }).then(function () {
                deleteMulti(tempArray1)
            })
            .catch(tempArray2 => console.log(tempArray2))
    })

}