async function populate() {
    const request_url = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    const request = new Request(request_url);

    const response = await fetch(request);
    const super_heroes_string = await response.text();

    const super_heroes = JSON.parse(super_heroes_string);

    // console.log(super_heroes);

    populate_header(super_heroes);
    populate_heroes(super_heroes);
}

populate();

function populate_header(super_heroes: any) {
    const header = document.querySelector("header") as HTMLHeadElement;
    const my_h1 = document.createElement("h1");
    my_h1.textContent = super_heroes.squadName;
    header.appendChild(my_h1);

    const my_para = document.createElement("p") as HTMLParagraphElement;
    my_para.textContent = `Hometown: ${super_heroes.homeTown} // Formed: ${super_heroes.formed}`;
    header.appendChild(my_para);
}

function populate_heroes(super_heroes: any) {
    const section = document.querySelector("section") as HTMLTableSectionElement;
    const heroes = super_heroes.members;

    for (const hero of heroes) {
        const my_article = document.createElement("article");
        const my_h2 = document.createElement("h2");
        const my_para = document.createElement("p");
        const my_para_2 = document.createElement("p");
        const my_para_3 = document.createElement("p");
        const my_list = document.createElement("ul");

        my_h2.textContent = hero.name;
        my_para.textContent = `Secret Identity: ${hero.secretIdentity}`;
        my_para_2.textContent = `Age: ${hero.age}`;
        my_para_3.textContent = "Super Powers:";

        const super_powers = hero.powers;
        for(const power of super_powers) {
            const list_item = document.createElement("li");
            list_item.textContent = power;
            my_list.appendChild(list_item);
        }

        my_article.appendChild(my_h2);
        my_article.appendChild(my_para);
        my_article.appendChild(my_para_2);
        my_article.appendChild(my_para_3);
        my_article.appendChild(my_list);

        section.appendChild(my_article);
    }
}

let my_obj = {name: "John Connor", age: 14};
let my_string = JSON.stringify(my_obj);
console.log(my_string);

// const super_heroes = {
//     "squadName": "Super hero squad",
//     "homeTown": "Metro City",
//     "formed": 2016,
//     "secretBase": "Super tower",
//     "active": true,
//     "members": [
//         {
//         "name": "Molecule Man",
//         "age": 29,
//         "secretIdentity": "Dan Jukes",
//         "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
//         },
//         {
//             "name": "Madame Uppercut",
//             "age": 39,
//             "secretIdentity": "Jane Wilson",
//             "powers": [
//                 "Million tonne punch",
//                 "Damage resistance",
//                 "Superhuman reflexes"
//             ]
//         },
//         {
//             "name": "Eternal Flame",
//             "age": 1000000,
//             "secretIdentity": "Unknown",
//             "powers": [
//                 "Immortality",
//                 "Heat Immunity",
//                 "Inferno",
//                 "Teleportation",
//                 "Interdimensional travel"
//             ]
//         }
//     ]
// }

// console.log(super_heroes.homeTown);
// console.log(super_heroes.members[1].powers[2]);


// const second_list = [
//     {
//         "name": "Molecule Man",
//         "age": 29,
//         "secretIdentity": "Dan Jukes",
//         "powers": [
//             "Radiation resistance",
//             "Turning tiny",
//             "Radiation blast"
//         ]
//     },
//     {
//         "name": "Madame Uppercut",
//         "age": 39,
//         "secretIdentity": "Jane Wilson",
//         "powers": [
//             "Million tonne punch",
//             "Damage resistance",
//             "Superhuman reflexes"
//         ]
//     }
// ]

// console.log(second_list[0].powers[0])


