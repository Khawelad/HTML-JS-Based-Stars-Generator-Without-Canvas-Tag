const Generator = document.querySelector(".starsgenerator");
const StarsColors = [
    "rgb(250, 250, 250)",
    "rgb(240, 240, 240)",
    "rgb(230, 230, 230)",
    "rgb(220, 220, 220)",
    "rgb(210, 210, 210)",
    "rgb(200, 200, 200)",
];
const StarsInglow = [
    "inset 0px 0px 1px 0 rgba(255, 0, 0, 1)",
    "inset 0px 0px 1px 0 rgba(0, 255, 0, 1)",
    "inset 0px 0px 1px 0 rgba(0, 0, 255, 1)",
    "inset 0px 0px 1px 0 rgba(255, 255, 0, 1)",
    "inset 0px 0px 1px 0 rgba(255, 255, 255, 1)",
    "inset 0px 0px 1px 0 rgba(0, 255, 255, 1)",
    "inset 0px 0px 1px 0 rgba(255, 0, 255, 1)",
];

window.onload = () => {
    GenerateStars();
    RemoveExcessStars();
    // AnimateStars();
}

// ==================
// Stars Start
// ==================

function GenerateStars()
{
    for (i = 0; i <= 200; i++)
    {
        Generator.innerHTML += "<span class='star'></span>"
        var Stars = document.querySelectorAll(".star");
        Stars[i].style.width = Math.random() * 5 + "px";
        Stars[i].style.backgroundColor = StarsColors[Math.floor(Math.random() * StarsColors.length)];
        Stars[i].style.boxShadow = StarsInglow[Math.floor(Math.random() * StarsInglow.length)];
        Stars[i].style.top = (Math.random() * 100) + "%";
        Stars[i].style.left = (Math.random() * 100) + "%";
        Stars[i].style.animationDelay = -(Math.random() * 10) + "s";
    }
}

function RemoveExcessStars()
{
    var Stars = document.querySelectorAll(".star");
    
    for (i = 0; i < Stars.length; i++)
    {
        let X = (Stars[i].getBoundingClientRect().left) + (Stars[i].clientWidth / 2);
        let Y = (Stars[i].getBoundingClientRect().top) + (Stars[i].clientHeight / 2); 
        if (parseInt(Stars[i].style.width) < 1 || X > window.innerWidth || Y > window.innerHeight || X < 0 || Y < 0)
        {
            Stars[i].remove();
        }
    }
}

function AnimateStars()
{
    var Stars = document.querySelectorAll(".star");
    for (i = 0; i < Stars.length ; i++)
    {
        let X = (Stars[i].getBoundingClientRect().left) + (Stars[i].clientWidth / 2);
        let Y = (Stars[i].getBoundingClientRect().top) + (Stars[i].clientHeight / 2);     
        let Radian = Math.atan2((window.innerWidth / 2) - X, (window.innerHeight / 2) - Y);
        let YDirection = -Math.cos(Radian) * 1000;
        let XDirection = -Math.sin(Radian) * 1000;
        Stars[i].animate
        ([
            {
                transform: `translateY(0px) translateX(0px)`,
                opacity: 0,
            },
            {
                opacity: 1,
            },
            {
                transform: `translateY(${YDirection}px) translateX(${XDirection}px)`,
            },
        ], 
        {
            delay: -(Math.random() * 10000),
            duration: 2000,
            iterations: Infinity
        });
    }
}