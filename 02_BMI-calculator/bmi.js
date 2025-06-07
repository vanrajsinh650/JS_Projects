const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

 const height = parseInt(document.querySelector('#height').value);
 const width = parseInt(document.querySelector('#width').value);
 const results = document.querySelector('.Results');

 
 if(height == '' || height < 0 || isNaN(height)){
    results.innerHTML = 'please give a valid height';
 } else if(width == '' || width < 0 || isNaN(width)){
    results.innerHTML = 'please give a valid width';
 } else {
   const bmi = (width / ((height * height)/ 10000)).toFixed(2);
   results.innerHTML = `<span>${bmi}</span>`;
 }

   const bmi = (width / ((height * height)/ 10000)).toFixed(2);
   let category = '';

 if(bmi < 18.6){
    category = 'Under width';
 } else if (bmi > 24.9){
    category = 'Over width';
 } else {
    category = 'Normal range';
 }
   results.innerHTML = `bmi: <span>${bmi}</span>- ${category}`;


})