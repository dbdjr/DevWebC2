function jogar() {
    var cores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
        "Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
        "CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue",
        "Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
        "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen",
        "DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen",
        "DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
        "DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick",
        "FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold",
        "GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink",
        "IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush",
        "LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
        "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink",
        "LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray",
        "LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen",
        "Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
        "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
        "MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose",
        "Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange",
        "OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise",
        "PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum",
        "PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue",
        "SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna",
        "Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
        "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat",
        "White","WhiteSmoke","Yellow","YellowGreen"]
    var corAleatoria = []
    var corSorteada = null
    var usuario = null
    var vidas = 4
    var comparacao

    for (i = 0; i < 10; i++) {
        corAleatoria.push(cores[Math.floor(Math.random() * cores.length) + 1].toLowerCase())
        corAleatoria.sort
        corSorteada = corAleatoria[Math.floor((Math.random() * corAleatoria.length) + 1)]
    }

    do {
        
        usuario = prompt(`ESCOLHA UMA DAS CORES ABAIXO:\n ${corAleatoria}\nVidas Restantes: ${vidas}`).toLowerCase()
        if (usuario != corSorteada && usuario != "") {
            verificar(corSorteada, usuario, vidas)
            if(comparacao = corSorteada.localeCompare(usuario)> 0 ){
                alert('Resposta incorreta!!')
                alert('A cor está em posição maior na ordem alfabética')
            }
            else{
                alert('Resposta incorreta!!')
                alert('A cor está em posição menor na ordem alfabética')
            }
            vidas--
        }

        else if (usuario == corSorteada) {
            document.body.style.backgroundColor = corSorteada
            alert('Correto!!')
            vidas = 0

        }



    } while (vidas != 0);

    function verificar() {

        if (usuario == "") {
            alert('CAMPO EM BRANCO!!')

        }

    }
}