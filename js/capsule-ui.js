const $sidebarnew = document.querySelector("#new-resource");
const $sidebaredit = document.querySelector("#edit-resource");
const $sidebareditthing = document.querySelector("#edit-thing");
const $togglersnew = document.querySelectorAll("button#sidebar-new");
const $togglersedit = document.querySelectorAll("button#sidebar-edit");
const $togglerseditthing = document.querySelectorAll("button#sidebar-edit-thing");

$togglersnew.forEach(function ($togglernew) {
    $togglernew.addEventListener("click", () => {
        $sidebarnew.classList.toggle("visible");
        $sidebaredit.classList.remove("visible")
        $sidebareditthing.classList.remove("visible")
    });
  });

  $togglersedit.forEach(function ($toggleredit) {
    $toggleredit.addEventListener("click", () => {
        $sidebaredit.classList.toggle("visible");
        $sidebarnew.classList.remove("visible")
        $sidebareditthing.classList.remove("visible")
    });

  });

  $togglerseditthing.forEach(function ($togglereditthing) {
    $togglereditthing.addEventListener("click", () => {
        $sidebareditthing.classList.toggle("visible");
        $sidebarnew.classList.remove("visible")
        $sidebaredit.classList.remove("visible")
    });

  });

  document.onclick = function (event) {
    $togglersnew.forEach(function ($togglernew) {
        if (event.target.contains($togglernew) && event.target !== $togglernew && !event.target.contains($sidebarnew)) {
            $sidebarnew.classList.remove("visible")
        } 
    })
    $togglersedit.forEach(function ($toggleredit) {
        if (event.target.contains($toggleredit) && event.target !== $toggleredit && !event.target.contains($sidebaredit)) {
            $sidebaredit.classList.remove("visible")
        } 
    })
    $togglerseditthing.forEach(function ($togglereditthing) {
        if (event.target.contains($togglereditthing) && event.target !== $togglereditthing && !event.target.contains($sidebareditthing)) {
            $sidebareditthing.classList.remove("visible")
        } 
    })
}

function  setDatatypeSelects(){
    const $datatypeSelects = document.querySelectorAll("#datatype")
    $datatypeSelects.forEach(function ($datatypeSelect) {
        $datatypeSelect.onchange = function (e) {
            
            let element = $datatypeSelect.nextElementSibling;

            while (element) {
                if (element.tagName.toLowerCase() === 'div') {
                    let valueDiv = document.createElement("div");
                    valueDiv.setAttribute("class","input-group");

                    switch (e.target.value) {
                        case 'text':
                            let div = document.createElement("div");
                            let text = document.createElement("input");
                            text.setAttribute("class","full");
                            text.type = 'text'
                            let locale = document.createElement("select");
                            var optionDef = document.createElement("option");
                            optionDef.value = "";
                            optionDef.text = "No Locale";
                            optionDef.selected = true

                            var optionEN = document.createElement("option");
                            optionEN.value = "en_EN";
                            optionEN.text = "English";
                            var optionFR = document.createElement("option");
                            optionFR.value = "fr_FR";
                            optionFR.text = "Français";
                            locale.appendChild(optionDef)
                            locale.appendChild(optionEN)
                            locale.appendChild(optionFR)
                            valueDiv.appendChild(text)
                            valueDiv.appendChild(locale)
                            break;
                        case 'datetime':
                            let date = document.createElement("input");
                            date.type = 'date'
                            date.setAttribute("class","full");
                            let time = document.createElement("input");
                            time.type = 'time'
                            valueDiv.appendChild(date)
                            valueDiv.appendChild(time)
                            break
                        case 'url':
                            let url = document.createElement("input");
                            url.type = e.target.value;
                            url.setAttribute("class","full");
                            valueDiv.appendChild(url)
                            break

                        case 'date':
                        case 'number':
                            let input = document.createElement("input");
                            input.setAttribute("class","full");
                            input.type = e.target.value;
                            valueDiv.appendChild(input)
                            break;
                    }
                    
                    element.replaceWith(valueDiv);
                    break
                }   
                element  = element.nextElementSibling;
                
            }
            
        }

    })
}



function removeValue(removeButton){
    let element = removeButton.parentElement;
    element.remove()
}

function addValue(addButton){
    const field = createDefaultValueField()
    let parent = addButton.parentElement
    parent.insertBefore(field, addButton)
    setDatatypeSelects()
}

function removeProperty(removeButton){
    let element = removeButton.parentElement.parentElement.parentElement;
    element.remove()
}

function addProperty(addButton){
    const field = createDefaultPropertyField()
    let parent = addButton.parentElement
    parent.insertBefore(field, addButton)
    setDatatypeSelects()
}

function removeAccess(removeButton){
    let element = removeButton.parentElement;
    element.remove()
}

function addAccess(addButton){
    let element = addButton.previousElementSibling;
    if(element.validity.valid && element.value ){
        let value = element.value;
        const field = createDefaultAccessField(value)
        let parent = addButton.parentElement.parentElement
        parent.insertBefore(field, addButton.parentElement)
        element.value = null
    }
    
}

function createDefaultValueField(){
    let groupDiv = document.createElement("div");
    groupDiv.setAttribute("class","input-group");
    let typeSelect = document.createElement("select");
    typeSelect.required = true
    typeSelect.id = "datatype"
    var optionText = document.createElement("option");
    optionText.value = "text";
    optionText.text = "Text";
    var optionUrl = document.createElement("option");
    optionUrl.value = "url";
    optionUrl.text = "URL";
    var optionDate = document.createElement("option");
    optionDate.value = "date";
    optionDate.text = "Date";
    var optionDatetime = document.createElement("option");
    optionDatetime.value = "datetime";
    optionDatetime.text = "Datetime";
    var optionNumber = document.createElement("option");
    optionNumber.value = "number";
    optionNumber.text = "Number";
    typeSelect.appendChild(optionText)
    typeSelect.appendChild(optionUrl)
    typeSelect.appendChild(optionDate)
    typeSelect.appendChild(optionDatetime)
    typeSelect.appendChild(optionNumber)

    let valueDiv = document.createElement("div");
    valueDiv.setAttribute("class","input-group");
    let text = document.createElement("input");
    text.setAttribute("class","full");
    text.type = 'text'
    let locale = document.createElement("select");
    var optionDef = document.createElement("option");
    optionDef.value = "";
    optionDef.text = "No Locale";
    optionDef.selected = true
    var optionEN = document.createElement("option");
    optionEN.value = "en_EN";
    optionEN.text = "English";
    var optionFR = document.createElement("option");
    optionFR.value = "fr_FR";
    optionFR.text = "Français";
    locale.appendChild(optionDef)
    locale.appendChild(optionEN)
    locale.appendChild(optionFR)
    valueDiv.appendChild(text)
    valueDiv.appendChild(locale)

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("onclick","removeValue(this);");
    deleteButton.setAttribute("class", "button-icon danger")
    let deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "icon trash md")
    deleteButton.appendChild(deleteIcon)

    groupDiv.appendChild(typeSelect)
    groupDiv.appendChild(valueDiv)
    groupDiv.appendChild(deleteButton)

    return groupDiv
}

function createDefaultPropertyField(){
    let dataDiv = document.createElement("div");
    dataDiv.id = "data" 
    let propertyLabel = document.createElement("label");
    propertyLabel.innerHTML = "Property";
    let propertyDiv =  document.createElement("div");
    propertyDiv.setAttribute("class","input");
    let propertyGroupDiv =  document.createElement("div");
    propertyGroupDiv.setAttribute("class","input-group");
    let propertyInput =  document.createElement("input");
    propertyInput.setAttribute("type", "url")
    propertyInput.setAttribute("class", "full")


    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("onclick","removeProperty(this);");
    deleteButton.setAttribute("class", "button-icon danger")
    let deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "icon trash md")
    deleteButton.appendChild(deleteIcon)

    propertyGroupDiv.appendChild(propertyInput)
    propertyGroupDiv.appendChild(deleteButton)
    propertyDiv.appendChild(propertyGroupDiv)

    dataDiv.appendChild(propertyLabel)
    dataDiv.appendChild(propertyDiv)

    let valueLabel = document.createElement("label");
    valueLabel.innerHTML = "Value(s)"; 

    let valueDiv = document.createElement("div");
    valueDiv.setAttribute("class","input");

    let valueDefaultValue  = createDefaultValueField()
    valueDiv.appendChild(valueDefaultValue)

    let addButton = document.createElement("button");
    addButton.setAttribute("onclick","addValue(this);");
    addButton.setAttribute("class", "button-icon right")
    let addIcon = document.createElement("i")
    addIcon.setAttribute("class", "icon plus md")
    addButton.appendChild(addIcon)
    
    valueDiv.appendChild(addButton)
    dataDiv.appendChild(valueLabel)
    dataDiv.appendChild(valueDiv)
    
    return dataDiv
}

function createDefaultAccessField(value){
    let accessDiv = document.createElement("div");
    accessDiv.setAttribute("class", "resource-authorization")

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("onclick","removeAccess(this);");
    deleteButton.setAttribute("class", "button-icon danger")
    let deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "icon trash md")
    deleteButton.appendChild(deleteIcon)

    let webidDiv = document.createElement("div");
    webidDiv.setAttribute("class", "webid")

    let link = document.createElement("a");
    link.setAttribute("target", "_blank")
    link.setAttribute("href", "value")
    link.innerHTML = value;

    webidDiv.appendChild(link)

    let accessReadDiv = document.createElement("div");
    accessReadDiv.setAttribute("class", "resource-access")

    let readInput = document.createElement("input");
    readInput.setAttribute("class", "secondary")
    readInput.setAttribute("type", "checkbox")

    accessReadDiv.appendChild(readInput)

    let accessAppendDiv = document.createElement("div");
    accessAppendDiv.setAttribute("class", "resource-access")

    let appendInput = document.createElement("input");
    appendInput.setAttribute("class", "secondary")
    appendInput.setAttribute("type", "checkbox")

    accessAppendDiv.appendChild(appendInput)

    let accessWriteDiv = document.createElement("div");
    accessWriteDiv.setAttribute("class", "resource-access")

    let writeInput = document.createElement("input");
    writeInput.setAttribute("class", "secondary")
    writeInput.setAttribute("type", "checkbox")

    accessWriteDiv.appendChild(writeInput)

    accessDiv.appendChild(deleteButton)
    accessDiv.appendChild(webidDiv)
    accessDiv.appendChild(accessReadDiv)
    accessDiv.appendChild(accessAppendDiv)
    accessDiv.appendChild(accessWriteDiv)

    return accessDiv

}


setDatatypeSelects()





function setThingsOptions(){
    let thingTypes = ["activity-heart","book-open","credit-card-refresh","flag-02","line-chart-down-02","phone-incoming","stars-03","activity","bookmark-add","credit-card-search","flag-03","line-chart-down-03","phone-outgoing-02","stars","airplay","bookmark-check","credit-card-shield","flag-04","line-chart-down-04","phone-outgoing","sticker-circle","airpods","bookmark-minus","credit-card-up","flag-05","line-chart-down-05","phone-pause","sticker-square","alarm-clock-check","bookmark-x","credit-card-upload","flag-06","line-chart-down","phone-plus","stop-circle","alarm-clock-minus","bookmark","credit-card-x","flag","line-chart-up-02","phone-x","stop-square","alarm-clock-off","box","credit-card","flash-off","line-chart-up-03","phone","stop","alarm-clock-plus","brackets-check","crop-02","flash","line-chart-up-04","pie-chart-02","strikethrough-02","alarm-clock","brackets-ellipses","crop","flex-align-bottom","line-chart-up-05","pie-chart-03","strikethrough-square","alert-circle","brackets-minus","cryptocurrency-02","flex-align-left","line-chart-up","pie-chart-04","strikethrough","alert-hexagon","brackets-plus","cryptocurrency-03","flex-align-right","line-height","pie-chart","subscript","alert-octagon","brackets-slash","cryptocurrency-04","flex-align-top","link-02","piggy-bank-02","sun-setting-02","alert-square","brackets-x","cryptocurrency","flip-backward","link-03","piggy-bank","sun-setting-03","alert-triangle","brackets","cube-02","flip-forward","link-04","pilcrow-02","sun-setting","align-bottom-02","briefcase-02","cube-03","folder-check","link-05","pilcrow-square","sun","align-bottom","briefcase","cube-04","folder-closed","link-broken-02","pilcrow","sunrise","align-center","browser","cube-outline","folder-download","link-broken","pin-italic","sunset","align-horizontal-centre-02","brush-02","cube","folder-lock","link-external-01","pin","switch-horizontal-sm","align-horizontal-centre","brush-03","currency-bitcoin-circle","folder-minus","link-external-02","plane","switch-horizontal","align-justify","brush","currency-bitcoin","folder-plus","link","play-circle","switch-vertical-sm","align-left-02","building-03","currency-dollar-circle","folder-question","list","play-square","switch-vertical","align-left","building-04","currency-dollar","folder-search","loading-01","play","table","align-right-02","building-05","currency-ethereum-circle","folder-shield","loading-02","plus-circle","tablet-02","align-right","building-06","currency-ethereum","folder-x","loading-03","plus-square","tablet","align-top-02","building-07","currency-euro-circle","folder","lock-02","plus","tag-02","align-top","building-08","currency-euro","framer","lock-03","podcast","tag-03","align-vertical-center-02","building","currency-pound-circle","gaming-pad-02","lock-04","power-02","tag","align-vertical-center","bus","currency-pound","gaming-pad","lock-keyhole-circle","power-03","target-02","anchor","calculator","currency-ruble-circle","gift-02","lock-keyhole-square","power","target-arrow","annotation-alert","calendar-check-02","currency-ruble","gift","lock-unlocked-02","presentation-chart-02","target","annotation-check","calendar-check","currency-rupee-circle","git-branch-02","lock-unlocked-03","presentation-chart-03","telescope","annotation-dots","calendar-date","currency-rupee","git-branch","lock-unlocked-04","presentation-chart","terminal-browser","annotation-heart","calendar-heart-02","currency-yen-circle","git-commit","lock-unlocked","printer","terminal-circle","annotation-info","calendar-heart","currency-yen","git-merge","lock","puzzle-piece-02","terminal-square","annotation-plus","calendar-minus-02","cursor-02","git-pull-request","log-in-02","puzzle-piece","terminal","annotation-question","calendar-minus","cursor-03","glasses-02","log-in-03","qr-code-02","text-align-left","annotation-x","calendar-plus-02","cursor-04","glasses","log-in-04","qr-code","text-align-right","annotation","calendar-plus","cursor-box","globe-02","log-in","receipt-check","text-input","announcement-02","calendar","cursor-click-02","globe-03","log-out-02","receipt","thermometer-02","announcement-03","camera-02","cursor-click","globe-04","log-out-03","recording-02","thermometer-03","announcement","camera-03","cursor","globe-05","log-out-rounded","recording-03","thermometer-cold","archive","camera-lens","data","globe-06","log-out","recording","thermometer-warm","arrow-block-down","camera-off","database-02","globe-slated-02","luggage-02","reflect-02","thermometer","arrow-block-left","camera-plus","database-03","globe-slated","luggage-03","reflect","thumbs-down","arrow-block-right","camera","database","globe","luggage","refresh-ccw-double","thumbs-up","arrow-block-up","car-02","dataflow-02","google-chrome","magic-wand-02","refresh-ccw-vertical-md","ticket-02","arrow-circle-broken-down-left","car","dataflow-03","graduation-hat-02","magic-wand","refresh-ccw-vertical-sm","ticket","arrow-circle-broken-down-right","certificate-02","dataflow-04","graduation-hat","mail-02","refresh-ccw-vertical","toggle-left","arrow-circle-broken-down","certificate","dataflow","grid-02","mail-03","refresh-ccw","toggle-right","arrow-circle-broken-left","chart-breakout-circle","delete","grid-03","mail-open-02","refresh-cw-right","toggle-rounded-left","arrow-circle-broken-right","chart-breakout-square","diamond-02","grid-dots-blank","mail-open","repeat-02","toggle-rounded-right","arrow-circle-broken-up-left","check-circle-broken","diamond","grid-dots-bottom","mail","repeat-03","tool-02","arrow-circle-broken-up-right","check-circle","dice-2","grid-dots-horizontal-center","map-02","repeat-04","tool","arrow-circle-broken-up","check-done","dice-3","grid-dots-left","map","repeat","train","arrow-circle-down-left","check-heart","dice-4","grid-dots-outer","mark","reverse-left","tram","arrow-circle-down-right","check-square-broken","dice-5","grid-dots-right","marker-pin-02","reverse-right","transform","arrow-circle-down","check-square","dice-6","grid-dots-top","marker-pin-03","right-indent-02","translate","arrow-circle-left","check-verified-02","dice","grid-dots-vertical-center","marker-pin-flag","right-indent","trash-02","arrow-circle-right","check-verified-03","disc-02","grid","marker-pin","rocket-02","trash-03","arrow-circle-up-left","check-verified","disc","hand","maximize-02","rocket","trash-04","arrow-circle-up-right","check","distribute-spacing-horizontal","hard-drive","maximize","roller-brush","trash","arrow-circle-up","chevron-down-double","distribute-spacing-vertical","hash-italic","medical-circle","route","trend-down-02","arrow-down-left","chevron-down","divide-02","hash","medical-cross","rows-02","trend-down","arrow-down-right","chevron-left-double","divide-circle","heading-02","medical-square","rows-03","trend-up-02","arrow-down","chevron-left","divide","heading-square","menu-02","rows","trend-up","arrow-left","chevron-right-double","divider","heading","menu-03","rss-02","triangle","arrow-narrow-down-left","chevron-right","dotpoints-02","headphones-02","menu-05","rss","trophy-02","arrow-narrow-down-right","chevron-selector-horizontal","dotpoints","headphones","menu","ruler","trophy","arrow-narrow-down","chevron-selector-vertical","dots-grid","heart-circle","message-alert-circle","safe","truck-02","arrow-narrow-left","chevron-up-double","dots-horizontal","heart-hexagon","message-alert-square","sale-02","truck","arrow-narrow-right","chevron-up","dots-vertical","heart-octagon","message-chat-circle","sale-03","tv-02","arrow-narrow-up-left","chrome-cast","download-04","heart-rounded","message-chat-square","sale-04","tv-03","arrow-narrow-up-right","circle-cut","download-circle","heart-square","message-check-circle","sale","tv","arrow-narrow-up","circle","download-cloud-01","heart","message-check-square","save-02","type-02","arrow-right","clapperboard","download-cloud-02","hearts","message-circle-02","save-double","type-square","arrow-square-down-left","clipboard-attachment","download-line","help-circle","message-circle","save","type-strikethrough-02","arrow-square-down-right","clipboard-check","download","help-hexagon","message-dots-circle","scale-02","type-strikethrough","arrow-square-down","clipboard-download","drop","help-square","message-dots-square","scale-03","type","arrow-square-left","clipboard-minus","droplets-02","hexagon-02","message-heart-circle","scale","umbrella-02","arrow-square-right","clipboard-plus","droplets-03","hexagon","message-heart-square","scales-02","umbrella-03","arrow-square-up-left","clipboard-x","droplets","home-02","message-notification-circle","scales","umbrella","arrow-square-up-right","clipboard","dropper","home-03","message-notification-square","scan","underline-02","arrow-square-up","clock-check","edit-01","home-04","message-plus-circle","school-compass","underline-square","arrow-up-left","clock-fast-forward","edit-02","home-05","message-plus-square","scissors-02","underline","arrow-up-right","clock-plus","edit-03","home-line","message-question-circle","scissors-cut-02","upload-02","arrow-up","clock-refresh","edit-04","home-smile","message-question-square","scissors-cut","upload-circle-broken","arrows-down","clock-rewind","edit-05","home","message-smile-circle","scissors","upload-circle","arrows-left","clock-snooze","equal-not","horizontal-bar-chart-02","message-smile-square","search-lg","upload-cloud-02","arrows-right","clock-stopwatch","equal","horizontal-bar-chart-03","message-square-02","search-md","upload-cloud","arrows-triangle","clock","eraser","horizontal-bar-chart","message-square","search-refraction","upload","arrows-up","cloud-02","expand-03","hourglass-02","message-text-circle-02","search-sm","usb-flash-drive","asterisk-01","cloud-03","expand-04","hourglass-03","message-text-circle","send-horizontal","user-02","asterisk-02","cloud-blank-02","expand-05","hourglass","message-text-square-02","send-vertical","user-03","at-sign","cloud-blank","expand-06","hurricane-02","message-text-square","send","user-check-02","atom-02","cloud-lightning","expand-lg","hurricane-03","message-x-circle","server-02","user-check","atom","cloud-moon","expand","hurricane","message-x-square","server-03","user-circle","attachment-02","cloud-off","eye-off","image-02","microphone-02","server-04","user-down-02","attachment","cloud-raining-02","eye","image-03","microphone-off-02","server-05","user-down","award-02","cloud-raining-03","face-content","image-04","microphone-off","server-06","user-edit","award-03","cloud-raining-04","face-frown","image-check","microphone","server","user-left-02","award-04","cloud-raining-05","face-happy","image-circle","microscope","settings-02","user-left","award-05","cloud-raining-06","face-id-square","image-down","minimize-02","settings-toggle-line","user-minus-02","award","cloud-raining","face-id","image-indent-left","minimize","settings-toggle","user-minus","backpack","cloud-snowing-02","face-neutral","image-indent-right","minus-circle","settings","user-plus-02","bank-note-02","cloud-snowing","face-sad","image-left","minus-square","share-02","user-plus","bank-note-03","cloud-sun-02","face-smile","image-plus","minus","share-03","user-right-02","bank-note","cloud-sun-03","face-wink","image-right","mobile","share-04","user-right","bank","cloud-sun","fast-backward","image-up","modem-02","share-05","user-square","bar-chart-04","cloud","fast-forward","image-user-check","modem","share-06","user-up-02","bar-chart-05","code-02","feather","image-user-down","monitor-02","share-07","user-up","bar-chart-06","code-browser","figma","image-user-left","monitor-03","share","user-x-02","bar-chart-07","code-circle-02","file-02","image-user-plus","monitor-04","shield-02","user-x","bar-chart-08","code-circle-03","file-03","image-user-right","monitor-05","shield-dollar","user","bar-chart-09","code-circle","file-04","image-user-up","monitor","shield-off","users-02","bar-chart-10","code-snippet-02","file-05","image-user-x","moon-02","shield-plus","users-03","bar-chart-11","code-snippet","file-06","image-user","moon-eclipse","shield-separator","users-check","bar-chart-12","code-square-02","file-07","image-x","moon-star","shield-tick","users-down","bar-chart-circle-02","code-square","file-attachment-02","image","moon","shield-zap","users-edit","bar-chart-circle-03","code","file-attachment-03","inbox-02","mouse","shield","users-left","bar-chart-circle","codepen","file-attachment-04","inbox","move","shop","users-minus","bar-chart-growdown","coins-02","file-attachment-05","infinity","music-note-02","shopping-bag-02","users-plus","bar-chart-growup","coins-03","file-attachment","info-circle","music-note-plus","shopping-bag-03","users-right","bar-chart-square-02","coins-04","file-check-02","info-hexagon","music-note","shopping-bag","users-up","bar-chart-square-03","coins-hand","file-check-03","info-square","navigation-pointer-02","shopping-cart-02","users-x","bar-chart-square-down","coins-stacked-02","file-check","intersect-circle","navigation-pointer-off-02","shopping-cart-03","users","bar-chart-square-minus","coins-stacked-03","file-code-02","intersect-square","navigation-pointer-off","shopping-cart","variable","bar-chart-square-plus","coins-stacked-04","file-code","iphone","navigation-pointer","shuffle-02","video-recorder-off","bar-chart-square-up","coins-stacked","file-download-02","italic-02","notification-box","shuffle","video-recorder","bar-chart-square","coins-swap-02","file-download-03","italic-square","notification-message","signal-02","virus","bar-chart","coins-swap","file-download","italic","notification-text","signal-03","voicemail","bar-line-chart","coins","file-heart-02","key-02","octagon","signal","volume-max","battery-charging-02","colors","file-heart-03","key","package-check","simcard","volume-min","battery-charging","columns-02","file-heart","keyboard-02","package-minus","skew","volume-minus","battery-empty","columns-03","file-lock-02","keyboard","package-plus","skip-back","volume-plus","battery-full","columns","file-lock-03","laptop-02","package-search","skip-forward","volume-x","battery-low","command","file-lock","laptop","package-x","slash-circle-01","wallet-02","battery-mid","compass-02","file-minus-02","layer-single","package","slash-circle-02","wallet-03","beaker-02","compass-03","file-minus-03","layers-three-02","paint-pour","slash-divider","wallet-04","beaker","compass","file-minus","layers-three","paint","slash-octagon","wallet-05","bell-02","container","file-plus-02","layers-two-02","palette","sliders-02","wallet","bell-03","contrast-02","file-plus-03","layers-two","paperclip","sliders-03","watch-circle","bell-04","contrast-03","file-plus","layout-alt-02","paragraph-spacing","sliders-04","watch-square","bell-minus","contrast","file-question-02","layout-alt-03","paragraph-wrap","sliders","waves","bell-off-02","copy-02","file-question-03","layout-alt-04","passcode-lock","snowflake-02","webcam-02","bell-off-03","copy-dashed","file-question","layout-alt","passcode","snowflake","webcam","bell-off","copy","file-search-02","layout-bottom","passport","spacing-height-02","wifi-off","bell-plus","corner-down-left","file-search-03","layout-grid-02","pause-circle","spacing-height","wifi","bell-ringing-02","corner-down-right","file-search","layout-grid","pause-square","spacing-width-02","wind-02","bell-ringing-03","corner-left-down","file-shield-02","layout-left","pen-tool-02","spacing-width","wind-03","bell-ringing-04","corner-left-up","file-shield-03","layout-right","pen-tool-minus","speaker-02","wind","bell-ringing","corner-right-down","file-shield","layout-top","pen-tool-plus","speaker-03","x-circle","bell","corner-right-up","file-x-02","left-indent-02","pen-tool","speaker","x-close","bezier-curve-02","corner-up-left","file-x-03","left-indent","pencil-02","speedometer-02","x-square","bezier-curve-03","corner-up-right","file-x","letter-spacing-02","pencil-line","speedometer","x","bezier-curve","cpu-chip-02","file","letter-spacing","pencil","square","youtube","bluetooth-connect","cpu-chip","film-02","life-buoy-02","pentagon","stand","zap-circle","bluetooth-off","credit-card-02","film-03","life-buoy","percent-circle","star-02","zap-fast","bluetooth-on","credit-card-check","film","lightbulb-02","percent","star-03","zap-off","bluetooth-signal","credit-card-down","filter-funnel","lightbulb-03","perspective-02","star-04","zap-square","bold-02","credit-card-download","filter-lines","lightbulb-04","perspective","star-05","zap","bold-square","credit-card-edit","fingerprint-02","lightbulb-05","phone-call-02","star-06","zoom-in","bold","credit-card-lock","fingerprint-03","lightbulb","phone-call","star-07","zoom-out","book-closed","credit-card-minus","fingerprint-04","lightning-02","phone-hang-up","star","book-open-02","credit-card-plus","fingerprint","lightning","phone-incoming-02","stars-02"]

    let things = document.getElementById('things');
    if(things){
        thingTypes.forEach(function (thingType) {
            let opt = document.createElement("option");
            opt.value =  thingType
            opt.text = thingType
            things.add(opt)
        });
    
        things.onchange = (event) => {

            let element = things.parentElement.parentElement;

            let div = document.createElement("div");
            
            div.setAttribute("class", "flex column justify-space align-center thing")
            let iconDiv = document.createElement("div");
            iconDiv.setAttribute("class", "icon-rounded")
            let icon = document.createElement("i");
            icon.setAttribute("class", "icon lg ")
            icon.classList.add(event.target.value);

            iconDiv.appendChild(icon)
            div.appendChild(iconDiv)
            

            let form = document.createElement("div");
            form.id = "thingForm"
            form.appendChild(div)


            if(event.target.value == "help"){
                const field = createDefaultPropertyField()
                form.appendChild(field)

                let button = document.createElement("button");
                button.setAttribute("class", "button-icon text-center")
                button.setAttribute("onclick","addProperty(this);");

                let addIcon = document.createElement("i");
                addIcon.setAttribute("class", "icon lg plus")
                button.appendChild(addIcon)
                form.appendChild(button)

            }else{
                let property1Label = document.createElement("label");
                property1Label.innerHTML = "Property1";
                let property1Div =  document.createElement("div");
                property1Div.setAttribute("class","input");
                let property1Input =  document.createElement("input");
                property1Input.setAttribute("type", "url")
                property1Input.setAttribute("class", "full")

                property1Div.appendChild(property1Label)
                property1Div.appendChild(property1Input)

                let property2Label = document.createElement("label");
                property2Label.innerHTML = "Property2";
                let property2Div =  document.createElement("div");
                property2Div.setAttribute("class","input");
                let property2Input =  document.createElement("input");
                property2Input.setAttribute("type", "text")
                property2Input.setAttribute("class", "full")

                property2Div.appendChild(property2Label)
                property2Div.appendChild(property2Input)

                let property3Label = document.createElement("label");
                property3Label.innerHTML = "Property3";
                let property3Div =  document.createElement("div");
                property3Div.setAttribute("class","input");
                let property3Input =  document.createElement("input");
                property3Input.setAttribute("type", "date")
                property3Input.setAttribute("class", "full")

                property3Div.appendChild(property3Label)
                property3Div.appendChild(property3Input)

                form.appendChild(property1Div)
                form.appendChild(property2Div)
                form.appendChild(property3Div)


            }

            let buttonDiv =  document.createElement("div");
            buttonDiv.setAttribute("class","input");

            let buttonAdd = document.createElement("button");
            buttonAdd.setAttribute("class", "button right")
        
            let addButtonIcon = document.createElement("i");
            addButtonIcon.setAttribute("class", "icon plus md")
            
            buttonAdd.appendChild(addButtonIcon)
            buttonAdd.appendChild(document.createTextNode("Add"))
            buttonDiv.appendChild(buttonAdd)

            form.appendChild(buttonDiv)
            
           

            if(document.getElementById('thingForm')){
                let existingForm =  document.getElementById('thingForm')
                existingForm.replaceWith(form)
                

            }else{
                element.appendChild(form)    
            }

            
            
            

            var inputText = event.target.value;
            console.log(inputText);
        }

    }
   
   
}

setThingsOptions()

// Toast 

const toasters = document.querySelectorAll("button#toast")
toasters.forEach(function (toaster) {
    const type = toaster.getAttribute('data-type')
    let toast = document.querySelector(".toast")
    
    if(type == 'success'){
        toast = document.querySelector(".toast.success")
    }
    if(type == 'warning'){
        toast = document.querySelector(".toast.warning")
    }
    if(type == 'error'){
        toast = document.querySelector(".toast.error")
    }
    
    let closeIcon = toast.querySelector(".toast-close")
    let progress = toast.querySelector(".toast-progress");
    let timer1, timer2;
    toaster.addEventListener("click", () => {
      toast.classList.add("active");
      progress.classList.add("active");
      timer1 = setTimeout(() => {
          toast.classList.remove("active");
      }, 5000); 
      timer2 = setTimeout(() => {
        progress.classList.remove("active");
      }, 5300);
    });
    
    closeIcon.addEventListener("click", () => {
      toast.classList.remove("active");
      
      setTimeout(() => {
        progress.classList.remove("active");
      }, 300);
      clearTimeout(timer1);
      clearTimeout(timer2);
    });
});

      
