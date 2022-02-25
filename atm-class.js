class ATM {
  constructor(myLocation) {
    this.myLocation = myLocation;
  }
  payout(amount) {
    let payout;
    let reminder;
    let bill1000 = 0;
    let bill500 = 0;
    let bill200 = 0;
    let bill100 = 0;
    let bill50 = 0;
    let bill20 = 0;
    let bill10 = 0;
    let bill5 = 0;
    let bill1 = 0;

    bill1000 = Math.floor(amount / 1000);
    reminder = amount % 1000;
    bill500 = Math.floor(reminder / 500);

    payout = `
    Amount Enter: ${amount}<br/>
    Bills       Amount<br/>
    ${bill1000}          1000<br/>
    ${bill500}           500<br/>
    ${bill200}           200<br/>
    ${bill100}           100<br/>
    ${bill50}           50<br/>
    ${bill20}           20<br/>
    ${bill10}           10<br/>
    ${bill5}           5<br/>
    ${bill1}           1<br/>
`;
    return payout;
  }
}
