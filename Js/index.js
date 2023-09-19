
const bton = document.getElementById("submit");

bton.addEventListener("click", async (e)=>{
    e.preventDefault();
    resBox.innerHTML = `<img style="width: 80px;" src="/Images/loader.svg" alt="">`

    let key = "ema_live_AW1xmS2rUrJNj4Et04cXYSpcVr48rHNGUnfqxqGP";
    let email = document.getElementById("username").value;

    url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    let response = await fetch(url);
    let result = await response.json();

    let str = '';
    for(key of Object.keys(result)){
        if(result[key] !== "" && result[key] !== " "){
            str = str + `<div>${key} : ${result[key]}</div>`
        }
    }
    resBox.innerHTML = str;
})


// This Is Sample JSON For Structuring The Content In It ::
/*
let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "mrpratikdole",
    "email": "mrpratikdole@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }
*/

// ................................................................... 