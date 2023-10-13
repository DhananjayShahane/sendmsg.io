$(document).ready(() => {
  $("#form").validate({
    roles:{
      number_input :"required",
    },
    messages:{
      number_input : "Mobile number required",
    },
    errorPlacement : (error,element)=>{
      if(element.attr('type') === 'number'){
        error.appendTo("#error_wrapper")
      }else{
        error.insertAfter(element)
      }
    }
  });

 $("#submit").click(()=>{
   let numberArray = [];
   
   let whatsapp_numbers  =  $("#number_input").val();
   
   if($("#form").validate()) {
      numberArray.push(whatsapp_numbers);
      localStorage.setItem("saved_wh_numbers",JSON.stringify(numberArray));
      window.location = `http://wa.me/${whatsapp_numbers}`;
      $("#number_input").val('');
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
