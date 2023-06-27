let calculation = localStorage.getItem('calculation') || ' ';


displayCalculation();

function updateCalculation(value)
{
  calculation += value;

  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function evaluateCalculation()
{
  calculation = eval(calculation);

  displayCalculation();
}

function displayCalculation()
{
  document.querySelector('.js-calculation').innerHTML = calculation;
}


function clearCalculation()
{
  calculation = ' ';
  
  displayCalculation();

  localStorage.setItem('calculation', calculation);
  
}