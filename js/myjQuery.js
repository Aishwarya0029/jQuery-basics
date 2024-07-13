$(document).ready(function () {
  console.log("i am in new file");

  // console.log("we are using jQuery");
  // // $('p').click();//1. class selector
  // $("p").click(function () {
  //   console.log("you clicked on p", this);
  // });
  //   $("p").dblclick(function () {
  //     console.log("you doubleclicked on p", this);
  //   // $(this).hide();
  // });
  // $("p").mouseenter(function () {
  //   console.log("you entered:", this);
  // });
  // 2.id selector
  //   $("#second").click();
  //    3.class selector
  //     $(".odd").click();
  //     // other selector
  //     $('*').click();
  //     $('p.odd').click();
  //     $('p:first').click();
  //   Events in jQuery
  //   Mouse Events
  //   Keyboard Events
  //   Form Events
  //   document/window Events
  // Demoing on Method
  $("p").on({
    click: function () {
      console.log("thanks for clicking", this);
    },

    mouseleave: function () {
      console.log("mouseleave");
    },
  });
  //slide methods
  // $("#wiki").hide(1000, function () {
  //   console.log("hidden");
  // });
  // $("#wiki").show(1000, function () {
  //   console.log("show");
  // });
  // $("#but").click(function () {
  //   $("#wiki").toggle(1000)
  // });
  // $("#but").click(function () {
  //   $("#wiki").fadeOut(3000);
  // });
  // $("#wiki").slideDown(3000, function(){
  //   console.log('done');
  // })
  // $("#wiki").slideUp(3000)
  // $("#wiki").slideToggle(3000)
  //Animate function in jquery
  // $('#wiki').animate({
  //   opacity:0.3,
  //   height:'150px',
  //   width:'350px'
  // },2000)
  //   $('#wiki').animate({opacity:0.3},4000);
  //   $('#wiki').animate({opacity:0.9},1000);
  //   $('#wiki').animate({width:'350px'},12000);
  //   $('#wiki').empty()

  // $('#wiki').text('you are good')
  // $('#wiki').remove()
  // $('#wiki').addClass('my class')
  // $('#wiki').addClass('my class')
  // $('#wiki').addClass('my class2')
  // $('#wiki').css'background-color','red')
  // $('#wiki').css('background-color','red')
//   $.get('https://code.jquery.com/jquery-3.7.1.js', function(data,status){alert(data);})

// $.get('https://code.jquery.com/jquery-3.7.1.js', function(data,status){alert(status);})

// $.post('https://code.jquery.com/jquery-3.7.1.js',
//   {name:'Aish' , channel:'code with Aish'},
//   function(data,status){alert(status)});
});
