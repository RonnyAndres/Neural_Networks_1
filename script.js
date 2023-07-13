const dropArea2 = document.querySelector(".drop_box");
const button = dropArea2.querySelector(".btn");
const dragText = dropArea2.querySelector("header");
const input = dropArea2.querySelector("input");

let file;
var filename;

button.onclick = () => {
    input.click();
    console.log("button clicked");
};

input.addEventListener("change", function (e) {
    var file = e.target.files[0];
    var fileName = file.name;
    console.log(file.size);


    
    if (isImage(fileName)) {
        // Evalar el tamaño de los pixeles de la imagen, tieen que ser de 28x28 pixeles

        let fileReader = new FileReader();
        fileReader.onload = function () {
            var filedata = `
                <form action="" method="post">
                <div class="form" >
                <h4>${fileName}</h4>
                <img src="${fileReader.result}" alt="Uploaded Image" />
                <button class="btn">Process</button>
                </div>
                </form>`;   
            dropArea2.innerHTML = filedata;

        };
        
        

        fileReader.readAsDataURL(file);
    }else{
        alert("Please upload an image of 28x28 pixels");
    }
        
});

// Create a function that evaluates if the file is jpg, jpeg or png
function isImage(filename) {
    var ext = filename.split(".").pop();
    switch (ext) {
        case "jpg":
        case "jpeg":
        case "png":
            return true;
    }
    return false;
}
