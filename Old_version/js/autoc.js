
$('li.finish a').click(function () {
    $('.pager.wizard').hide();
    // toastr.options = {
    //     closeButton: true,
    //     progressBar: true,
    //     showMethod: 'fadeIn',
    //     hideMethod: 'fadeOut',
    //     timeOut: 10000,
    //     rtl: true
    // };
    // toastr.success('تم حفظ المعلومات');
    iziToast.show({
        id: null,
        class: '',
        title: 'تم إرسال الطلب',
        titleColor: '',
        titleSize: '20',
        titleLineHeight: '',
        message: '',
        messageColor: '',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: '',
        theme: 'light', // dark
        color: 'green', // blue, red, green, yellow
        icon: 'fa fa-check',
        iconText: '',
        iconColor: '',
        iconUrl: null,
        image: '',
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0, // once, replace
        position: 'center', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        target: '',
        targetFirst: true,
        timeout: 2500,
        rtl: true,
        animateInside: true,
        drag: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: true,
        progressBarColor: '',
        progressBarEasing: 'linear',
        overlay: false,
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function () { },
        onOpened: function () { },
        onClosing: function () { },
        onClosed: function () { }
    });
    setTimeout(function () {
        location.reload();
    }, 3000);
});

/*on select change*/
$('#mubadarSelect').change(function () {

    $('.DespText').slideDown();
    setTimeout(function () {
        $('.GoalsList').slideDown();
    }, 1000);
});

$('.GoalsList li, .MangList li').click(function () {

    //$('body').css({'cursor' : 'wait'});
    $(this).toggleClass('activeSelected');
    $(this).append("<i class='fa fa-times UlClose'></i>");


});



// <select id="select-to"></select>

var REGEX_EMAIL = '([a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@' +
    '(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)';

var formatName = function (item) {
    return $.trim((item.first_name || '') + ' ' + (item.last_name || ''));
};

$('#select-to').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    labelField: 'name',
    searchField: ['first_name', 'last_name', 'email'],
    sortField: [
        { field: 'first_name', direction: 'asc' },
        { field: 'last_name', direction: 'asc' }
    ],
    options: [
        { email: 'MFarah@Mazen.com', first_name: 'فرح', last_name: 'مازن' },
        { email: 'KAhmed@Mazen.com', first_name: 'خالد', last_name: 'الأحمد' },
        { email: 'RRaed@Mazen.com', first_name: 'ريم', last_name: 'رائد' },
        { email: 'KKhaled@Mazen.com', first_name: 'خالد', last_name: 'أبوخلدون' },
        { email: 'SBilal@Mazen.com', first_name: 'بلال', last_name: 'صالح' },
        { email: 'MSaid@Mazen.com', first_name: 'سعيد', last_name: 'محمد' },

    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});



$('#select-to2').selectize({
    persist: false,
    maxItems: 1,
    valueField: 'email',
    labelField: 'name',
    searchField: ['first_name', 'last_name', 'email'],
    sortField: [
        { field: 'first_name', direction: 'asc' },
        { field: 'last_name', direction: 'asc' }
    ],
    options: [
        { email: 'MFarah@Mazen.com', first_name: 'فرح', last_name: 'مازن' },
        { email: 'KAhmed@Mazen.com', first_name: 'خالد', last_name: 'الأحمد' },
        { email: 'RRaed@Mazen.com', first_name: 'ريم', last_name: 'رائد' },
        { email: 'KKhaled@Mazen.com', first_name: 'خالد', last_name: 'أبوخلدون' },
        { email: 'SBilal@Mazen.com', first_name: 'بلال', last_name: 'صالح' },
        { email: 'MSaid@Mazen.com', first_name: 'سعيد', last_name: 'محمد' },

    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});



$('#select-to3').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'تطوير' },
        { email: 'تحديث' },
        { email: 'كأس العالم 2022 ' },
        { email: 'فندق' },
        { email: 'لجنة 2022 ' },
        { email: 'الرواية الوطنية ' },
        { email: 'التحول الالكتروني' },
        { email: 'تطوير البنية التحتية' },

    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});

$('#select-to3-new-request').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'وزارة الاشغال' },
        { email: 'مؤسسة الطيران المدني' },
        { email: 'البلدية' },
        { email: 'وزارة السياحة' },
        { email: 'لجنة 2022' },
        { email: 'وزارة الطاقة والصناعة' },
        { email: 'وزارة المالية' },
        { email: 'وزارة المواصلات والاتصالات' },
        { email: 'وزارة الاقتصاد والتجارة' },
        { email: 'وزارة الصحة العامة' },
        { email: 'وزارة التعليم والتعليم العالي' },
    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});




$('#select-to4').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'تطوير البنية التحتية التقنية' },
        { email: 'التعاون مع الجهات المعنية' },
        { email: 'تعزيز جهود رقمنه قطاع الثقافة والفنون' },
        { email: 'الاستفادة من البنية التحتية الحالية' },
        { email: 'وتطوير المعالم الثقافية الرئيسية' },


    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});





$('#select-to5').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: [
        { email: 'تطوير البنية التحتية التقنية' },
        { email: 'التعاون مع الجهات المعنية' },
        { email: 'تعزيز جهود رقمنه قطاع الثقافة والفنون' },
        { email: 'الاستفادة من البنية التحتية الحالية' },
        { email: 'وتطوير المعالم الثقافية الرئيسية' },


    ],
    render: {
        item: function (item, escape) {
            var name = formatName(item);
            return '<div>' +
                (name ? '<span class="name">' + escape(name) + '</span>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
                '</div>';
        },
        option: function (item, escape) {
            var name = formatName(item);
            var label = name || item.email;
            var caption = name ? item.email : null;
            return '<div>' +
                '<span class="label">' + escape(label) + '</span>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
                '</div>';
        }
    },
    createFilter: function (input) {
        var regexpA = new RegExp('^' + REGEX_EMAIL + '$', 'i');
        var regexpB = new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i');
        return regexpA.test(input) || regexpB.test(input);
    },
    create: function (input) {
        if ((new RegExp('^' + REGEX_EMAIL + '$', 'i')).test(input)) {
            return { email: input };
        }
        var match = input.match(new RegExp('^([^<]*)\<' + REGEX_EMAIL + '\>$', 'i'));
        if (match) {
            var name = $.trim(match[1]);
            var pos_space = name.indexOf(' ');
            var first_name = name.substring(0, pos_space);
            var last_name = name.substring(pos_space + 1);

            return {
                email: match[2],
                first_name: first_name,
                last_name: last_name
            };
        }
        alert('Invalid email address.');
        return false;
    }
});



$('.input-group.date').datepicker({
});


// var p = document.getElementById('tab4click');
// p.onclick = function () {
//     document.getElementById('tab4row').style.display = 'none';
//     document.getElementById('tab4loading').style.display = 'unset';
//     document.getElementById('tab4loadingtext').style.display = 'unset';
//     setTimeout(function () {
//         document.getElementById('tab4row').style.display = 'unset';
//         document.getElementById('tab4loading').style.display = 'none';
//         document.getElementById('tab4loadingtext').style.display = 'none';
//     }, 3000);
//     return false;
// };

function sendToMaliyaClicked() {
    document.getElementById('sendToMaliyaButton').style.display = 'none';
    document.getElementById('tab4row').style.display = 'none';
    document.getElementById('tab4loading').style.display = 'unset';
    document.getElementById('tab4loadingtext').style.display = 'unset';
    setTimeout(function () {
        document.getElementById('tab4row').style.display = 'unset';
        document.getElementById('tab4loading').style.display = 'none';
        document.getElementById('tab4loadingtext').style.display = 'none';
        document.getElementById('sendToMaliyaText').style.display = 'none';
    }, 3000);
}

function confirmMalia() {
    $("#nextButton").click();
}