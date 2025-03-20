const register_input1 = document.querySelector(".register_input1");
const register_input2 = document.querySelector(".register_input2");
const inputBox_one = document.querySelector(".input_box_one");
const inputBox_two = document.querySelector(".input_box_two");
const register_btn = document.querySelector(".register_btn");
const push_data_one = document.querySelector(".push_data_one");
const push_data_two = document.querySelector(".push_data_two");
const register_error = document.querySelector(".register_error");
const error_one = document.querySelector(".error_msg_one");
const error_two = document.querySelector(".error_msg_two");
const data_from_registration1 = document.querySelector(
  ".data_from_registration1"
);
const data_from_registration2 = document.querySelector(
  ".data_from_registration2"
);
const data_from_registration3 = document.querySelector(
  ".data_from_registration3"
);
const data_from_registration4 = document.querySelector(
  ".data_from_registration4"
);
const box_zero = document.querySelector("#register");
const box_one = document.querySelector("#box_one");
box_one.style.display = "none";
const box_two = document.querySelector("#box_two");
box_two.style.display = "none";
const result_box = document.querySelector("#result_box");
result_box.style.display = "none";
const result = document.querySelector(".result");
const attempt_msg = document.querySelector(".attempt_msg");

// registration btn function starts here
register_btn.addEventListener("click", function () {
  if (register_input1.value == "" || register_input2.value == "") {
    register_error.innerHTML = "Name Missing !";
  } else if (
    register_input1.value >= 0 ||
    register_input1.value <= 0 ||
    register_input2.value >= 0 ||
    register_input2.value <= 0
  ) {
    register_error.innerHTML = "invalid name !";
  } else {
    register_error.style.display = "none";
    box_zero.style.display = "none";
    box_one.style.display = "block";
    data_from_registration1.innerHTML = `First Player : ${register_input1.value}`;
    data_from_registration2.innerHTML = `Second Player : ${register_input2.value}`;
    inputBox_one.placeholder = ` set the number, ${register_input1.value}!`;
  }
});
// registration btn function ends here

// set number btn function starts here
push_data_one.addEventListener("click", function () {
  if (inputBox_one.value == "") {
    error_one.innerHTML = "Number Missing !";
  } else if (inputBox_one.value > 12 || inputBox_one.value < 1) {
    error_one.innerHTML = "choose a number between 1 - 12";
  } else {
    error_one.innerHTML = "";
    box_one.style.display = "none";
    box_two.style.display = "block";
    data_from_registration3.innerHTML = `First Player : ${register_input1.value}`;
    data_from_registration4.innerHTML = `Second Player : ${register_input2.value}`;
    inputBox_two.placeholder = `guess the number, ${register_input2.value}!`;
  }
});
// set number btn function ends here

// guess number btn function starts here
let attempts = 3;
push_data_two.addEventListener("click", function () {
  if (inputBox_two.value == "") {
    error_two.innerHTML = "guess a number!";
  } else if (inputBox_two.value > 12 || inputBox_two.value < 1) {
    error_two.innerHTML = "guess a number between 1 - 12";
  } else {
    error_two.innerHTML = "";
    if (inputBox_one.value == inputBox_two.value) {
      result.innerHTML = `Congratulations, ${register_input2.value}! 🚀`;
      box_two.style.display = "none";
      result_box.style.display = "block";
    } else if (attempts <= 3 && attempts >= 2 || inputBox_one.value > 12 || inputBox_one.value < 1) {
      attempts--;
      attempt_msg.innerHTML = `${attempts} attempts left !`;
    } else {
      if (attempts == 1) {
        box_two.style.display = "none";
        result_box.style.display = "block";
        result.innerHTML = `Congratulations, ${register_input1.value}! 🚀`;
      }
    }
  }
});
// guess number btn function ends here

// result and play again btn function starts here
result_box.addEventListener("click", function () {
  box_zero.style.display = "block";
  result_box.style.display = "none";
  register_input1.value = "";
  register_input2.value = "";
  inputBox_one.value = "";
  inputBox_two.value = "";
  location.reload();
});
// result and play again btn function ends here
