function getAnagram(word, anagram = '', hasilAnagram = []){
  if(word.length == 0){
    hasilAnagram.push(anagram);
    return;
  }
  for(var i = 0; i < word.length; i++){
    anagram += word[i];
    getAnagram(word.slice(0, i) + word.slice(i + 1), anagram, hasilAnagram);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return hasilAnagram
}

// |||||||||||||||||||||||||||||||||||||||||||>>>>DOM<<<<<<|||||||||||||||||||||||||||||||||| //
      
var merandomkan = document.getElementById("random")
var melistkan = document.getElementById("list")
var body = document.getElementsByTagName("body")
var mereset = document.getElementById("reset")
var divHasil = document.getElementsByClassName("hasilAnagram")

merandomkan.addEventListener("click", function(){
  divHasil[0].innerHTML = ''
  var text = document.getElementById("anagram")
  var anagramRandom = getAnagram(text.value)
  var hasil = document.createElement('h3')
  var hasilRandom = anagramRandom[Math.floor(Math.random() * anagramRandom.length)]
  var hasilAnagramRandom = document.createTextNode(hasilRandom)
  hasil.setAttribute("id", "anagramRandom")
  hasil.appendChild(hasilAnagramRandom)
  divHasil[0].style.padding = '2px 10px';
  divHasil[0].style.textAlign = 'center';
  divHasil[0].style.fontSize = '40px';
  divHasil[0].appendChild(hasil)
  
 
})

melistkan.addEventListener("click", function(){
  divHasil[0].innerHTML = ''
  var text = document.getElementById("anagram")
  var anagramList = getAnagram(text.value)
  var ul = document.createElement("ul")
  ul.setAttribute("id", "anagramList")
  for(var i = 0; i < anagramList.length; i++){
    var li = document.createElement("li")
    var isiLi = document.createTextNode(anagramList[i])
    li.appendChild(isiLi)
    li.style.padding = '15px';
    ul.appendChild(li)
  }
  divHasil[0].style.padding = '10px 40px';
  divHasil[0].style.textAlign = 'center';
  divHasil[0].style.fontSize = '40px';
  divHasil[0].appendChild(ul)

})

mereset.addEventListener("click", function(){
  var text = document.getElementById("anagram")
  divHasil[0].innerHTML = ''
  divHasil[0].style.padding = '0';
})