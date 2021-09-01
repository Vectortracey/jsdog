import m from "mithril";

import register from "../models/register.js";

var registerNew = {
    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("slide-down");
        return new Promise(function(resolve) {
            setTimeout(function() {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 150);
        });
    },
    oninit: register.clear,
    view: function() {
        return m("main.container.slide-up", [
            m("h1", "Registrera"),
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    register.registerUser();
                    m.route("login");
                }
            }, [
                m("label.input-label", "E-post"),
                m("input[type=email].input", {
                    oninput: function(event) {
                        register.email = event.target.value;
                    }
                }),
                m("label.input-label", "Lösenord"),
                m("input[type=password].input", {
                    oninput: function(event) {
                        register.password = event.target.value;
                    }
                }),
                m("input[type=submit][value=Registrera].button.green-button", "Registrera"),
                m("a.button.full-width-button", { href: "#/login" }, "Tillbaka")
            ])
        ]);
    }
};

export default registerNew;
