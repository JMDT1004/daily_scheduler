//Display current day on header
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM DD, YYYY'));

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var timeBlock = $(this).closest('.time-block');
    var timeBlockId = timeBlock.attr('id');
    var userInput = timeBlock.find('.description').val();

    localStorage.setItem(timeBlockId, userInput);
  });

  var currentHour = dayjs().get('hour');
  $('.time-block').each(function () {
    var timeBlockId = parseInt($(this).attr('id'));

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
  for (var j = 0; j < timeBlocks.length; j++) {
    var timeBlockId = parseInt(timeBlocks[j].getAttribute('id'));

    if (timeBlockId < currentHour) {
      timeBlocks[j].classList.add('past');
    } else if (timeBlockId === currentHour) {
      timeBlocks[j].classList.add('present');
    } else {
      timeBlocks[j].classList.add('future');
    }

    var savedUserInput = localStorage.getItem(timeBlockId);
    timeBlocks[j].querySelector('.description').value = savedUserInput;
  }
});
