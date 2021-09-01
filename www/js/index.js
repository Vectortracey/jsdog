import m from "mithril";

import list from "./views/list.js";
import { layout } from "./views/layout.js";
import login from "./views/login.js";
import auth from "./models/auth.js";
import registerNew from "./views/register.js";
import facts from "./views/facts.js";

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        console.log('Device is ready');

        m.route(document.body, "/", {
            "/": {
                render: function () {
                    return [m(layout), m(list)];
                }
            },
            "/login": {
                render: function () {
                    return [m(layout), m(login)];
                }
            },
            "/register": {
                render: function () {
                    return [m(layout), m(registerNew)];
                }
            },
            "/facts": {
                render: function () {
                    if (auth.token) {
                        return [m(layout), m(facts)];
                    }
                    return m.route.set("login");
                }
            },
        });
    },
};

app.initialize();
