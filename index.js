function showContent (componetId){
    let contentDivs = document.getElementsByClassName("sec-container")[0].getElementsByTagName("div");
    for(let i =0;i<contentDivs.length; i++) {
        contentDivs[i].style.display="none";
    }
    let selecetedContent = document.getElementById(componetId);
    if(selecetedContent){
        selecetedContent.style.display="block";
    }
}
let links = document.getElementsByClassName("sec-head")[0].getElementsByTagName("a");
for(let i=0; i<links.length;i++){
    links[i].addEventListener("click",function(event){
        let componetId =this.getAttribute("href").substring(1);showContent(componetId)
    });
}