import m from "mithril";
import picture from "../models/picture";

var list = {
    oninit: picture.getpic,
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
        var breedName = picture.randompic.replace("-", " ").split("/")[4];

        return m("main.container.slide-in", [
            m("div", {class: "content"}, [
                m("h1", "Hello and welcome to my page!!"),
                m("p", "This page contains some nice picture of dogs and their breedname."),
                m("button", { onclick: picture.getpic }, "Random Dog"),
                m("img", { src: picture.randompic}),
                m("p", "This dogs breed is " + breedName)
            ])
        ]);
    }
};

export default list;
