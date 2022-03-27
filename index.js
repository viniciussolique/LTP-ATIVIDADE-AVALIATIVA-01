class Noticia{
  constructor(titulo, data_de_publicacao, resumo, texto)
  {
    this.titulo = titulo;
    this.data_de_publicacao = data_de_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
   mostrarNoticia(){
     
     return this.titulo + "\n" + this.data_de_publicacao + "\n" +    this.resumo + "\n" + this.texto
   }
} 
 let noticia = new Noticia("Portões do Lolla são abertos;", "Último dia tem Martin Garrix, Gloria Groove e tributo a Taylor Hawkins.", "27/03/2022", 
"MIley Cyrus se emocionou ao falar sobre Taylor Hawkins. Ela dedicou a música 'Angels like you' ao amigo. O baterista do Foo Fighters morreu na sexta-feira (25).")
console.log(noticia.mostrarNoticia())