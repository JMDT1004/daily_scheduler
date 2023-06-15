//Display current day on header
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM DD, YYYY'));

//establish save button and user Input local Storage
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var timeBlock = $(this).closest('.time-block');
    var timeBlockId = timeBlock.attr('id');
    var userInput = timeBlock.find('.description').val();

    localStorage.setItem(timeBlockId, userInput);
  });

  //set current hour tracker for scheduler
  var currentHour = dayjs().get('hour');
  $('.time-block').each(function () {
    var timeBlockId = parseInt($(this).attr('id'));

    //added 'past''present''future' designation to match time of day
    if (timeBlockId < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockId === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
    var savedUserInput = localStorage.getItem(timeBlockId);

    $(this).find('.description').val(savedUserInput);
  });
});



document.addEventListener('DOMContentLoaded', function () {
  var saveButtons = document.querySelectorAll('.saveBtn');
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', function () {
      var timeBlock = this.closest('.time-block');
      var timeBlockId = timeBlock.getAttribute('id');
      var userInput = timeBlock.querySelector('.description').value;

      localStorage.setItem(timeBlockId, userInput);
    });
  }

  var currentHour = dayjs().get('hour');
  var timeBlocks = document.querySelectorAll('.time-block');
  for (var t = 0; t < timeBlocks.length; t++) {
    var timeBlockId = parseInt(timeBlocks[t].getAttribute('id'));

    if (timeBlockId < currentHour) {
      timeBlocks[t].classList.add('past');
    } else if (timeBlockId === currentHour) {
      timeBlocks[t].classList.add('present');
    } else {
      timeBlocks[t].classList.add('future');
    }

    var savedUserInput = localStorage.getItem(timeBlockId);
    timeBlocks[t].querySelector('.description').value = savedUserInput;
  }
});
