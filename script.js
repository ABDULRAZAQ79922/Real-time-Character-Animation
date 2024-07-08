
const myCharacter = document.getElementById('myCharacter');
const myText = document.getElementById('myText');

myCharacter.addEventListener('click', () => {
    const myColors = ['#ff6f61', '#ffcc00', '#6a11cb', '#00c6ff', '#3cd070', '#f95f62'];
    const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
    myCharacter.style.backgroundColor = myRandomColor;
    myText.style.color = myRandomColor;
});

myCharacter.addEventListener('mouseover', () => {
    myCharacter.style.transform = 'scale(1.3)';
    myCharacter.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.4)';
});

myCharacter.addEventListener('mouseout', () => {
    myCharacter.style.transform = 'scale(1)';
    myCharacter.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
});
