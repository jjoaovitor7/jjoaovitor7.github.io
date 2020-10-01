function googleTranslateElementInit(){
    if (window.innerWidth <= 768){
        new google.translate.TranslateElement({pageLanguage: 'pt_BR'}, 'google-translate');

    }
    else {
        new google.translate.TranslateElement({pageLanguage: 'pt_BR', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google-translate');
    }
}

