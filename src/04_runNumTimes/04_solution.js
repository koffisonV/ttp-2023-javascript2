// Code your solution here
function runNumTimes(func, num){
    let count = 0;

    while(count<num){
        func();
        count++;
    }
}