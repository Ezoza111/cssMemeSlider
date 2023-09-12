const image = document.querySelector('.slaider_foto');
const btnArr = Array.from(document.querySelectorAll('.button_pogination'));
const text = document.querySelector('.text_container');
const textInfo = ['Большая галактика', 'Супер большая галактика','Оооочень большая галактика','Жесть как сложно учиться','Мега большая галактика']


btnArr.forEach((el)=> el.addEventListener('click', ()=>{
    
    image.setAttribute('src', `./assets/foto/photo_${btnArr.indexOf(el)+1}.jpg`);
    text.innerHTML = `${textInfo[btnArr.indexOf(el)]}`;
}));