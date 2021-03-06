/*
 * JS for Push_user generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return 'eaae8fa4-076c-481a-82a7-0f5f72984b62';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "mainPage",
    "location": "mainPage.html"
}, {
    "name": "CAN_Details",
    "location": "CAN_Details.html"
}, {
    "name": "CAN_Login",
    "location": "CAN_Login.html"
}, {
    "name": "distance",
    "location": "distance.html"
}, {
    "name": "Push_user",
    "location": "Push_user.html"
}];

function Push_user_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_9': 'Push_user_mobilebutton_9',
        'mobileworkarea_7': 'Push_user_mobileworkarea_7',
        'mobilelabel_27': 'Push_user_mobilelabel_27',
        'spacer_16': 'Push_user_spacer_16',
        'mobilelabel_28': 'Push_user_mobilelabel_28',
        'username': 'Push_user_username',
        'spacer_17': 'Push_user_spacer_17',
        'mobilepopup_43': 'Push_user_mobilepopup_43',
        'mobiletextarea_44': 'Push_user_mobiletextarea_44',
        'mobilelabel_29': 'Push_user_mobilelabel_29',
        'phonenumber': 'Push_user_phonenumber',
        'spacer_18': 'Push_user_spacer_18',
        'mobilelabel_30': 'Push_user_mobilelabel_30',
        'adress': 'Push_user_adress',
        'spacer_19': 'Push_user_spacer_19',
        'mobilelabel_31': 'Push_user_mobilelabel_31',
        'lati': 'Push_user_lati',
        'spacer_20': 'Push_user_spacer_20',
        'canna': 'Push_user_canna',
        'CanNumber': 'Push_user_CanNumber',
        'spacer_40': 'Push_user_spacer_40',
        'mobilelabel_32': 'Push_user_mobilelabel_32',
        'long': 'Push_user_long',
        'spacer_21': 'Push_user_spacer_21',
        'mobilelabel_41': 'Push_user_mobilelabel_41',
        'Queryinput': 'Push_user_Queryinput',
        'mobilelabel_15': 'Push_user_mobilelabel_15',
        'img': 'Push_user_img',
        'mobilegrid_34': 'Push_user_mobilegrid_34',
        'mobilegridcell_35': 'Push_user_mobilegridcell_35',
        'mobilegridcell_36': 'Push_user_mobilegridcell_36',
        'mobilebutton_33': 'Push_user_mobilebutton_33',
        'spacer_11': 'Push_user_spacer_11',
        'mobileworkarea_10': 'Push_user_mobileworkarea_10',
        'mobileimage_3': 'Push_user_mobileimage_3',
        'spacer_4': 'Push_user_spacer_4',
        'mobilebutton_5': 'Push_user_mobilebutton_5',
        'mobilebutton_6': 'Push_user_mobilebutton_6',
        'mobilebutton_8': 'Push_user_mobilebutton_8'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["Push_user_restservice1_onsuccess_mapping_0"] = {
        "homeScreen": "Push_user",
        "directions": [

        {
            "from_name": "restservice1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "Push_user",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body']['_id']",
                "target": "$['mobiletextarea_44:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["Push_user_restservice1_onbeforesend_mapping_0"] = {
        "homeScreen": "Push_user",
        "directions": [

        {
            "from_name": "Push_user",
            "from_type": "UI",

            "to_name": "restservice1",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "headers": {
                    "X-Appery-Database-Id": "{database_id}",
                    "Content-Type": "application/json"
                },
                "parameters": {},
                "body": {
                    "acl": {
                        "*": {
                            "write": true,
                            "read": true
                        }
                    }
                }
            },

            "mappings": [

            {

                "source": "$['username:text']",
                "target": "$['body']['Name']"

            },

            {

                "source": "$['phonenumber:text']",
                "target": "$['body']['Phone_Number']"

            },

            {

                "source": "$['lati:text']",
                "target": "$['body']['Lattitude']"

            },

            {

                "source": "$['CanNumber:text']",
                "target": "$['body']['CAN_Number']"

            },

            {

                "source": "$['long:text']",
                "target": "$['body']['Longitude']"

            },

            {

                "source": "$['img:text']",
                "target": "$['body']['Building_Photos']"

            },

            {

                "source": "$['Queryinput:text']",
                "target": "$['body']['Grievances']"

            }

            ]
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.restservice1 = Apperyio.datasources.restservice1 = new Apperyio.DataSource(Aqua_Aide_Aqua_Aide_create_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["Push_user_restservice1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
            var popupElement = Apperyio("mobilepopup_43");
            if (popupElement.popup("option", "positionTo") === "origin") {
                popupElement.popup("open", {
                    transition: "slideup",
                    positionTo: "#" + $(this).attr("id")
                });
            } else {
                popupElement.popup("open", {
                    transition: "slideup"
                });
            };

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["Push_user_restservice1_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'Push_user';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Push_user_onLoad = function() {
            Push_user_elementsExtraJS();

            Push_user_deviceEvents();
            Push_user_windowEvents();
            Push_user_elementsEvents();
        };

    // screen window events


    function Push_user_windowEvents() {

        $('#Push_user').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Push_user_deviceEvents() {
        document.addEventListener("deviceready", function() {

            var executePendingNotifications = function() {
                    PushNotification.getPendingNotifications(function(status) {
                        var notifications = status.notifications;
                        for (var i = 0; notifications && i < notifications.length; ++i) {
                            PushNotification.notificationCallback(notifications[i]);
                        }
                    });
                };
            executePendingNotifications();

            $(document).bind("resume", executePendingNotifications);

        });
    };

    // screen elements extra js


    function Push_user_elementsExtraJS() {
        // screen (Push_user) extra code

        /* mobilepopup_43 */
        $("#Push_user_mobilepopup_43").popup("option", "positionTo", "window");

    };

    // screen elements handler


    function Push_user_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Push_user_mobileheader [name="mobilebutton_9"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="Push_user_panel_2"]').panel("open");

                }
            },
        }, '#Push_user_mobileheader [name="mobilebutton_9"]');

        $(document).off("click", '#Push_user_mobilecontainer [name="mobilebutton_33"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        restservice1.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#Push_user_mobilecontainer [name="mobilebutton_33"]');

        $(document).off("click", '#Push_user_panel_2 [name="mobilebutton_5"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('mainPage', {
                        transition: 'pop',
                        reverse: false
                    });

                }
            },
        }, '#Push_user_panel_2 [name="mobilebutton_5"]');
        $(document).off("click", '#Push_user_panel_2 [name="mobilebutton_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Push_user', {
                        transition: 'slidedown',
                        reverse: false
                    });

                }
            },
        }, '#Push_user_panel_2 [name="mobilebutton_6"]');
        $(document).off("click", '#Push_user_panel_2 [name="mobilebutton_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('distance', {
                        transition: 'flip',
                        reverse: false
                    });

                }
            },
        }, '#Push_user_panel_2 [name="mobilebutton_8"]');

    };

    $(document).off("pagebeforeshow", "#Push_user").on("pagebeforeshow", "#Push_user", function(event, ui) {
        Apperyio.CurrentScreen = "Push_user";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Push_user_onLoad();
};

$(document).off("pagecreate", "#Push_user").on("pagecreate", "#Push_user", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Push_user_js();
});