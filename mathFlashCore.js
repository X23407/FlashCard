class mathCoreClass {
    constructor(){
        this.operator = "+";
        this.number1 = 1;
        this.number2 = 2;
        this.Record = [];
        this.mainLabel = document.getElementById("mainLabel");
        this.answer = 3;
        this.ansLabel = document.getElementById("answer");
        this.n1max = 25;
        this.n1min = 5;
        this.n2min = 5;
        this.n2max = 25;
        this.repetition = 1;



    }

    updateExpression(){ 
        this.ansLabel.innerHTML = this.answer +" (prev Ans)";
        this.number1 = Math.floor(Math.random()*this.n1max + this.n1min);
        this.number2 = Math.floor(Math.random()*this.n2max + this.n2min);
        // this.mainLabel.innerHTML = this.number1 + this.number2
        let expression = `${this.number1} ${this.operator} ${this.number2}`;
        // this.Record.unshift(expression);
        if (this.Record.includes(expression) && this.repetition <= 100){
            // alert("reoition Found");
            this.repetition ++;
            this.updateExpression();
            return
        }
        else if(this.repetition > 100){
            alert("Following all data will be repeated")
            this.Record = []
        }
        this.repetition = 0
        this.mainLabel.innerHTML 
        this.answer = this.calculatorAnswer()
        this.Record.push(expression)
        //visual updation
        this.mainLabel.innerHTML = expression;

        
        
    }

    calculatorAnswer(){
        if (this.operator== "+"){
            return this.number1 + this.number2
        } else if(this.operator == "-"){
            return this.number1 - this.number2;
        } else if (this.operator == "*"){
            return this.number1 * this.number2;
        } else if (this.operator == "/"){
            return (this.number1 / this.number2).toFixed(2);
        }
    }

    showAnswer(){
        let it  = this.mainLabel.innerText;
        if (it == this.answer){
            this.mainLabel.innerHTML = `${this.number1} ${this.operator} ${this.number2}`;
            return
        }
        this.mainLabel.innerHTML = this.answer;
    }
    changedOperator() {
        this.operator = document.getElementById("Operation").value;
        this.updateExpression()
        // document.write(this.operator);
    }
    helloWorld(){
        console.log("Hello World");
    }
    changedMode(){
        let mode = document.getElementById("mode").value;
        console.log(mode)
        if (mode == "t-30"){
            this.operator = "*";
            this.n1min = 8;
            this.n1max = 30- this.n1min;
            this.n2min = 3;
            this.n2max = 12-this.n2min;
            //visually updating select operator
            document.getElementById("Operation").value = "*";
        } else if (mode == "one-one"){
            this.n1min = 1;
            this.n2min = 1;
            this.n1max = 9 - this.n1min;
            this.n2max = 9 - this.n2min;
        } else if (mode == "one-two"){
            this.n1min = 8;
            this.n2min = 1;
            this.n1max = 99 - this.n1min;
            this.n2max = 9 - this.n2min;
        } else if (mode == "two-two-easy"){
            this.n1min = 8;
            this.n2min = 11;
            this.n1max = 30 - this.n1min;
            this.n2max = 30 - this.n2min;
        } else if (mode == "two-two"){
            this.n1min = 11;
            this.n2min = 11;
            this.n1max = 99 - this.n1min;
            this.n2max = 99 - this.n2min;
        }
    }
}
