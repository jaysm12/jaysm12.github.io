  
    var hasilAnagram = []
    
    function getAnagram(word, anagram = ''){
  
      if(word.length == 0){
        hasilAnagram.push(anagram);
        return;
      }
      for(var i = 0; i < word.length; i++){
        anagram += word[i];
        getAnagram(word.slice(0, i) + word.slice(i + 1), anagram,);
        anagram = anagram.slice(0, anagram.length - 1);
      }
    
    
      
    }

 

// //DOM
      
var merandomkan = document.getElementById("random")
var melistkan = document.getElementById("list")
var body = document.getElementsByTagName("body")
var mereset = document.getElementById("reset")
// var divHasil = document.createElement("div")
// divHasil.setAttribute("class", "hasilAnagram")
// body[0].appendChild(divHasil)
// console.log('merandomkan', merandomkan)
var divHasil = document.getElementsByClassName("hasilAnagram")

merandomkan.addEventListener("click", function(){
  // var hasilAnagram = []
  divHasil[0].innerHTML = ''
  var text = document.getElementById("anagram")
  getAnagram(text.value)
  var hasil = document.createElement('h3')
  var hasilRandom = hasilAnagram[Math.floor(Math.random() * hasilAnagram.length)]
  var hasilAnagramRandom = document.createTextNode(hasilRandom)
  hasil.setAttribute("id", "anagramRandom")
  hasil.appendChild(hasilAnagramRandom)
  divHasil[0].style.padding = '10px 10px';
  divHasil[0].style.textAlign = 'center';
  divHasil[0].style.fontSize = '40px';
  divHasil[0].appendChild(hasil)
  
 
})

melistkan.addEventListener("click", function(){
  // var hasilAnagram = []
  var text = document.getElementById("anagram")
  getAnagram(text.value)
  var ul = document.createElement("ul")
  ul.setAttribute("id", "anagramList")
  console.log('hasil anagram', hasilAnagram)
  for(var i = 0; i < hasilAnagram.length; i++){
    var li = document.createElement("li")
    var isiLi = document.createTextNode(hasilAnagram[i])
    li.appendChild(isiLi)
    ul.appendChild(li)
  }
  divHasil[0].style.padding = '30px 40px';
  divHasil[0].style.textAlign = 'center';
  divHasil[0].style.fontSize = '40px';
  divHasil[0].appendChild(ul)

})

mereset.addEventListener("click", function(){
  var text = document.getElementById("anagram")
  divHasil[0].innerHTML = ''
  text.value = ''
  divHasil[0].style.padding = '0';
  location.reload()
})

getAnagram('abcd');
getAnagram('efgh')
console.log(hasilAnagram)
  





