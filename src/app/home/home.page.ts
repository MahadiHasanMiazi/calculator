import {Component} from '@angular/core';
import {isNumber} from 'util';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor() {
    }

    value = '0';
    isNewInput = true;
    previousNumber = '0';
    operator = '';
    fullString = '';
    x = '';
    numberGroups = [
        [7, 8, 9, '/'],
        [4, 5, 6, '*'],
        [1, 2, 3, '-'],
        [0, '.', '%', '+']
    ];

    onButtonPress(input) {
        if (isNumber(input)) {
            if (this.isNewInput) {
                this.value = '' + input;
                this.previousNumber = this.value;
            } else {
                this.value += '' + input;
                this.previousNumber = this.value;
            }
            this.isNewInput = false;
        } else if (input === 'c') {
            this.value = '0';
            this.isNewInput = true;
        } else if (input === '+' || input === '-' || input === '*' || input === '/') {
            // this.value = this.previousNumber;
            const chckOprtr = this.value.length - 1;
            if (this.value.charAt(chckOprtr) === '+' || this.value.charAt(chckOprtr) === '-' || this.value.charAt(chckOprtr) === '*' || this.value.charAt(chckOprtr) === '/') {
                this.value += '';
            } else {
                this.value += '' + input;
                this.fullString = this.value;
                // this.isNewInput = true;
                this.operator = input;
                // this.value = this.previousNumber +
            }
        } else if (input === '=') {
            const chckOprtr = this.value.length - 1;
            if (this.value.charAt(chckOprtr) === '+' || this.value.charAt(chckOprtr) === '-' || this.value.charAt(chckOprtr) === '*' || this.value.charAt(chckOprtr) === '/') {
                this.value = this.value;
            } else {
                this.value = '' + eval(this.value);
            }
        } else if (input === '.') {
            const chckOprtr = this.value.length - 1;
            if (this.value.charAt(chckOprtr) === '.') {
                this.value += '';
            } else {
                // this.value += '' + input;
                let i = 0;
                let x = '';
                let countOfPoint = 0;
                // let arrayOfArray = '';
                const arrayOfValue = this.value.split(/\+|-|\/|\*/);
                const arr = arrayOfValue[arrayOfValue.length - 1];
                // arrayOfValue.forEach((arr) => {
                console.log(arr);
                for (i = 0; i < arr.length; i++) {
                    // console.log('under loop' + arr[i]);
                    if (arr[i] === '.') {
                        countOfPoint += 1;
                    }
                    x = arr[i];
                }
                if (countOfPoint === 0) {
                    this.value += '' + input;
                }
                if (countOfPoint === 1) {
                    this.value += '';
                }
                // console.log('outside loop' + x);
                // });
                // arrayOfValue.forEach((arr) => {
                //   // console.log(arr);
                //   arrayOfArray = arr;
                //
                //
                //
                //   // for ( let i = 0; i < arr.length; i++ ) {
                //   //  console.log(arr[i]);
                //   //  if (arr[i] === '.') {
                //   //    console.log();
                //   //  }
                //   // const char = arr.split(/\./);
                //   // console.log(char);
                //   // this.value += '' + input;
                // });
                // if (arrayOfArray.includes('.')) {
                //   this.value += '' + input;
                // } else {
                //   this.value += '';
                // }
                // console.log(arrayOfArray);
            }
        } else if (input === 'x') {
            if (this.value.length > 0) {
                this.value = this.value.slice(0, -1);
            }
            if (this.value.length === 0) {
                this.value = '0';
                this.isNewInput = true;
            }
            // console.log(this.value);
            // console.log(this.value.length);
        }
    }

}
