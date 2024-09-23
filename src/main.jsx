import { createElement } from 'react';
import { createRoot } from 'react-dom/client'
import { restaurants } from '../materials/mock';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Отобразить все рестораны из моковых данных (импортируем константу в main.jsx и используем данные). Отображаем рестораны друг за другом. Логику отрисовки массивов не используем, отображаем каждый ресторан отдельно. Цель отработать работу с элементами.
// 1. Название ресторана
// 2. Заголовок - Меню (h3)
// 3. Список названий блюд (используем тег ul и li)
// 4. Заголовок - Отзывы (h3)
// 5. Список текстов отзывов (используем тег ul и li)

root.render(
  createElement('div', {}, 
    createElement('h1', {}, restaurants[0].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, restaurants[0].menu.map((item) => createElement('li', {}, item.name))),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {}, restaurants[0].reviews.map((item) => createElement('li', {}, item.text))),

    createElement('h1', {}, restaurants[1].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, restaurants[1].menu.map((item) => createElement('li', {}, item.name))),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {}, restaurants[1].reviews.map((item) => createElement('li', {}, item.text))),

    createElement('h1', {}, restaurants[2].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, restaurants[2].menu.map((item) => createElement('li', {}, item.name))),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {}, restaurants[2].reviews.map((item) => createElement('li', {}, item.text))),

    createElement('h1', {}, restaurants[3].name),
    createElement('h3', {}, 'Меню'),
    createElement('ul', {}, restaurants[3].menu.map((item) => createElement('li', {}, item.name))),
    createElement('h3', {}, 'Отзывы'),
    createElement('ul', {}, restaurants[3].reviews.map((item) => createElement('li', {}, item.text))),
  )
  
);
