// ==UserScript==
// @name         Emby IMDb link2ID fixer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto change IMDB link to ID on paste in Identify section
// @author       user77553
// @require http://code.jquery.com/jquery-3.4.1.min.js
// @match        http://xxx.xxx.xxx.xxx:8096/emby/web/index.html // set your Emby IP host
// @icon         https://www.google.com/s2/favicons?domain=1.113
// @grant        none
// ==/UserScript==

var $ = window.$ // This is not really needed, but it removes the error messages that is created because jQuery (https://code.jquery.com/jquery-3.4.1.min.js) is not loaded here, it will be loaded when the script triggers which will only happen at url listed in at-include.

$(document).ready(function() {

setTimeout(function() {

    $("#txtLookupImdb").on("input", function(e){
        let pastedData = $("#txtLookupImdb").val().replace(/https:\/\/www\.imdb\.com\/title\//, '').replace(/\//,'')
        $("#txtLookupImdb").val(pastedData)
    } )

    }, 10000); // 10 seconds will elapse and code will execute. INCREASE THIS IF YOUR PAGE TAKES LONGER TO LOAD, THIS IS IMPORTANT FOR THE SCRIPT TO WORK. SCRIPT-TIMER
})
