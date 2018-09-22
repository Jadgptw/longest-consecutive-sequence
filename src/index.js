module.exports = function longestConsecutiveLength(array) {
  // your solution here
    let result = 0;
    array.sort(function (a, b) {
        return a - b;
    });
    let index = 0;
    while(index < array.length){
        let count = 0;
        while(true) {
            if(array[index] === array[index + 1]){
                index++;
                continue;
            }
            if(array[index] + 1 === array[index + 1]){
                count++;
                index++;
                continue;
            }
            index++;
            break;
        }
        if(++count > result){
            result = count;
        }
    }
    return result;
}