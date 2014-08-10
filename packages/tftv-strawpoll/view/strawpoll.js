nodecg.listenFor('pollIn', showPoll);
nodecg.listenFor('pollOut', function(data) {
  hidePoll();
});

function showPoll(data) {
  if (data.id) {
	var link = "http://"+document.location.hostname+":"+document.location.port+"/getstrawpoll?id=" + data.id;
    $('#strawpoll_frame').attr('src', link);
    $('#strawpoll_frame').attr('style', '');
  }
}

function hidePoll() {
	$('#strawpoll_frame').contents().find('html').html("")
	$('#strawpoll_frame').attr("src", "")
	$('#strawpoll_frame').attr("style", "display:none");
}
