"use strict";
const text = document.getElementById("text");
const language = document.getElementById("language");
const speed = document.getElementById("vol");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const googleTranslates = document.getElementById("googleTranslate");

// ?key=Up1NiE9m
// Start  reading
play.addEventListener("click", function () {
  responsiveVoice.speak(text.value, language.value, { rate: speed.value });
});

// Stop reading
stop.addEventListener("click", function () {
  responsiveVoice.cancel();
});

// https://www.w3schools.com/howto/howto_google_translate.asp

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "es,fr,de,sv",
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    googleTranslates
  );
}
