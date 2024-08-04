var loader = "<div class='preloader-wrapper big active'><div class='spinner-layer spinner-blue'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer spinner-red'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer spinner-yellow'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div><div class='spinner-layer spinner-green'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div>";

if(typeof(Storage) !== "undefined"){
var userData = localStorage.getItem("userPreference");
if(userData == undefined){
localStorage.setItem("userPreference",JSON.stringify({'themeColor':'blue-grey'}));
userJSON={'themeColor':'blue-grey'};
themeColor = "blue-grey";
}else{
userJSON=JSON.parse(userData);
themeColor=userJSON.themeColor;
}

}else {
userJSON={'themeColor':'blue-grey'};
themeColor = "blue-grey";
setColorTheme("blue-grey");
M.toast({html:"Sorry, your browser does not support Web Storage"}, 4000) 
}

function openSideNav(){
$('.sidenav').open();
}

function changeColorTheme(){
if(userJSON.themeColor=="blue-grey"){
userJSON.themeColor="white-purple";
themeColor="white-purple";
localStorage.setItem("userPreference",JSON.stringify({"themeColor": "white-purple"}));
setColorTheme("white-purple");
}else if(userJSON.themeColor=="white-purple"){
userJSON.themeColor="white-grey";
themeColor="white-grey";
localStorage.setItem("userPreference",JSON.stringify({"themeColor": "white-grey"}));
setColorTheme("white-grey");
}else if(userJSON.themeColor=="white-grey"){
userJSON.themeColor="blue-grey";
themeColor="blue-grey";
localStorage.setItem("userPreference",JSON.stringify({"themeColor": "blue-grey"}));
setColorTheme("blue-grey");
}
}

function setColorTheme(color){
if(color == "blue-grey"){
 $(".account_avatar").css({"background-color":"#455a64"});

 $(".select-dropdown").css({"color":"#fff"});

 $(".select-dropdown.dropdown-content ").css({"background-color":"#455a64","color":"#fff"});
 $(".dropdown-content li").css({"background-color":"#455a64"});
 $(".dropdown-content a").css({"color":"#fff"});
 $(".sidenav").css({"background-color":"#455a64","color":"#fff"});
 $(".sidenav a").css({"color":"#fff"});
 $(".collection-item").css({"background-color":"#546e7a","color":"#fff"});
 $(".modal-content").css({"background-color":"#546e7a","color":"#fff"});
 $(".modal").css({"background-color":"#455a64","color":"#fff"});
 $(".modal-footer").css({"background-color":"#455a64","color":"#fff"});
$(".nav-theme").css({"background-color":"#263238","color": "#fff"});
$(".nav-extended").css({"background-color": "#263238","color": "#fff"});
$(".page-footer").css({"background-color": "#263238","color": "#fff"});
$(".chip").css({"background-color": "#647b86","color": "#fff"});
$(".collapsible-header").css({"background-color":"#455a64"});
$(".collapsible").css({"background-color":"#37474f","color":"#fff"});
$(".collapsible-body").css({"background-color":"#546e7a","color":"#fff"});

$(".botsparam").css({"color":"#fff"});
$(".theme").css({"background-color":"#37474f","color":"#26a69a"});
$(".tableBorder").css({"border": "1px solid #37474f"});
$(".theme-title").css({"background-color":"#2d3c46","color":"#26a69a"});
}

if(color == "white-purple"){
 $(".account_avatar").css({"background-color":"#f5f5f5"});
$(".theme").css({"background-color":"#dededef2","color":"#263238"});
$(".tableBorder").css({"border": "1px solid #dededef2"});
$(".theme-title").css({"background-color":"#e7e7e7","color":"#14181a"});
 
 $(".select-dropdown").css({"color": "#263238"});
 $(".select-dropdown.dropdown-content ").css({"background-color":"#e7e7e7","color":"#263238"});
  $(".dropdown-content li").css({"background-color":"#f5f5f5"});
 $(".dropdown-content a").css({"color":"#263238"});
 $(".sidenav").css({"background-color":"#f5f5f5","color":"#263238"});
 $(".sidenav a").css({"color":"#263238"});
 $(".collection-item").css({"background-color":"#eeeeee","color":"#07423f"});
 $(".modal-content").css({"background-color":"#eeeeee","color":"#263238"});
 $(".modal").css({"background-color":"#f5f5f5","color":"#263238"});
 $(".modal-footer").css({"background-color":"#f5f5f5","color":"#263238"});
$(".nav-theme").css({"background-color": "#413855","color":"#e7e7e7"});
$(".nav-extended").css({"background-color": "#413855","color":"#e7e7e7"});
$(".page-footer").css({"background-color": "#413855","color": "#e7e7e7"});
$(".chip").css({"background-color": "#929a9e3d","color":"#121c20c9"});
$(".collapsible-header").css({"background-color":"#f5f5f5"});
$(".collapsible").css({"background-color":"#dededef2","color":"#263238"});
$(".collapsible-body").css({"background-color":"#eeeeee","color":"#263238"});


}

if(color == "white-grey"){
 $(".account_avatar").css({"background-color":"#f5f5f5"});
$(".theme").css({"background-color":"#dededef2","color":"#263238"});
$(".tableBorder").css({"border": "1px solid #dededef2"});
$(".theme-title").css({"background-color":"#bdbdbd","color":"#14181a"});
 
 $(".select-dropdown").css({"color": "#263238"});
 $(".select-dropdown.dropdown-content ").css({"background-color":"#bdbdbd","color":"#263238"});
 $(".dropdown-content li").css({"background-color":"#f5f5f5"});
 $(".dropdown-content a").css({"color":"#263238"});
 $(".sidenav").css({"background-color":"#f5f5f5","color":"#263238"});
 $(".sidenav a").css({"color":"#263238"});
 $(".collection-item").css({"background-color":"#eeeeee","color":"#07423f"});
 $(".modal-content").css({"background-color":"#eeeeee","color":"#263238"});
 $(".modal").css({"background-color":"#f5f5f5","color":"#263238"});
 $(".modal-footer").css({"background-color":"#f5f5f5","color":"#263238"});
$(".nav-theme").css({"background-color": "#37474f","color":"#bdbdbd"});
$(".nav-extended").css({"background-color": "#37474f","color":"#bdbdbd"});
$(".page-footer").css({"background-color": "#37474f","color": "#bdbdbd"});
$(".chip").css({"background-color": "#656c6f","color":"#121c20c9"});
$(".collapsible-header").css({"background-color":"#f5f5f5"});
$(".collapsible").css({"background-color":"#dededef2","color":"#263238"});
$(".collapsible-body").css({"background-color":"#eeeeee","color":"#263238"});
}

}
