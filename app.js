const namesList = [
    'Dave',
    'Peter',
    'Danielle',
    'Christian'
];

const numbersList = [
    '404-919-2865',
    '770-815-2781',
    '770-618-9817',
    '678-255-7771'
]

const emailList = [
    'JigglyPuff@gmail.com',
    '2pacisalive@aol.com',
    'CallofDutyisbestgame@gmail.com',
    'Ihatemakingfakeemailadresses@gmail.com'
]

for (let i = 0; i < namesList.length; i++) {
    $(".content").append('<p>{namesList[i]}</p>')
}

for (let i = 0; i < numbersList.length; i++) {
    $(".content").append('<p>{numbersList[i]</p>')
}

for (let i = 0; i < emailList.length; i++) {
    $(".content").append('<p>{emailList[i]</p>')
}

const $ = function () {
    const nodeList = document.querySelectorAll(selector);


    const html = function (content) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innertext = content
        };



        const text = function (content) {
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].innertext = content
            };


            const addNames = function (content) {
                for (let i = 0; i < nodeList.length; i++) {
                    nodeList[i].innertext = content
                };


                const addView = function (content) {
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].innertext = content
                    };


                    const addVerify = function (content) {
                        for (let i = 0; i < nodeList.length; i++) {
                            nodeList[i].innertext = content
                        };


                        const addUpdate = function (content) {
                            for (let i = 0; i < nodeList.length; i++) {
                                nodeList[i].innertext = content
                            };


                            const addDelete = function (content) {
                                for (let i = 0; i < nodeList.length; i++) {
                                    nodeList[i].innertext = content
                                }

                                const append = function (content) {
                                    for (let i = 0; i < nodeList.length; i++) {
                                        nodeList[i].innerHtml += content;
                                    }
                                }

                                const val = function (content) {
                                    if (content === undefined) {
                                        return nodeList[0].value;
                                    } else {
                                        nodelist[0].value = content;
                                    }
                                }

                                const on = function (action, cb) {
                                    for (let i = 0; i < nodeList.length; i++) {
                                        nodeList[i].addEventListener(action);
                                    }
                                }

                                return {
                                    html: html,
                                    text: text,
                                    addNames: addNames,
                                    addView: addView,
                                    addVerify: addVerify,
                                    addUpdate: addUpdate,
                                    addDelete: addDelete,
                                    append: append,
                                    val: val,
                                    on: on

                                };
                            };


