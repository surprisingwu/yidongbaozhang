

summerready = function(){
    //tab切换，nav栏切换添加active样式，并切换待办和已办数据
    var listview = document.getElementById("listview");
    var approalListview =  document.getElementById("approalListview");
    $(".navWraper>.navItem span").on("click",function () {
        if ($(this).hasClass("active")){
            return;
        }
        $(this).addClass("active").parent().siblings().find("span").removeClass("active");
        if (this === document.querySelector(".navItem .unapproval")) {
            listview.style.display = "block";
            approalListview.style.display = "none";
        } else {
            listview.style.display = "none";
            approalListview.style.display = "block";
        }
    })
    //点击跳转新增表单
    $(".addHandler").on("click",function () {
        window.location.href = "html/addFormPage.html";
    })
    //点击向右的小箭头，展示下面的数据，并旋转
    $("#listview .listviewStateListTitleArrow").on("click",function () {
        var $nextSibling = $(this).parent().next()
        var $thisStyle = $nextSibling.css("display");
        $thisStyle == "block" ? $nextSibling.hide():$nextSibling.show();
        $thisStyle == "block"?$(this).removeClass("listviewStateListTitleArrowActive"):$(this).addClass("listviewStateListTitleArrowActive")
    })
    //模拟待办数据
    var unapprovalArr = [
        {
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },
        {
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },
        {
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },{
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },{
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },
        {
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },
        {
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },
        {
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },
        {
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },{
            detail:"差旅费报销单",
            time:"2016 04 16  21：08",
            name:"王晶",
            money:"700.00"
        },


    ];
    //模拟已办数据
    var approvalArr = [

        {
            detail: "固定资产请购单_非电h呵呵呵",
            name: "武汉中北证劵营业部",
            time: "武汉中北证劵营业部",
            oddNumber: "QG01035611605531001"
        },
        {
            detail: "固定资产请购单_非电h呵呵呵",
            name: "武汉中北证劵营业部",
            time: "武汉中北证劵营业部",
            oddNumber: "QG01035611605531001"
        },
        {
            detail: "固定资产请购单_非电h呵呵呵",
            name: "武汉中北证劵营业部",
            time: "武汉中北证劵营业部",
            oddNumber: "QG01035611605531001"
        },
        {
            detail: "固定资产请购单_非电h呵呵呵",
            name: "武汉中北证劵营业部",
            time: "武汉中北证劵营业部",
            oddNumber: "QG01035611605531001"
        },
        {
            detail: "固定资产请购单_非电h呵呵呵",
            name: "武汉中北证劵营业部",
            time: "武汉中北证劵营业部",
            oddNumber: "QG01035611605531001"
        },
        {
            detail: "固定资产请购单_非电h呵呵呵",
            name: "武汉中北证劵营业部",
            time: "武汉中北证劵营业部",
            oddNumber: "QG01035611605531001"
        },
        {
            detail: "固定资产请购单_非电h呵呵呵",
            name: "武汉中北证劵营业部",
            time: "武汉中北证劵营业部",
            oddNumber: "QG01035611605531001"
        },
    ]
    //对数据进行渲染
    //草稿箱
    var unapprovalText = doT.template($("#unapproval").text());
    $(".unapprovalList").append(unapprovalText(unapprovalArr));
    //已提交
    var submittedText =  doT.template($("#submitted").text());
    $(".submitted").append(submittedText(unapprovalArr));
    //已办
    var approvalText = doT.template($("#approval").text());
    $(".approvalList").append(approvalText(approvalArr));
    //待办控件绑定
    listviewHandler("#listview");
    //已办控件绑定
    listviewHandler("#approalListview");
    function listviewHandler(listviewContainer) {
        var listview = UM.listview(listviewContainer);
        //listview.on("pullDown", function (sender) {
        //这是可以编写列表下拉加载逻辑，参数sender即为当前列表实例对象
        /* var row = {
         "img": "./img/news5.png",
         "title": "科大讯飞发布新交互界面 语音可同步转成文字",
         "detail": "此外科大讯飞还发布了录音宝、录音笔、讯飞听见网、智学网、E听说等新品。",
         "comments": 1800
         };
         viewModel.data.unshift(row); */
        //sender.refresh();
        // });
        //listview.on("pullUp", function (sender) {
        //这是可以编写列表上拉刷新逻辑，参数sender即为当前列表实例对象
        /* var row = {
         "img": "./img/news6.png",
         "title": "科幻成真？微软开发可预测未来犯罪应用",
         "detail": "这种新技术可依据历史记录，预测哪些囚犯将在获释6个月内重新被捕。",
         "comments": 2633
         };
         viewModel.data.push(row);  */
        //sender.refresh();
        //});
        listview.on("itemDelete", function (sender, args) {
            //这是可以编写行删除逻辑，参数sender即为当前列表实例对象，args对象有2个属性，即rowIndex(行索引)和$target(目标行的jquery对象)
            /* args.$target.slideUp(500,function(){
             var item = viewModel.data()[args.rowIndex];
             viewModel.data.remove(item);
             });*/
        });
        listview.on("itemClick", function (sender, args) {
            //这里可以处理行点击事件，参数sender即为当前列表实例对象，args对象有2个属性，即rowIndex(行索引)和$target(目标行的jquery对象)
            //alert("您点击了列表的第" + (args.rowIndex + 1) +　"行！");
        });
        listview.on("itemSwipeLeft", function (sender, args) {
            //这里可以处理行左滑事件，参数sender即为当前列表实例对象，args对象有2个属性，即rowIndex(行索引)和$target(目标行的jquery对象)
            sender.showItemMenu(args.$target);
        });
        listview.on("tapHold", function () {
            //这里可以处理长按事件
            //console.log("您长按了列表！");
        });
    }


}