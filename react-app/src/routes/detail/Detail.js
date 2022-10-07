import Counter from "../../components/Counter";
const Detail = ({className}) => {
    return (
        <body className={className}>
            <div className="text-lg text-white bg-red-600"><p>Pido disculpas a mi tutor corrector! 
                LLegué a esta ruta desde un local .json sin url definida a las 23:43.
                Y se me agotaron las fuerzas y recursos para seguir.
                </p>
            </div>
            <Counter/>
        </body>
    )
}

export default Detail;