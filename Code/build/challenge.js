window.onload = () => {
  let name = '';
  for (let i = 0; i < 3; i++) {
    let answer = prompt('What is your name?');
    if (answer === null) {
      let canContinue = prompt('Continue?\nyes or no');
      if (canContinue === 'yes') continue;
      return (document.querySelector('.lose').style.display = 'block');
    }
    if (answer !== '') {
      name = answer;
      break;
    }
  }
  if (name === '') return (document.querySelector('.lose').style.display = 'block');
  prompt(`Hey ${name}, what do you know?\nsomething or nothing`);
  prompt('You find a quarter on the sidewalk:\nWhat should you do?\nTake it or Leave it');
  document.querySelector('.win').style.display = 'block';
};
