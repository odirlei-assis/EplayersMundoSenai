let menu = document.getElementById("menu");

        function mostrarMenu(){

            if(getComputedStyle(menu).display != "flex"){
                menu.style.display = "flex"
            }else{
                menu.style.display = "none"
            }

            //event.preventDefault();
        }

        function renderizarProdutos(){
            let secaoProdutos = document.getElementById("secao_produtos");

            let listaProdutos = [
                {
                    nome: "Mouse Redragon Storm RGB branco M808W-RGB",
                    imagem: "./img/mouse.png",
                    descricao: "Esse mouse tem 10000dpi e controle DPI",
                    preco: "159.90"
                },
                {
                    nome: "Teclado Mecânico Gamer Redragon Kumara",
                    imagem: "./img/teclado.png",
                    descricao: "Esse teclado possui Switches Blue",
                    preco: "229.00"
                },
                {
                    nome: "Headset Gamer Redragon Pandora",
                    imagem: "./img/headset.png",
                    descricao: "Esse headset possui microfene integrado de alta qualidade",
                    preco: "199.50"
                },
                {
                    nome: "Mousepad Gamer Redragon Pluto",
                    imagem: "./img/mousepad.png",
                    descricao: "Esse mouse pad é do tipo speed e possui rgb nas laterais",
                    preco: "89.00"
                }
            ]

            let template = ""

            for(let index = 0; index < listaProdutos.length; index++){
                template = template + `
                <div class="card">
                    <img src="${listaProdutos[index].imagem}" alt="">
                    <h3>${listaProdutos[index].nome}</h3>
                    <p>${listaProdutos[index].descricao}</p>
                    <p>R$ ${listaProdutos[index].preco}</p>
                    <a href="">Comprar</a>
                </div>
                `
            }

            secaoProdutos.innerHTML = template
        }

        //funcao jquery para banner rotativo

        $(document).ready(function(){

            let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]
            let slideAtual = 1

            function mudarSlide() {
                console.log(slideAtual)

                //remode o slide anterior
                if(slideAtual > 0){
                    $(".banner").removeClass(listaSlides[slideAtual - 1])
                } else {
                    $(".banner").removeClass(listaSlides[(listaSlides.length - 1)])
                }
                

                //Mostra o slide atula da lista de slides
                $(".banner").addClass(listaSlides[slideAtual])

                //incrementa a variavel slideAtual
                slideAtual++

                if (slideAtual > (listaSlides.length - 1)) {
                    slideAtual= 0
                }

            }

            setInterval(mudarSlide, 2000)
        })