
    
    
    diction.addEventListener('submit', function(e){
                e.preventDefault();
                let searchword= document.getElementById('searchword').value;
                dic(searchword);
            });
            async function dic(word){
                const response= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                const data= await response.json();
                document.getElementById('word').innerHTML=data[0].word;
                document.getElementById('phonetics').innerHTML=data[0].phonetics[0].text;
                document.getElementById('partofspeech').innerHTML="Part of speech:"+data[0].meanings[0].partOfSpeech;
                document.getElementById('defination').innerHTML="Defination of"+" "+word+":"+" "+data[0].meanings[0].definitions[0].definition;
                document.getElementById('example').innerHTML="<span syle='color:red'> Example:"+" "+data[0].meanings[0].definitions[0].example + "</span>";
                document.getElementById('synonyms').innerHTML="synonyms:"+" "+data[0].meanings[0].definitions[0].synonyms;
                document.getElementById('synonyms').style.color="blue";
            
               
                
            }