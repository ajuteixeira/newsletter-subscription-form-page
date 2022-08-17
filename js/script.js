function phoneMask(event) {
  let key = event.key;
  let phone = event.target.value.replace(/\D+/g, "");

  if (/^[0-9]$/i.test(key)) {
    phone = phone + key;
    let length = phone.length;

    if (length >= 12) {
      return false;
    }

    if (length > 10) {
      phone = phone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (length > 5) {
      phone = phone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (length > 2) {
      phone = phone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
      phone = phone.replace(/^(\d*)/, "($1");
    }

    event.target.value = phone;
  }

  if (!["Backspace", "Delete", "ArrowLeft", "ArrowRight",].includes(key)) {
    return false;
  }
}
