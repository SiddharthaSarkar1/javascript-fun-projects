// Useing Jquery to fetch data from API

$(document).ready(function () {
  $("button").click(function () {
    const name = $("#nameid").val();

    $(".imgchange").attr(
      "src",
      `https://api.dicebear.com/8.x/avataaars/svg?seed=${name}`
    );
  });
});
