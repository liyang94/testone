var arr = [1,2,3,4,5,6,7,8,9,10];

function transfromArray(arr,myeachChildLength){

    var newArr = [];
    var length = arr.length;
    var lastTime = Math.ceil(length/myeachChildLength);
    var currentTime = 0;

    if(arr instanceof Array){

        for (var i = 0 ; i<length ; i++ ){

            if(i%myeachChildLength==0){
                var subArray = [];
                currentTime++;
            }

            subArray.push(arr[i]);

            if(i%myeachChildLength==myeachChildLength-1){
                newArr.push(subArray);
            }

            if(currentTime == lastTime){
                newArr.push(subArray);
            }

        }

    }

    return  newArr; 
}

console.log(transfromArray(arr,3));