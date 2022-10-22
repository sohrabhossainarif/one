// ===auto type ====

var typed = new Typed(".auto_type", {

  strings:["Designer", "Developer"],
  typeSpeed:150,
  backSpeed: 150,
  loop:true
})
// === =====
var typed = new Typed(".auto_type2", {

  strings:["Designer","Developer", "Freelancer"],
  typeSpeed:70,
  backSpeed: 70,
  loop:true
})
// === ====
// ==== ===
new VenoBox({
  selector: ".my-link"
});

$('#jq').LineProgressbar({
  percentage:90,
  radius: '3px',
  height: '20px',
  });
  $('#html').LineProgressbar({
  percentage:80,
  radius: '3px',
  height: '20px',
  fillBackgroundColor: '#DA4453',

  });
  $('#css').LineProgressbar({
  percentage:70,
  radius: '3px',
  height: '20px',
  fillBackgroundColor: '#E0C341'
  });
  // === ===
  var mixer = mixitup('.mix_main');
  // ====



  // ===backtop ===
$(window).scroll(function(){
  var scrolling =$(this).scrollTop();
    if(scrolling > 30){
      $(".backtop i").fadeIn(500)
    }else{
      $(".backtop i").fadeOut(500)
    }
   
    if(scrolling > 50){
      $(".menu_bar").addClass("bg")
    }else{
      $(".menu_bar").removeClass("bg")(1000)
    }
  
})


  $(".backtop i").click(function(){
    $("html, body").animate({
      scrollTop:0
    },1000)
  })
  // ===backtop end ===

// ====contact form ===

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx2F-zRLYaQwC3j_-gd4iphf2DeudTJ55n8bknuMqX_NcCspjXOju2kD88B9xtF9Xfb-A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })