function horseTurn() {
    let pole = document.getElementById("enter").value;
    let possiblePole = [];
    let arr = [[2, 1], [2, -1], [-2, 1], [-2, -1], [-1, 2], [-1, -2], [1, 2], [1, -2]];
    if(pole[0]<='H' && pole[0]>='A'&& pole[1] <= 8 && pole[1] >= 1) {
        for (let i = 0; i < arr.length; i++) {
            let x = String.fromCodePoint(pole.codePointAt(0) + arr[i][0]);
            let y = parseInt(pole[1]) + arr[i][1];
            if (x <= 'H' && x >= 'A' && y <= 8 && y >= 1) {
                possiblePole.push(x + y);
            }
        }
        alert(possiblePole);
    }
    else{
        alert('Неправильный ввод');
    }

}