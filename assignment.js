// Kilometer To Meter Converter
function kilometerToMeter(kilometer) {
  if (typeof kilometer === "number" && kilometer >= 0) {
    return kilometer * 1000;
  } else {
    console.log("Input value should be positive number");
  }
}

// Budge Calculator
function budgetCalculator(clock, mobile, laptop) {
  // value  should be number
  let number =
    typeof clock === "number" &&
    typeof mobile === "number" &&
    typeof laptop === "number";

  // value should integer
  let integer = clock % 1 === 0 && mobile % 1 === 0 && laptop % 1 === 0;

  // value should be positive
  let positive = clock >= 0 && mobile >= 0 && laptop >= 0;

  if (number && integer && positive) {
    return clock * 50 + mobile * 100 + laptop * 500;
  } else {
    console.log("Input value should be positive integer number");
  }
}

// Hotel Cost Calculator
function hotelCost(day) {
  let positiveNumber = typeof day === "number" && day >= 0;

  let cost = 0;

  if (positiveNumber) {
    if (day <= 10) {
      cost = day * 100;
    } else if (day <= 20) {
      let costOf10 = 10 * 100;
      let remain = day - 10;
      let costOfAfter10 = remain * 80;

      cost = costOf10 + costOfAfter10;
    } else {
      let costOf10 = 10 * 100;
      let costOfAfter10 = 10 * 80;
      let remain = day - 20;
      let costOfAfter20 = remain * 50;

      cost = costOf10 + costOfAfter10 + costOfAfter20;
    }

    return cost;
  } else {
    console.log("Input value should be positive digit");
  }
}

// Find Mega Friend
function megaFriend(arr) {
  let itemsLength = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        itemsLength.push(parseInt(arr[i].length));
      } else {
        console.log("Array item should be string");
        return;
      }
    }

    let maxLength = Math.max.apply(null, itemsLength);
    let index = itemsLength.indexOf(maxLength);
    return arr[index];
  } else {
    console.log("Input value should be array");
  }
}
