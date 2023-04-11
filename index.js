

window.onload = function () {
	
	let page = document.querySelectorAll('.page');
	let startBtn = page[2].querySelector('.start-btn')
	

	/* page1   */
	let cow =page[1].querySelector('.cow')
	let tiaoFont = page[1].querySelector('.tiao-font');
	let progressCount = -10
	setInterval(function(){
		if(progressCount<=90){
			progressCount++
			cow.style.left = progressCount +'%'

			tiaoFont.innerHTML = `Loding... ${progressCount+9}%`
			if(progressCount+9==100){
				togglePageRotate(page[1],page[2],null,()=>{
					btn2.style.transition = 'all 1s'
					btn2.style.left = '50%'
					setTimeout(()=>{btn2.style.transition = 'none'},1000)
				})
			}
		}
	},30)

	/* page2   */

	startBtn.onclick = function(){

	}
	/* page3 */

	/* page4 */

	/* 灯谜数据 */
	function dengmi(h1,h2,p1,p2,p3,p4,answer){
		this.h1 = h1
		this.h2 = h2
		this.a = p1
		this.b = p2
		this.c = p3
		this.d = p4
		this.answer = answer
	}

	let dengmi1 = new dengmi('春香连日去听琴','(打一字)','项','需','秦','鹏',0)
	let dengmi2 = new dengmi('2222222222','(打一字)','项','需','秦','鹏',0)
	let dengmi3 = new dengmi('333333333','(打一字)','项','需','秦','鹏',0)
	let dengmi4 = new dengmi('4444444','(打一字)','项','需','秦','鹏',0)
	let dengmi5 = new dengmi('5连日去听琴','(打一字)','项','需','秦','鹏',0)
	let dengmi6 = new dengmi('春6连日去听琴','(打一字)','项','需','秦','鹏',0)

	dengmiArr = [dengmi1,dengmi2,dengmi3,dengmi4,dengmi5,dengmi6]

	/* 记录当前灯笼的索引 */
	let currentDeng = ''

	/* 点击灯笼 */
	page[4].querySelectorAll('.frame img').forEach((item,index)=>{
		item.onclick = function(){
			console.log(index);
			currentDeng = index
			//渲染数据
			page[4].querySelector('.frame3 .content h1').innerHTML = dengmiArr[index].h1
			page[4].querySelector('.frame3 .content h2').innerHTML = dengmiArr[index].h2
			page[4].querySelector('.frame3 .content ul li:nth-of-type(1) p').innerHTML = 'A：'+dengmiArr[index].a
			page[4].querySelector('.frame3 .content ul li:nth-of-type(2) p').innerHTML = 'B：'+dengmiArr[index].b
			page[4].querySelector('.frame3 .content ul li:nth-of-type(3) p').innerHTML = 'C：'+dengmiArr[index].c
			page[4].querySelector('.frame3 .content ul li:nth-of-type(4) p').innerHTML = 'D：'+dengmiArr[index].d

			page[4].querySelector('.frame3').style.visibility = 'visible'
			
		}
	})

	/* 被点亮的灯笼数 */
	let count=0
	/* 确认答案 */
	page[4].querySelector('.frame3 .affrim-btn').onclick = function(){
		
		if(optionIndex === dengmiArr[currentDeng].answer){
			page[4].querySelector('.frame3').style.visibility = 'hidden'

			//重置
			option.forEach((item)=>{
				item.querySelector('img').src = "./images/check.png"
			})
			optionIndex = ''
			//点亮灯笼
			page[4].querySelectorAll('.frame img')[currentDeng].src = "./images/ddl.png"
			page[4].querySelectorAll('.frame img')[currentDeng].style.animation = 'none'
			page[4].querySelectorAll('.frame img')[currentDeng].onclick = false      //null
			count++
			/* 按钮出现 */
			if(count==6){
				btn41.style.transition = 'all 1s'
				btn41.style.left = '50%'
				setTimeout(()=>{
					btn41.style.transition = 'none'
				},1000)	
			}
			
		}else{
			console.log('选项错误');
			let span = document.createElement('span');
			span.innerHTML = '您的回答错误'
			page[4].appendChild(span)
			setTimeout(()=>{span.remove()},1000)
		}

	}

	
	let optionIndex = ''
	let option = page[4].querySelectorAll('.frame3 ul li')
	option.forEach((item,index)=>{
		item.onclick = function(){
			optionIndex = index
			console.log(index);
			option.forEach((item)=>{
				item.querySelector('img').src = "./images/check.png"
			})
			this.querySelector('img').src = "./images/checked.png"
		}
	})



	let liangDengNum = 0
	page[4].querySelector('.submit-button').onclick = function(){
		page[4].querySelectorAll('.frame img').forEach((item)=>{
			
			if(item.onclick === null){
				liangDengNum++
			}
			
		})
		
		if(liangDengNum==6){
			console.log('ok');
			page[4].querySelector('.frame2').style.visibility = 'visible'
			page[4].querySelector('.frame2 .top-shell').style.animation = 'scale 2s'
			

			
				btn42.style.transition = 'all 1s'
				btn42.style.left = '50%'
				setTimeout(()=>{
					btn42.style.transition = 'none'
				},1000)
			
			
				
		
		}else{
			console.log(liangDengNum);
		}
		liangDengNum=0
	}


	/* 贺卡 */




	/* 页面切换 */
	let btn2 =  document.querySelector('.start-btn');
	let btn3 =  document.querySelector('.start-btn2');
	let btn41 =  document.querySelector('.submit-button');
	let btn42 =  document.querySelector('.return-btn');



	/* 1->2  none */


	let ps = document.querySelectorAll('.page3 .font p')
	
	/* 2->3 */
	btn2.onclick = function(){
		togglePageRotate(page[2],page[3],this,()=>{
			ps[0].style.animation = 'opacity 1s forwards'
			ps[1].style.animation = 'opacity 1s 1s forwards'
			ps[2].style.animation = 'opacity 1s 2s forwards'
			
			setTimeout(() => {
				btn3.style.transition = 'all 1s'
				btn3.style.left = '50%'
				setTimeout(()=>{
					btn3.style.transition = 'none'
				},1000)
			}, 3000);
		})
	}
	/* 3->4 */
	btn3.onclick = function(){
		ps[0].style.animation = 'none'
		ps[1].style.animation = 'none'
		ps[2].style.animation = 'none'
		togglePageRotate(page[3],page[4],this)
	}
	/* 4->2 */
	btn42.onclick = function(){
		togglePageRotate4(page[4],page[2],page[4].querySelector('.frame2'),this,btn41,()=>{
			btn2.style.transition = 'all 1s'
			btn2.style.left = '50%'
			setTimeout(()=>{
				btn2.style.transition = 'none'
				page[4].querySelector('.frame2 .top-shell').style.animation = 'none'


				/* 重置游戏 */
				count=0
				page[4].querySelectorAll('.frame img').forEach((item,index)=>{
					item.src = "./images/cydl.png"
					item.onclick = function(){
						console.log(index);
						currentDeng = index
						//渲染数据
						page[4].querySelector('.frame3 .content h1').innerHTML = dengmiArr[index].h1
						page[4].querySelector('.frame3 .content h2').innerHTML = dengmiArr[index].h2
						page[4].querySelector('.frame3 .content ul li:nth-of-type(1) p').innerHTML = 'A：'+dengmiArr[index].a
						page[4].querySelector('.frame3 .content ul li:nth-of-type(2) p').innerHTML = 'B：'+dengmiArr[index].b
						page[4].querySelector('.frame3 .content ul li:nth-of-type(3) p').innerHTML = 'C：'+dengmiArr[index].c
						page[4].querySelector('.frame3 .content ul li:nth-of-type(4) p').innerHTML = 'D：'+dengmiArr[index].d
						page[4].querySelector('.frame3').style.visibility = 'visible'
						
					}
				})


		},1000)
		})
	}



}