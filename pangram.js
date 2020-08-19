//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (s) => {
var letters = "zqxjkvbpygfwmucldrhsnioate"
        s = s.toLowerCase().replace(/[^a-z]/g,'')
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters[i]) < 0) return false
    return true
}
