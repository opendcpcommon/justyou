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
  <td><input class="dataInput" value="A,B,C,D,E,F,G,H,I,J,K,L,M,N" id="dataIpt"/></td>
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
