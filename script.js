function startClock() {
       updateClock('clock-lucknow', 'time-lucknow', 5.5);    // Lucknow - UTC +5:30
       updateClock('clock-newyork', 'time-newyork', -4);      // New York - UTC -4 (Eastern Daylight Time)
       updateClock('clock-london', 'time-london', 1);         // London - UTC +1 (British Summer Time)
       updateClock('clock-tokyo', 'time-tokyo', 9);           // Tokyo - UTC +9
       updateClock('clock-shanghai', 'time-shanghai', 8);     // Shanghai - UTC +8
       updateClock('clock-losangeles', 'time-losangeles', -7);// Los Angeles - UTC -7 (Pacific Daylight Time)
       updateClock('clock-sydney', 'time-sydney', 10);        // Sydney - UTC +10
       updateClock('clock-moscow', 'time-moscow', 3);         // Moscow - UTC +3
       updateClock('clock-dubai', 'time-dubai', 4);           // Dubai - UTC +4
       updateClock('clock-rio', 'time-rio', -3);              // Rio de Janeiro - UTC -3
   }
   
   function updateClock(clockId, timeId, offset) {
       const now = new Date();
       const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
       const localTime = new Date(utc + (3600000 * offset));
   
       // Update the analog clock
       const hours = localTime.getHours() % 12;
       const minutes = localTime.getMinutes();
       const seconds = localTime.getSeconds();
   
       const hourAngle = (hours + minutes / 60) * 30;
       const minuteAngle = (minutes + seconds / 60) * 6;
       const secondAngle = seconds * 6;
   
       const clock = document.getElementById(clockId);
       clock.innerHTML = `
           <div class="hand" style="height: 35px; background-color: black; transform: rotate(${hourAngle}deg);"></div>
           <div class="hand" style="height: 50px; background-color: grey; transform: rotate(${minuteAngle}deg);"></div>
           <div class="hand" style="height: 65px; background-color: red; transform: rotate(${secondAngle}deg);"></div>
       `;
   
       // Update the digital time
       document.getElementById(timeId).textContent = localTime.toLocaleTimeString();
   }
   
   // Start the clocks and update every second
   setInterval(startClock, 1000);
   