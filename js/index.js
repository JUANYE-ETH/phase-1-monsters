//Create the list for Monsters and have it load when the page loads

const monsters = document.querySelector('#monster-container');

document.addEventListener("DOMContentLoaded", renderMonsters);

function renderMonsters() {
    fetch('http://localhost:3000/monsters/')
    .then(response => response.json())
    .then(data => monsterData(data))
}

function monsterData(monsterArr) {
    monsterArr.forEach(monster => renderList(monster))
}

function renderList(monster) {
    const monsterH2 = document.createElement('h2')
    const monsterH4 = document.createElement('h4')
    const monsterP = document.createElement('p')

    monsterH2.textContent = monster.name
    monsterH4.textContent = monster.age
    monsterP.textContent = monster.description

    monsters.append(monsterH2)
    monsters.append(monsterH4)
    monsters.append(monsterP)
};

//Form to create a new monster
const form = document.querySelector('#new-monster')

form.addEventListener('submit', newMonster)

function newMonster(e) {
    e.preventDefault();
    const newMonster = {
        name: e.target.name.value,
        age: e.target.age.value,
        description: e.target.description.value
    }
    renderList(newMonster)
    form.reset()
}
