$(document).ready(function() {
  var timeSetSes = $("#timeSetSes");
  var SesNum = 0;

  $("#timeSetSes").html(SesNum);
  $("#sesUp").on('click', function () {
      SesNum = SesNum + 1
      timeSetSes.html(SesNum);
  });

  $("#sesDown").on('click', function () {
    if (SesNum < 1) {
      SesNum = 0;
    } else {
      SesNum = SesNum - 1
      timeSetSes.html(SesNum);
    }
  });

  var timeSetBreak = $("#timeSetBreak");
  var breakNum = 0;
  $("#timeSetBreak").html(breakNum);
  $("#breakUp").on('click', function () {
      breakNum = breakNum + 1
      timeSetBreak.html(breakNum);
  });
  
  $("#breakDown").on('click', function () {
    if (breakNum < 1) {
      breakNum = 0;
    } else {
      breakNum = breakNum - 1
      timeSetBreak.html(breakNum);
    }
  });

  $('#start').on('click', function () {
    var clock = SesNum;
    var seconds = 0;

    sesTime(clock, seconds);
  });



function sesTime (clock, seconds) {
  $('#minutes').html(clock);
  $('#seconds').html(seconds);

  if (seconds === 0 && clock >= 1) {
    clock -= 1;
    seconds = 60;
  };

  if (clock === 0 && seconds === 0) {
    var breakSeconds = 0;
    breakTime(breakNum, breakSeconds);
  };

  seconds -= 1;

  if (seconds >= 0) {
    setTimeout(sesTime.bind(null, clock, seconds), 1000);
  };

};

function breakTime (clock, seconds) {
  $('#minutes').html(clock);
  $('#seconds').html(seconds);

  if (seconds === 0 && clock >= 1) {
    clock -= 1;
    seconds = 60;
  };

  if (clock === 0 && seconds === 0) {
    alert('Finished');
  };

  seconds -= 1;

  if (seconds >= 0) {
    setTimeout(breakTime.bind(null, clock, seconds), 1000);
  };

};

});
