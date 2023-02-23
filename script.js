let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        screen.value += e.target.dataset.num;
    });
});

equal.addEventListener('click', e =>{
    if(!screen.value){
        screen.value = "Please Enter"
    }
    else{
        screen.value = eval(screen.value);
    }
});

clear.addEventListener('click', e =>{
    screen.value = '';
});

document.addEventListener("click", e=>{
    screen.value = screen.value;
});