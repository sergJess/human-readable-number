module.exports = function toReadable(number) {
    if (typeof number === 'number') {
        const template = {
            '0': 'zero',
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six',
            '7': 'seven',
            '8': 'eight',
            '9': 'nine',
            '10': 'ten',
            '11': 'eleven',
            '12': 'twelve',
            '13': 'thirteen',
            '14': 'fourteen',
            '15': 'fifteen',
            '16': 'sixteen',
            '17': 'seventeen',
            '18': 'eighteen',
            '19': 'nineteen',
            '20': 'twenty',
            '30': 'thirty',
            '40': 'forty',
            '50': 'fifty',
            '60': 'sixty',
            '70': 'seventy',
            '80': 'eighty',
            '90': 'ninety'
        }
        let result = '';
        const stringRepresentOfNumber = '' + number;
        const hundred = 100;

        switch (true) {
            case number >= 100 && number < 1000:
                let integer = Math.trunc(number / hundred);
                let rest = number % hundred;
                if (rest == 0) return result += template['' + integer] + ' hundred';
                if (template['' + rest]) return result += template['' + integer] + ' hundred ' + template['' + rest];
                return result += template['' + integer] + ' hundred ' + template[stringRepresentOfNumber[1] + '0'] + ' ' + template[stringRepresentOfNumber[2]];
                break;
            case number >= 0 && number < 100:
                if (template[stringRepresentOfNumber]) return result += template[stringRepresentOfNumber];
                return result += template[stringRepresentOfNumber[0] + '0'] + ' ' + template[stringRepresentOfNumber[1]];
                break;
        }
        return result;
    }
    return false;
}