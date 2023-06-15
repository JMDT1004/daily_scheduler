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

