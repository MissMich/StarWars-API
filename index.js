const images = ['LukeSkywalker.jpg', 'C-3PO.jpg', 'R2D2_Droid.jpg', 'DarthVader.jpg', 'Leia-Organa.jpeg', 'Owen-Lars.jpg', 'BeruWhitesunlars.jpg', 'R5-D4.jpg', 'Biggs-Dark.jpg', 'obiwankenobi.jpg'];

const container = document.querySelector('.container');
const loader = document.querySelector('.loader');

const showInfo = (e) => {
    e.preventDefault();
    const current = e.target;
    current.nextElementSibling.classList.toggle("display")
}

const starWars = async () => {
    try {
        const data = await fetch ('https://swapi.dev/api/people');
        const {results} = await data.json();

        loader.style.display = 'none';

        results.forEach((person, i) => {
            let {name, height, gender, mass, birth_year} = person;

            container.innerHTML += `
                <div class="childContainer">
                    <button id="stars" class="accord" dataId="${i}" onClick="showInfo(event)">
                    ${i + 1}. ${name}</button>

                    <div class="info display" dataId="${i}">
                        <img class="img" src="./images/${images[i]}" alt="Star Wars Characters">
                        <p>
                            Name: ${name} <br>
                            Height: ${height} <br>
                            Gender: ${gender} <br>
                            Mass: ${mass} <br>
                            Birth Year: ${birth_year}
                        </p>
                    </div>
                </div>
                `;   
        });
    } catch (error) {
        
    }
};
starWars();