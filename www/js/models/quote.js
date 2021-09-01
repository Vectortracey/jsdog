import m from "mithril";

var fact = {
    randomfact: [],

    getfact: function () {
        m.request({
            url: `http://dog-api.kinduff.com/api/facts`,
            method: "GET",
        }).then(function (result) {
            fact.randomfact = result;
        });
    }
};

export default fact;
