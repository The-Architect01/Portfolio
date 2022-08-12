window.onload = function(){
    var elements = document.getElementsByClassName("toggle");
    [].forEach.call(elements,function(item){
        Toggle(item);
    });
}
function Toggle_Personal(sender) {
    Toggle(sender);
    try{if(sender.getAttribute('value')==='True'){
        document.getElementById('Personal_Check').src='../Assets/Check_Filled.png';
    }else{
        document.getElementById('Personal_Check').src='../Assets/Check_Empty.png';
    }}catch{}
    Validate('Personal',sender);
}
function Toggle_C3(sender) {
    Toggle(sender);
    try{if(sender.getAttribute('value')==='True'){
        document.getElementById('C#_Check').src='../Assets/Check_Filled.png';
    }else{
        document.getElementById('C#_Check').src='../Assets/Check_Empty.png';
    }}catch{}
    Validate('C#',sender);
}
function Toggle_School(sender){
    Toggle(sender);
    try{if(sender.getAttribute('value')==='True'){
        document.getElementById('School_Check').src='../Assets/Check_Filled.png';
    }else{
        document.getElementById('School_Check').src='../Assets/Check_Empty.png';
    }}catch{}
    Validate('School',sender);
}
function Toggle_VBA(sender) {
    Toggle(sender);
    try{if(sender.getAttribute('value')==='True'){
        document.getElementById('VBA_Check').src='../Assets/Check_Filled.png';
    }else{
        document.getElementById('VBA_Check').src='../Assets/Check_Empty.png';
    }}catch{}
    Validate('VBA',sender);
}
function Toggle_Java(sender){
    Toggle(sender);
    try{if(sender.getAttribute('value')==='True'){
        document.getElementById('Java_Check').src='../Assets/Check_Filled.png';
    }else{
        document.getElementById('Java_Check').src='../Assets/Check_Empty.png';
    }}catch{}
    Validate('Java',sender);
}

var SearchTags = new Array();

function Validate(text, sender){
    var elements = document.getElementsByClassName("card");
    var enabled = sender.getAttribute('value');

    if(enabled==="True"){ SearchTags.push(text); }else{ SearchTags.splice(SearchTags.indexOf(text),1); }

    var VisibleElements = 0;

    [].forEach.call(elements, function(item){
        try{
            var title = item.getAttribute("tags");
            if(title == null){return;}
            if(SearchTags.length != 0){
                if(SearchTags.every(element=>{return title.split(',').indexOf(element)!==-1;})){               
                    item.style.display = 'block';
                    VisibleElements += 1;
                } else { item.style.display='none'; }
            }else{
                VisibleElements+=1;
                item.style.display='block';
                document.getElementById('NAN').classList.remove('Show');
            }
        }catch{}
    });

    if(VisibleElements == 0){
        document.getElementById('NAN').classList.add('Show');
    }else{
        document.getElementById('NAN').classList.remove('Show');
    }
}
function Toggle(caller){
    try{
    caller.classList.remove('FALSE');
    caller.classList.remove('TRUE');
    }catch{}
    if(caller.getAttribute('value')==='True'){
        caller.setAttribute('value', 'False');
        caller.classList.add('TRUE');
    }else{
        caller.setAttribute('value', 'True');
        caller.classList.add('FALSE');
    }
}