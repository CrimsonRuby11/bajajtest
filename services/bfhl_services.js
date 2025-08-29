// SERVICES

function processData(data) {

    var odd_numbers = [];
    var even_numbers = [];
    var alphabets = [];
    var specialchars = [];
    var sum = 0;
    var all = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            const num = parseInt(item, 10);
            sum += num;

            if (num % 2 == 0) {
                even_numbers.push(num.toString());
            } else {
                odd_numbers.push(num.toString());
            }
        }

        else if (item.match(/[a-zA-Z]/g)) {
            alphabets.push(item.toUpperCase());
            all += item;
        }
        else if (item.match(/[^a-zA-Z0-9]/g)) {
            specialchars.push(item);
        }
        else {
            specialchars.push(item);
        }
    });

    console.log(odd_numbers, even_numbers, alphabets, specialchars, sum, all);

    // reverse chars
    const reversed = all.split('').reverse().join('');
    var concatstring = "";
    for (var i = 0; i < reversed.length; i++) {
        if (i % 2 == 0) {
            concatstring += reversed[i].toUpperCase();
        } else {
            concatstring += reversed[i].toLowerCase();
        }
    }

    return {
        odd_numbers,
        even_numbers,
        alphabets,
        specialchars,
        sum: sum.toString(),
        concatstring
    }
}

module.exports = {
    processData
}