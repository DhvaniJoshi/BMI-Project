const form= document.querySelector("form")

form.addEventListener("submit",function(e){
  e.preventDefault();
 //The default behavior is to submit the form in server hence we need to stop that  
// Don't declare the height and weight early or it will take te default null value and wrong results will be given
 const height=parseInt(document.querySelector("#height").value); //we convert the default input of string into int and collect the value from it
 const weight=parseInt(document.querySelector("#weight").value);
 const result=document.querySelector("#result");

 if(height==='' || height<0 || isNaN(height)){   
//isNaN is a property to give true or false output, if it IS NOT NaN then definitely it will follow if condition
  result.innerHTML=`Please enter valid height ${height}`;
}
else if (weight==='' || weight<0 || isNaN(weight)){
   result.innerHTML=`Please enter valid weight ${weight}`;
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  if(bmi>0 && bmi<18.6){
    result.innerHTML=` ${bmi}, you are Under Weight.`
  }
  else if(bmi>18.6 && bmi<24.9){
    result.innerHTML=`${bmi}, you are in normal range.`
  }
  else{
    result.innerHTML=`${bmi}, you are Over Weight.`
  }
}

})
