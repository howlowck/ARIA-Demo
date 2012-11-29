$(function() {
	var html;
	$("pre.prettyprint").each(function(){
		html = $(this).html();
		html = html.replace(/</g,"&lt;");
		html = html.replace(/>/g,"&gt;");
		$(this).html(html);
	});

	window.prettyPrint && prettyPrint();

	$(".remove-code").click(function(){
		$(".code-example").remove();
	});
 });