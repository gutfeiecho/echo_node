/**
 * 1. 图片懒加载 - loadImgLazy
 * @author gutengfei
 */
let imgArr = [...document.querySelectorAll("img")];

let lazyLoadImg = function() {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            };
        });
    });
    imgArr.forEach(img => {
        observer.observe(img);
    });
}

/**
 * 2.睡眠函数 - sleep()
 */

// promise方式
let fun1 = () => console.log('time out');
let sleep2= (time)=> new Promise((resolve)=>{
  setTimeout(resolve,time)
})
sleep2(2000).then(fun1);

// callback方式
let fun2 = () => console.log('time out');
let sleep = function(fun,time){
  setTimeout(()=>{
    fun();
  },time);
}

sleep(fun2,2000);
