// Code your solution in this file!
function distanceFromHqInBlocks(number){if(number > 42){
    return number - 42}else{
        return 42 - number}
}

function distanceFromHqInFeet(number){
   return distanceFromHqInBlocks(number) * 264
    /*if(number > 42){
        return (number - 42) * 264
    } else{
        return (42 - number) * 264}*/
    }
function distanceTravelledInFeet(number2, number3){
    if(number2 > number3){
        return (number2 - number3) * 264}else{
            return (number3 - number2) * 264}
}

function calculatesFarePrice(number2, number3){
   let number4= distanceTravelledInFeet(number2, number3)
   if(number4 <= 400){
    return 0}else if(number4 > 2500){
        return 'cannot travel that far'}else if(number4 > 2000){
            return 25 }else if(number4 > 400){
                return ((number4 - 400) * 2)/100}
   }
