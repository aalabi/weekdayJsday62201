function atm(amount) {
  let payout;
  let reminder;
  let bill1000 =
    (bill500 =
    bill200 =
    bill100 =
    bill50 =
    bill20 =
    bill10 =
    bill5 =
    bill1 =
      0);

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
