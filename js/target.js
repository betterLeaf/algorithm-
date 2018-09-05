/*
* @Author: Administrator
* @Date:   2018-09-05 11:22:40
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-05 11:22:55
*/


// 给定一个数组，和结果目标，选出合适的值
function target(arr, targer){
	for(let i =0;i<arr.length;i++) {
		for(let j =0; j<arr.length;j++){
			if(arr[i] == targer-arr[j]){
				return [arr[i], arr[j]]
			}
		}
	}
}