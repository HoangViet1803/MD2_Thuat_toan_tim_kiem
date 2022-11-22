let Viettel = [];
let Mobifone = [];
let Vinaphone = [];
let phones = ["0879937599","0963069183","0344563968"];
function classify (phones: string[]): void {
    for (let _phone of phones) {
        switch (_phone.substring(0,3)) {
            case "087":
                Vinaphone.push(_phone)
                break;
            case "096":
                Viettel.push(_phone)
                break;
            case "034":
                Mobifone.push(_phone)
                break
        }
    }
}

classify(phones)
console.log(Viettel);
console.log(Vinaphone);

