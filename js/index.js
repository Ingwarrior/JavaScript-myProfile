
// block1 sum-Day
let maxDay = document.querySelector(".maxday");
let sum = 0;
maxDay.innerHTML = `${sum}`;



let buttonMin = document.querySelector(".buttonmin").onclick = () =>{
	if(sum > 0){
		sum--
	}
	maxDay.innerHTML = `${sum}`
}
let buttonMax = document.querySelector(".buttonmax").onclick = () =>{
	if(sum < 31){
		sum++
	}
	maxDay.innerHTML = `${sum}`;
}

// block2 % sum

let sumDay = document.querySelector(".sumoneday"); // div куда падает сумма
let daySumKase = 0;
sumDay.innerHTML = `${daySumKase}`;

var kikSum; // введите сумму
let textSum = document.querySelector(".kasesum").onclick = () => {
	kikSum = prompt("Введите сумму!", '');
} // инпут для ввода суммы

let buttonSum = document.querySelector(".typesum").onclick = () =>{
	sumDay.innerHTML = `${kikSum}`;
} // кнопка отправить сумму


// block3 random generated

let divSum = document.querySelector(".random-sum"); // выводим сюда число
var i = 0;
divSum.innerHTML = `${i}`

function getRandomNumber(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
} // функция генератор случайного числа


let generateSumRand = document.querySelector(".generated-sum").onclick = () =>{
let zeroSum = getRandomNumber(1,100); 
divSum.innerHTML = `${zeroSum}%`;

// block 4 all Summ

let allSumm = document.querySelector(".all-sum"); // полная сумма сюда див
let buttonAllsum = document.querySelector(".typeall").onclick = () =>{
var procent = kikSum * sum / 100 * zeroSum;
allSumm.innerHTML = `${kikSum * sum + procent}руб`
} // кнопка получения суммы
}

// block 2 site profile
let myphoto = document.querySelector('.profile__photo');
// left button
let buttonsProfile = document.querySelector(".click-profile"); // кнопка заполни меня профиль
let buttonsSocial = document.querySelector(".click-social"); // кнопка заполни меня социальные
let buttonsMain = document.querySelector(".click-main"); // кнопка заполни меня стенка


// popup end like------------------------------------
// right name firsname lastname
let myName = document.querySelector(".first-name"); // ваше имя получим сюда
let mylastName = document.querySelector(".last-name"); //ваша фамилия получим сюда
let myOtchestvo = document.querySelector(".middle-name"); // ваше отчество получим сюда
let myAge = document.querySelector(".age-name"); // ваш возраст получим сюда
let mySity = document.querySelector(".city-name"); // ваш город получим сюда

// right social button
let myMail = document.querySelector(".social-mail"); // сюда получим ваш маил
let myVk = document.querySelector(".social-vk"); // сюда получим ваш вконтакте
let myWathsap = document.querySelector(".social-whatsap"); // сюда получим ваш Ватсап
let myTelegram = document.querySelector(".social-telegram"); // сюда получим ваш Телеграм

// третий блок кнопок заполнить стену
let temaMessage = document.querySelector('.temamessagebutton'); // заполняет тему сообщения
let textMessage = document.querySelector('.textmessagebutton'); //заполняет текст для сообщения
let photoMessage = document.querySelector('.photomessagebutton'); // заполняет фото для сообщения
let mainTextGet = document.querySelector('.comeet__info-maintext'); //сюда получаем наши данные
let mainTimeGlobal = new Date() // сдесь получем дату
var glassMyProfile = document.querySelector(".glassmainprofile"); // сюда получем колво лайков в блок слева
let glassValue = 0;
glassMyProfile.innerHTML = `Like:${glassValue}`
let submitMessage = document.querySelector('.submessagebutton').onclick = () =>{
	mainTextGet.innerHTML = `
	<b>${temaMessage.value}</b>
	<p class = "main__text-get">${textMessage.value}</p>
	<p><img src="${photoMessage.value}" class = "get__myphoto-main" alt="мое фото"></p>
	<button type = "submit" class = "buttonlike"><img src = "img/likeMainProfile.svg" class = "buttonlikeprofile"></button>
	${mainTimeGlobal} 
	`;
	var buttonsLikeMainProfile = document.querySelector(".buttonlike").onclick = () => {
		if(glassValue < 1000){
			glassValue++;
			glassMyProfile.innerHTML = `Like:${glassValue}`;
		}
		} // это кнопка лайка когда на стенке есть текст
} // отправляет данные на стенку

// object func myProfile
// получаем кнопки и результат
function myProfileHead(){
	buttonsProfile.onclick = () =>{
		var whatYouName = prompt('Ваше Имя ?', '');
		var whatYouLastNane = prompt('Ваша Фамилия ?', '');
		var whatYouMidleName = prompt('Ваше Отчество ?', '');
		var whatYouAge = prompt('Ваш Возраст ?', '');
		var whatYouSity = prompt('Ваш Город ?', '');
		return myName.innerHTML = `${whatYouName}`,
		mylastName.innerHTML = `${whatYouLastNane}`,
		myOtchestvo.innerHTML = `${whatYouMidleName}`,
		myAge.innerHTML = `${whatYouAge}`,
		mySity.innerHTML = `${whatYouSity}`
	},
	buttonsSocial.onclick = () => {
		var butMyPhoto = prompt('Ссылка на ваше фото (Через https://)!', '');
		var whatYouMail = prompt('Ваш емейл Вставь ссылку (Через https://)!', '');
		var whatYouVk = prompt('Ваш Вконтакте Вставь ссылку (Через https://)!', '');
		var whatYouWathSaap = prompt('Ваш ВотСап Вставь ссылку (Через https://)!', '');
		var whatYouTelegram = prompt('Ваш Телеграм Вставь ссылку (Через https://)!', '');
		return myMail.innerHTML = `<a href=${whatYouMail} class="social-mail"><img src="img/profile-mail.svg" alt=""></a>`,
		myVk.innerHTML = `<a href=${whatYouVk} class="social-vk"><img src="img/profile-vk.svg" alt=""></a>`,
		myWathsap.innerHTML = `<a href=${whatYouWathSaap} class="social-whatsap"><img src="img/profile-whatsap.svg" alt=""></a>`,
		myTelegram.innerHTML = `<a href=${whatYouTelegram} class="social-telegram"><img src="img/profile-telegram.svg" alt=""></a>`,
		myphoto.innerHTML = `<img src=${butMyPhoto} alt="my photo">`
	}
}
myProfileHead();





