$(document).on("click", "#sendmessage", function (e) {
  e.preventDefault();
  let sender_email = $("#sender_email").val();
  let sender_name = $("#sender_name").val();
  let sender_msg = $("#sender_msg").val();
  Swal.fire({
    title: "Sending Email",
    text: "Please wait...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  $.ajax({
    type: "GET",
    url: "https://khenspersonal.projectworld.online/public/controller/sendmessage.php",
    data: {
      name: sender_name,
      email: sender_email,
      message: sender_msg,
    },
    success: function (response) {
      console.log(response);
      Swal.close();
      Swal.fire("Success", "Email sent successfully", "success");
    },
    error: function (xhr, status, error) {
      Swal.close();
      Swal.fire(
        "Error",
        "Failed to send email. Please try again later.",
        "error"
      );
    },
  });
});
