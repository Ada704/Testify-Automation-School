function reverseBanks(bankName){
    return bankName.slice().reverse();
}
const originalBanks = ['Uba', 'Access', 'Eco', 'Zenith', 'FirstBank'];
 const reversedBanks= reverseBanks(originalBanks);
 console.log(reversedBanks);

