import './app.css'

import Display from '../components/display/Display'
import Botton from '../components/bottons/Botton'
import Layout from '../components/layout/Layout'

import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../redux/createslice/CreateSlice'

export default () => {
    const valor = useSelector(state => state.calculo.contador)

    const [numero, setNumero] = useState(0)
    
    const despatch = useDispatch()
    despatch(increment(numero))

    return(
        <div className="container-main">
            <Layout>
                <Botton Onclick={() => setNumero(numero - 1)}>-</Botton>
                <Display>{valor}</Display>
                <Botton Onclick={() => setNumero(numero + 1)}>+</Botton>
            </Layout>
        </div>
    )
}