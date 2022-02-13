const urlEn = 'https://type.fit/api/quotes';
const urlRu = './assets/json/quotes.json';
let lang = 'ru';

const getJokeBtn = document.querySelector('.getJoke__button');
let textJoke = document.querySelector('.joke__text');
let quoteAuthor = document.querySelector('.class_quote_author');
const ruLangBtn = document.querySelector('.ruLang');
const enLangBtn = document.querySelector('.enLang');
const picture = document.querySelector('.picture___img ');
const title = document.querySelector('.title');

getJokeBtn.addEventListener('click', btnClick);
ruLangBtn.addEventListener('click', switchLang);
enLangBtn.addEventListener('click', switchLang);

function switchLang(event){
    lang = event.target.textContent;
    if(lang === 'EN'){
        if(!enLangBtn.classList.contains('active')){getData();}
        ruLangBtn.classList.remove('active');
        enLangBtn.classList.add('active');
        title.textContent = 'Random quote';
        getJokeBtn.textContent = 'Get quote';
        
    } else {
        if(!ruLangBtn.classList.contains('active')){getData();}
        ruLangBtn.classList.add('active');
        enLangBtn.classList.remove('active');
        title.textContent = 'Случайная цитата';
        getJokeBtn.textContent = 'Новая цитата';
    }
}

function btnClick(){   
    picture.classList.remove('rotate'); 
    getData();
}

async function getData() {
    let utlLang = (lang === 'РУ') ? urlRu : urlEn;
    const res = await fetch(utlLang);
    let data = await res.json();
    getJoke(data);
  }
  

  function getJoke(data){
    picture.classList.add('rotate');  
    min = Math.ceil(0);
    max = Math.floor(data.length);
    let random = Math.floor(Math.random() * (max - min)) + min;  
    textJoke.textContent = `"${data[random].text}"`; 
    quoteAuthor.textContent = `"${data[random].author}"`;
    setTimeout(()=>picture.classList.remove('rotate'), 1000);
}  

getData();