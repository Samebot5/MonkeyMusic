const productos = [
    {codigo: 101, precio:'$1090.0',  tipo:'Disco',  artista:'The Weekend',    nombre:'After Hours'},
    {codigo: 102, precio:'$1195.0',  tipo:'Vinilo', artista:'Justice',        nombre:'Cross'},
    {codigo: 104, precio:'$845.0',   tipo:'Vinilo', artista:'Daft Punk',      nombre:'Random Access Memories'},
    {codigo: 105, precio:'$845.0',   tipo:'Vinilo', artista:'The Weekend',    nombre:'Beauty Behind the Madnes'},
    {codigo: 106, precio:'$714.0',   tipo:'Vinilo', artista:'Justice',        nombre:'Woman'},
    {codigo: 107, precio:'$235.0',   tipo:'Vinilo', artista:'Travis Scott',   nombre:'Birds in the trap sing Mcknight'},
    {codigo: 108, precio:'$195.0',   tipo:'Disco',  artista:'Daft Punk',      nombre:'Homework'},
    {codigo: 103, precio:'$335.0',   tipo:'Vinilo', artista:'Travis Scott',   nombre:'Rodeo'},
    {codigo: 109, precio:'$298.0',   tipo:'Vinilo', artista:'Justice',        nombre:'Cross'},
    {codigo: 110, precio:'$195.0',   tipo:'Disco',  artista:'Justice',        nombre:'Cross'},
    {codigo: 111, precio:'$465.0',   tipo:'Vinilo', artista:'Justice',        nombre:'Cross'},
    {codigo: 112, precio:'$465.0',   tipo:'Vinilo', artista:'Justice',        nombre:'Cross'},
    {codigo: 113, precio:'$405.0',   tipo:'Vinilo', artista:'Justice',        nombre:'Cross'},
    {codigo: 114, precio:'$3850.0',  tipo:'Disco',  artista:'Justice',        nombre:'Cross'},
    {codigo: 115, precio:'$1100.0',  tipo:'Vinilo', artista:'Justice',        nombre:'Cross'},
    {codigo: 116, precio:'$530.0',   tipo:'Disco',  artista:'Justice',        nombre:'Cross'}
]

document.write('<div class="productos">');
document.write('<section class = " container3 ">');
for(i=0;i<productos.length;i++){
    document.write
    (`
    <div class = " item " >
    <a href="#">
        <div class="caratula">
            <img src="img/Caratulas/${productos[i].artista}/${productos[i].nombre}.jpg">
        </div>
        <div>
            <p>${productos[i].artista}</p>
            <p>${productos[i].nombre}</p>
            <div>
                <p>${productos[i].precio}</p>
            </div>
        </div>
    </a>
</div >
    `);
}
document.write('</section>');
document.write('</div >');