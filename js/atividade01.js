let result; 
function calc(n1, n2, op) {
    switch(op) {
        case '+':
            result = n1 + n2
            break
        case '-':
            result = n1-n2
            break
        case '*':
            result = n1 * n2
            break
        case '/':
            result = n1/n2
            break
        default:
            result = 'Comando errado';
    }

    return `O resultado da operação ${n1}${op}${n2} é ${result}`;
}

const calc1 = calc(120, 3,'/');
console.log(calc1)

