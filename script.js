console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

/* rootElement.innerHTML = `
    <h1>hello world</h1>
    <div>
        <p>lorem ipsum</p>
        <h2>subtitle</h2>
        <button>click me!</button>
    </div>
`

const array = ["kismacska", "kutyus", "zebra", "kecske"] */

/* const jsonLikeArray = [
    {
        countryName: "Hungary",
        population: 8900000
    },
    {
        countryName: "England",
        population: 18000000
    },
    {
        countryName: "USA",
        population: 230000000
    }
]

for (let i = 0; i < jsonLikeArray.length; i++) {
    rootElement.innerHTML += `
        <h3>name: ${jsonLikeArray[i].countryName}</h3>
        <h4>population: ${jsonLikeArray[i].population}</h4>
    `
} */

fetch("https://restcountries.com/v3.1/all") // elküldjük adatért a JS-t, visszatér valamikor adattal
    .then((res) => res.json()) // megjött az adat, de ki kell csomagolni, visszatér valamikor a kicsomagolt adattal
    .then((data) => { // megjött a kicsomagolt adat, innentől használhatjuk
        console.log(data)

        for (let doc of data) {
            console.log(doc.altSpellings)
            console.log(doc.timezones)

            rootElement.innerHTML += `
                <h3>Languages: ${doc.altSpellings}</h3>
                <h4>Timezones: ${doc.timezones}</h4>
            `
        }
        
    }) 