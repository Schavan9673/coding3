var forms=JSON.parse(localStorage.getItem(forms)) || [];
forms.map(function(elem){
    var row=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerText=elem.name;
    var td2=document.createElement("td")
    td2.innerText.elem.email;
    var td3=document.createElement("td")
    td3.innerText.elem.adress;
   
    console.log(td1,td2,td3);
})