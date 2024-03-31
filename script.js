'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Kshitij More',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin:1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin:2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin:3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const displayMovements = function (movements,sort=false) {
  containerMovements.innerHTML = '';

  const movs=sort? movements.slice().sort((a,b)=>a-b):movements;
  
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

<div class="movements__value">${mov.toFixed(2)}</div>
</div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};








const calcDisplayBalance= function(acc){
   acc.balance = acc.movements.reduce((acc,val)=> acc+val,0);

  labelBalance.textContent=`${acc.balance.toFixed(2)} EUR`;

}




const calcDisplaySummary=function(acc){
         const incomes= acc.movements
         .filter(mov=> mov>0) 
         .reduce((acc,mov)=>mov+acc,0 );

         labelSumIn.textContent=`${incomes.toFixed(2)} $`;

         const out= acc.movements
         .filter(mov=> mov<0)
         .reduce((acc,mov)=>mov+acc,0 );
         labelSumOut.textContent=`${Math.abs(out).toFixed(2)} $`

         const interest = acc.movements.filter(function(mov){
            return mov>0;
         }).map(deposit=> (deposit * 1.2)/100)
         .reduce((acc,int)=> acc + int,0);
         labelSumInterest.textContent= `${interest.toFixed(2)} $`;
}












const createUserName=function(accs){
   accs.forEach(function(acc)
   {
            acc.userName=acc.owner.toLowerCase().split(' ').map(function(user){
              return user[0];
             }).join("");
   })
}

createUserName(accounts);


const updateUI = function(acc){

  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
   
}










let currentAccounts;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();

   currentAccounts=accounts.find(acc=>acc.userName==inputLoginUsername.value);
  
  if(currentAccounts?.pin===Number(inputLoginPin.value)){
    // 
    inputLoginUsername.value=inputLoginPin.value="";
    // inputLoginPin.blur();
    // inputLoginUsername.ariaPlaceholder="user";
    labelWelcome.textContent=`Welcome Back ${currentAccounts.owner.split(" ")[0]}`;

    containerApp.style.opacity=100;

   updateUI(currentAccounts);
  
  }
  
});









btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount= Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(acc=> acc.userName=== inputTransferTo.value);

  // console.log(amount, receiverAcc,currentAccounts);
 
 inputTransferAmount.value = inputTransferTo.value ="";
 
  if(amount>0 && receiverAcc && currentAccounts.balance>=amount && receiverAcc?.userName !== currentAccounts.userName){
    //  console.log(currentAccounts);
     currentAccounts.movements.push(-amount);
     receiverAcc.movements.push(amount);
     updateUI(currentAccounts);
  }


  
});





btnLoan.addEventListener('click',function(e){
  e.preventDefault();
 const amount=Math.floor(inputLoanAmount.value);
 if(amount>0 &&  currentAccounts.movements.some(mov=> mov>=amount*0.1)){
  currentAccounts.movements.push(amount);
  updateUI(currentAccounts);
 }
});






btnClose.addEventListener("click",function(e){
    e.preventDefault();
    if(inputCloseUsername.value===currentAccounts.userName && Number(inputClosePin.value)=== currentAccounts.pin){
     
       const index= accounts.findIndex(acc=> acc.userName===currentAccounts.userName);
      //  console.log(index);
       
       accounts.splice(index,1);
       containerApp.style.opacity=0;
       labelWelcome.textContent="Log in to get started";
    }

    inputCloseUsername.value = inputClosePin.value ="";
});

let sorted=false
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccounts.movements,!sorted);
 sorted=!sorted;
})







// console.log(accounts);


// section -----------152
// const withdrawal= 
// account1.movements.filter(function(dep){
//      return dep<0
// })
// console.log(withdrawal);













 



// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

















// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




/////////////////////////////////////////////////
