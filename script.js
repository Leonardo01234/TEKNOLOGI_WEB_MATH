function generateFibonacci() {
    const fibonacciInput = document.getElementById('fibonacciInput').value;
    let fibonacciResult = '';
    
    let first = 0, second = 1;
    for (let i = 0; i < fibonacciInput; i++) {
      fibonacciResult += first + ' ';
      const temp = first + second;
      first = second;
      second = temp;
    }
  
    document.getElementById('fibonacciResult').innerText = 'Deret Fibonacci: ' + fibonacciResult;
  }
  
  function calculateVolume() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (!isNaN(length) && !isNaN(width) && !isNaN(height)) {
      const volume = length * width * height;
      document.getElementById('volumeResult').innerText = 'Volume: ' + volume;
    } else {
      document.getElementById('volumeResult').innerText = 'Masukkan panjang, lebar, dan tinggi yang valid.';
    }
  }
  
  function generateCalendar() {
    const year = 2023;
  
    const months = [
      { name: 'September', days: 30, startDay: 5 },  
      { name: 'Oktober', days: 31, startDay: 0 },     
      { name: 'November', days: 30, startDay: 2 },    
      { name: 'Desember', days: 31, startDay: 5 }     
    ];
  
    let calendarResult = '';
  
    months.forEach(month => {
      calendarResult += `<h3>${month.name} ${year}</h3>`;
      calendarResult += '<table border="1"><tr>';
      const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  
      // Fill in the headers for days of the week
      daysOfWeek.forEach(day => {
        calendarResult += `<th>${day}</th>`;
      });
  
      calendarResult += '</tr><tr>';
  
      // Fill in empty cells for the days before the starting day of the month
      for (let i = 0; i < month.startDay; i++) {
        calendarResult += '<td></td>';
      }
  
      let dayCount = 1;
      for (let i = month.startDay; dayCount <= month.days; i++) {
        calendarResult += `<td>${dayCount}</td>`;
        if ((i + 1) % 7 === 0) {
          calendarResult += '</tr><tr>';
        }
        dayCount++;
      }
  
      // Fill in empty cells for the days after the last day of the month
      while ((dayCount - 1) % 7 !== 0) {
        calendarResult += '<td></td>';
        dayCount++;
      }
  
      calendarResult += '</tr></table>';
    });
  
    calendarResult += '<button onclick="closeCalendar()">Tutup Kalender</button>';
  
    document.getElementById('calendarResult').innerHTML = calendarResult;
  }
  
  function closeCalendar() {
    document.getElementById('calendarResult').innerHTML = '';  // Kosongkan konten kalender
  }
  
  

  function addToDo() {
    const todoItem = document.getElementById('todoItem').value;
    if (todoItem.trim() === '') {
      alert('Masukkan tugas yang valid.');
      return;
    }
  
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.innerHTML = `<span>${todoItem}</span><button onclick="removeToDo(this)">Hapus</button>`;
    todoList.appendChild(li);
    document.getElementById('todoItem').value = '';
  }
  
  function removeToDo(button) {
    button.parentElement.remove();
  }
