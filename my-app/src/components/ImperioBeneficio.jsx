


export default function ImperioBeneficio (props) {

    const head = (
        <head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" href="../css/index.css"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>El impacto de comercio justo</title>
        </head>
    )

    const preBody = (
        <div>
            <h1 id="imperioFairtrade" style={{"font-weight":"700"}}>IMPACTO DEL COMERCIO JUSTO</h1>
            <div class="comercioJusto">
            <img src="/img/fairtrade2.svg" alt=""/>
            <h3>¿Qué es Comercio Justo?</h3>
            </div>
            <div class="centrado">
            <h2 style={{"font-weight":"100"}}>Un movimiento que promueve mejores precios, condiciones de trabajo
                decentes y un trato más justo para los agricultores 
                y trabajadores en los países en desarrollo.</h2>
            </div>
        </div>
    )

    const body = (
        <body>
            <div class="container"/>
            <div class="pagina2"> 
            <div class="opciones">    
                <img src='/img/Imperio1.svg' width="225" height="225" alt=""/>
                </div>
                <div class="opciones">
                <img src="/img/Imperio2.svg" width="225" height="225" alt=""/>
                </div>
                <div class="opciones">
                <img src="/img/Imperio3.svg" width="225" height="225" alt=""/>
                </div>
                <div class="opciones">
                <img src="/img/Imperio4.svg" width="225" height="225" alt=""/>
                </div>
                
            </div>
            <div class="container">
            <div class="comercioPregunta" style={{"text-align": "center"
            ,"display":"block","color": "#7A480D;"}}>
                <img src="/img/LineaSeparadora.svg" alt=""/> <h3>¿Que beneficios trae?</h3> 
            </div>
            

            <div class="comercioPregunta" style={{"left": "350px","padding-top":"4%;"}}>
                <img src="/img/info1.svg" alt=""/>

            </div>

            <div class="comercioPregunta" style={{"left": "600px", "padding-top":"4%"}}>
                <img src="/img/info2.svg" alt=""/>
                
            </div>

            <div class="comercioPregunta" style={{"left": "350px", "padding-top":"4%;"}}>
                <img src="/img/info3.svg" alt=""/>
            </div>

            </div>
         </body>
    )

    return ( 
        head,
        preBody,
        body
             
    )
}