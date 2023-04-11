
    /* 页面切换 */

/* 瞬时切换 */
/* function togglePage(ed,will){
    ed.style.visibility = 'hidden';
    will.style.visibility = 'visible';
    setTimeout(function(){
        will.style.visibility = 'visible';
    },1000)
} */


/* 渐入渐出 切换 */
function togglePageRotate(ed,will,flag,callback){
    /* 初始状态 */
    /* 重置按钮位置 */
    if(flag!=null){flag.style.left = '-30%'}
    ed.style.opacity = '1'
    will.style.opacity = '0'
    will.style.visibility = 'visible';
    setTimeout(()=>{
        /* 动画 */
        ed.style.transition = 'all 1s'
        will.style.transition = 'all 1s'
        ed.style.opacity = '0'
        will.style.opacity = '1'
        setTimeout(()=>{
            ed.style.transition = 'none'
            ed.style.visibility = 'hidden';
            ed.style.opacity = '1'
            if(callback){
                callback()
            }
        },1100)
    },100)
}


/* function getRandomNumber(min,max){
    return Math.floor(Math.random() *(max-min+1)+min)
} */

/* 4->2 */
function togglePageRotate4(ed,will,add,flag,flag2,callback){
    if(flag!=null){flag.style.left = '-30%';flag2.style.left = '-30%'}
    /* 初始状态 */
    ed.style.opacity = '1'
    will.style.opacity = '0'
    will.style.visibility = 'visible';
    
    setTimeout(()=>{
        /* 动画 */
        ed.style.transition = 'all 1s'
        will.style.transition = 'all 1s'
        ed.style.opacity = '0'
        will.style.opacity = '1'
        setTimeout(()=>{
            ed.style.transition = 'none'
            ed.style.visibility = 'hidden';
            add.style.visibility = 'hidden';
            ed.style.opacity = '1'
            if(callback){
                callback()
            }
        },1100)
    },100)
}


