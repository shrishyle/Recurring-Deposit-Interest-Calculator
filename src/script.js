// function calculateReturn(years, initialAmt, roi, addContri) {
//   principle = initialAmt;
//   let months = years * 12;
//   let accmulatedInterest = 0;
//   let mthlyinterest = 0;
//   for (let i = 0; i < months; i++) {
//     if (i > 0) {
//       principle = Math.round(principle) + Math.round(initialAmt);
//     }

//     console.log(`Month: ${i + 1} - Opening Accumulated Interest - `, Math.round(accmulatedInterest));
//     console.log(`Month: ${i + 1} - Opening Monthly Interest - `, Math.round(mthlyinterest));
//     console.log(`Month: ${i + 1} - Monthly Opening Principle: ${Math.round(principle)}`);

//     mthlyinterest = Math.round((principle * (roi / 100)) / 12);
//     accmulatedInterest = Math.round(accmulatedInterest) + Math.round(mthlyinterest);
//     console.log(`Month: ${i + 1} - Post Calculation Monthly Interest - `, Math.round(mthlyinterest));

//     let monthNumber = Math.round(parseFloat(i)) + Math.round(parseFloat(1));

//     if (monthNumber % 3 === 0) {
//       principle = Math.round(principle) + Math.round(accmulatedInterest) + Math.round(addContri);
//       console.log(`Quarter ${(i + 1) / 3} Accumulated Interest`, Math.round(accmulatedInterest));
//       accmulatedInterest = 0;
//     }

//     console.log(`Month: ${i + 1} - Closing Accmulated Interest - `, Math.round(accmulatedInterest));
//   }
//   console.log(`Closing Principle: ${principle}`);
// }

// calculateReturn(30, 10000, 7, 1000);

//Same function as above but without the console.log statements.
function calculateReturn(years, initialAmt, roi, addContri) {
  principle = initialAmt;
  let months = years * 12,
    accmulatedInterest = 0,
    mthlyinterest = 0;

  for (let i = 0; i < months; i++) {
    if (i > 0) {
      principle = Math.round(principle) + Math.round(initialAmt);
    }
    mthlyinterest = Math.round((principle * (roi / 100)) / 12);
    accmulatedInterest =
      Math.round(accmulatedInterest) + Math.round(mthlyinterest);
    let monthNumber = Math.round(parseFloat(i)) + Math.round(parseFloat(1));
    if (monthNumber % 3 === 0) {
      principle =
        Math.round(principle) +
        Math.round(accmulatedInterest) +
        Math.round(addContri);
      accmulatedInterest = 0;
    }
  }
  console.log(`Amount Invested = ${initialAmt * years * 12}`);
  console.log(`Total Interest Earned = ${principle - initialAmt * years * 12}`);
  console.log(`Maturity Amount = ${principle}`);
  console.log(`Total Additional Amount Invested = ${addContri * years * 4}`);
}

calculateReturn(30, 25000, 10, 0);
