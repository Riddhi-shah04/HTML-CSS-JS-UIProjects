const accordionTitles = document.querySelectorAll('.faq-title');

accordionTitles.forEach(title => {
  title.addEventListener('click', function () {
    const faqBox = this.parentElement.querySelector('.faq-content');
    const plusIcon = this.querySelector('.icon-plus');
    const plus1Icon = this.querySelector('.icon-plus1');

    // Close all other open faq-box elements
    document.querySelectorAll('.faq-content').forEach(box => {
      const parentBox = box.parentElement;
      if (box !== faqBox && parentBox.classList.contains('open')) {
        parentBox.classList.remove('open');
        parentBox.querySelector('.icon-plus').style.display = 'block';
        parentBox.querySelector('.icon-plus1').style.display = 'none';
      }
    });

    // Toggle the current faq-box
    const isOpen = this.parentElement.classList.toggle('open');

    // Toggle the plus icons
    if (isOpen) {
      plusIcon.style.display = 'none';
      plus1Icon.style.display = 'block';
    } else {
      plusIcon.style.display = 'block';
      plus1Icon.style.display = 'none';
    }

    // Handle sub-FAQs
    const subFaqBoxes = faqBox.querySelectorAll('.sub-faq-box');
    subFaqBoxes.forEach(subBox => {
      const subTitle = subBox.querySelector('.sub-faq-title');
      subTitle.addEventListener('click', function () {
        const subContent = subBox.querySelector('.sub-faq-content');
        const subPlusIcon = subTitle.querySelector('.icon-plus');
        const subPlus1Icon = subTitle.querySelector('.icon-plus1');
        
        // Close all other open sub-faq-box elements
        subFaqBoxes.forEach(otherSubBox => {
          if (otherSubBox !== subBox && otherSubBox.classList.contains('open')) {
            otherSubBox.classList.remove('open');
            otherSubBox.querySelector('.icon-plus').style.display = 'block';
            otherSubBox.querySelector('.icon-plus1').style.display = 'none';
          }
        });

        // Toggle the sub-faq-content
        const isSubOpen = subBox.classList.toggle('open');
        
        // Toggle the plus icons for sub-FAQs
        if (isSubOpen) {
          subPlusIcon.style.display = 'none';
          subPlus1Icon.style.display = 'block';
        } else {
          subPlusIcon.style.display = 'block';
          subPlus1Icon.style.display = 'none';
        }
      });
    });
  });
});

// const accordionBoxes = document.querySelectorAll('.faq-box');

// accordionBoxes.forEach((accordionBox) => {
//   const accordionTitle = accordionBox.querySelectorAll('.faq-title');
//   const accordionContent = accordionBox.querySelector('.faq-content');
//   const plusIcon = accordionBox.querySelector(".icon-plus");
//   const minusIcon = accordionBox.querySelector(".icon-plus1");

//   accordionContent.style.maxHeight = 0;

//   accordionTitle.addEventListener("click", function (event) {
//     event.stopPropagation(); // Prevent the click event from reaching nested accordions

//     const isActive = accordionBox.classList.contains("bg-color-grey");

//     closeAllAccordions(event); // Close all accordions before opening/closing

//     if (!isActive) {
//       accordionContent.style.maxHeight = accordionContent.scrollHeight + 100 + "px";
//       accordionBox.classList.add("bg-color-grey");
//       plusIcon.style.display = "none";
//       minusIcon.style.display = "block";
//     } else {
//       accordionContent.style.maxHeight = "0px";
//       accordionBox.classList.remove("bg-color-grey");
//       plusIcon.style.display = "block";
//       minusIcon.style.display = "none";
//     }
//   });
// });

// function closeAllAccordions(event) {
//   accordionBoxes.forEach((item) => {
//     const itemButton = item.querySelector(".faq-title");
//     const itemContent = item.querySelector(".faq-content");
//     const itemPlusIcon = itemButton.querySelector(".plus");
//     const itemMinusIcon = itemButton.querySelector(".minus");
//     if (event.target.closest(".faq-box").id != item.id && !checkIsParentNode(event, item)) {
//       itemContent.style.maxHeight = "0px";
//       item.classList.remove("bg-color-grey");
//       itemPlusIcon.style.display = "block";
//       itemMinusIcon.style.display = "none";
//     }
//   });
// }

// function checkIsParentNode(event, item) {
//   try {
//     let parentNode = event.target.closest(".faq-box").parentElement.closest(".faq-box");
//     if (parentNode && parentNode.id == item.id) {
//       return true;
//     }
//     return false;
//   } catch (error) {
//     return false;
//   }
// }