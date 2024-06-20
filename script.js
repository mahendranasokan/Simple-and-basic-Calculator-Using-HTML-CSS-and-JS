function reset(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("final").value="";
}

function result(){
    let a=document.getElementById("n1").value;
    let b=document.getElementById("n2").value;
    let x=parseFloat(a);
    let y=parseFloat(b);
    let z=document.getElementById("op").value;
    if(z==="+")
        {
            document.getElementById("final").value=x+y;
        }
        else if(z==="-")
            {
                document.getElementById("final").value=x-y;
            }
        else if(z==="/")
            {
                document.getElementById("final").value=x/y;
            }
        else if(z==="*")
            {
                document.getElementById("final").value=x*y;
            }
}