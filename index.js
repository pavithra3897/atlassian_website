// on button click change card
function onButtonClick(tabname) {
    
    var tabContents = document.getElementsByClassName("button1-card")
    console.log(tabContents)
    var i;
    for(i=0; i<tabContents.length;i++) {


        if(tabContents[i].classList.contains("active"))
         {


            tabContents[i].classList.remove("active")
            
        }
        
}





    var tabElement =document.getElementById(tabname)
    tabElement.classList.add("active")
}


var arr = [1, 2, 3, 4,5,6,7,8,9]
var i
for(i=0; i<arr.length;i++) {

   console.log(arr[i])

if(arr[i]%2==0) {
    console.log("even number")
} else {
    console.log("odd number")
}




}