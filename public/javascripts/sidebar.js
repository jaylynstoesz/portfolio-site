$(document).ready(function () {
  $('.projects').click(function () {
    $(this).children().slideToggle()
  })

  $(this).on('mousemove', function (e) {
    var r = Math.floor(255 * (e.screenX / screen.width))
    var g = Math.floor(255 * (e.screenY / screen.height))
    var b = Math.floor(255 * (e.screenY / screen.height))
    $("a").css("color", "rgb(" + r + ", " + g + ", " + b + ")")
    $(".gallery-cell").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")")
    $(".sidebar").css("color", "rgb(" + r + ", " + g + ", " + b + ")")
    $(".header").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")")
  })
})
