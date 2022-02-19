//function gets data from api
const getAdvice = async () =>{
    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();
    if(res.ok){
        return data;
    }else{
        console.log("error");
    }
}

//function displays the data on the screen
const displayAdvice = async () =>{
    let newAdvice = await getAdvice();
    const adviceNumber = document.getElementById('adviceNumber');
    const advice = document.getElementById('advice');

    adviceNumber.textContent= newAdvice.slip.id;
    advice.textContent= newAdvice.slip.advice;
}

//function refreshes and shows new advice on screen
const refreshAdvice = () =>{
    const refreshBtn = document.querySelector('.refreshBtn-container');
    refreshBtn.addEventListener('click', ()=>{
        displayAdvice();
        console.log("try");
    } )
}

displayAdvice();
refreshAdvice();