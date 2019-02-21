// ADD TO DO ITEM 

document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();
    console.log('evento creado');
    
    let texto = document.getElementById('texto').value;
    console.log(texto);
    document.getElementById('texto').value = '';
    // Crea una variable con el texto
    let inputNode = document.createTextNode(texto);
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    let todo = document.createElement('li');
    let span = document.createElement('span');
    
    // Le agrega la variable al li como hijo
    todo.appendChild(inputNode);
    todo.append(span);
    todo.append(checkbox);
    let ul = document.getElementById('uListaTodos')
    ul.appendChild(todo);
    
   
})
// DELETE ALL TO DO
document.getElementById('deleteButton').addEventListener('click', function(event){
    event.preventDefault;
   let lista = document.getElementById('uListaTodos');
    lista.innerHTML='';
})

// CLEAR BUTTON
document.getElementById('clearButton').addEventListener('click', function(event){
    event.preventDefault();
    var datos = document.getElementById('uListaTodos').getElementsByTagName('li')
    
    for(var i = 0; i < datos.length; i++){
        let dato = datos[i]
        dato.getElementsByTagName('input')[0].checked = false;
    }
})
// MARK ALL TO DO
document.getElementById('markAll').addEventListener('click', function(event){
    event.preventDefault();
    var datos = document.getElementById('uListaTodos').getElementsByTagName('li')
    
    for(var i = 0; i < datos.length; i++){
        let dato = datos[i]
        dato.getElementsByTagName('input')[0].checked = true;
    }
   
    
})


