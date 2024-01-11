var ele = new Array(9);
var f = 0;
var arr = new Array(9);
var endText = document.getElementById("endText");
var checkArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
/*
012
345
678
*/

for(var i=0;i<9;i++){
    arr[i] = 0;
}

for(var i=0;i<9;i++){
    ele[i] = document.getElementById("ele" +`${i+1}`);
}

for(var i=0;i<9;i++){
    const cur = i;
    ele[cur].addEventListener('click', function(event){
        if(f==0){
            ele[cur].innerText = "O";
            arr[cur] = 1;
        }
        else{
            ele[cur].innerText = "X";
            arr[cur] = 2;
        }

        var ans = check();

        if(ans == 1){
            endText.innerText = "O win";
        }
        else if(ans == 2){
            endText.innerText = "X win";
        }

        f = (f+1)%2;
    }); 
}

function check() {
    for(var i=0;i<8;i++){
        var flag = 1;

        for(var j=0;j<2;j++){
            if(arr[checkArr[i][j]] != arr[checkArr[i][j+1]]){
                flag = 0;
            }
        }
        if(flag == 0) continue;
        if(arr[checkArr[i][0]] == 0) continue;

        return arr[checkArr[i][0]];
    }
}