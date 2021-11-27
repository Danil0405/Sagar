
$(".slider_people").slick({
	arrows:true,
	dots:true,
	adaptiveHeight: true,
});

$(".slider_cars").slick({
	arrows:true,
	dots:true,
});


$(".gallery__cars").on('click', function(){
	if($(this).hasClass("gallery__nav_item_active") === false && $(".slider_people").hasClass("slider_active")) {
		$(".gallery__personal").removeClass("gallery__nav_item_active");
		$(this).addClass("gallery__nav_item_active");
		$(".slider_people").removeClass("slider_active");
		$(".slider_cars").addClass("slider_active");
	}
});
	
$(".gallery__personal").on('click', function(){
	if ($(this).hasClass("gallery__nav_item_active") === false && $(".slider_cars").hasClass("slider_active")) {
		$(".gallery__cars").removeClass("gallery__nav_item_active");
		$(this).addClass("gallery__nav_item_active");
		$(".slider_cars").removeClass("slider_active");
		$(".slider_people").addClass("slider_active");
	}
});


const animItems = document.querySelectorAll(".anim-items");

if(animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params){
		for(let index = 0; index < animItems.length; index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;


			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add("active");
			}else{
				if(!animItem.classList.contains("anim-no-hide")){
					animItem.classList.remove("active");
				}
				
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.scrollLeft;
			scrollTop = window.pageYOffset || document.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}


// $(".menu_btn").on("click", function() {
// 	$(".menu_box").toggleClass("__active");	
// })

$("#menu_toggle").change(function(){
	if ($(this).prop("checked")){
		$(".menu_box").addClass("__active");
	}
	else{
		$(".menu_box").removeClass("__active");
	}
})
$(".menu_item").on("click", function() {
	$(".menu_box").removeClass("__active");
	$("#menu_toggle").prop("checked", false);
})




$(".slider__photo").lazyload();


function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
	
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});