'use strict'


/* GET Request?
// on submit, do api call and store response in something and update html
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/sum', {method: 'GET'})
        .then(res => res.json())
        .then(json => {document.getElementById("sum").value = json;
        //response that is assigned to sum should be referenced by the corresponding header
        console.log("submit done");});
})
//issue here. on fetch, form data not getting appended to the url like it normally should with a GET, hence trying POST
*/

const abc = { username: 'example' };

//POST Request
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    console.log({value});
    
    fetch("/.netlify/functions/sum", 
        {method: 'POST',
        //mode: "no-cors",
        cache:"no-cache",
        /*headers: {
            'Content-Type':'application/json'
        },*/
        //body: JSON.stringify(value),
        body: data
    })
    //.then(res => {return res.text})
    //.then(text => {console.log(text)});
    .then(res => {
        //res.json();
        console.log("response came");
        console.log(res);
    })
    .then(abc => {
            document.getElementById("sum").value = abc;
            console.log("this is the sum response");
            console.log(abc);
        });
        //console.log(JSON.parse(res));

        //response that is assigned to sum should be referenced by the corresponding header
        console.log("data sent to url via POST");
    });