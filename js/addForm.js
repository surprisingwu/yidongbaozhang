/**
 * Created by 巫运廷 on 2017/6/12.
 */
summerready = function () {

// 模拟长途交通费用数据
    var longTransferArr = [
        {
            transferType: "长途交通费",
            time: "2016-09-21 2016-09-22",
            position:"北京-深圳",
            money:"300.00"
        },
        {
            transferType: "长途交通费",
            time: "2016-09-21 2016-09-22",
            position:"北京-深圳",
            money:"300.00"
        },
        {
            transferType: "长途交通费",
            time: "2016-09-21 2016-09-22",
            position:"北京-深圳",
            money:"300.00"
        },
        {
            transferType: "长途交通费",
            time: "2016-09-21 2016-09-22",
            position:"北京-深圳",
            money:"300.00"
        },
        {
            transferType: "长途交通费",
            time: "2016-09-21 2016-09-22",
            position:"北京-深圳",
            money:"300.00"
        },
        {
            transferType: "长途交通费",
            time: "2016-09-21 2016-09-22",
            position:"北京-深圳",
            money:"300.00"
        }
    ];
    var longTransferArrText = doT.template($("#longTranferListview").text());
    $(".addMesgDetailContainer").append(longTransferArrText(longTransferArr));
    //点击新增详情
    $(".addMesgDetailWraper").on("click",function () {
        $("body").css({
            "overflow":"hidden",
            "position":"fixed"
        })
        $(".inputTypeTotast").css("display","block");
        $(".cancelBtn").on("click",function () {
            $(".inputTypeTotast").css("display","none");
            $("body").css({
                "overflow":"auto",
                "position":"relative"
            })
        })
    })
    //点击手动录入
    $(".inputTypeTotastWraper .inputTypeTotastItem").on("click",function () {
        if ($(this).attr("inputType") === "manuallyJump"){
            window.location.href = "manuallyJump.html";
        }else {
            window.location.href = "optionConsumptionJump.html"
        }
    })
    //点击选择报销类型
    $(".header-title").on("click",function () {
        $("body").css({
            overflow: 'hidden'
        })
        $(".headerTitleIconWraper").css({
            "transform":"rotate(180deg)",
            "-webkit-transform":"rotate(180deg)"
        })
        $(".selectTuenBackMonryType").show();
    })
    $(".clickHideHandler").on("click",function () {
        $(".selectTuenBackMonryType").hide();
    })
}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
