import m from "mithril";

const layout = {
    view: function () {
        return m("div.top-nav", [
            m("a", {href: "#/"}, "Home"),
            m("a", {href: "#/login"}, "Login"),
            m("a", {href: "#/facts"}, "Facts")
        ]);
    }
};

export { layout };
