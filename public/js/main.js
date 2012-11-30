$(function() {
	var html;
	$("pre.prettyprint").each(function(){
		html = $(this).html();
		html = html.replace(/</g,"&lt;");
		html = html.replace(/>/g,"&gt;");
		html = html.replace(/\\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");
		html = html.replace(/\\n/g,"<br>");
		$(this).html(html);
	});

	window.prettyPrint && prettyPrint();

	$(".remove-code").click(function(){
		$(".code-example").remove();
		$(this).remove();
	});
 });