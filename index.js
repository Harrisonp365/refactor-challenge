// A number is interesting if it is has atleast 2 of the following:
// prime,
// ends in 1 or 5,
// sum of digits is a multiple of 10,
// all digits are multiples of 3 or 5

function isInteresting(n) {
    let isPrime = true;
    let sumTen = false;
    let endsInOneOrFive = false;
    let multiplesFiveOrThree = true;
    let count = 0;

    for (let i = n - 1; i > 1; --i) {
        if (n % i === 0) {
            isPrime = false;
            if(!isPrime) {count += 1}
            break;
        }
    }

    let sum = 0;
    let stringified = n.toString();
    for (let i = 0; i < stringified.length; ++i) {
        sum += parseInt(stringified[i]);
    }

    if (sum % 10 === 0) {
        sumTen = true;
        count += 1;
    } 

    if (n % 10 === 1 || n % 10 === 5) {
        endsInOneOrFive = true;
        count += 1;
    }

    for (let i = 0; i < stringified.length; ++i) {
        if (stringified[i] % 3 === 0 || stringified[i] % 5 === 0) {
            count += 1;
            continue;
        } else {
            multiplesFiveOrThree = false;
            break;
        }
    }

    console.log(isPrime, sumTen, endsInOneOrFive, multiplesFiveOrThree);
    console.log("COUNT: ", count);

    if (count > 1) {
        return n + " is intersting";
    } else if (count > 0) {
        return n + " is okay";
    } else {
        return n + " is booooooring";
    }
}

const numberbutton = document.querySelector("#submitButton");
numberbutton.addEventListener("click", () => {
    const input = document.querySelector("#numberInput");
    const value = parseInt(input.value);

    const interesting = isInteresting(value);

    const output = document.querySelector("#output");
    output.innerText = interesting;
});

const primeButton = document.querySelector("#primeButton")
primeButton.addEventListener("click", () => {
    const input = document.querySelector("#primeInput");
    const n = parseInt(input.value);

    isPrime = true;

    for (let i = n - 1; i > 1; --i) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    const output = document.querySelector("#primeOutput");
    if (isPrime) {
        output.innerHTML = n + " is prime!";
    } else {
        output.innerHTML = n + " is not prime!";
    }
});