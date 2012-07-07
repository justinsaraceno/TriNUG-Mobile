// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.network.connection.type;
    var disconnectedMessage = "Network connection is unavailable.  Unable to load event data.";

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.NONE] = 'No network connection';

    if(states[networkState] != "No network connection") {
        loadEventData();
    } else {
        navigator.notification.alert(
            disconnectedMessage,    // message
            null,                   // callback function
            'No Connection',        // title
            'Done'                  // buttonName
        );

        var list = $('#main').find('#list');
        list.html('<li>' + disconnectedMessage + '</li>');
        list.listview("destroy").listview();
    }
}