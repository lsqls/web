<script>
function show_image(pic)
{
var source=pic.getAttribute("href");
var img_plac=document.getElementById("img_place");
img_plac.setAttribute("src",source);
}
var xiaomi_place=document.getElementById("xiaomi");
xiaomi_place.onclick=function(){show_image(this);change_decriptionn(this);return false;}
var huawei_place=document.getElementById("huawei");
huawei_place.onclick=function(){show_image(this);change_decriptionn(this);return false;}
function change_decriptionn(dec){
var fist_decription=document.getElementById("decription")
var last_decription=dec.getAttribute("title")
first_decription.fistChild.nodeValue=last_decription
}
/*xiaomi_child=document.getElementById("xiaomi");
onload=alert(xiaomi_child.lastChild.nodeValue);
xiaomi_child.lastChild.nodeValue="hello ok";
var hello=document.getElementById("huawei");
var hello_title=hello.getAttribute("href");
xiaomi_child.lastChild.nodeValue=hello_title;
alert(xiaomi_child.lastChild.nodeValue)*/
</script>