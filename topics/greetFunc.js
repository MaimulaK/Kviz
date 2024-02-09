const inquirer = require('inquirer');

console.log('Привет, путник!Приветсвуем тебя на нашем квизе!Ну что, начнем!');

const questions = [
  {
    type: 'input',
    name: 'Name of Player ',
    message: 'Твое имя чувак/чувиха?',
    validate(value) {
      const name = value.match(/[а-яё]/gi);
      if (name) {
        return true;
      }

      return 'Напиши на РУССКОМ языке плз';
    },
  },
  {
    type: 'list',
    name: 'выбор темы квиза',
    message: 'Выбери тему',
    choices: ['1 тема', '2 тема', '3 тема'],
  },
];
inquirer.prompt(questions).then((answers) => {});
