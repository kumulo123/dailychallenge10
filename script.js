var arr = [2, 1, 54, 12, 55, 54, 1, 3, 344];
var returnedArr = [];
var indexOfMax = 0;
function sortArr(arr) {
    var max = 0;
    for(var i = 0; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        max = 0;
        for(var j = 0; j<arr.length; j++){
            if(arr[j]>=max && arr[j]!= "V"){
                max = arr[j];
                indexOfMax = j;
            }
        }
        returnedArr.push(max);
        arr[indexOfMax]="X";
    }
    return returnedArr;
}
console.log(sortArr(arr));