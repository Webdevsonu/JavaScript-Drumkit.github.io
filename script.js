//Key A audio
  window.addEventListener('keydown', function(e){
    // if statement to check if pressed key is valid
    if (e.key==='a'){
      // Get key element from html page
    let keypress = document.getElementById("keyA");
    // Add border color when key is pressed
     keypress.classList.add("playing")
     // Add 2 miliseconds delay to switch border color
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
        // Get audio element and play when key is pressed with 0 seconds delay
    let audio = document.getElementById('65');
    audio.play();
    audio.currentTime = 0;
    // if no audio plays then stops the function
    if (!audio) return}
  })

  // Key S audio
  window.addEventListener('keydown', function(e){
    if (e.key==='s'){
      let keypress = document.getElementById("keyS");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('83');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
  // Key D audio
  window.addEventListener('keydown', function(e){
    if (e.key==='d'){
      let keypress = document.getElementById("keyD");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('68');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
  // Key F audio
  window.addEventListener('keydown', function(e){
    if (e.key==='f'){
      let keypress = document.getElementById("keyF");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('70');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
  // Key G audio
  window.addEventListener('keydown', function(e){
    if (e.key==='g'){
      let keypress = document.getElementById("keyG");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('71');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
  // Key H audio
  window.addEventListener('keydown', function(e){
    if (e.key==='h'){
      let keypress = document.getElementById("keyH");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('72');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
  // Key J audio
  window.addEventListener('keydown', function(e){
    if (e.key==='j'){
      let keypress = document.getElementById("keyJ");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('74');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
  // Key K audio
  window.addEventListener('keydown', function(e){
    if (e.key==='k'){
      let keypress = document.getElementById("keyK");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('75');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
  // Key L audio
  window.addEventListener('keydown', function(e){
    if (e.key==='l'){
      let keypress = document.getElementById("keyL");
     keypress.classList.add("playing")
     setTimeout(() => {
          keypress.classList.remove('playing');
        }, 200);
    let audio = document.getElementById('76');
    audio.play();
    audio.currentTime = 0;
    if (!audio) return}
  })
