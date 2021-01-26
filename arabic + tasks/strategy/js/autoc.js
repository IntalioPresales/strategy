


$('li:not(.custom).finish a').click(function () {
    console.log('helo')
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
        title: 'تم إنشاء المشروع',
        titleColor: '',
        titleSize: '20',
        titleLineHeight: '',
        message: 'سوف يتم الآن تحويلك إلى الصفحة الرئيسية',
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
        timeout: 4500,
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
        // location.reload();
        window.location.href = "index.html";
    }, 5500);
});


let initiatives = JSON.parse(localStorage.getItem('initiatives')) || [];
if (initiatives && initiatives.length) {
    initiatives.forEach(element => {
        let el = `<option value="${element.name_field}">${element.name_field}</option>`;
        $('#mubadarSelect').append(el)
    });
}

/*on select change*/
$('#mubadarSelect').change(function () {

    let selectedValue = $('#mubadarSelect').val();

    let findInitiative = initiatives.find(el => el.name_field === selectedValue)

    $(".objectives").empty();

    if (findInitiative && findInitiative.goals_field) {

        findInitiative.goals_field.forEach(element => {
            let el = `<li>${element}</li>`;
            $('.objectives').append(el)
        });
    } else {
        $('.objectives').append(`<li>Development and upgrading supervisory work</li>`)
        $('.objectives').append(`<li>Cooperation and communication</li>`)
    }

    $('.DespText').slideUp();
    $('.DespText').slideDown();
    setTimeout(function () {
        $('.GoalsList').slideUp();
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

$('#select-employee').selectize({
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
        { email: 'mazen@intalio.com', first_name: 'مازن', last_name: 'فرح' },
        { email: 'sami@intalio.com', first_name: 'سامي', last_name: 'كريم' },
        { email: 'ahmed@intalio.com', first_name: 'احمد', last_name: 'سلامة' },
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
        { email: 'tadqeeq@intalio.com', first_name: '', last_name: 'إدارات التدقيق المعنية' },
        { email: 'makhater@intalio.com', first_name: '', last_name: 'إدارة المخاطر والجودة' },
        { email: 'RRaed@intalio.com', first_name: '', last_name: 'قسم المعاير والمنهجيات' },
        { email: 'maayir@intalio.com', first_name: '', last_name: 'لجنة التدريب وتنمية القدرات' },
        { email: 'maaloumat@intalio.com', first_name: '', last_name: 'إدارة نظم المعلومات' },
        { email: 'itisalat@intalio.com', first_name: '', last_name: 'مكتب الاتصال' },
        { email: 'wahadat@intalio.com', first_name: '', last_name: 'كافة الوحدات والإدارات المعنيّة' },

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
        { email: 'maayir@intalio.com', first_name: '', last_name: 'لجنة تطوير المنهجيات والمعايير' },
        { email: 'raqaba@intalio.com', first_name: '', last_name: 'مدير إدارة الرقابة على الالتزام' },
        { email: 'makhater@intalio.com', first_name: '', last_name: 'مدير إدارة المخاطر والجودة' },
        { email: 'tamyiz@intalio.com', first_name: '', last_name: 'مدير مركز التمييز للتدريب والتطوير' },
        { email: 'tanmiah@intalio.com', first_name: '', last_name: 'لجنة التدريب وتنمية القدرات' },
        { email: 'electronic@intalio.com', first_name: '', last_name: 'لجنة الربط الإلكتروني' },
        { email: 'maaloumat@intalio.com', first_name: '', last_name: 'مدير إدارة نظم المعلومات' },
        { email: 'siyasat@intalio.com', first_name: '', last_name: 'لجنة تطوير السياسات والإجراءات' },
        { email: 'hr@intalio.com', first_name: '', last_name: 'مدير إدارة الموارد البشرية' },

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
        { email: 'برامج تدريب وتطوير' },
        { email: 'إدارات التدقيق والرقابة' },
        { email: 'موظفين' },
        { email: 'البحث العلمي' },
        { email: 'لجنة الربط الإلكتروني' },
        { email: 'لجنة تطوير المنهجيات والمعايير' },

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
        { email: 'التطوير والارتقاء بالعمل الرقابي' },
        { email: 'التميّز المؤسسي' },
        { email: 'التعاون والتواصل' },


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


let goalsOptions = [
    { email: 'التطوير والارتقاء بالعمل الرقابي' },
    { email: 'التميّز المؤسسي' },
    { email: 'التعاون والتواصل' },
]

let goals = JSON.parse(localStorage.getItem('goals'))
goals.forEach(element => {
    goalsOptions.push({
        email: element.name_field
    })
});


$('#select-to5').selectize({
    persist: false,
    maxItems: null,
    valueField: 'email',
    // labelField: 'name',
    searchField: ['email'],

    options: goalsOptions,
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