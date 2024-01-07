
// Draw events on calendar using discord format
function draw() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2024-01-07',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2024-01-01'
        },
        {
          title: 'Long Event',
          start: '2024-01-07',
          end: '2024-01-10'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2024-01-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2024-01-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2024-01-11',
          end: '2024-01-13'
        },
        {
          title: 'Meeting',
          start: '2024-01-12T10:30:00',
          end: '2024-01-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2024-01-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2024-01-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2024-01-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'https://google.com/',
          start: '2024-01-28'
        }
      ]
    });

    calendar.render();
}
draw();
// document.addEventListener('DOMContentLoaded', function() {
//     var calendarEl = document.getElementById('calendar');

//     var calendar = new FullCalendar.Calendar(calendarEl, {
//       initialView: 'dayGridMonth',
//       initialDate: '2024-01-07',
//       headerToolbar: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay'
//       },
//       events: [
//         {
//           title: 'All Day Event',
//           start: '2024-01-01'
//         },
//         {
//           title: 'Long Event',
//           start: '2024-01-07',
//           end: '2024-01-10'
//         },
//         {
//           groupId: '999',
//           title: 'Repeating Event',
//           start: '2024-01-09T16:00:00'
//         },
//         {
//           groupId: '999',
//           title: 'Repeating Event',
//           start: '2024-01-16T16:00:00'
//         },
//         {
//           title: 'Conference',
//           start: '2024-01-11',
//           end: '2024-01-13'
//         },
//         {
//           title: 'Meeting',
//           start: '2024-01-12T10:30:00',
//           end: '2024-01-12T12:30:00'
//         },
//         {
//           title: 'Lunch',
//           start: '2024-01-12T12:00:00'
//         },
//         {
//           title: 'Meeting',
//           start: '2024-01-12T14:30:00'
//         },
//         {
//           title: 'Birthday Party',
//           start: '2024-01-13T07:00:00'
//         },
//         {
//           title: 'Click for Google',
//           url: 'https://google.com/',
//           start: '2024-01-28'
//         }
//       ]
//     });

//     calendar.render();
//   });

