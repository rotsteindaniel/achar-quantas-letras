const calcular = () => {
  const frase = document.getElementById("name").value;
  const letra = document.getElementById("letra").value;
  const resultado = document.querySelector("#resultado");

  let quantidade = 0

  for (let i = 0; i < frase.length; i++) {
      if (frase[i] == letra) {
        quantidade++
      }
    }

    if (quantidade == 1){
      return (resultado.innerHTML = `Essa letra aparece um total de ${quantidade} vez`)
    } else {
      return (resultado.innerHTML = `Essa letra aparece um total de ${quantidade} vezes`);
    }
}

