(!function(){
	var all = document.querySelectorAll(".boxitem_carousel>li");
	var trig = document.querySelectorAll(".boxitem_trig>li");
	var boxEventFunc = (nk)=>{
		let count = all.length;
		let k = nk || 0;
			all.forEach((el,i)=>{
				if(el.classList.contains("on")){
					el.classList.remove("on");
					trig[i].classList.remove("on");
					if(!k && nk == undefined){
						k = i + 1;
					}
				}
			});
		if(k >= count) k = 0;
		trig[k].classList.add("on");
		all[k].classList.add("on");
	};
	var siv = setInterval(boxEventFunc, 5000);
	var boxSlider = document.querySelector(".boxitem_slider-left");
	boxSlider.addEventListener("mouseenter", function(){
		clearInterval(siv)
	});
	boxSlider.addEventListener("mouseleave", function(){
		siv = setInterval(boxEventFunc, 5000);
	});
	trig.forEach((el,i)=>{
		el.addEventListener("click", function(){
			clearInterval(siv)
			boxEventFunc(i);
		});
	})
}());