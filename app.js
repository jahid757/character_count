// copy right year

const date = new Date();
document.getElementById('year').innerText = date.getFullYear();

// count character

const characterValue = () => {
    const textarea = document.getElementById('characters');
    const inputCharacterLength = document.getElementById('inputCharacter');
    const inputValue = textarea.value;
    inputCharacterLength.innerText = inputValue.length;
    if(inputValue.length === 10){
        // alert('You Reached Max')
    }
}


const charactersCounter = () => {
    setInterval(characterValue,600)
}