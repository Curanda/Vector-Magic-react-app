import React, { useState, useEffect } from "react"
import Box from "./Box.jsx"
import Victor from "victor"
import { useForm } from "react-hook-form";
import Canvas from "./Canvas.jsx"
function CalculationScreen() {
    const [firstVector, setFirst] = useState([0,0])
    const [secondVector, setSecond] = useState([0,0])
    const [result, setResult] = useState([0,0])
    const [operation, setOperation] = useState('add')
    const [submitted, setSubmitted] = useState(false)
    const { register, clear, handleSubmit, watch, formState: { errors } } = useForm();

    function updateOperation(e, data) {
        const selectedOperation = e.target.value

        console.log(result)
    }
    function onSubmit(data) {
        setFirst([Number(data.x1), Number(data.y1)])
        setSecond([Number(data.x2), Number(data.y2)])
        console.log(data)
        if (operation === 'add') {
            setResult([(Number(data.x1) + Number(data.x2)), (Number(data.y1) + Number(data.y2))]);
        } else if (operation === 'subt') {
            setResult([(data.x1 - data.x2), (data.y1 - data.y2)]);
        } else if (operation === 'mult') {
            setResult([(data.x1 * data.x2), (data.y1 * data.y2)]);
        } else if (operation === 'div') {
            setResult([(data.x1 / data.x2), (data.y1 / data.y2)]);
        }
        setSubmitted(true)
    }

    return (
    <div>
        <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Współrzędne 1-szego wektora : </label>
                    <input type="number" name="x1" {...register('x1')} placeholder="x1" />
                    <input type="number" name="y1" {...register('y1')} placeholder="y1" />
                </div>
                <div>
                    <label>Współrzędne 2-giego wektora : </label>
                    <input type="number" name="x2" {...register('x2')} placeholder="x2" />
                    <input type="number" name="y2" {...register('y2')} placeholder="y2" />
                </div>
                <div>
                    <p>Wybierz operację : </p>
                    <select onChange={(e)=>setOperation(e.target.value)}>
                        <option value={'add'}>Dodawanie</option>
                        <option value="subt">Odejmowanie</option>
                        <option value="mult">Mnożenie</option>
                        <option value="div">Dzielenie</option>
                    </select>
                    <button type="submit">Oblicz</button>
                </div>
            </form>
        </Box>
        <Box>
            <div>
                <h4>Wynik : </h4>
                <p>{firstVector.toString()} {secondVector.toString()}</p>
                <p>{result.toString()}</p>
            </div>
        </Box>
        <Canvas firstVector={firstVector} secondVector={secondVector} result={result} />
    </div>
    )
}

export default CalculationScreen