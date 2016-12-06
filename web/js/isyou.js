/**
 * Created by junxian on 2015/9/25.
 */
var currentInx = 0;
var timeStep = 10;
var timeOut = null;
var roundCount = 0;

$(document).ready(function(){
    //alert(Math.random());
    $("#dataIpt").keyup(function(){
        if($("#dataIpt").val()==""){
            $("#addBtn").attr("disabled", true);
        }else{
            $("#addBtn").removeAttr("disabled");
        }
    });
    $("#addBtn").click(function(){
        var dataArray = $("#dataIpt").val().split(",");
        $("div[class='chekcboxDiv']").remove();
        $.each(dataArray,function(i,v){
            //alert(i+">"+v);
            var id = "dataCBX_" + i ;
            var value = i+"--"+v;
            var ndiv = "<div class='chekcboxDiv'><input checked=\"checked\" onchange='changeCkB()' type=\"checkbox\" id="+id+" value="+value+"><font style='font-size: 12px'>"+v+"</p></div>";
            $("#left").find("div").last().after(ndiv);
        });
        showData();
    });
    //select All
    $("#saCBX").click(function(){
        $("input[id^='dataCBX_']").attr("checked","checked");
        showData();
    });
    //disSelect All
    $("#dsaCBX").click(function(){
        $("input[id^='dataCBX_']").removeAttr("checked");
        showData();
    });

});
//change chekbox
function changeCkB(){
    showData();
}
//show data
function showData(){
    $("#right").empty();
    var showDataArr = new Array();
    var indexArr = new Array();
    $("input[id^='dataCBX_']:checked").each(function(i,v){
        showDataArr[i] = $(v).val().split("--")[1];
        indexArr[i] = $(v).val().split("--")[0];
    });
    var count = showDataArr.length;
    if(count>0){
        var step = parseFloat(360 / count);
        var parentWidth = 450.0;
        var r = 180.0;
        var btnWidth = 60.0;
        var btnHeight = 30.0;
        var baseLeft = parseFloat(parentWidth / 2 - btnWidth / 2) + $("#right").position().left;
        var baseTop = parseFloat(parentWidth / 2 - btnHeight / 2) + $("#right").position().top;
        $.each(showDataArr,function(i,v){
            var btnLeft = parseFloat(baseLeft + r * Math.sin(i * step * Math.PI/180));
            var btnTop = parseFloat(baseTop - r * Math.cos(i * step * Math.PI/180));
            var style = "position: relative;";
            $("#right").append("<input id=showBtn_"+i+" onclick=delBtn("+indexArr[i]+") class='showButton' type=\"button\" value='"+v+"' style='"+style+"'/>");
            $("#right").find("input[type='button']").last().offset({ top: btnTop, left: btnLeft });
        });

        baseLeft = parseFloat(parentWidth / 2 - 60 / 2) + $("#right").position().left;
        baseTop = parseFloat(parentWidth / 2 - 60 / 2) + $("#right").position().top;
        $("#right").append("<input id=controlBtn type=\"button\" value='START' class='controlButton' onclick='controlBtnClick()'/>");
        $("#right").find("input[type='button']").last().offset({ top: baseTop, left: baseLeft });
    }
}
//delete btn
function delBtn(inx){
    $("#dataCBX_"+inx).removeAttr("checked");
    showData();
}
//rotate
function rotate(){
    $("#showBtn_"+currentInx).removeClass("selectBtn");
    $("#showBtn_"+currentInx).removeClass("endBtn");
    var count = $("input[id^='dataCBX_']:checked").size();
    currentInx = Math.ceil(count * Math.random());
    roundCount = 0;
    timeStep = Math.ceil(10 * Math.random()) + 30;
    timeOut = setTimeout("changeSelect()",timeStep);
}
function changeSelect(){
    var count = $("input[id^='dataCBX_']:checked").size();
    $("#showBtn_"+currentInx).css({'background-color':'#ECEFF1'});
    $("#showBtn_"+currentInx).addClass("showButton");
    currentInx++;
    currentInx = currentInx % count;

    $("#showBtn_"+currentInx).css({'background-color':'rgb('+(parseInt(255 *parseFloat(timeStep/1000)))+','+0+','+0+')'});
    $("#controlBtn").val($("#showBtn_"+currentInx).val());

    if (roundCount++ >30) {
        if(timeStep>=300) {
            timeStep = timeStep + 80;
        }else if(timeStep>=600){
            timeStep = timeStep + 120;
        }else{
	    timeStep = timeStep + 40;
	}
    }
    //$("#controlBtn").val(timeStep);
    if(timeStep >= 900){
        clearTimeout(timeOut);
        $("#showBtn_"+currentInx).removeClass("selectBtn");
        $("#showBtn_"+currentInx).addClass("endBtn");
        abled();
    }else{
        timeOut = setTimeout("changeSelect()",timeStep);
    }
}
function controlBtnClick(){
    disabled();
    rotate();
}
function disabled(){
    $("#parent").find("input[type='button']").attr("disabled","disabled");
    $("#parent").find("input[type='checkbox']").attr("disabled","disabled");
}
function abled(){
    $("#parent").find("input[type='button']").removeAttr("disabled");
    $("#parent").find("input[type='checkbox']").removeAttr("disabled");
}
