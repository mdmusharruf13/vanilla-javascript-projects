const colors = ['red', 'green', 'orange', 'blue', 'violet', 'skyblue', 'orangered'];
const hexColorCharArr = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const colorName = document.querySelector(".color-name");
const hexColorName = document.querySelector('.hex-color-name');

function handleColorChange() {
    let color = getRandomColor(colors, 0);
    colorName.textContent = colors[color];
    parent.postMessage({ action: 'changeColor', color: colors[color] });
    console.log(colors[color])
}

function handleHexColorChange() {
    let color = getRandomColor(hexColorCharArr, 1);
    hexColorName.textContent = color;
    parent.postMessage({ action: 'changeColor', color: color });

}

function getRandomColor(arr, check) {
    if (check) {
        let color = '#';
        for (let itr = 0; itr < 6; itr++) {
            let index = Math.floor(Math.random() * arr.length);
            color += arr[index];
        }
        return color;
    }
    return Math.floor(Math.random() * arr.length);

}