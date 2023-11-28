import { useState } from "react"
import './Calculadora.css'
export default function Calculadora() {
    const [num, setNum] = useState('0');
    const [resultado, setResultado] = useState(0);
    const [operation, setOperation] = useState(null);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

    // numero seleccionado, de una o mas cifras
    const handleNumSelected = (numero) => {
        setNum((prevNum) => (prevNum === '0' ? String(numero) : prevNum + numero))
    }
    console.log(num);

    // seleccionar la operacion, suma, resta, mult, div
    const handleOperation = (operationSelected) => {
        setOperation(operationSelected);
        setNum1(Number(num))
        setNum('0')
    }
    console.log('numero 1: ' + num1)


    // resetear todo
    const handleReset = () => {
        setResultado(0)
        setNum('0')
        setOperation(null)
        setNum1(0)
        setNum2(0)
    }

    const operationFn = () => {
        switch (operation) {
            case 'sumar':
                setResultado(num1 + num2)
                break;
            case 'restar':
                setResultado(num1 - num2)
                break
            case 'multiplicar':
                setResultado(num1 * num2)
                break;
            case 'dividir':
                setResultado(num1 / num2)
                break
            case 'resto':
                setResultado(num1 % num2)
                break
            default:
                break;
        }
    }
    // mostrar resultado
    const handleIgual = () => {
        setNum2(Number(num))
        setNum('0')
        // setResultado(num+num2)
        // console.log(resultado);
        operationFn();
    }

    return (
        <div className="calculator_ctn">
            <div className="resultado">
                <p>{num !== '0' ? num : resultado}</p>
            </div>
            <form action="#">


                <div>
                    <div className="buttons_ctn_top">
                        <button onClick={handleReset}>AC</button>
                        <button value='aaa' onClick={(e) => handleOperation(e.target.value)}>+/-</button>
                        <button value='resto' onClick={(e) => handleOperation(e.target.value)}>%</button>
                    </div>
                    <div className="numbers_ctn">
                        <button onClick={() => handleNumSelected(1)}>1</button>
                        <button onClick={() => handleNumSelected(2)}>2</button>
                        <button onClick={() => handleNumSelected(3)}>3</button>
                        <button onClick={() => handleNumSelected(4)}>4</button>
                        <button onClick={() => handleNumSelected(5)}>5</button>
                        <button onClick={() => handleNumSelected(6)}>6</button>
                        <button onClick={() => handleNumSelected(7)}>7</button>
                        <button onClick={() => handleNumSelected(8)}>8</button>
                        <button onClick={() => handleNumSelected(9)}>9</button>
                        <button onClick={() => handleNumSelected(0)} className="num_0">0</button>
                    </div>
                </div>

                <div className="buttons_ctn">
                    <button value='sumar' onClick={(e) => handleOperation(e.target.value)}>+</button>
                    <button value='restar' onClick={(e) => handleOperation(e.target.value)}>-</button>
                    <button value='multiplicar' onClick={(e) => handleOperation(e.target.value)}>X</button>
                    <button value='dividir' onClick={(e) => handleOperation(e.target.value)}>/</button>
                    <button onClick={handleIgual}>=</button>
                </div>

            </form>


        </div>
    )
}
