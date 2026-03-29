
currDisplay = '';
document.querySelector('#num1').addEventListener('click', function() {
    currDisplay += '1';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num2').addEventListener('click', function() {
    currDisplay += '2';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num3').addEventListener('click', function() {
    currDisplay += '3';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num4').addEventListener('click', function() {
    currDisplay += '4';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num5').addEventListener('click', function() {
    currDisplay += '5';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num6').addEventListener('click', function() {
    currDisplay += '6';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num7').addEventListener('click', function() {
    currDisplay += '7';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num8').addEventListener('click', function() {
    currDisplay += '8';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num9').addEventListener('click', function() {
    currDisplay += '9';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#num0').addEventListener('click', function() {
    currDisplay += '0';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#add').addEventListener('click', function() {
    currDisplay += '+';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#subtract').addEventListener('click', function() {
    currDisplay += '-';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#multiply').addEventListener('click', function() {    currDisplay += '*';
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#divide').addEventListener('click', function() {
    currDisplay += '/';
    document.querySelector('#display').textContent = currDisplay;
}); 
document.querySelector('#equals').addEventListener('click', function() {
    currDisplay = eval(currDisplay);
    document.querySelector('#display').textContent = currDisplay;
});
document.querySelector('#clear').addEventListener('click', function() {
    currDisplay = '';
    document.querySelector('#display').textContent = currDisplay;
});
