const numDivs = document.querySelectorAll(".num div");
const numSpans = document.querySelectorAll(".num div span");

//布置钟盘
for(let i = 0;i<numDivs.length;i++){
	numDivs[i].style.transform = `rotate(${i*30}deg)`;
}
//恢复数字倾斜
for (let i=0;i<numSpans.length;i++) {
	numSpans[i].style.transform = `rotate(${i* -30}deg)`;
}
//指针渲染

//获取节点
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const second = document.querySelector("#second");
render();
//1s渲染一次
setInterval(render,1000);
//渲染函数
function render(){
	//获取本地电脑时间
	let data = new Date();
	let locaohours = data.getHours();
	let localminutes = data.getMinutes();
	let localseconds = data.getSeconds();
	//计算旋转度数
	const degHour = locaohours*30+localminutes*(360/12/60)+localseconds*(360/12/60/60);
	const degMinute = localminutes*6+localseconds/10;
	const degSecond = localseconds*6;
	//改变样式
	hours.style.transform = `rotate(${degHour}deg)`;
	minutes.style.transform = `rotate(${degMinute}deg)`;
	second.style.transform = `rotate(${degSecond}deg)`;
}

