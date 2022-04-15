
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let inputs = document.querySelectorAll('#formulario input')
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

let title = document.querySelector('#title')
title.focus()


const expresiones = {               
	title: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	rating: /^([VE]-)?[0-9]{0,1}$/i, 
    
    length: /^([VE]-)?[0-9]{2,3}$/i,
    genre_id: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

 const campos = {
    title:false,
     rating: false,
     awards: false,
     release_date: false,
     length: false,
     genre_id: false
   }



const validarFormulario = (e) => {
    switch (e.target.name) {
      case "title":
      validarCampo(expresiones.title, e.target, "titulo")
       
      break;
     
      case "rating":
          validarCampo(expresiones.rating, e.target, "rating")
      
      break;
   
      case "awards":
        validarCampo(expresiones.rating, e.target, "awards")
       
      break;
      
      case "length":
        validarCampo(expresiones.length, e.target, "length")
       
      break;

      case "genre_id":
        validarCampo(expresiones.genre_id, e.target, "genre_id")

      break
   
    }
   
   }




   const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.add('is-valid');
		document.getElementById(`grupo__${campo}`).classList.remove('is-invalid');
	  campos[campo]= true;
  } else {
		document.getElementById(`grupo__${campo}`).classList.remove('is-valid');
		document.getElementById(`grupo__${campo}`).classList.add('is-invalid');	
    campos[campo]= false;
  }
}






inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
  })

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
})
