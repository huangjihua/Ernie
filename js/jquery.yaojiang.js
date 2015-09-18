var count=1; //模拟抽奖次数
var price =[0,10,20,30,0,0,100,0,0,50,0,0,60,0,0] //随机中奖金额

$(function () {
	$(".colf60").html(count);
    $('.btn2').click(function () {
        isClick = $(".colf60").html() > 0 ? true : false;
        if (isClick) {
            //alert("ddd");
            if (isBegin) return false;
            isBegin = true;
            $(".num").css('backgroundPositionY', 0);
			 if (count > 0) {
						--count;
						yaojiang(numRand(),price[Math.floor(Math.random()*price.length)],count);
						$(".colf60").html(count);
						if (count <= 1) { $(".btn2").css("background", "#c0c0c0"); isClick = false; } else { isClick = true; }
			 } else { alert("很遗憾，您的摇奖次数不够！"); }
		

        } else { $(".btn2").css("background", "#c0c0c0"); isClick = false; }
    });

});
function yaojiang(result, price, count) { 
    var u = 80;
    var num_arr = (result + '').split('');
    $(".btn2").css("background", "#c0c0c0").html("摇奖中..."); isClick = false;
    $(".num").each(function (index) {
        var _num = $(this);
        setTimeout(function () {
            _num.animate({
                backgroundPositionY: (u * 60) - (u * num_arr[index])
            }, {
                duration: 6000 + index * 3000,
                easing: "easeInOutCirc",
                complete: function () {
                    if (index == 3) { isBegin = false; }
                    if (index == $(".num").length - 1) {
                        if (price > 0) { alert("恭喜您，喜中￥" + price + "元"); } else { alert("很遗憾，本次您未中奖，谢谢您的参与！"); }
                        if (count > 0) { isClick = true; $(".btn2").css("background", "#d32d6f"); }
                        $(".btn2").html("开始摇奖");
                    }
                    //var pos = _num.css('backgroundPositionY').replace('px','');
                    //_num.css('backgroundPositionY',pos%u);
                }
            });
        }, index * 300);
    });

}

//生成7位数随机奖号码
function numRand() {
	var x = 9999999; //上限
	var y = 1111111; //下限
	var rand = parseInt(Math.random() * (x - y + 1) + y);
	return rand;
}