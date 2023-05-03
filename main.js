import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'



// let view = [false,false,false];

// hideElement()

// function hideElement (itemId) {

// let closeButton = document.getElementById(`close_${itemId}`)
//   closeButton.addEventListener("click",hideItem)
//   function hideItem () {
//     document.getElementById(itemId).style.display ="none";
//   }
  
// }

let viewItem0 = true

let closeButton0 = document.getElementById("close_item0")
  closeButton0.addEventListener("click", hideItem0)
  function hideItem0 () {
    if (viewItem0==true){

      document.getElementById("item0").style.display ="none";
      viewItem0 = false
    }
    else{
      document.getElementById("item0").style.display ="flex";
      viewItem0 = true
    }
  }
  
  let viewItem1 = true

  let closeButton1 = document.getElementById("close_item1")
    closeButton1.addEventListener("click", hideItem1)
    function hideItem1 () {
      if (viewItem1==true){
  
        document.getElementById("item1").style.display ="none";
        viewItem1 = false
      }
      else{
        document.getElementById("item1").style.display ="flex";
        viewItem1 = true
      }
    }
    
    let viewItem2 = true

let closeButton2 = document.getElementById("close_item2")
  closeButton2.addEventListener("click", hideItem2)
  function hideItem2 () {
    if (viewItem2==true){

      document.getElementById("item2").style.display ="none";
      viewItem2 = false
    }
    else{
      document.getElementById("item2").style.display ="flex";
      viewItem2 = true
    }
  }
  