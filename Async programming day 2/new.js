import fetch from "node-fetch";

fetch("https://restcountries.com/v3.1/all").
then((res) => res.json()).
then((data) => {
    var c =0;
    data.map((country) => {
        c++;
        if(c==4){
            console.log(country.name.common);
        }
    })
});