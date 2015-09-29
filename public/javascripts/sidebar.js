$(document).ready(function () {
  $('.projects').click(function () {
    $(this).children().slideToggle()
  })
  $(this).on('mousemove', function (e) {
    var r = Math.floor(255 * (e.screenX / screen.width))
    var g = Math.floor(255 * (e.screenY / screen.height))
    var b = Math.floor(255 * (e.screenX / screen.width))
    var c = Math.floor(255 * (e.screenY / screen.height))
    console.log(r, g, b);
    $(this.body).css("color", "rgb(" + r + ", " + g + ", " + b + ")")
    $("a").css("color", "rgb(" + r + ", " + g + ", " + c + ")")
    $(".sidebar").css("color", "rgb(" + r + ", " + g + ", " + c + ")")
  })
})
