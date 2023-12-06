 //array with  quote & author name

 let arr=[
    {name:"Oscar Wilde",quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    photo: "img1.jpg"},
    {name:"Emily Dickinson",quote:'That it will never come again is what makes life so sweet.',
    photo: "img2.jpg" },
    {name:"George Eliot",quote:'It is never too late to be what you might have been.',
    photo: "img3.jpg" },
    {name:"Ralph Waldo Emerson",quote:'Dreaming, after all, is a form of planning.',
    photo: "img4.jpg" },
    {name:"Haruki Murakami",quote:'Pain is inevitable. Suffering is optional.',
    photo: "img5.jpg" },
    {name:"William Shakespeare",quote:"All the world's a stage, and all the men and women merely players.",
    photo: "img6.jpg"},
    {name:"Plato",quote:'Be kind, for everyone you meet is fighting a hard battle.',
    photo: "img7.jpg"},
    {name:"Emily Dickinson",quote:'Courage is grace under pressure.',
    photo: "img8.jpg" },
    {name:" Sylvia Plath",quote:'Dream big and dare to fail.',
    photo: "img9.jpg"},
    {name:"C.S. Lewis",quote:"Don't let your happiness depend on something you may lose.",
    photo: "img10.jpg"},
    {name:"Ernest Hemingway",quote:"We are all broken, that's how the light gets in.",
    photo: "img11.jpg"},
    {name:"Voltaire",quote:'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.',
    photo: "img12.jpg" },
    {name:"Stephanie Bennett Henry",quote:'Life is tough my darling, but so are you.',
    photo: "img13.jpg"},
    {name:"William Faulkner",quote:"Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
    photo: "img14.jpg"},
    {name:"Brene Brown",quote:'Self-awareness and self-love matter. Who we are is how we lead.',
    photo: "img15.jpg"},
    {name:"Stephen King",quote:'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.',
    photo: "img16.jpg"},
    {name:"Ernest Hemingway",quote:'As a writer, you should not judge, you should understand.',
    photo: "img17.jpg"},
    {name:"Herman Melville",quote:'To produce a mighty book, you must choose a mighty theme.',
    photo: "img18.jpg" },
    {name:"John Steinbeck",quote:'Whatever the mind of man can conceive and believe, it can achieve.',
    photo: "img19.jpg"},
    {name:" John Green",quote:'Sometimes, you read a book and it fills you with this weird evangelical zeal.',
    photo: "img20.jpg" }
]


//onclick => generate random index<=20
//print it on html page

var btn=document.querySelector('#btn')
let span=document.querySelector('span')
let authname=document.querySelector('#authname')
const authorPhoto =document.querySelector("#authorPhoto")






 btn.addEventListener("click",function(){

    var arrlength=arr.length
    var arrindex=arr[Math.round(Math.random()*arrlength)]
    console.log(arrindex)

    const randomColor = getRandomColor()
    const bodyRandomColor =getRandomBodyColor()
    
    

    //for color change
    setTimeout(function(){
      btn.style.backgroundColor = randomColor;
      
     document.body.style.backgroundColor =bodyRandomColor;

    },3000)

    //for content change
    setTimeout(function(){

      span.innerHTML=arrindex.quote
      authname.innerHTML=arrindex.name
      authorPhoto.src=`/authors/${arrindex.photo}`
    
    },3000)

 })

 // Function to generate a random color


function getRandomColor(){
   const letters = "0123456789ABCDEF"
   let color ="#"
   for (let i=0;i<6;i++){
      color += letters[Math.floor(Math.random() *16)]
   }
   return color
}
  
function getRandomBodyColor(){
   const letters ="0123456789ABCDEF"
   color="#"
   for(let i=0;i<6;i++){
      color += letters[Math.floor(Math.random() *16)]
   }
   return color
}
  





