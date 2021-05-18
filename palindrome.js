function removeAll(inputString, stringToRemove) {
    let newString = inputString;
    while (newString.indexOf(stringToRemove) >= 0) {
        newString = newString.replace(stringToRemove, '');
    }
    return newString;
}

function isPalindrome(input) {
    let reversed = [...input].reverse().join('');
    return reversed === input.join('');
}

function cleanseInput(input) {
    let temp = removeAll(input, ' ');
    let cleansedInput = removeAll(temp, ',');
    return cleansedInput.toLowerCase();
}


function handleLastChance(lastTime, input, resetPoint) {
    if (lastTime) {
        return false;  // not possible with only one removal
    } else {
        console.log('try one last time');
        return validPalindrome(input, resetPoint);
    }
}

function determineIfCharactersMatch(i, skipLeft, cleansedInput, skipRight) {
    let leftIndex = i + skipLeft;
    let rightIndex = cleansedInput.length - 1 - i - skipRight;
    return cleansedInput[leftIndex] === cleansedInput[rightIndex];
}

function validPalindrome(input, resetPoint = null) {
    let cleansedInput = cleanseInput(input).split('');

    let lastTry = resetPoint !== null;
    if (isPalindrome(cleansedInput)) {
        return true;
    } else {
        let skipLeft = 0;
        let skipRight = 0;
        let furthestWeNeedToCheck = Math.ceil(cleansedInput.length / 2);
        for (let i = resetPoint || 0; i < furthestWeNeedToCheck; i++) {
            let charactersMatch = determineIfCharactersMatch(i, skipLeft, cleansedInput, skipRight);
            if (charactersMatch) {
                continue;
            } else {
                let haveSkippedThisTry = skipLeft || skipRight;
                if (haveSkippedThisTry) {
                    return handleLastChance(lastTry, input, resetPoint);
                } else {
                    let couldGoLeft = cleansedInput[i + 1] === cleansedInput[cleansedInput.length - 1 - i];
                    let couldGoRight = cleansedInput[i] === cleansedInput[cleansedInput.length - 1 - i - 1];
                    if (couldGoLeft || couldGoRight) {
                        resetPoint = i;
                    }
                    if (lastTry && couldGoRight) {
                        skipRight = 1;
                    } else if (couldGoLeft) {
                        skipLeft = 1;
                    } else if (couldGoRight) {
                        skipRight = 1;
                    } else {
                        return false;
                    }
                }
            }
        }
        return true;
    }
}


let canBeAPalindrome0 = validPalindrome('abccba');
if (canBeAPalindrome0 != true) {
    console.log('failed test 0');
}
let canBeAPalindrome1 = validPalindrome('abc');
if (canBeAPalindrome1 != false) {
    console.log('failed test 1');
}
let canBeAPalindrome2 = validPalindrome('qaomvbpklzdvxftwfbxqqawzohrxqempelbtekbzqvngjhpcyplqwykvfyidemhhzwlatjjzzcssycpghyjhfezernuvpdqrickrlayggbwaiahbdrwawymwccfmfbmpsblokedfivuhvigaoqisquuuzbxkuretkdojlusnhuwxmsvnnlkiogoryoazeclzbjkhdgcdcrjzhpgtrxlybsfgzebjrsdjjqlpzfkannlsjwctvigjcmzigugimcovafiscqulwyrngizvzbdoxdpuraeiirsgszyhyljysgimhgffjlachvdzxymvmfewkipvsquaxbsphjmyrloztrwebqjynbefohsqcirquqcbfgfvbyyimfrhjbxetpnvgqpzlykjcpcxolfepqbtspwuircqhztooslmrvtmkvccddzztztreunygciynvcclkvhbmlqfyudzlbkeeahxhrwudzlxlppmzboiprwillgtzjdwnmptmgknxsgajthwhpfmtxstaclujfcgglyfhyvgphrrppaprlfpmeomdsjtyqknlcsapvolwmhbvkhajifyppnhpgmsaoldvhxuxxpirumncjqeqyasfaqtcpjhacvkakrudhfdbzexjalexihugjbssmjoqvrlucbcwvxnvbxdtqonzngrvijujzrogqvxzfqchdqmjrtkoqysrfmebelreeqbdqwpgaxagzoyjxzfgqrmkisrxfudercfpdonmykmvtiqdnaapdjyxixqmihvmhngdtypdemptqupekppbpdvmfwyaxevccquqmkquejopqwjfubtfcdrcxjlsiyzewynhldnmhdfetojnjhpflohjwonrrfeqklyzvcikhmgnpogsaadwshsvkqaipaptutyloakmhmkvhxcwlkhapytamphsxysofsmpuowkeenvozaabbumeojzcxbpnwbulcbtpyovlbplxwlznjdgesxovvcaxssxacvvoxsegdjnzlwxlpblvoyptbclubwnpbxczjoemubbaazovneekwoupmsfosyxshpmatypahklwcxhvkmhmkaolytutpapiaqkvshswdaasgopngmhkicvzylkqefrrnowjholfphjnjotefdhmndlhnywezyisljxcrdcftbufjwqpojeuqkmquqccvexaywfmvdpbppkepuqtpmedpytdgnhmvhimqxixyjdpaandqitvmkymnodpfcredufxrsikmrqgfzxjyozgaxagpwqdbqeerlebemfrsyqoktrjmqdhcqfzxvqgorzjujivrgnznoqtdxbvnxvwcbculrvqojmssbjguhixelajxezbdfhdurkakvcahjpctqafsayqeqjcnmuripxxuxhvdloasmgphnppyfijahkvbhmwlovpasclnkqytjsdmoempflrpapprrhpgvyhfylggcfjulcatsxtmfphwhtjagsxnkgmtpmnwdjztglliwrpiobzmpplxlzduwrhxhaeekblzduyfqlmbhvklccvnyicgynuertztzzddccvkmtvrmlsootzhqcriuwpstbqpefloxcpcjkylzpqgvnptexbjhrfmiyybvfgfbcquqricqshofebnyjqbewrtzolrymjhpsbxauqsvpikwefmvmyxzdvhcaljffghmigsyjlyhyzsgsriiearupdxodbzvzignrywluqcsifavocmigugizmcjgivtcwjslnnakfzplqjjdsrjbezgfsbylxrtgphzjrcdcgdhkjbzlcezaoyrogoiklnnvsmxwuhnsuljodkterukxbzuuuqsiqoagivhuvifdekolbspmbfmfccwmywawrdbhaiawbggyalrkcirqdpvunrezefhjyhgpcyssczzjjtalwzhhmediyfvkywqlpycphjgnvqzbketblepmeqxrhozwaqqxbfwtfxvdzlkpbvmoaqv');
if (canBeAPalindrome2 != true) {
    console.log('failed test 2');
}
let canBeAPalindrome3 = validPalindrome('abdccba');
if (canBeAPalindrome3 != true) {
    console.log('failed test 3');
}
let canBeAPalindrome4 = validPalindrome('eedede');
if (canBeAPalindrome4 != true) {
    console.log('failed test 4');
}
let canBeAPalindrome5 = validPalindrome('aguokepatgbnvfqmgml cupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuc u lmgmqfvnbgtapekouga');
if (canBeAPalindrome5 != true) {
    console.log('failed test 5');
}
let canBeAPalindrome6 = validPalindrome('eeccccbebaeeabebccceea');
if (canBeAPalindrome6 != false) {
    console.log('failed test 6');
}
let canBeAPalindrome7 = validPalindrome("ebcbb e cecabbacec bbcbe");
if (canBeAPalindrome7 != true) {
    console.log('failed test 7');
}
