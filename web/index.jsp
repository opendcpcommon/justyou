<%--
  Created by IntelliJ IDEA.
  User: junxian
  Date: 2015/9/25
  Time: 18:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title></title>
  <script type="text/javascript" src="js/jquery-1.8.3.min.js"></script>
  <script type="text/javascript" src="js/isyou.js"></script>
  <link rel="stylesheet" type="text/css" href="css/isyou.css">
</head>
<body>
<div id="parent">
<div id="top">
<table class="tab">
<tr>
  <td width="20px">data:</td>
  <td><input class="dataInput" value="秦迪,德华,子龙,张力,俊先,李岩,建川,武林,武晖,刘鹏,家辉,苗泽,百胜,建建,成亚,国航,曲柯,温情" id="dataIpt"/></td>
  <td width="30px"><input type="button" class="addButton" value="+" id="addBtn"/> </td>
</tr>
</table>
</div>
<div id="left">
<div class="chekcboxAllDiv">
<input type="button" class="selectButton" id="saCBX" value="V"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input type="button" class="selectButton" id="dsaCBX" value="X"/>
</div>
</div>
<div id="right"></div>
</div>
</body>
</html>
