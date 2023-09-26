// calendar 
const dateElem = document.getElementById("inline");
const datepicker = new Datepicker(dateElem, {
    buttonClass: "btn",
    nextArrow: '',
    prevArrow: '',
  });

  const customCheckbox = document.querySelectorAll('.checkbox-btn');

  customCheckbox.forEach(checkradio => {
    checkradio.addEventListener('change', function() {
      if (this.checked) {
        customCheckbox.forEach(otherCheckbox => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });


// time-slot checkbox behaviour converted to radio
const slotOption = document.querySelectorAll('.slot-btn');

slotOption.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      slotOption.forEach(otherCheckbox => {
        if (otherCheckbox !== this) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// on selection of chechbox radio button background change
const timeSlotBoxes = document.querySelectorAll('.time-checkbox');

timeSlotBoxes.forEach((timeSlotBox) => {
	timeSlotBox.addEventListener("click", () => {
		timeSlotBoxes.forEach((box) => {
			box.classList.remove("slot-active");
			const checkbox = box.querySelector('input[type="checkbox"]');
			if (checkbox) {
				checkbox.checked = false;
			}
		});

		timeSlotBox.classList.add("slot-active");
		const checkbox = timeSlotBox.querySelector('input[type="checkbox"]');
		if (checkbox) {
			checkbox.checked = true;
		}
	});
});


//(Time slot selection code)

const paymentButton = document.getElementById("btn-payment");

paymentButton.addEventListener("click", () => {
    // Find the selected date and time
    const selectedTimeElement = document.querySelector(".time-checkbox.slot-active span");
	const selectedDateElement = datepicker.getDate();
    
    if (selectedDateElement && selectedTimeElement) {
		const selectedTime = selectedTimeElement.textContent;
		
        // Display an alert box with the selected date and time
        alert('Selected Date: ' + selectedDateElement.toLocaleDateString() + "\n Selected Time Slot: " + selectedTime);
    } else {
        alert("Please select a date and time slot before proceeding to payment.");
    }
});
