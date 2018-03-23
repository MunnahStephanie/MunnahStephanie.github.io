#$.ajax({
type: "GET,
url:"/colors/json",
datatype:"json:,
success:function(data){
	data: forEach(function(item ){
		console.log(item.color);
},
error: function(xhr,status,e){
console.log(status, e);
}
});