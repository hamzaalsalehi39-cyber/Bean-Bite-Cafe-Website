$(document).ready(function () {

    // Live validation for the registration form.
    // Shows the green check or red X while the user is typing,
    // without waiting for the "Create Account" button.
    const registerFields = [
        "#fullName",
        "#registerEmail",
        "#phone",
        "#registerPassword"
    ];

    function updateFieldState(selector) {
        const field = $(selector)[0];
        if (!field) return;

        const value = $(field).val().trim();

        // Do not show an error on an untouched/empty field.
        if (value === "") {
            $(field).removeClass("is-valid is-invalid");
            return;
        }

        if (field.checkValidity()) {
            $(field).removeClass("is-invalid").addClass("is-valid");
        } else {
            $(field).removeClass("is-valid").addClass("is-invalid");
        }
    }

    registerFields.forEach(function (selector) {
        $(selector).on("input blur", function () {
            updateFieldState(selector);

            // Re-check password confirmation whenever the password changes.
            if (selector === "#registerPassword") {
                updateConfirmPasswordState();
            }
        });
    });

    function updateConfirmPasswordState() {
        const field = $("#confirmPassword")[0];
        const password = $("#registerPassword").val();
        const confirmPassword = $("#confirmPassword").val();

        if (!field || confirmPassword === "") {
            if (field) $(field).removeClass("is-valid is-invalid");
            return;
        }

        if (password !== "" && password === confirmPassword) {
            $(field).removeClass("is-invalid").addClass("is-valid");
        } else {
            $(field).removeClass("is-valid").addClass("is-invalid");
        }
    }

    $("#confirmPassword").on("input blur", updateConfirmPasswordState);

    // Live validation for the required terms checkbox.
    $("#terms").on("change", function () {
        if (this.checked) {
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else {
            $(this).removeClass("is-valid is-invalid");
        }
    });


    $("#registerForm").on("submit", function (event) {
        event.preventDefault();

        const form = this;
        const password = $("#registerPassword").val();
        const confirmPassword = $("#confirmPassword").val();

        // Update all visual validation states before checking the form.
        registerFields.forEach(updateFieldState);
        updateConfirmPasswordState();

        if (!form.checkValidity()) {
            event.stopPropagation();
            $(form).addClass("was-validated");

            showToast("يرجى تصحيح البيانات المطلوبة", "error");
            return;
        }

        if (password !== confirmPassword) {
            $("#confirmPassword")
                .removeClass("is-valid")
                .addClass("is-invalid");

            showToast("كلمتا المرور غير متطابقتين", "error");
            return;
        }

        $("#confirmPassword")
            .removeClass("is-invalid")
            .addClass("is-valid");

        showToast("تم إنشاء حسابك بنجاح", "success");

        form.reset();
        $(form).removeClass("was-validated");
        $(form).find(".is-valid, .is-invalid").removeClass("is-valid is-invalid");
    });


    $("#loginForm").on("submit", function (event) {
        event.preventDefault();

        const form = this;

        if (!form.checkValidity()) {
            event.stopPropagation();
            $(form).addClass("was-validated");

            showToast("يرجى إدخال بيانات الدخول", "error");
            return;
        }

        showToast("تم تسجيل الدخول بنجاح", "success");

        form.reset();
        $(form).removeClass("was-validated");
    });


    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        const form = this;

        if (!form.checkValidity()) {
            event.stopPropagation();
            $(form).addClass("was-validated");

            showToast("يرجى تعبئة البيانات بشكل صحيح", "error");
            return;
        }

        showToast("تم إرسال رسالتك بنجاح", "success");

        form.reset();
        $(form).removeClass("was-validated");
    });

});
