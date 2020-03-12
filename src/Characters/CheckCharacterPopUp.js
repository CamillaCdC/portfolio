import characters from './CharacterCoordinates'

const checkCharacterPopUp = {
    checkPopUpForRon: function(harry) {
        if (characters.ron.toString() === harry) {
            return ""
        } else {
            return "none"
        }    
    },

    checkPopUpForHermione: function(harry) {
        if (characters.hermione.toString() === harry) {
            return ""
        } else {
            return "none"
        }
    },

    checkPopUpForDumbledoor: function(harry) {
        if (characters.dumbledoor.toString() === harry) {
            return ""
        } else {
            return "none"
        }
    },

    checkPopUpForLuna: function(harry) {
        if (characters.luna.toString() === harry) {
            return ""
        } else {
            return "none"
        }
    },

    checkPopUpForHedwig: function(harry) {
        if (characters.hedwig.toString() === harry) {
            return ""
        } else {
            return "none"
        }
    }
}

export default checkCharacterPopUp;


