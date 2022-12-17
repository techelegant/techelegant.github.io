const setdatadiv = document.querySelector("#showDivData");
setdatadiv.innerHTML = "";
//This is for get data.
fetch("https://puzzle.mead.io/puzzle").then((response) => {    
    //if you want to data get in json format,
    response.json().then((data) => {
        setdatadiv.innerHTML = data.puzzle;
        console.log(data);
    })
    
    //Get data in text format,
    /*
    response.text().then((data) => {
        setdatadiv.innerHTML = data;
    })
    */
    
}).catch((error) => {
    setdatadiv.innerHTML = "Error found." + error;
})
//If you want to post / put / delete method pass with fetch then use second parameter and pass object like:
//pass query value in body with string
//if you passs data with json header, use headers: {"Content-Type": "application/json"}
/*
const queryvalue = {
    name: "Jay",
    address: "ahmedabad"
}
fetch(url,{
    method: "post",
    headers: {"Content-Type": "application/json",},
    body: JSON.stringify(queryvalue)
}).then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})
*/