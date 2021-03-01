// Khi cuon chuot xuong 1 ti thi them class vao thanh header
$(document).ready(function () {
    if ($(this).scrollTop() > 0) $(".header").addClass("this--active");
    else $(".header").removeClass("this--active");
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 0) $(".header").addClass("this--active");
        else $(".header").removeClass("this--active");
    });
});

// Khi click vao cac muc khac tren thanh header thi xoa class this--active
// va them this--active vao muc vao click vao
// Vi da co script khi luot toi thi no tu add class nen cai nay co ve
// nhu la khong can thiet nua
// $(".header__nav-item").click(function () {
//     $(".header__nav-item").removeClass("this--active");
//     $(this).addClass("this--active");
// });
//Thay doi border-radius cua thanh cuon neu dang o dau trang hay cuoi trang
$(document).ready(function () {
    if ($(window).scrollTop() == 0) {
        $("body").addClass("atTopOfThisWeb");
    }
});
$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() == 0) {
            $("body").addClass("atTopOfThisWeb");
        }

        if ($(window).scrollTop() > 0 && $(window).scrollTop() + $(window).height() < $(document).height()) {
            $("body").removeClass("atTopOfThisWeb");
        }

        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("body").addClass("atBotOfThisWeb");
        } else $("body").removeClass("atBotOfThisWeb");
    });
});

// Tu dong them va xoa this--active khi luot den noi dung cua tieu de do
// Sử dụng $ lồng nhau kiểu
// $(".header__nav-item a[href*='Home']")
// Thì có nghĩa là tìm tất cả class tên header__nav-item mà có con là a và a phải có href chứa Home
// Vì href*= nên chỉ cần chứa cụm Home là ăn, không cần ghi rõ *='#Home'
// Và thêm .parent() phía sau để nó biết addClass vào thằng ghi đầu tiên trong $, nếu không thì nó addClass vào thằng a có href...
// Mau truoc khi chinh sua
// if ($(this).scrollTop() >= $("#Home").position().top && $(this).scrollTop() <= $("#Home").position().top + $("#Home").height()) {
// $(".header__nav-item").removeClass("this--active");
// $(".header__nav-item a[href*='Home']").parent().addClass("this--active");
// }
$(document).ready(function () {
    if ($(document).scrollTop() >= $("#Home").position().top && $(document).scrollTop() <= $("#Home").position().top + $("#Home").height() - 1) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Home']").parent().addClass("this--active");
    } else if (
        $(this).scrollTop() >= $("#About").position().top - 1 &&
        $(this).scrollTop() <= $("#About").position().top + $("#About").height() - 1
    ) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='About']").parent().addClass("this--active");
    } else if (
        $(this).scrollTop() >= $("#Product").position().top - 1 &&
        $(this).scrollTop() <= $("#Product").position().top + $("#Product").height() - 1
    ) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Product']").parent().addClass("this--active");
    } else if (
        $(this).scrollTop() >= $("#InCome").position().top - 1 &&
        $(this).scrollTop() <= $("#InCome").position().top + $("#InCome").height() - 1
    ) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='InCome']").parent().addClass("this--active");
    } else if ($(this).scrollTop() >= $("#Road").position().top - 1 && $(this).scrollTop() <= $("#Road").position().top + $("#Road").height() - 1) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Road']").parent().addClass("this--active");
    } else if (
        $(this).scrollTop() >= $("#Download").position().top - 1 &&
        $(this).scrollTop() <= $("#Download").position().top + $("#Download").height() - 1
    ) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Download']").parent().addClass("this--active");
    } else if ($(this).scrollTop() >= $("#FAQ").position().top - 1 && $(this).scrollTop() <= $("#FAQ").position().top + $("#FAQ").height() - 1) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='FAQ']").parent().addClass("this--active");
    } else if (
        $(this).scrollTop() >= $("#Contact").position().top - 1 &&
        $(this).scrollTop() <= $("#Contact").position().top + $("#Contact").height() - 1
    ) {
        $(".header__nav-item").removeClass("this--active");
        $(".header__nav-item a[href*='Contact']").parent().addClass("this--active");
    }
    $(document).on("scroll", function () {
        if ($(this).scrollTop() >= $("#Home").position().top && $(this).scrollTop() <= $("#Home").position().top + $("#Home").height() - 1) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='Home']").parent().addClass("this--active");
        }

        if ($(this).scrollTop() >= $("#About").position().top - 1 && $(this).scrollTop() <= $("#About").position().top + $("#About").height() - 1) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='About']").parent().addClass("this--active");
        }

        if (
            $(this).scrollTop() >= $("#Product").position().top - 1 &&
            $(this).scrollTop() <= $("#Product").position().top + $("#Product").height() - 1
        ) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='Product']").parent().addClass("this--active");
        }

        if (
            $(this).scrollTop() >= $("#InCome").position().top - 1 &&
            $(this).scrollTop() <= $("#InCome").position().top + $("#InCome").height() - 1
        ) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='InCome']").parent().addClass("this--active");
        }

        if ($(this).scrollTop() >= $("#Road").position().top - 1 && $(this).scrollTop() <= $("#Road").position().top + $("#Road").height() - 1) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='Road']").parent().addClass("this--active");
        }

        if (
            $(this).scrollTop() >= $("#Download").position().top - 1 &&
            $(this).scrollTop() <= $("#Download").position().top + $("#Download").height() - 1
        ) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='Download']").parent().addClass("this--active");
        }

        if ($(this).scrollTop() >= $("#FAQ").position().top - 1 && $(this).scrollTop() <= $("#FAQ").position().top + $("#FAQ").height() - 1) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='FAQ']").parent().addClass("this--active");
        }

        if (
            $(this).scrollTop() >= $("#Contact").position().top - 1 &&
            $(this).scrollTop() <= $("#Contact").position().top + $("#Contact").height() - 1
        ) {
            $(".header__nav-item").removeClass("this--active");
            $(".header__nav-item a[href*='Contact']").parent().addClass("this--active");
        }
    });
});

// Page loader neeeee
$(document).ready(function () {
    setTimeout(function () {
        $("#modal").removeClass("this--active");
        $("#modal *").removeClass("this--active");
    }, 1000);
});

var typed5 = new Typed("#aaaaa", {
    strings: ["Nhãn hàng thời trang với quy mô toàn quốc"],
    typeSpeed: 20,
    cursorChar: "",
    loop: false,
});
