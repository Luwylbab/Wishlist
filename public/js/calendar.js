// calendar.js
document.addEventListener('DOMContentLoaded', function () {
  // Data to be displayed
  var calendarData = [
      {
          title: 'Easter Egg',
          start: '2024-01-08',
          end: '2024-01-09',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
      },
      // Add more events as needed...
  ];

  // Compile the Handlebars template
  var templateSource = '<div id="calendar"></div>';
  var template = Handlebars.compile(templateSource);

  // Create HTML with the template and data
  var html = template({ calendarData: calendarData });

  // Inject the HTML into the document
  document.body.innerHTML = html;

  // Initialize FullCalendar
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2024-01-07',
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: calendarData,
      
  });

  calendar.render();
});
