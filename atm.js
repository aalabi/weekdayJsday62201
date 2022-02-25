let amount = prompt("Enter an amount");
let accebankATM = new ATM("Awolowo Rd Ikeja");
//accebankATM.myLocation = "Awolowo Rd Ikeja";
document.write("ATM siutated at " + accebankATM.myLocation + "<br/>");
document.write(accebankATM.payout(amount));
