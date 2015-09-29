$(document).ready(function () {
  $(this).on('mousemove', function (e) {
    var r = Math.floor(255 * (e.screenX / screen.width))
    var g = Math.floor(255 * (e.screenY / screen.height))
    var b = Math.floor(255 * (e.screenY / screen.height))
    $(".landing-page").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")")
  })
})
