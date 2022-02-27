const arrButton = document.querySelectorAll('.button')

function addOnDisplay(idvalue, textvalue){
    return document.getElementById('display-currentNum').textContent = textvalue
}

arrButton.forEach(function(item){
    item.addEventListener('click', function(e){
          return addOnDisplay(e.target.id, e.target.textContent);
    });
});