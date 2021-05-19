function removeAll(inputString, stringToRemove) {
    let newString = inputString;
    while (newString.indexOf(stringToRemove) >= 0) {
        newString = newString.replace(stringToRemove, '');
    }
    return newString;
}

function cleanseInput(input) {
    let temp = removeAll(input, ' ');
    let cleansedInput = removeAll(temp, ',');
    return cleansedInput.toLowerCase();
}

function bothWays(i, j, s) {
    while (i <= j) {
        if (s[i++] !== s[j--]) {
            return false;
        }
    }
    return true;
}

function goRight(leftIndex, rightIndex, cleansedInput) {
    return bothWays(leftIndex, rightIndex - 1, cleansedInput);
}

function goLeft(leftIndex, rightIndex, cleansedInput) {
    return bothWays(leftIndex + 1, rightIndex, cleansedInput);
}

function validPalindrome(s) {
    let cleansedInput = cleanseInput(s);
    let leftIndex = -1;
    let rightIndex = cleansedInput.length;

    while (leftIndex <= rightIndex) {
        if (cleansedInput[++leftIndex] !== cleansedInput[--rightIndex]) {
            return (goRight(leftIndex, rightIndex, cleansedInput) || goLeft(leftIndex, rightIndex, cleansedInput));
        }
    }
    return true;
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
let canBeAPalindrome7 = validPalindrome('ebcbb e cecabbacec bbcbe');
if (canBeAPalindrome7 != true) {
    console.log('failed test 7');
}
