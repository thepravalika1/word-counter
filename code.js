function keyHasBeenPressed(){
    let textareacontent=document.querySelector('textarea')
    let charCount=document.querySelector('.charCount')
    let charLimit=200
    
    charCount.innerHTML=String(textareacontent.value).length;
    let wordCount=document.querySelector('.wordCount')
    let wordsarray=String(textareacontent.value).split(' ');
    wordCount.innerHTML=wordsarray.length
    
    let charLimit1=document.querySelector('.charLimitSpan')
    charLimit1.innerHTML= charLimit - textareacontent.value.length;
    if(textareacontent.value.length>charLimit){
        textareacontent.value=String(textareacontent.value).substring(0,20)

    }
    
    
}
document.querySelector('.clearButton').addEventListener('click',()=>{
    document.querySelector('textarea').value='';
    document.querySelector('.wordCount').innerHTML=0;
    document.querySelector('.charCount').innerHTML=0;
    
    
})