$(document).ready(() => {

 $("#submit").click(()=>{
   let numberArray = [];
   
   let whatsapp_numbers  =  $("#number_input").val();

   if(whatsapp_numbers !==''){
      numberArray.push(whatsapp_numbers);
      localStorage.setItem("saved_wh_numbers",JSON.stringify(numberArray));
      window.location = `http://wa.me/${whatsapp_numbers}`;
      $("#number_input").val('');
   }else{
    alert("number is required");
   }
    

 }); 
 
 var saved_numberArray = JSON.parse(localStorage.getItem("saved_wh_numbers"));
 
 if(saved_numberArray.length !== 0){
  
   
   saved_numberArray.forEach((numbers)=>{
    $("#number_item").append(`
     <li>${numbers}</li>
    `) 
   })
  

 }else{

 }


 

});
