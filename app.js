let days_input=document.getElementById("days_input");
let month_input=document.getElementById("month_input");
let years_input=document.getElementById("years_input");
let error_days=document.querySelector(".error_days");
let error_month=document.querySelector(".error_month");
let error_years=document.querySelector(".error_years");
let img_result_btn=document.querySelector(".img_result_btn");
let years_result=document.querySelector(".years-result");
let month_result=document.querySelector(".month-result");
let days_result=document.querySelector(".days-result");


img_result_btn.onclick=()=>{
    let isValid=true;
    if(days_input.value=="" || days_input.value>31){
        error_days.innerHTML="this field is required";
        isValid=false;
    }else{
        error_days.innerHTML="";
        isValid=true;
    }
    if(month_input.value=="" || month_input.value>12){
        error_month.innerHTML="this field is required";
        isValid=false;
    }else{
        error_month.innerHTML="";
        isValid=true;
    }
    if(years_input.value=="" || years_input.value>2024){
        error_years.innerHTML="this field is required";
        isValid=false;
    }else{
        error_years.innerHTML="";
        isValid=true;
    }
    if(isValid){
        startCalculatate()
    }
}

// startCalculate===============
const startCalculatate = () => {
 let years_value=parseInt(years_input.value,10);
 let month_value=parseInt(month_input.value,10)-1;
 let days_value=parseInt(days_input.value,10);

 let date =new Date(years_value,month_value,days_value);
 let now_date=new Date();
 let value_date=now_date-date;

 let years_date=Math.floor(value_date/(1000*60*60*24*365.25));
 let sumValue=value_date%(1000*60*60*24*365.25);
 let month_date=Math.floor(sumValue/(1000*60*60*24*30.44));
 sumValue=sumValue%(1000*60*60*24*30.44);
 let days_date=Math.floor(sumValue/(1000*60*60*24));

 years_result.innerHTML=years_date;
 month_result.innerHTML=month_date;
 days_result.innerHTML=days_date;

  };
  