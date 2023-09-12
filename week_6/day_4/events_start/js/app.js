document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const handleButtonClick = function(){
    console.log('this', this);
    const resultParagraph = document.querySelector('#button-result')
    resultParagraph.textContent = "That button was clicked right into next week"
  }

  const handleInput = function(event){
    // console.log(event) used to find the data in the console for reference
    const resultParagraph = document.querySelector('#input-result')
    resultParagraph.textContent = "You typed " + event.target.value
  }

  const handleSelectChange = function(event){
    const resultParagraph = document.querySelector('#select-result')
    resultParagraph.textContent = "You selected " + event.target.value
  }

  const handleFormsSubmit = function(event){
    event.preventDefault();
    const resultParagraph = document.querySelector('#form-result')
    resultParagraph.textContent = `
    Your name:
    ${event.target.first_name.value}
    ${event.target.last_name.value}`
  }

  const button = document.querySelector('#button')
  button.addEventListener('click', handleButtonClick)

  const textInput = document.querySelector('#input')
  textInput.addEventListener('input', handleInput)

  const select = document.querySelector('#select')
  select.addEventListener('change', handleSelectChange)

  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormsSubmit)


});
