function xhrFunction() {

    var xhr = null;

    if (window.XMLHttpRequest || window.ActiveXObject){

        if(window.ActiveXObject) {
            try{
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }
        else {
            var xhr = new XMLHttpRequest();
        }
    }
    else {
        return false;
    }
    return xhr;
}