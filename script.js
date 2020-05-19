$(document).ready(function(){

  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));
   switch(psize){
      case "0":
        price =0;
      break;
      case "large":
         price = 1200;
         console.log(price);
       break;
       case "medium":
         price = 850;
         console.log("The price is "+price);
       break;
       case "small":
         price = 600;
         console.log(price);
       default:
         console.log("error");
     }   
