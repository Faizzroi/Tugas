var personnel = [
    {
      id: 5, 
      name: "Luke Skywalker", 
      pilotingScore: 98, 
      shootingScore: 56 , 
      isForceUser: true
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true
    }
];

codesnipp= `<iframe
src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&wt=none&l=auto&width=&ds=false&dsyoff=16px&dsblur=68px&wc=false&wa=false&pv=0px&ph=0px&ln=true&fl=0&fm=Hack&fs=16px&lh=174%25&si=false&es=2x&wm=false&code=var%2520personnel%2520%253D%2520%255B%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520id%253A%25205%252C%2520%250A%2520%2520%2520%2520%2520%2520name%253A%2520%2522Luke%2520Skywalker%2522%252C%2520%250A%2520%2520%2520%2520%2520%2520pilotingScore%253A%252098%252C%2520%250A%2520%2520%2520%2520%2520%2520shootingScore%253A%252056%2520%252C%2520%250A%2520%2520%2520%2520%2520%2520isForceUser%253A%2520true%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520id%253A%252082%252C%250A%2520%2520%2520%2520%2520%2520name%253A%2520%2522Sabine%2520Wren%2522%252C%250A%2520%2520%2520%2520%2520%2520pilotingScore%253A%252073%252C%250A%2520%2520%2520%2520%2520%2520shootingScore%253A%252099%252C%250A%2520%2520%2520%2520%2520%2520isForceUser%253A%2520false%252C%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520id%253A%252022%252C%250A%2520%2520%2520%2520%2520%2520name%253A%2520%2522Zeb%2520Orellios%2522%252C%250A%2520%2520%2520%2520%2520%2520pilotingScore%253A%252020%252C%250A%2520%2520%2520%2520%2520%2520shootingScore%253A%252059%252C%250A%2520%2520%2520%2520%2520%2520isForceUser%253A%2520false%252C%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520id%253A%252015%252C%250A%2520%2520%2520%2520%2520%2520name%253A%2520%2522Ezra%2520Bridger%2522%252C%250A%2520%2520%2520%2520%2520%2520pilotingScore%253A%252043%252C%250A%2520%2520%2520%2520%2520%2520shootingScore%253A%252067%252C%250A%2520%2520%2520%2520%2520%2520isForceUser%253A%2520true%250A%2520%2520%2520%2520%257D%252C%250A%2520%2520%2520%2520%257B%250A%2520%2520%2520%2520%2520%2520id%253A%252011%252C%250A%2520%2520%2520%2520%2520%2520name%253A%2520%2522Caleb%2520Dume%2522%252C%250A%2520%2520%2520%2520%2520%2520pilotingScore%253A%252071%252C%250A%2520%2520%2520%2520%2520%2520shootingScore%253A%252085%252C%250A%2520%2520%2520%2520%2520%2520isForceUser%253A%2520true%250A%2520%2520%2520%2520%257D%250A%255D%253B%250A"
style="width: 341px; height: 1087px; border:0; transform: scale(1);"
sandbox="allow-scripts allow-same-origin">
</iframe>`

forceuser = personnel
.filter(a => a.isForceUser==true)
.map(a => [a.pilotingScore, a.shootingScore])
.map(a => 
  {
    b = a.reduce((x,y) => x+y)
    return b
  })

// document.write(`<div class="score-container">`);
// document.write(`<div class="boxes">`);
// document.write(`<div>`);
// document.write(`<p> ${forceuser[0]}`);
// document.write(`</div>`);
// document.write(`<div>`);

// document.write(`</div>`);
// document.write(`</div>`);
// document.write(`</div>`);

LukeScore=forceuser[0];
EzraScore=forceuser[1];
CalebScore=forceuser[2];

document.write(`
<style>
      header {
        align-items: center;
        display: flex;
        height: 130px;
        align-items: center;
        justify-content: center;
      }
      header p
      {
        font-size: 58px;
        font-family: monospace;
        font-weight: 900;
        color: yellow;
        margin-top: 45px;
      }
      body {
        padding: 0;
        margin: 0;
        background-color: black;
        box-sizing: border-box;
      }
      .score-container {
        display: flex;
        justify-content: space-evenly;
        height: 700px;
        gap: 20px;
      }
      .class-container
      {
        border-bottom: 2px solid yellow;
        border-top: 2px solid yellow;
        height: 800px;
        overflow-y: auto;
        overflow-x: hidden;
      }
      .image-container {
        width: max-content;
        height: auto;
        padding: 0;
        margin: 0;
        align-items: center;
        background-color: black;
      }
      iframe
      {
        overflow-y: scroll !important;
        background-color: black;
        border-radius: 20px;
      }
      img {
        width: 500px;
        height: auto;
      }
      .title
      {
        font-size: 24px;
        font-weight: 900;
        font-family: monospace;
      }
      .boxes {
        display: flex;
        color: yellow;
        height: 600px;
        width: 24%;
        margin-top: 65px;
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding: 30px;
        gap: 30px;
        border: 2px solid yellow;
        border-radius: 8px;
      }
      .boxes div
      {
        height: max-content;
        width: 45%;
        min-width: 160px;
        font-size: 16px;
        font-family: monospace;
        color: yellow;
        padding: 20px 0;
        background-color: black;
        border: 2px solid yellow;
        border-radius: 6px;
        box-shadow: 1px 1px 22px black;
      }
      a {
        width: 500px;
        height: 500px;
      }
      ::-webkit-scrollbar
      {
        background-color: rgba(240, 248, 255, 0);
        display: none;
      }
      ::-webkit-scrollbar-thumb
      {
        background-color: black;
        border: 2px solid yellow;
        border-radius: 9px;
        display: none;
      }
      ::-webkit-scrollbar-button
      {
        display: none;
      }
    </style>
  </head>
  <body>
<header>
  <p>Total Score</p>
</header>
<div class="score-container">
<div class="boxes">
  <p class=title>Force User</p>
  <div>
  <p>Luke Skywalker</p>
  <p>Total Score:${LukeScore}</p>
  </div>
  <div>
  <p>Ezra Bridger</p>
  <p>Total Score:${EzraScore}</p>
  </div>
  <div>
  <p>Caleb Dume</p>
  <p>Total Score:${CalebScore}</p>
  </div>
</div>
<div class="class-container">
  <div class="image-container">
    ${codesnipp}
  </div>
</div>
<div class="boxes">
  <p class=title>Non Force User</p>
  <div>
  <p>Sabine Wren</p>
  <p>Total Score:${73+99}</p>
  </div>
  <div>
  <p>Zeb Orellios</p>
  <p>Total Score:${20+59}</p>
  </div>
</div>
</div>`);


// sTotal=forceuser
// .map(a => a.shootingScore)
// .reduce((a,b) => 


// .reduce((a.pilotingScore,b) => 
// {
  // hasil=+b.pilotingScore
  // console.log(b[0]);
  // console.log(b.pilotingScore);
  // console.log(hasil);
  // return hasil
// })
// {
//   document.write(a.pilotingScore)
//   document.write(b.pilotingScore)
//   return a.pilotingScore + b.shootingScore 
// })


// console.log(personnel[0].pilotingScore);

// ForceScore=sTotal+pTotal