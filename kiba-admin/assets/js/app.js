function asideDropDownToggler() {
  try {
    $("details").on("click", function () {
      $("details").not(this).removeAttr("open");
    });
  } catch (error) {}
}

function showTrafficOnMap() {
  try {
    var map = L.map("map").setView([20.5937, 78.9629], 4);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    var visitLocations = [
      { lat: 28.7041, lng: 77.1025, count: 150 }, // Delhi
      { lat: 19.076, lng: 72.8777, count: 120 }, // Mumbai
      { lat: 13.0827, lng: 80.2707, count: 90 }, // Chennai
      { lat: 22.5726, lng: 88.3639, count: 85 }, // Kolkata
      { lat: 12.9716, lng: 77.5946, count: 200 }, // Bangalore
    ];

    function addMarkers(data) {
      $.each(data, function (index, location) {
        var marker = L.circleMarker([location.lat, location.lng], {
          radius: Math.min(location.count / 10, 15), // Marker size based on visit count
          color: "red",
          fillColor: "red",
          fillOpacity: 0.5,
        }).addTo(map);

        marker.bindPopup(`<b>Visitors:</b> ${location.count}`).openPopup();
      });
    }
    addMarkers(visitLocations);
  } catch (error) {}
}

function editMetaInformation() {
  try {
    $(".upload-btn").click(function () {
      let inputId = $(this).data("input");
      $("#" + inputId).click();
    });

    $("#faviconUpload").change(function () {
      let file = this.files[0];
      if (file) {
        $("#faviconPreview").attr("src", URL.createObjectURL(file));
      }
    });

    $("#logoUpload").change(function () {
      let file = this.files[0];
      if (file) {
        $("#logoPreview").attr("src", URL.createObjectURL(file));
      }
    });
  } catch (error) {}
}

function showCollectionImagePreview() {
  try {
    $("#previewInput").on("change", function (event) {
      console.log(event);
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#previewImage").attr("src", e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    });
  } catch (error) {
    console.log(error);
  }
}

function displayProductIdPreview() {
  try {
    $("#prefix, #uniqueDigits").on("input", function () {
      let prefix = $("#prefix").val().toUpperCase().trim();
      let uniqueDigits = $("#uniqueDigits").val().trim();
      let previewText =
        prefix && uniqueDigits ? prefix + "-" + uniqueDigits : "PT-XXXXX";
      $("#productIDPreview").text(previewText);
    });
  } catch (error) {}
}

function previewAdminProfilePicture() {
  try {
    $("#profilePicture").on("change", function (event) {
      let file = event.target.files[0];
      if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $("#profilePreview").attr("src", e.target.result);
        };
        reader.readAsDataURL(file);
      }
    });
  } catch (error) {}
}
function init() {
  asideDropDownToggler();
  showTrafficOnMap();
  editMetaInformation();
  showCollectionImagePreview();
  displayProductIdPreview();
  previewAdminProfilePicture();
}

$("document").ready(function () {
  init();
});
