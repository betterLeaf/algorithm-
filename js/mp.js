/*
* @Author: betterLeaf
* @Date:   2018-09-05 11:09:11
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-05 13:19:46
*/

// 冒泡
function mp(arr) {
	for(let i = 0;i<arr.length;i++){
	  for(let j = 0; j<arr.length;j++){
	    if(arr[i]<arr[j]){
	      let a ='';
	      a = arr[i];
	      arr[i] = arr[j];
	      arr[j] = a;
	      a='';
	    }
	  }
	}
	return arr;
} 