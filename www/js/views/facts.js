import m from "mithril";
import fact from "../models/quote.js";

var facts = {
    oninit: fact.getfact,
    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("slide-out");
        return new Promise(function(resolve) {
            setTimeout(function() {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 150);
        });
    },

    view: function() {
        return m("main.container.slide-in", [
            m("h1", "Facts about dogs"),
            m("button", { onclick: fact.getfact }, "Generate fact"),
            m("p", fact.randomfact.facts),
            m("a.button.full-width-button", { href: "#/" }, "Tillbaka")
        ]);
    }
};

export default facts;
