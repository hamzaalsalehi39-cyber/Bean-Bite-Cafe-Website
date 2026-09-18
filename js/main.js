function showToast(message, type = "success") {
    if (window.Toastify) {
        var backgrounds = {
            success: "linear-gradient(135deg, #6f4e37, #8b5e3c)",
            error: "linear-gradient(135deg, #8b2f2f, #b84a4a)",
            info: "linear-gradient(135deg, #5c6f7b, #78909c)",
            warning: "linear-gradient(135deg, #9a6a22, #c28a32)"
        };

        Toastify({
            text: message,
            duration: 3500,
            gravity: "top",
            position: "right",
            close: true,
            stopOnFocus: true,
            style: {
                background: backgrounds[type] || backgrounds.success
            }
        }).showToast();
    }
}

function loadOfferModal() {
    $.ajax({
        url: "html/modal-offer.html",
        method: "GET",
        dataType: "html",
        success: function (data) {
            $("#offerModalContent").html(data);
            const modalElement = document.getElementById("offerModal");
            bootstrap.Modal.getOrCreateInstance(modalElement).show();
        },
        error: function () {
            showToast("تعذر تحميل تفاصيل العرض", "error");
        }
    });
}

function loadMenuModal() {
    $.ajax({
        url: "html/modal-menu.html",
        method: "GET",
        dataType: "html",
        success: function (data) {
            $("#menuModalContent").html(data);
            const modalElement = document.getElementById("menuModal");
            bootstrap.Modal.getOrCreateInstance(modalElement).show();
        },
        error: function () {
            showToast("تعذر تحميل المعلومات", "error");
        }
    });
}

