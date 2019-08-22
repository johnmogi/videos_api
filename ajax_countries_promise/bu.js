function getLangCountryList(lang) {
    return $.ajax({
        url: `${config.languageUrl}/${lang}`,
        method: "GET",
    })
}


let arr = []
let arrDis = []

$(function () {
    $("#butcap").on("click", () => {
        const alpha3code = $("#search").val()
        getCountryByCode(alpha3code).
        then(res => {
            return res
        }).
        then(country => getAllLan(country)).
        // then(deleteMulti(arr)).
        catch(err => console.error("custom error", err))

    })
})

function getAllLan(language) {
    arr = []
    const {
        languages
    } = language
    languages.filter(item => item.name).forEach(language => {
        const {
            iso639_1
        } = language
        getLangCountryList(iso639_1)
            .then(res => {
                return res.map((item) => {
                    const {
                        name,
                        flag
                    } = item;
                    arr.push({
                        name,
                        flag
                    })
                })
            }).then(function () {
                deleteMulti(arr)
            })
            .catch(err => console.log(err))
    })

}

function deleteMulti(arr) {
    const result = [];
    const map = new Map();
    for (const item of arr) {
        if (!map.has(item.name)) {
            map.set(item.name, true); // set any value to Map
            result.push({
                name: item.name,
                flag: item.flag
            });
        }
    }
    draw(result)
}



function draw(data) {
    $(".cards").html("")
    data.map((item) => {
        const {
            name,
            flag
        } = item;

        $("£stage").append(`<div class="col-md-3"> <div class="card"> 
        <img class="card-img" src="${flag}" style="width:100%; height:300px">
        <div class="card-body">
        <h4 class="card-title">${name}</h4>
        </div></div></div>`)
    })
}