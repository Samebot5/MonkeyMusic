const productos = [
    {codigo: 101, nombre: 'Cross', precio:1090.0, tipo:'Disco', imagen:'Cross.jpg'},
    {codigo: 102, nombre: 'Cross', precio:1195.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 103, nombre: 'Cross', precio:335.0, tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 104, nombre: 'Cross', precio:845.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 105, nombre: 'Cross', precio:845.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 106, nombre: 'Cross', precio:714.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 107, nombre: 'Cross', precio:235.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 108, nombre: 'Cross', precio:195.0,  tipo:'Disco', imagen:'Cross.jpg'},
    {codigo: 109, nombre: 'Cross', precio:298.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 110, nombre: 'Cross', precio:195.0,  tipo:'Disco', imagen:'Cross.jpg'},
    {codigo: 111, nombre: 'Cross', precio:465.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 112, nombre: 'Cross', precio:465.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 113, nombre: 'Cross', precio:405.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 114, nombre: 'Cross', precio:3850.0,  tipo:'Disco', imagen:'Cross.jpg'},
    {codigo: 115, nombre: 'Cross', precio:1100.0,  tipo:'Vinilo', imagen:'Cross.jpg'},
    {codigo: 116, nombre: 'Cross', precio:530.0,  tipo:'Disco', imagen:'Cross.jpg'}
]

document.write('<div class="productos">');
document.write('<section class = " container3 ">');
for(i=0;i<productos.length;i++){
    document.write
    (`
    <div class = " item " >
    <a href="#">
        <div class="caratula">
            <img src="img/Caratulas/Justice/${productos[i].imagen}">
        </div>
        <div>
            <p>${productos[i].nombre}</p>
            <p>${productos[i].precio}</p>
        </div>
    </a>
    `);
}
document.write('</section>')
document.write('</div >')