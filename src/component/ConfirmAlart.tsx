import Swal from "sweetalert2";
const ConfirmAlart = () => {
  return new Promise((resolve) => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(true); // User confirmed
      } else {
        resolve(false); // User cancelled
      }
    });
  });
};

// Example usage:
ConfirmAlart();

export default ConfirmAlart;
