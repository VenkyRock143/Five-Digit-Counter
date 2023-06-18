// var countInterval;

// function setCounter(){
//     var number = parseInt(document.getElementById('number').value);
//     var second = document.getElementById('second');

//     if(isNaN(number)){
//         alert("please enter a number");
//         clearInterval(countInterval);
//         return;
//     }
//     if(number<1 || number>99999){
//         alert("Number is beyond the bound");
//         clearInterval(countInterval);
//         return;
//     }
//     if(number>11 || number<99){
//         // second.innerText = number;
//     }
//     var currentNo = document.querySelector('.counter .current');
//     var nextNo = document.querySelector('.counter .next');
//     var count = 0;

//     resetNumbers(currentNo,nextNo);
//     clearInterval(countInterval);

//     countInterval = setInterval(function(){
//         if(count === number){
//             clearInterval(countInterval);
//             alert('counter as stopped');
//             return;
//         }
//         increaseCount(currentNo,nextNo);
//             count++;
//     },1000);
// }

// function resetNumbers(currentNo,nextNo,end){
//     currentNo.innerText = 0;
//     nextNo.innerText = 1;
// }

// function increaseCount(currentNo,nextNo){
//     nextNo.classList.add("animate");

//     setTimeout(function (){
//         currentNo.innerText = nextNo.innerText;
//         nextNo.classList.remove("animate");
//         nextNo.innerText = parseInt(nextNo.innerText) +1;
//     },500);

// }



var countInterval;

function setCounter() {
  var number = parseInt(document.getElementById('number').value);

  if (isNaN(number)) {
    alert("Please enter a number");
    clearInterval(countInterval);
    return;
  }
  if (number < 1 || number > 99999) {
    alert("Number is beyond the valid range");
    clearInterval(countInterval);
    return;
  }

  var counters = Array.from(document.querySelectorAll('.counter'));
  var count = 0;

  resetNumbers(counters);
  clearInterval(countInterval);

  countInterval = setInterval(function () {
    if (count === number) {
      clearInterval(countInterval);
      alert('Counter has stopped');
      return;
    }
    increaseCount(counters);
    count++;
  }, 1000);
}

function resetNumbers(counters) {
  counters.forEach(function (counter) {
    var currentNo = counter.querySelector('.current');
    currentNo.innerText = '0';
  });
}

function increaseCount(counters) {
  var carryOver = true;
  var i = counters.length - 1;
  while (carryOver && i >= 0) {
    var currentNo = counters[i].querySelector('.current');
    var nextNo = counters[i].querySelector('.next');
    var currentDigit = parseInt(currentNo.innerText);
    if (currentDigit === 9) {
      currentNo.innerText = '0';
      
    } else {
      currentNo.innerText = (currentDigit + 1).toString();
      carryOver = false;
    }
    nextNo.innerText = getNextDigit(currentNo.innerText);
    i--;
  }
}

function getNextDigit(digit) {
  var nextDigit = parseInt(digit) + 1;
  if (nextDigit === 10) {
    return '0';
  } else {
    return nextDigit.toString();
  }
}
