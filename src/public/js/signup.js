console.log("Signup frontend javascript file");

$(function () {
    const fileTarget = $(".file-box .upload-hidden");
    let filename;

    fileTarget.on("change", function () {
        if (window.FileReader) {
            const uploadFile = $(this)[0].files[0];

            console.log("UploadFile:", uploadFile);

            if (!uploadFile) return;

            const fileType = uploadFile.type;
            const validImageType = ["image/jpeg", "image/png"];

            if (!validImageType.includes(fileType)) {
                alert("Please insert only JPG, JPEG or PNG image.");
                return;
            }

            $(".upload-img-frame")
                .attr("src", URL.createObjectURL(uploadFile))
                .addClass("success");

            filename = uploadFile.name;

            $(this).siblings(".upload-name").val(filename);
        }
    });
});

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();

    if (
        memberNick === "" ||
        memberPhone === "" ||
        memberPassword === "" ||
        confirmPassword === ""
    ) {
        alert("Please insert all required inputs.");
        return false;
    }

    if (memberPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    const memberImage = $(".member-image").get(0).files[0]
        ? $(".member-image").get(0).files[0].name
        : null;

    if (!memberImage) {
        alert("Please insert restaurant image!");
        return false;
    }

    return true;
}