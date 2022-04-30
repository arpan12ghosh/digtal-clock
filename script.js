let mydate = new  Date(); 
let format = document.querySelector(".format").innerText;

button.addEventListener('click',()=>{
    if(format=="12-Hrs"){
        format = "24-Hrs";
        document.querySelector(".format").innerText = "24-Hrs";
        document.querySelector(".ampm").style.visibility = "visible";
    }
    else{
        format = "12-Hrs";
        document.querySelector(".format").innerText = "12-Hrs";
        document.querySelector(".ampm").style.visibility = "hidden";
    }
    
})

week = ()=>{
    let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekDays[mydate.getDay()];
}

month = ()=>{
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthName[mydate.getMonth()];
}

document.querySelector('.week').innerText = week();


setInterval(()=>{
    let newdate = new  Date(); 
    if(format == '12-Hrs'){
        if(newdate.getHours()<10){
            document.querySelector('.hr').innerText ="0" + newdate.getHours();
        }
        else{
        document.querySelector('.hr').innerText = newdate.getHours();
        }
    }
    else{
        let newHr = newdate.getHours();
        if(newdate.getHours() > 12){
           newHr = newdate.getHours() - 12;
           document.querySelector('.ampm').innerText = "PM";
        }
        if(newHr>9){
            document.querySelector('.hr').innerText = newHr;
        }
        else{
        document.querySelector('.hr').innerText = "0" + newHr;
        }
    }
    
},1000);

setInterval(()=>{
    let newdate = new  Date(); 
    if(newdate.getMinutes()<10){
        document.querySelector('.min').innerText ="0" + newdate.getMinutes();
    }
    else{
    document.querySelector('.min').innerText = newdate.getMinutes();
    }
},1000);

setInterval(()=>{
    let newdate = new  Date(); 
    if(newdate.getSeconds()<10){
        document.querySelector('.sec').innerText ="0" + newdate.getSeconds();
    }
    else{
    document.querySelector('.sec').innerText = newdate.getSeconds();
    }
},1000);

if(mydate.getDate()<10){
    document.querySelector('.day').innerText ="0" + mydate.getDate();
}
else{
    document.querySelector('.day').innerText = mydate.getDate();
}
document.querySelector('.month').innerText = month();
document.querySelector('.year').innerText = mydate.getFullYear();

function randomQuote(){
    fetch('https://api.quotable.io/random')
    .then(response=>response.json())
    .then(data => {
        document.querySelector('.quote').innerText = data.content;
        document.querySelector('.author').innerText = "--- " + data.author;
    });
}

randomQuote();  


refreshBtn.addEventListener('click',()=>{
    randomQuote();
})

