<?php
if(isset($_POST["submit"]&&$_POST["submit"]=="注册")
{
$username=$_POST["username"];
$password=$_POST["password"];
if($username==""||$password=="")
{
echo"<script>alert'请输入正确的用户名或密码';history.go(-1);</script>;
}
else
{
mysql_connect("localhost","root","");
mysql_select_db("database");
mysql_query("set names 'gbk'");
$sql="select username from user where username==$username";
$result=mysql_query($sql);
$num=mysql_num_row($result);
if($num)
{
echo"<script>alert'用户名已存在';history.go(-1);</script>";
}
else
{
$register="insert into user (username,password) value ($username,$password);
$reg_result=mysql_query($register);
$reg_num=mysql_num_row(reg_result);
if($reg_num)
{
echo"<script>alert'注册成功';</script>";
}
else
{
echo"<script>alert'系统繁忙，请重试';history.go(-1);</script>";
