const span=document.querySelectorAll("span")
let container=document.getElementById("container")
let header=document.getElementById("header")
const categories = [
  "Linux","DevOps","Networking","Programming","Cloud","Docker","Kubernetes","BASH","HTML","Postgres","MySQL","Laravel","JavaScript","Python","Terraform","React","Django","cPanel","Ubuntu","NodeJS","WordPress","Next.js","VueJS","Apache Kafka"
];
for (let i=0;i<categories.length;i++){
   let title=categories[i]
let card=[`  <div id="card" class="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <h2 class="text-xl font-semibold text-gray-800 mb-3">${title}</h2>
        <div class="flex flex-col gap-2 text-sm">
          <label class="inline-flex items-center gap-2">
            <input  type="radio" name="html" class="accent-blue-600" />
            Beginner
          </label>
          <label class="inline-flex items-center gap-2">
            <input  type="radio" name="html" class="accent-yellow-500" />
            Intermediate
          </label>
          <label class="inline-flex items-center gap-2">
            <input  type="radio" name="html" class="accent-red-500" />
            Advanced
          </label>
        </div>
        <button id="btn" class="btn mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition">Select</button>
      </div>
    </div>`]
 container.innerHTML+=card[0]
}
let question=[`
  <div class="max-w-4xl w-full">
    <!-- Header -->
    <div id="test" class="text-center mb-12">
      <h1 class="text-5xl font-extrabold text-indigo-300 mb-4 tracking-tight">🚀 Ready to Challenge Your Brain?</h1>
      <p class="text-lg text-gray-300">Answer each question to the best of your knowledge — let’s see what you’ve got!</p>
    </div>

    <!-- Quiz Form -->
    <form  class="space-y-10">

      <!-- Question Template (x10 filled) -->
      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">1. What is the capital of France?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q1" class="accent-indigo-400 mr-2" /> Berlin</label><br>
          <label><input type="radio" name="q1" class="accent-indigo-400 mr-2" /> Madrid</label><br>
          <label><input type="radio" name="q1" class="accent-indigo-400 mr-2" /> Paris</label><br>
          <label><input type="radio" name="q1" class="accent-indigo-400 mr-2" /> Rome</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">2. Which planet is known as the Red Planet?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q2" class="accent-indigo-400 mr-2" /> Earth</label><br>
          <label><input type="radio" name="q2" class="accent-indigo-400 mr-2" /> Venus</label><br>
          <label><input type="radio" name="q2" class="accent-indigo-400 mr-2" /> Mars</label><br>
          <label><input type="radio" name="q2" class="accent-indigo-400 mr-2" /> Jupiter</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">3. What is the boiling point of water?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q3" class="accent-indigo-400 mr-2" /> 50°C</label><br>
          <label><input type="radio" name="q3" class="accent-indigo-400 mr-2" /> 75°C</label><br>
          <label><input type="radio" name="q3" class="accent-indigo-400 mr-2" /> 100°C</label><br>
          <label><input type="radio" name="q3" class="accent-indigo-400 mr-2" /> 150°C</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">4. Who wrote "Romeo and Juliet"?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q4" class="accent-indigo-400 mr-2" /> Mark Twain</label><br>
          <label><input type="radio" name="q4" class="accent-indigo-400 mr-2" /> Charles Dickens</label><br>
          <label><input type="radio" name="q4" class="accent-indigo-400 mr-2" /> William Shakespeare</label><br>
          <label><input type="radio" name="q4" class="accent-indigo-400 mr-2" /> Jane Austen</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">5. What does HTTP stand for?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q5" class="accent-indigo-400 mr-2" /> Hyper Text Transfer Protocol</label><br>
          <label><input type="radio" name="q5" class="accent-indigo-400 mr-2" /> Hyperlink Transfer Tool Program</label><br>
          <label><input type="radio" name="q5" class="accent-indigo-400 mr-2" /> High Traffic Transfer Protocol</label><br>
          <label><input type="radio" name="q5" class="accent-indigo-400 mr-2" /> Hyper Tool Transfer Port</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">6. Which language is used to style web pages?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q6" class="accent-indigo-400 mr-2" /> HTML</label><br>
          <label><input type="radio" name="q6" class="accent-indigo-400 mr-2" /> CSS</label><br>
          <label><input type="radio" name="q6" class="accent-indigo-400 mr-2" /> JavaScript</label><br>
          <label><input type="radio" name="q6" class="accent-indigo-400 mr-2" /> Python</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">7. Which continent is the Sahara Desert located in?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q7" class="accent-indigo-400 mr-2" /> Asia</label><br>
          <label><input type="radio" name="q7" class="accent-indigo-400 mr-2" /> South America</label><br>
          <label><input type="radio" name="q7" class="accent-indigo-400 mr-2" /> Africa</label><br>
          <label><input type="radio" name="q7" class="accent-indigo-400 mr-2" /> Australia</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">8. What is the largest mammal in the world?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q8" class="accent-indigo-400 mr-2" /> Elephant</label><br>
          <label><input type="radio" name="q8" class="accent-indigo-400 mr-2" /> Giraffe</label><br>
          <label><input type="radio" name="q8" class="accent-indigo-400 mr-2" /> Blue Whale</label><br>
          <label><input type="radio" name="q8" class="accent-indigo-400 mr-2" /> Hippo</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">9. Which gas do plants absorb from the atmosphere?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q9" class="accent-indigo-400 mr-2" /> Oxygen</label><br>
          <label><input type="radio" name="q9" class="accent-indigo-400 mr-2" /> Carbon Dioxide</label><br>
          <label><input type="radio" name="q9" class="accent-indigo-400 mr-2" /> Nitrogen</label><br>
          <label><input type="radio" name="q9" class="accent-indigo-400 mr-2" /> Hydrogen</label>
        </div>
      </div>

      <div class="bg-slate-700 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold text-white mb-4">10. What is the smallest prime number?</h2>
        <div class="space-y-2">
          <label><input type="radio" name="q10" class="accent-indigo-400 mr-2" /> 0</label><br>
          <label><input type="radio" name="q10" class="accent-indigo-400 mr-2" /> 1</label><br>
          <label><input type="radio" name="q10" class="accent-indigo-400 mr-2" /> 2</label><br>
          <label><input type="radio" name="q10" class="accent-indigo-400 mr-2" /> 3</label>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="text-center pt-8">
        <button type="submit" class="bg-indigo-500 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-indigo-600 transition duration-300">
          Submit Answers
        </button>
      </div>

    </form>
  </div>`]
const input=document.querySelectorAll("input")
const btn=document.querySelectorAll(".btn")
btn.forEach(btns=>{
   btns.onclick=()=>{ 
   [btns.parentElement.children[1].children].forEach(element => {
      let selected=""
      let deficulty=""
     if(element[0].querySelector("input").checked)
     {
    //   selected=btns.parentElement.querySelector("h2").innerText
    //   deficulty="easy"
    //    fetch(`https://quizapi.io/api/v1/questions?apiKey=uY7Mpxfre42OGT8hBNOwDirHpCi1wMMLkjQ75dW4&limit=10&category=${selected}&difficulty=${deficulty}`)
    //   .then(res=>res.json())
    //   .then(data=>{
    //   console.log(data)
    //   container.innerHTML=""
      header.className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 min-h-screen flex items-center justify-center p-6 text-gray-100"
           header.innerHTML=question
    //        let count=0
    //  header.querySelectorAll("h2").forEach(texts=>{
    //   texts.innerText=`${count+1}. ${data[count].question}`
    //   console.log(data[count].answers)
    //   count++
    //  })
     header.querySelectorAll("h2").forEach(texts=>{
      console.log(texts.nextSibling.nextSibling.querySelectorAll("input"))
     })
          
      
  //  })
    
     }
  //    if(element[1].querySelector("input").checked)
  //    {
  //     selected=btns.parentElement.querySelector("h2").innerText
  //     deficulty="medium"
  //     fetch(`https://quizapi.io/api/v1/questions?apiKey=uY7Mpxfre42OGT8hBNOwDirHpCi1wMMLkjQ75dW4&  limit=10&category=${selected}&difficulty=${deficulty}`)
  //     .then(res=>res.json())
  //     .then(data=>{
  //     console.log(data)
  //     container.innerHTML=""
  //     header.className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 min-h-screen flex items-center justify-center p-6 text-gray-100"
  //     header.innerHTML=question
  //      let count=0
  //    header.querySelectorAll("h2").forEach(texts=>{
  //     texts.innerText=`${count+1}. ${data[count].question}`
  //     count++
  //    })
  //  })
     
  //    }
  //    if(element[2].querySelector("input").checked)
  //    {
  //     selected=btns.parentElement.querySelector("h2").innerText
  //     deficulty="Hard"
  //     fetch(`https://quizapi.io/api/v1/questions?apiKey=uY7Mpxfre42OGT8hBNOwDirHpCi1wMMLkjQ75dW4&  limit=10&category=${selected}&difficulty=${deficulty}`)
  //     .then(res=>res.json())
  //     .then(data=>{
  //     console.log(data)
  //     container.innerHTML=""
  //     header.className="bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 min-h-screen flex items-center justify-center p-6 text-gray-100"
  //     header.innerHTML=question
  //      let count=0
  //    header.querySelectorAll("h2").forEach(texts=>{
  //     texts.innerText=`${count+1}. ${data[count].question}`
  //     count++
  //    })
     
  //  })
     
  //    }
   
   });
   }
   
})