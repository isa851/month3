let inp = document.getElementById("inp");
let btnAdd = document.getElementById("btnAdd");
let list = document.getElementById("list");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let url = document.getElementById("url");

btnAdd.onclick = () => {
    const text = inp.value.trim();

    if(!text) return;

    let li = document.createElement('li');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let div = document.createElement('div');
    let buttonChange = document.createElement('button');
    let buttonDelete = document.createElement('button');

    buttonChange.textContent = 'Change';
    buttonDelete.textContent = 'Delete';
    
    p.textContent = text;
    img.src = url.value;
    img.style.width = '100px';
    img.style.height = '100px';
    div.append(buttonChange);
    div.append(buttonDelete);
    li.append(p);
    li.append(img);
    li.append(div);
    list.append(li);
    inp.value = '';
    url.value = '';
    
    buttonDelete.onclick = () => {
        li.remove();
    }

    buttonChange.onclick = () => {
        if(p.getAttribute('class') === 'done'){
            p.removeAttribute('class')
        }else{
            p.className = 'done';
        }
    }
}

dark.onclick = () => {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

light.onclick = () => {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
}