
let searchBtn1=document.getElementById('searchBtn');

let countrySearch1=document.getElementById('countrySearch');

searchBtn1.addEventListener('click',()=>{
    let countryName=countrySearch1.value;
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    console.log(finalURL);
    fetch(finalURL)
    .then(response=>response.json())
    .then(data=>{
        console.log(data[0].name.common);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].population);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        var a =(
            Object.values(data[0].languages) .toString().split(",").join(", "));
        // console.log(data[0].currencies[0]);
        // console.log(Object.keys(data[0].currencies[0]));
        console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
       


        
    result.innerHTML=`    
    <img src="${data[0].flags.svg}" 
    class="flagImg">
    <h2>${data[0].name.common}</h2>
    <b><div id="cap">Capital :</b>
        <h4><b>${data[0].capital[0]}<b></h4>
    </div>
    <div id="cap">Continent :
        <h4><b>${data[0].continents[0]}<b></h4>
    </div>
    <div id="cap">Population :
        <h4><b>${data[0].population}<b></h4>
    </div>
    <div id="cap">Languages :
        <h4><b>${a}<b></h4>
    </div>
    <div id="cap">Currencies :
        <h4><b>${data[0].currencies[Object.keys(data[0].currencies)].symbol}<b></h4>
    </div>

    
    `
        
    })
})
