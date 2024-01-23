console.log("hello world")
btn = document.querySelector("button")

btn.addEventListener("click" , async(e)=>{
    e.preventDefault()
    console.log("clicked");
    resultcont.innerHTML = `<img src="/svg/Spinner-1s-200px.svg" alt="">`;
    let key ="ema_live_kwD4gvFplIKWlFQrCI3w4Vu6XhHrVbP4EPbINkt4" ;
    let email = document.querySelector("input").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res =await fetch(url)
  let result = await res.json()

  
  let str =``
  for (key of Object.keys(result)){
    if(result[key] !=="" && result[key]!==" "){
    str = str + `<div>${key}:${result[key]}</div>`
  }
}

  console.log(str)
  document.getElementById("resultcont").innerHTML = str

})
  
 


 
  