button = undefined
const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
  console.log("button clicked");
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `
    <form action="" method="post">
    <div class="form">
    <h4>${fileName}</h4>
    <button class="btn">Upload</button>
    </div>
    </form>`;
  dropArea.innerHTML = filedata;
});

// Create a function that evauluate if the file is jpg, jpeg o png
function isImage(filename) {
    var ext = filename.split(".").pop();
    switch (ext) {
        case "jpg":
        case "jpeg":
        case "png":
        //etc
        return true;
    }
    return false;
    }
