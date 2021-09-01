import m from "mithril";

import auth from "../models/auth.js";

var login = {
    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("slide-out");
        return new Promise(function(resolve) {
            setTimeout(function() {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 150);
        });
    },
    oninit: auth.clear,
    view: function() {
        return m("main.container.slide-in", [
            m("h1", "Logga in"),
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    auth.login();
                }
            }, [
                m("label.input-label", "E-post"),
                m("input[type=email].input", {
                    oninput: function(event) {
                        auth.email = event.target.value;
                    }
                }),
                m("label.input-label", "Lösenord"),
                m("input[type=password].input", {
                    oninput: function(event) {
                        auth.password = event.target.value;
                    }
                }),
                m("input[type=submit][value=Logga in].button.green-button", "Logga in"),
                m(
                    "a.button.blue-button",
                    {href: "#/register",
                        oncreate: m.route.link},
                    "Registrera"
                )
            ])
        ]);
    }
};

export default login;
