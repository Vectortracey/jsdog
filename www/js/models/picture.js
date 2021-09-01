import m from "mithril";

var picture = {
    randompic: "",

    getpic: function () {
        m.request({
            url: `https://dog.ceo/api/breeds/image/random`,
            method: "GET",
        }).then(function (result) {
            picture.randompic = result.message;
        });
    }
};

export default picture;
