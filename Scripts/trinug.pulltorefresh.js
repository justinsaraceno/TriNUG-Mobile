$(document).delegate("#main", "pageinit", function (event) {
    $(".iscroll-wrapper", this).bind({
        "iscroll_onpulldown": onPullDown
    });
});

function onPullDown(event, data) {
    setTimeout(function fakeRetrieveDataTimeout() {
        var conn = "a"; // checkConnection();
        if (conn != "No network connection") {
            loadEventData();
        } else {
            reportNoConnection();
        }
        pullDownComplete(event, data);
    },
            1500);
}

function pullDownComplete(event, data) {
    data.iscrollview.refresh();    // Refresh the iscrollview
}