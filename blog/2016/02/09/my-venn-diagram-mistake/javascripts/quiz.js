/* copied from http://www.kejifalanxi.com/en/category/quiz */
$(document).ready(function(){
  $(".submit").click(function(){
	$this=$(this);
	value=$this.parent().find("input:radio:checked").val();
	if(value==1){
	    alert("Congratulations! right answer~");
	}else{
	    alert("OOPS, wrong answer~");
	}
  });
});
