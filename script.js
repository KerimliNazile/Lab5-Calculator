
let currentExpression = '';

function appendNumber(number) {
  currentExpression += number;
  document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
  if (currentExpression !== '' && !isNaN(currentExpression[currentExpression.length - 1])) {
    currentExpression += operator;
    document.getElementById('result').value = currentExpression;
  }
}

function clearResult() {
  currentExpression = '';
  document.getElementById('result').value = '';
}

function calculate() {
  if (currentExpression !== '') {
    try {
      const result = eval(currentExpression);
      document.getElementById('result').value = result;
      currentExpression = result.toString();
    } catch (error) {
      document.getElementById('result').value = 'Error';
      currentExpression = '';
    }
  }
}
