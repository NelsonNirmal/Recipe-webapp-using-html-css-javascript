let instructions=document.getElementById("instructions")
let imange=document.getElementById('image')
let heading=document.getElementById('heading')
let ingredients_value=document.getElementById('ingredients')
let ingredients_heading=document.getElementById('ingredients_heading')
let instructions_heading=document.getElementById('instructions_heading')
let measures_heading=document.getElementById("measures")
let item_measures=document.getElementById("measures_items")
let youtube_heading=document.getElementById("Youtube_herading")
let youtube_link=document.getElementById("youtube_link")
let ingredients=[]
let item=[]
let sum=[]

function mealfunction(){
    
let input=document.getElementById('input').value
youtube_heading.innerHTML="Youtube Link"
heading.innerText=input
heading.style.textAlign="center"
heading.style.fontSize="50px"
heading.style.color="white"
ingredients_heading.innerText="Ingredients"
instructions_heading.innerText="Instructions"
fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+input)
      .then(response =>response.json())
      .then((meal)=>{
        console.log(meal.meals[0])
        
          instructions.innerText=meal.meals[0].strInstructions
          imange.src=meal.meals[0].strMealThumb
            ingredients.push(meal.meals[0].strIngredient1)
            ingredients.push(meal.meals[0].strIngredient2)
            ingredients.push(meal.meals[0].strIngredient3)
            ingredients.push(meal.meals[0].strIngredient4)
            ingredients.push(meal.meals[0].strIngredient5)
            ingredients.push(meal.meals[0].strIngredient6)
            ingredients.push(meal.meals[0].strIngredient7)
            ingredients.push(meal.meals[0].strIngredient8)
            ingredients.push(meal.meals[0].strIngredient9)
            ingredients.push(meal.meals[0].strIngredient10)
        
    
          item.push(meal.meals[0].strMeasure1)
          item.push(meal.meals[0].strMeasure2)
          item.push(meal.meals[0].strMeasure3)
          item.push(meal.meals[0].strMeasure4)
          item.push(meal.meals[0].strMeasure5)
          item.push(meal.meals[0].strMeasure6)
          item.push(meal.meals[0].strMeasure7)
          item.push(meal.meals[0].strMeasure8)
          item.push(meal.meals[0].strMeasure9)
          item.push(meal.meals[0].strMeasure10)   
          for(i=0;i<10;i++){
            item_measures.innerHTML+=(String(i)+"."+ingredients[i+1]+"("+item[i]+")"+"<br>")
            
        }
       youtube_link.innerText=meal.meals[0].strYoutube
       youtube_link.href=meal.meals[0].strYoutube

      })
imange.style.display="block"
imange.style.marginLeft="50px"
}


ingredients_heading.style.textAlign="left"
ingredients_heading.style.fontSize="50px"
ingredients_heading.style.color="white"
ingredients_heading.style.fontFamily="monospace"

instructions_heading.style.textAlign="left"
instructions_heading.style.fontFamily="monospace"
instructions_heading.style.color="white"
instructions_heading.style.fontSize="50px"

youtube_heading.style.textAlign="left"
youtube_heading.style.fontFamily="monospace"
youtube_heading.style.color="white"
youtube_heading.style.fontSize="50px"

youtube_link.style.textAlign="left"
youtube_link.style.fontFamily="monospace"
youtube_link.style.color="white"
youtube_link.style.fontSize="30px"

