$('#tftv-strawpoll-send').click(function() { nodecg.sendMessage('pollIn', showPoll()); });
$('#tftv-strawpoll-hide').click(function() { nodecg.sendMessage('pollOut', ''); });

function showPoll() {
  var poll = {
    'id': $('#tftv-strawpoll-id').val() // send this as an array for a future feature
  };
  
  return poll;
}