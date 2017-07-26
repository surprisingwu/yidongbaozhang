/**
 * Created by 巫运廷 on 2017/6/13.
 */
summerready = function () {
    positionFlag = true;//选择触发地为0，目的地为1
    //选择飞行方式控件
    $(function () {
        // var curr = new Date().getFullYear();
        var opt = {
            'date': {
                preset: 'date'
            },
            'select': {
                preset: 'select'
            }
        };
        $('#select1').scroller('destroy').scroller(
            $.extend(opt['select'], {
                theme: "ios7",
                mode: "scroller",
                display: "bottom",
                animate: ""
            })
        );
    });
    //选择日期控件
    var count = 0;
    $(function () {
        alert(count++);
        $('.scroller-date').scroller('destroy').scroller({
            preset: 'date',
            theme: "ios7",
            mode: "scroller",
            display: "bottom",
            animate: ""
        });
    });
    //查询框 ,模糊查询样式借鉴飞猪的样式
    $("#searchBox").kuCity();
    //查询框获取焦点时的一些逻辑
    $("#searchBox").on("focus",function () {
        $(".turnBackToInputForm").hide();
        $(".searchBoxCancelBtn").css("display","inline-block");
        $(".letterWraper").hide();
        $(".inputFocusTotast").show();
        $("body").css({
            "overflow":"hidden",
            "position":"fixed"
        })
        $(this).animate({"left":"-30px"},500);
        var _self = this;
        $(".searchBoxCancelBtn").on("click",function () {
            //回到最初的状态
            //还没有输入查询的东西
            try{
                $(".inputFocusTotast").css("display","none");
            }catch (e){}
            $(".inputFocusTotast").hide();
            $(".selectPositionContent").show();
            $(".letterWraper").show();
            $(".container").show();
            $(_self).animate({"left":"0px"},500);
            $(".turnBackToInputForm").show();
            $("body").css({
                "overflow":"auto",
                "position":"relative"
            })
            $(this).hide();
            //输入一些查询的东西

        })
    })
    //监听搜索框的keyup事件
    $("#searchBox").on("keyup",function () {
        var val = $(this).val().trim();
        $(".inputFocusTotast").hide();
        $(".selectPositionContent").hide();
        $(".container").hide();
        //当用户删除输入的东西为空时，状态要重置
        if (val === ""){
            $(".inputFocusTotast").show();
            $(".selectPositionContent").show();
            $(".container").show();
        }
    })
    //点击触发地点
    $(".userInputMesgSpecialItem input").on("click",function () {
        if (this !== document.getElementById("placeOfDeparture")) {
            positionFlag = false;
        }
        $(".addFormPage").hide();
        $(".selectPositionWraper").show();
    })
    //获取当前的城市
    try{
        $(".currentCity").text(returnCitySN["cname"]);
    }catch (e){
        $(".currentCity").text("联网失败！")
    }
    $(".currentCity").text(returnCitySN["cname"])
    $('.container').show();
//选择城市 start
    $('body').on('click', '.city-list p', function () {
        var clickPositionVal = $(this).html();
        if (positionFlag) {
            $("#placeOfDeparture").val(clickPositionVal);
        }else {
            $("#destination").val(clickPositionVal)
        }
        positionFlag = true;
        $(".addFormPage").show();
        $(".selectPositionWraper").hide();

    });
    //点击索引查询城市
    $('body').on('click', '.letterWraper .cityWraperItem a', function () {
        var s = $(this).html();
        $(window).scrollTop($('#' + s + '1').offset().top-$("header").height());
        $("#showLetter span").html(s);
        $("#showLetter").show().delay(500).hide(0);
    });
    // 点击选择城市的返回按钮
    $(".turnBackToInputForm").on("click",function () {
        var searchVal = $("#searchBox").val();
        $(".addFormPage").show();
        $(".selectPositionWraper").hide();
        if (searchVal === ""){
            return;
        } else{
            if (positionFlag) {
                $("#placeOfDeparture").val(searchVal);
            }else {
                $("#destination").val(searchVal)
            }
            positionFlag = true;
        }
    })
    //中间的标记显示
    $('body').on('onMouse', '.showLetter span', function () {
        $("#showLetter").show().delay(500).hide(0);
    });

}