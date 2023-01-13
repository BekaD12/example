const getRandomNumber = () => {
    return Math.floor(Math.random() * 100)
}
for (let i = 0; i <= 3; i++) {
    const r = getRandomNumber()
    const g = getRandomNumber()
    const b = getRandomNumber()
    document.getElementsByClassName('slide')[i].style.backgroundColor = `rgb(${r},${g},${b})`
}

function getImgUrl(width, height) {
    const things = ['nature', 'water']
    const thing = things[Math.floor(Math.random() * things.length)]
    const image = "https://source.unsplash.com/random/" + width + "x" + height + "/?" + thing;
    return image
}

function randomImg(width, height) {
    document.getElementById('img-container').innerHTML = '<img src="https://source.unsplash.com/random/' + width + 'x' + height + '">';
}