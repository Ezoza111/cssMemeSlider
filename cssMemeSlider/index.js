const image = document.querySelector('.slaider_foto');
const btnArr = Array.from(document.querySelectorAll('.button_pogination'));
const btnContentArr = Array.from(document.querySelectorAll('.btn_div'));
const text = document.querySelector('.text_container');
const textInfo = ['Большая галактика', 'Супер большая галактика','Оооочень большая галактика','Жесть как сложно учиться','Мега большая галактика'];


btnArr.forEach((el)=> el.addEventListener('click', ()=>{
    image.setAttribute('src', `./assets/foto/photo_${btnArr.indexOf(el)+1}.jpg`)
    image.classList.add('img_animation');
    image.addEventListener('animationend', ()=> {if(image.classList.contains('img_animation')==true){image.classList.remove('img_animation')}});
    text.innerHTML = `<div class="text_animation">${textInfo[btnArr.indexOf(el)]}</div>`;
    for(let key in btnContentArr) {
    btnContentArr[btnArr.indexOf(el)].classList.add('active');
    if(key != btnArr.indexOf(el)){btnContentArr[key].classList.remove('active');}
    }
}));