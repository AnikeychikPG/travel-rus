// Получаем язык страницы из атрибута lang тега html
const pageLanguage = document.documentElement.lang;

// Получаем элемент li
const ru = document.getElementById('ru');
const en = document.getElementById('en')

// Применяем стили в зависимости от языка
switch (pageLanguage) {
  case 'ru':
        ru.classList.add('header__lang-link_active');
        break;  
  case 'en':
        en.classList.add('header__lang-link_active');
        break
}