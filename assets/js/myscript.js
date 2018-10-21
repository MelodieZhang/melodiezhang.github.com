/*文章目录跟随定位*/
function locateCatelogList(){
	/*获取文章目录集合*/
	var alis = $('.article :header');
	/*获取侧边栏目录列表集合**/
	var sidebar_alis = $('.section-nav').find('a');
	var scroll_height = $(window).scrollTop();
	for(var i =0;i<alis.length;i++){
		var a_height = $(alis[i]).offset().top-100;/*-100仅为了显示效果*/
		if (a_height<scroll_height){
			sidebar_alis.removeClass('list_click');
			$(sidebar_alis[i]).addClass('list_click');
		}
	}
}
