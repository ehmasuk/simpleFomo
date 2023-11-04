const fomoData = [
    {
        name: "María",
        img: "https://i.pravatar.cc/100?img=44",
        task: "Brought a couse with a discount of 10%",
        time: "Just now",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Liliana",
        img: "https://i.pravatar.cc/100?img=49",
        task: "Started a free trial",
        time: "Just now",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Marco",
        img: "https://i.pravatar.cc/100?img=49",
        task: "Started a free trial",
        time: "10 min ago",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "José",
        img: "https://i.pravatar.cc/100?img=3",
        task: "Started a free trial",
        time: "a minute ago",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Pedro",
        img: "https://i.pravatar.cc/100?img=13",
        task: "Started a free trial",
        time: "30 min ago",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Diego",
        img: "https://i.pravatar.cc/100?img=52",
        task: "Started a free trial",
        time: "4 hour ago",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Livia",
        img: "https://i.pravatar.cc/100?img=46",
        task: "Started a free trial",
        time: "2 hour ago",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
    {
        name: "Paloma",
        img: "https://i.pravatar.cc/100?img=42",
        task: "Started a free trial",
        time: "an hour ago",
        target: "https://escuela-ray-bolivar-sosa.com/",
    },
];

function getRandomNumber(min, max) {
    let nums = [];
    for (let i = min; i <= max; i++) {
        nums.push(i);
    }
    let randomIndex = Math.floor(Math.random() * nums.length);
    let randomNumber = nums[randomIndex];
    nums.splice(randomIndex, 1);
    return randomNumber;
}

function newFomo(){
    const fomoNUmber = getRandomNumber(0, fomoData.length - 1);
    const fomoImg = document.querySelector(".mini-formo-popup .profile img");
    const fomoAuthor = document.querySelector(".mini-formo-popup .info .author");
    const fomoTime = document.querySelector(".mini-formo-popup .info .time");
    const fomoDes = document.querySelector(".mini-formo-popup .info .des");
    fomoImg.src = fomoData[fomoNUmber].img;
    fomoAuthor.innerText = fomoData[fomoNUmber].name;
    fomoTime.innerText = fomoData[fomoNUmber].time;
    fomoDes.innerText = fomoData[fomoNUmber].task;
}

function closeFomo(){
    document.querySelector(".dashboard-fomo").style.animationName = 'fomoSlideOut';
    setTimeout(()=>{
        document.querySelector(".dashboard-fomo").style.visibility = 'hidden';
    },400)
}
function showFomo(){
    document.querySelector(".dashboard-fomo").style.visibility = 'visible';
    document.querySelector(".dashboard-fomo").style.animationName = 'fomoSlideIn';
}





function closeFomoFunc(){
    setTimeout(()=>{
        closeFomo()
    },9000)
}


setInterval(()=>{
    newFomo();
    showFomo();

    closeFomoFunc();

},15000)



