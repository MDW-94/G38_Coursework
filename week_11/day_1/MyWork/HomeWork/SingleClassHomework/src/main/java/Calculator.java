public class Calculator {

    private Double answer;


    public Calculator(){
        this.answer = 0.0;
    }

    public double getAnswer(){
        return this.answer;
    }

//    method for changing the answer value?

    public void addValuesTogether(double number1, double number2){
        this.answer = number1 + number2;
    }

    public void substractValue( double number1, double number2){
        this.answer = number1 - number2;
    }

    public void multiplyValue( double number1, double number2){
        this.answer = number1 * number2;
    }

    public void divideValue ( double number1, double number2 ){
        this.answer = number1 / number2;
    }
}
