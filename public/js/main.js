const a= document.getElementById('btn');
const b= document.getElementById('data');
const res= document.getElementById('res');
const axios= require('axios');

a.addEventListener('click',showResult);

function showResult(){
    if(b.value===''){
        alert('Enter Data');
    }
    else{
        axios({
            "method":"GET",
            "url":"https://pierre2106j-qrcode.p.rapidapi.com/api",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"pierre2106j-qrcode.p.rapidapi.com",
            "x-rapidapi-key":"225859193cmshd3c0854db9f9a0ap1bdb18jsna2317bf7d964",
            "useQueryString":true
            },"params":{
            "backcolor":"ffffff",
            "pixel":"1 to 10",
            "ecl":"L %7C M%7C Q %7C H",
            "forecolor":"000000",
            "type":"text %7C url %7C tel %7C sms %7C email",
            "text":b.value
            }
            })
            .then((response)=>{
              console.log(response);
              console.log(response.data);
              let output=`<img src=${response.data}>`;
                res.innerHTML= output;
            })
            .catch((error)=>{
              console.log(error)
            })
    }
}