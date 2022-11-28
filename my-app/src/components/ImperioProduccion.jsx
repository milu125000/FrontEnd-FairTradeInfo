import '../styles/index.css';


export default function ImperioProduccion (props) {

    return(
        <div lang="en" dir="ltr" style={{"background-color": "#ebcca4"}}>
        <head>
            <meta charset="UTF-8"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


            <title>El impacto de comercio justo</title>
        </head>


        <h1 id="imperioFairtrade" style={{"font-weight":"700"}}>IMPACTO DEL COMERCIO JUSTO</h1>


        <body>
            <div class="container"/>
            <div class="pagina2"> 
            <div class="opciones">    
                <img src="/img/Imperio1.svg" width="225" height="225" alt=""/>
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
            <div class="comercioPregunta" style={{"text-align":"center", "display":"block", "color": "#7A480D;"}}>
                <img src="/img/LineaSeparadora.svg" alt=""/> <h3>¿Cómo implementan esto los trabajadores?</h3> 
            </div>
            

            <div class="comercioPregunta" style={{"justify-content":"center"}}>
                <h1 style={{"position":"absolute"}}>889.589</h1>
                <h1 style={{"position":"absolute", "font-size":"1em", "top": "100px", "padding-left":"35%", "padding-right":"35%", "text-align":"center"}}>Megatoneladas de café producidas por Comercio Justo en 2020</h1>
                <img src="/img/BolsitasCafe.png" alt=""/>
                
            </div>
            <h1 style={{"font-weight":"200", "font-size":"2.5em", "text-align":"center"}}>De este total, la mayor parte es producida orgánicamente y en América Latina</h1>


            </div>

            <div class="container" style={{"background-color":"#FFECD2"}}>

            <div class="pagina2"> 
                <div class="opciones">    
                    <img style={{"position": "relative"}} src="/img/Rojo.svg"  alt=""/>
                    <img style={{"position":"relative", "top":"75px", "right": "250px"}} src="/img/VerdeClar.svg" alt=""/>
                </div>
                <div class="opciones">
                    <img src="/img/Chart1.png"  alt=""/>
                </div>
                
                
            </div>
            
        
            


            </div>

            <div class="container">

            <div class="pagina2">
                <div class="opciones">
                <img src="/img/Porcentajes.png" alt=""/>
                </div>

                <div class="opciones">
                <img src="/img/PieChart.png" alt=""/>
                </div>


            </div>
            </div>
            
        </body>
        </div>
    )

}