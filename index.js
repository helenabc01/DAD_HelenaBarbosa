const plus = document.querySelector(".postadd"); //botão adicionar
const post = document.querySelector(".post-modal"); //aside
const btnpostar = document.querySelector(".postar"); //botão de postar
const feed = document.querySelector(".secao-posts"); //section

//hora do post
var dataAtual = new Date();
var hora = dataAtual.getHours();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var min = dataAtual.getMinutes();

//mostrar post
plus.addEventListener("click", () => {
  post.style.display = "flex";
});
//esconder post
post.addEventListener("click", (e) => {
  if (e.target == post) {
    post.style.display = "none";
  }
});

//adicionar postagem
btnpostar.addEventListener("click", postar);

function postar(event) {
  event.preventDefault();
  let textoComent = document.querySelector(".comentario-form");
  let comentario = textoComent.value;
 
      feed.insertAdjacentHTML('afterbegin',  `
      <article class='post'>
      <div class="post-info">
      <div class="usuario-info">
      <div class="avatar"></div>
                  <div class="nome-hora">
                  <p class="nome">Joana da Silva Peixoto</p>
                  <p class="hora">postado dia ${dia} do ${mes} às ${hora}:${min} </p>
                  </div>
                  </div>
                  <p class="comentario">
                  ${comentario}
                  </p>
                  </div>
                  <img src=${url} class="post-imagem" alt="" />
              <div class="post-interacoes">
              <div class="container-like">
              <img class="like-btn" src="like.svg" alt="like" />
              <p class="descricao-like">Curtir</p>
              </div>
              <div class="container-coment">
              <img class="coment-btn" src="comentario.svg" alt="like" />
                  <p class="descricao-comentario">Comentários</p>
                </div>
              </div>
                  </article> 
                  `)
          
       
      textoComent.value = "";
     
      const curtida = feed.querySelector(".container-like")

      curtida.addEventListener("click", curtir)
      
      
      
      function curtir(){
      
        const likeDescricao = feed.querySelector(".descricao-like")
      
        const simbLike = feed.querySelector(".like-btn")
      
        if(likeDescricao.textContent == "Curtir"){
      
          likeDescricao.textContent = "Descurtir"
      
          likeDescricao.style.color = "blue"
      
          simbLike.setAttribute("src", "like-solid.svg")
      
        }else{
      
          likeDescricao.textContent = "Curtir"
      
          likeDescricao.style.color = "#888"
      
          simbLike.setAttribute("src", "like.svg")
      
         }
      
       }

} 

//sumir aside quando postado
btnpostar.addEventListener("click", (e) => {
  if (e.target == btnpostar) {
    post.style.display = "none";
  }
});

let url;

////////////////////////////////
const inputFile = document.querySelector('#campo-foto')
inputFile.addEventListener("change", previewImg)

function previewImg(e){
   url = e.target.files[0].name;

  const img = document.createElement("img");
  img.setAttribute("src", `${url}`);
  img.classList.add("imagem-form");

  const secaoImg = document.querySelector(".container-imagem");
  inputFile.style.display ="none"
  secaoImg.appendChild(img)
}



const entrar = document.querySelector(".Entrar");
const btnLog = document.querySelector(".login");
const logIn = document.querySelector(".logIn");
btnLog.addEventListener("click", () => {
  logIn.style.display = "flex";
});
//esconder login
logIn.addEventListener("click", (e) => {
  if (e.target == logIn) {
    logIn.style.display = "none";
  }
});
//escnder depois de clicado no entrar
entrar.addEventListener("click", (e) => {
  if (e.target == entrar) {
    logIn.style.display = "none";
  }
});



const cadastre = document.querySelector(".cadastrese")
const btnSing = document.querySelector(".signup")
const SignUp = document.querySelector(".SignUp")


btnSing.addEventListener("click", () => {
  SignUp.style.display = "flex";
});
//esconder 
SignUp.addEventListener("click", (e) => {
  if (e.target == SignUp) {
    SignUp.style.display = "none";
  }
});
//escnder depois de clicado no entrar
cadastre.addEventListener("click", (e) => {
  if (e.target == cadastre) {
    SignUp.style.display = "none";
  }
});

let urlImg;

//link de uma aba para outra 
var conecta = document.querySelector(".conectar")
conecta.addEventListener("click", (e) =>{
    if (e.target == conecta) {
      SignUp.style.display = "none";
      logIn.style.display = "flex";
    }
  });

  var cadastrese = document.querySelector(".cadastrar")
  cadastrese.addEventListener("click", (e) =>{
    if (e.target == cadastrese) {
      logIn.style.display = "none";
      SignUp.style.display = "flex";
    }
  });



//curtir
// const btnCurtir = document.getElementsByClassName("like-btn");
// const descricao = document.getElementsByClassName("descricao-like")[0];
// console.log(descricao)

// function eventoCurtir() {
//   for (let i = 0; i < btnCurtir.length; i++) {
//     btnCurtir[i].addEventListener("click", curtir);
//   }
// }

// function curtir(e) {
//   if (e.target.classList.contains("curtido")) {
//     e.target.src = "like.svg"
//   } if(descricao.textContent == "Curtir") {
//     descricao.textContent = "Descurtir"
//     e.target.src = "like-solid.svg";
//   }
//   e.target.classList.toggle("curtido");
// }
//  function descurtir(e){
//   if()
//  }



// function curtir(e) {
//   if (e.target.classList.contains("curtido")) {
//     e.target.innerHTML = (`<img class="like-btn" src="like.svg" alt="like" />
//     <p class="descricao-like">Curtir</p>`)
//   } else {
//     e.target.innerHTML =(`<img class="like-btn" src="like-solid.svg" alt="like" />
//     <p class="descricao-like">Descurtir</p>`) ;
//   }
//   e.target.classList.toggle("curtido");
// }


