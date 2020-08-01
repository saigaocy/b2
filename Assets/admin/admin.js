var phoneType = jQuery('#phome_select').find(':selected').val();
	if(phoneType == 'yunpian'){
			jQuery('#yunpian-sms').show();
	}else if(phoneType == 'juhe'){
			jQuery('#juhe-sms').show();
	}else{
			jQuery('#aliyun-sms').show();
	}

	jQuery('#phome_select').on('change', function() {
			var val = jQuery(this).find(':selected').val();
			var array = ['yunpian','juhe','aliyun'];
			array.forEach(function(_val){
					if(val == _val){
							jQuery('#'+_val+'-sms').show();
					}else{
							jQuery('#'+_val+'-sms').hide();
					}
			});
	})

var checkType = jQuery('#check_type').find(':selected').val();
if(checkType == 'tel' || checkType == 'telandemail'){
	jQuery('#sms-select').show()
}else if(checkType == 'luo'){
	jQuery('#luosimao').show()
}

jQuery('#check_type').on('change', function() {
	var val = jQuery(this).find(':selected').val();
	if(val == 'tel' || val == 'telandemail'){
		jQuery('#sms-select').show()
		jQuery('#luosimao').hide()
	}else if(val == 'luo'){
		jQuery('#sms-select').hide()
		jQuery('#luosimao').show()
	}else{
		jQuery('#sms-select').hide()
		jQuery('#luosimao').hide()
	}
})

function changeRadioChange(){
	jQuery('.model-picked').find('input[type="radio"]').on('change',function(){
		changeRaido();
	})
}

function changeRaido(){
	jQuery('.model-picked').each(function(index,el){
		var picked = jQuery(this).find('input[type="radio"]:checked').val();

		jQuery(this).parents('.cmb-repeatable-grouping').find('.set-hidden').hide();

		if(picked){
			jQuery(this).parents('.cmb-repeatable-grouping').find('.'+picked+'-module').show();
		}
	})	
}

changeRadioChange();
changeRaido();

jQuery('.cmb-add-group-row').on( 'click',function() {
	setTimeout(function(){
		changeRadioChange();
		changeRaido();
	},500)
	downupaction();
})

function downupaction(){
	setTimeout(function(){
		jQuery('.button-secondary').on( 'click',function() {
			console.log(111);
			setTimeout(function(){
			changeRadioChange();
			changeRaido();
			})
	})
	},500)
}
downupaction();

//小工具颜色选择
// $(document).on( 'cmb_pre_init', function(evt, cmb) {
// 	var $picker = $('#<FIELD_ID>');
// 	var changeCallback = function(event, obj) {
// 		console.log('picker changed to:', obj.color.toString());
// 	};
// 	var args = $picker.data('colorpicker');
// 	if ( args ) {
// 		args.change = args.change || changeCallback;
// 	} else {
// 		args = {
// 			change: changeCallback
// 		}
// 	}
// 	$picker.data('colorpicker', args);
// });

//文章页面视频选择
var postStyle = jQuery('input[name=b2_single_post_style]:checked').val();

if(postStyle == 'post-style-5'){
	jQuery('#post-style-5-box').show();
}else{
	jQuery('#post-style-5-box').hide();
}

jQuery('input[name=b2_single_post_style]').on('change', function() {
		var val = jQuery(this).val();
		console.log(val);
		if(val == 'post-style-5'){
			jQuery('#post-style-5-box').show();
		}else{
			jQuery('#post-style-5-box').hide();
		}
})

//文章页面视频权限选择
var phoneType = jQuery('#b2_single_post_video_role').find(':selected').val();
	if(phoneType == 'money'){
			jQuery('.cmb2-id-b2-single-post-video-money').show();
	}else if(phoneType == 'credit'){
			jQuery('.cmb2-id-b2-single-post-video-credit').show();
	}else if(phoneType == 'roles'){
			jQuery('.cmb2-id-b2-single-post-video-roles').show();
	}else if(phoneType == 'none'){
		jQuery('.cmb2-id-b2-single-post-video-money').hide();
		jQuery('.cmb2-id-b2-single-post-video-credit').hide();
		jQuery('.cmb2-id-b2-single-post-video-roles').hide();
	}

	jQuery('#b2_single_post_video_role').on('change', function() {
			var val = jQuery(this).find(':selected').val();
			var array = ['money','credit','roles','none','login','comment'];
			array.forEach(function(_val){
					if(val == _val){
							jQuery('.cmb2-id-b2-single-post-video-'+_val).show();
					}else{
							jQuery('.cmb2-id-b2-single-post-video-'+_val).hide();
					}
			});
	})

//文章页面隐藏内容查看权限
var phoneType = jQuery('#b2_post_reading_role').find(':selected').val();
if(phoneType == 'money'){
		jQuery('.cmb2-id-b2-post-money').show();
}else if(phoneType == 'credit'){
		jQuery('.cmb2-id-b2-post-credit').show();
}else if(phoneType == 'roles'){
		jQuery('.cmb2-id-b2-post-roles').show();
}else if(phoneType == 'none'){
	jQuery('.cmb2-id-b2-post-money').hide();
	jQuery('.cmb2-id-b2-post-credit').hide();
	jQuery('.cmb2-id-b2-post-roles').hide();
}

jQuery('#b2_post_reading_role').on('change', function() {
		var val = jQuery(this).find(':selected').val();
		var array = ['money','credit','roles','none','login','comment'];
		array.forEach(function(_val){
				if(val == _val){
						jQuery('.cmb2-id-b2-post-'+_val).show();
				}else{
						jQuery('.cmb2-id-b2-post-'+_val).hide();
				}
		});
})

var checkType_alipay = jQuery('#alipay').find(':selected').val();
let alipay_type = ['alipay_normal','xunhu','alipay_hupijiao','mapay','xorpay','payjs','yipay'];
alipay_type.forEach(e => {
	if(checkType_alipay === e){
		jQuery('#'+e).show()
	}
});

var checkType_wecatpay = jQuery('#wecatpay').find(':selected').val();
let wecatpay_type = ['wecatpay_normal','xunhu','wecatpay_hupijiao','mapay','xorpay','payjs','yipay'];
wecatpay_type.forEach(e => {
	if(checkType_wecatpay === e){
		jQuery('#'+e).show()
	}
});

jQuery('#alipay').on('change', function() {
	let val = jQuery(this).find(':selected').val();
	let w = jQuery('#wecatpay').find(':selected').val();
	alipay_type.forEach(e => {
		if(val === e){
			jQuery('#'+val).show()
		}else if(w !== e){
			jQuery('#'+e).hide()
		}
	});
})

jQuery('#wecatpay').on('change', function() {
	let val = jQuery(this).find(':selected').val();
	let a = jQuery('#alipay').find(':selected').val();
	wecatpay_type.forEach(e => {
		if(val === e){
			jQuery('#'+val).show()
		}else if(a !== e){
			jQuery('#'+e).hide()
		}
	});
})

//商品设置
var shopType = jQuery('#zrz_shop_type').find(':selected').val();
	if(shopType == 'normal'){
			jQuery('#shop_price_metabox').show();
	}else if(shopType == 'lottery'){
			jQuery('#shop_lottery').show();
	}else if(shopType == 'exchange'){
			jQuery('#shop_exchange').show();
	}

	jQuery('#zrz_shop_type').on('change', function() {
			var val = jQuery(this).find(':selected').val();
			jQuery('#shop_price_metabox').hide();
			jQuery('#shop_lottery').hide();
			jQuery('#shop_exchange').hide();
			if(val == 'normal'){
				jQuery('#shop_price_metabox').show();
			}else if(val == 'lottery'){
				jQuery('#shop_lottery').show();
			}else if(val == 'exchange'){
				jQuery('#shop_exchange').show();
			}
	})

var shopxuni = jQuery('#shop_xuni_type').find(':selected').val();
if(shopxuni == 'html'){
		jQuery('.cmb2-id-shop-xuni-html-resout').show();
}else if(shopxuni == 'cards'){
		jQuery('.cmb2-id-shop-xuni-cards-resout').show();
}

jQuery('#shop_xuni_type').on('change', function() {
		var val = jQuery(this).find(':selected').val();
		jQuery('.cmb2-id-shop-xuni-cards-resout').hide();
		jQuery('.cmb2-id-shop-xuni-html-resout').hide();
		if(val == 'html'){
			jQuery('.cmb2-id-shop-xuni-html-resout').show();
		}else if(val == 'cards'){
			jQuery('.cmb2-id-shop-xuni-cards-resout').show();
		}
})

var xunitype = jQuery('#zrz_shop_commodity').find(':selected').val();
if(xunitype == '0'){
		jQuery('#shop_xuni').show();
}

jQuery('#zrz_shop_commodity').on('change', function() {
		var val = jQuery(this).find(':selected').val();

		if(val == '0'){
			jQuery('#shop_xuni').show();
		}else{
			jQuery('#shop_xuni').hide();
		}
})