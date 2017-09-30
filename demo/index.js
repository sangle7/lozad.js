// Toastr resources for Notifications
import 'toastr/build/toastr.min.css'
import toastr from 'toastr/build/toastr.min.js'

import lozad from '../src/lozad'

toastr.options = {
  "progressBar": true,
  "timeOut": "1500"
}
// Initialize library to lazy load images
var observer = lozad('.lozad', {
  threshold: 0.1,
  load: function (el) {
    el.src = el.dataset.src;
    el.onload = function () {
      el.style.width = "100%";
      toastr["success"]("Image " + el.dataset.index + " lazy loaded.")
    }
  }
})

observer.observe()