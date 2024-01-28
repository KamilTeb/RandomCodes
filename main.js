const chars = 'ABCDEFGHIJK0123456789';

const btn = document.querySelector('button');
const div = document.querySelector('div');
const codesNumber = 100;
const charsNumber = 12;

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index];
        }
        // const newDiv = document.createElement('div');
        // newDiv.textContent = code;
        // div.appendChild(code);

        div.innerHTML += code + '<br>';
    }
}
btn.addEventListener('click', codesGenerator);