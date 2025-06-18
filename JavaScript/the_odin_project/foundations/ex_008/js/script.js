let bandInfo;

// Put your code here

const band = {};

band["name"] = "Sabaton";
band["nationality"] = "Sweeden";
band["genre"] = "Power Metal";
band["members"] = 5;
band["formed"] = 1999;
band["split"] = false;

band["albuns"] = []
band["albuns"].push( new Album("Primo Victoria", 2005) )
band["albuns"].push( new Album("Attero Dominatus", 2006) )
band["albuns"].push( new Album("Metalizer", 2007) )
band["albuns"].push( new Album("The Art of War", 2008) )
band["albuns"].push( new Album("Coat of Arms", 2010) )
band["albuns"].push( new Album("Carolus Rex", 2012) )
band["albuns"].push( new Album("Heroes", 2014) )
band["albuns"].push( new Album("The Last Stand", 2016) )
band["albuns"].push( new Album("The Great War", 2019) )
band["albuns"].push( new Album("The War to End All Wars", 2022) )

function Album(name, releaseDate) {
    this.name = name;
    this.releaseDate = releaseDate;
}

function getYearsActive(passedBand) {
    if (passedBand.split)
        lastYearActive = passedBand.split
    else
        lastYearActive = new Date().getFullYear();
 
    return lastYearActive - passedBand.formed;
}


function getFirstAlbum(passedBand){
    let currentFirst = new Album("", 3000);
    for(let alb of passedBand.albuns){
        if(alb.releaseDate < currentFirst.releaseDate)
        currentFirst = alb;
    }

    console.log(currentFirst);
        
    return currentFirst;
}

let firstAlbum = getFirstAlbum(band);

bandInfo = `${band.name} is a ${band.genre} band from ${band.nationality} that was formed in ${band.formed} and has been active for ${getYearsActive(band)} years.\nTheir first album was ${firstAlbum.name} that was released in ${firstAlbum.releaseDate}`;

console.log(bandInfo);

// Don't edit the code below here

// let para1 = document.createElement('p');
// para1.textContent = bandInfo;
// section.appendChild(para1);



function cat(name, breed, color){
    this.name = name;
    this.breed = breed;
    this.color = color;

    this.greeting = function() {console.log(`Hello, said ${this.name} the ${this.breed}`)};
}

const cat1 = new cat("fluf", "syamese", "beige");
cat1.greeting();

