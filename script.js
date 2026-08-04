let fairyInterval = null;

const envelope = document.querySelector(".envelope-container");
const message = document.getElementById("message");

const text = 
`I made this little surprise just for you 🩷

I wish all the happiness to you today and every single day after ✨
I hope your day is filled with happiness, kindness, and i wish you get everything you want~
3o2bal milion sana w enty b5air w se7a w sa3ada

Have an amazing day 🌸`;

let opened = false;

// Remove the automatic add of "hideIntro" from here!

envelope.addEventListener("click", () => {
    if (opened) return;

    opened = true;

    envelope.classList.add("open");
    petalExplosion();
    
    setTimeout(() => {

    document
        .getElementById("sideConfetti")
        .classList.add("show");
  
        document
    .getElementById("giftGifLeft")
    .classList.add("show");

document
    .getElementById("giftGifRight")
    .classList.add("show");
    
    

},1600);
    
    setTimeout(() => {

    fairyInterval = setInterval(fairyDust, 20);

}, 600);

setTimeout(() => {

    clearInterval(fairyInterval);
    fairyInterval = null;

}, 1600);

    // Hide title and subtitle half a second (500ms) after clicking
    setTimeout(() => {

    const title = document.getElementById("title");
    const subtitle = document.getElementById("subtitle");

    console.log(title, subtitle);

    title.classList.add("hideIntro");
    subtitle.classList.add("hideIntro");

}, 500);

    setTimeout(() => {
        typeText();
    }, 800);
});


function typeText(){

    let i = 0;

    const typing = setInterval(()=>{

        message.innerHTML += text[i];

        i++;

        if(i >= text.length){

            clearInterval(typing);

        }

    },35);

}


/* Sakura Petals */

const petalImages = [
    "Images/Petal1.png",
    "Images/Petal2.png",
    "Images/Petal3.png",
    "Images/Petal4.png",
    "Images/Petal5.png",
    "Images/Petal6.png",
    "Images/Petal7.png",
    "Images/Petal8.png",
    "Images/Petal9.png",
    "Images/Petal10.png"
];

setInterval(()=>{

    const petal=document.createElement("img");

    petal.className="petal";
    
    const randomImage =
    petalImages[Math.floor(Math.random() * petalImages.length)];

petal.src = randomImage;
    
    const size = 8 + Math.random() * 22;

petal.style.width = size + "px";
petal.style.height = size + "px";

const rotationTurns = 2 + (26 - size) / 18;

// Small petals ≈ 3 turns
// Big petals ≈ 2 turns

petal.style.setProperty(
    "--turns",
    rotationTurns
);

    petal.style.left=Math.random()*100+"vw";
    
    petal.style.setProperty(
"--drift",
(-40 + Math.random()*80) + "px"
);

    const duration = 3 + size * 0.33;

petal.style.animationDuration = duration + "s";

    petal.style.opacity=
0.45 + Math.random()*0.55;

    document
    .getElementById("effects")
    .appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

},300);


/* Sparkles */

setInterval(()=>{

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top="-10px";

    sparkle.style.animationDuration=
    (4+Math.random()*4)+"s";

    document
    .getElementById("effects")
    .appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },9000);

},1500);

document.addEventListener("pointerdown", (e)=>{

const glow=document.createElement("div");

glow.className="touch-glow";

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

document.body.appendChild(glow);

const sparkleCount = 7 + Math.floor(Math.random() * 3);

for(let i = 0; i < sparkleCount; i++){

const spark=document.createElement("div");

spark.className="spark";

const shapes=[
"",
"star4",
"star8",
"diamond"
];

spark.classList.add(
shapes[Math.floor(Math.random()*shapes.length)]
);

spark.style.left = (e.clientX + (Math.random() - 0.5) * 8) + "px";
spark.style.top = (e.clientY + (Math.random() - 0.5) * 8) + "px";

const angle = (i / sparkleCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
const distance=20+Math.random()*30;

spark.style.setProperty(
"--x",
Math.cos(angle)*distance+"px"
);

spark.style.setProperty(
"--y",
Math.sin(angle)*distance+"px"
);

console.log(
    Math.cos(angle) * distance,
    Math.sin(angle) * distance
);

const size = 6 + Math.random() * 6;

spark.style.width = size + "px";
spark.style.height = size + "px";

const colors=[
"#ffffff",   // White
"#ffd1e8",   // Pink
"#ff9aa2",   // Soft rose
"#ff6b81",   // Sakura red
"#ffe6f2"    // Very light pink
];

const color =
colors[Math.floor(Math.random()*colors.length)];

spark.style.background = color;
spark.style.color = color;

document.body.appendChild(spark);

setTimeout(()=>{
spark.remove();
},1500);

}

setTimeout(()=>{
glow.remove();
},800);

});


setInterval(()=>{

const star=document.createElement("span");

star.className="bgStar";

const shapes=[
"✦",
"✧",
"⋆",
"✴"
];

star.textContent=
shapes[Math.floor(Math.random()*shapes.length)];

const colors=[
"#ffffff",   // White
"#ffd1e8",   // Pink
"#ff9aa2",   // Soft rose
"#ff6b81",   // Sakura red
"#ffe6f2"    // Very light pink
];

star.style.color =
colors[Math.floor(Math.random()*colors.length)];

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.fontSize=
(6+Math.random()*8)+"px";

star.style.animationDuration=
(2+Math.random()*3)+"s";

document.body.appendChild(star);

for(let i=0;i<2;i++){

const dust=document.createElement("span");

dust.className="fairyDust";

const shapes=[
"✦",
"✧",
"⋆"
];

dust.textContent=
shapes[Math.floor(Math.random()*shapes.length)];

const angle=Math.random()*Math.PI*2;

const radius=10+Math.random()*30;

dust.style.left =
(Math.random() * window.innerWidth) + "px";

dust.style.top =
(Math.random() * window.innerHeight) + "px";

const colors=[
"#ffffff",
"#9fd8ff",
"#ffd1e8"
];

const color=
colors[Math.floor(Math.random()*colors.length)];

dust.style.color=color;

document.body.appendChild(dust);

setTimeout(()=>{

dust.remove();

},5000);

}

setTimeout(()=>{
star.remove();
},3000);

},350);


function petalExplosion() {

    const envelope =
        document.querySelector(".envelope");

    const rect =
        envelope.getBoundingClientRect();

    const centerX =
        rect.left + rect.width / 2;

    const centerY =
        rect.top + rect.height / 2;

    for(let i = 0; i < 35; i++){

        const petal =
            document.createElement("img");

        petal.src =
            petalImages[
                Math.floor(Math.random()*petalImages.length)
            ];

        petal.className = "petal";

        petal.style.position = "fixed";

        const spawnRadius = 135;   // Increase or decrease this

const spawnAngle = Math.random() * Math.PI * 2;
const spawnDistance = Math.random() * spawnRadius;

petal.style.left =
    centerX + Math.cos(spawnAngle) * spawnDistance + "px";

petal.style.top =
    centerY + Math.sin(spawnAngle) * spawnDistance + "px";

        const size =
            10 + Math.random()*18;

        petal.style.width = size + "px";

        const angle =
            Math.random()*Math.PI*2;

        const distance =
            80 + Math.random()*140;

        petal.animate([
            {
                transform:
                    "translate(0,0) rotate(0deg)",
                opacity:1
            },
            {
                transform:
                    `translate(${Math.cos(angle)*distance}px,
                               ${Math.sin(angle)*distance}px)
                     rotate(${360+Math.random()*720}deg)`,
                opacity:0
            }
        ],{

            duration:700,

            easing:"ease-out",

            fill:"forwards"

        });

        document.getElementById("petalContainer").appendChild(petal);

        setTimeout(()=>{
            petal.remove();
        },1400);

    }

}

function fairyDust(){

    const letter =
        document.querySelector(".letter");

    const rect =
        letter.getBoundingClientRect();

    for(let i=0;i<2;i++){

        const star =
            document.createElement("span");

        star.className="fairyDust";

        const shapes=[
            "✦",
            "✧",
            "⋆"
        ];

        star.textContent=
            shapes[Math.floor(Math.random()*shapes.length)];

        const leftSide =
            Math.random()<0.5;

        star.style.left=
            (leftSide ? rect.left : rect.right)+"px";

        star.style.top=
            (
                rect.top+
                Math.random()*rect.height*0.65
            )+"px";

        const dx=
            (leftSide?-1:1)*
            (10+Math.random()*25);

        const dy=
            (Math.random()-0.5)*20;

        star.style.setProperty("--dx",dx+"px");
        star.style.setProperty("--dy",dy+"px");

        const colors=[
"#ffffff",   // White
"#ffd1e8",   // Pink
"#ff9aa2",   // Soft rose
"#ff6b81",   // Sakura red
"#ffe6f2"    // Very light pink
];

        star.style.color=
            colors[Math.floor(Math.random()*colors.length)];

        star.style.fontSize=
            (8+Math.random()*6)+"px";

        document.body.appendChild(star);

        setTimeout(()=>{
            star.remove();
        },900);

    }

}