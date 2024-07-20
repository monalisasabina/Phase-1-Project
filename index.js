document.addEventListener("DOMContentLoaded",() =>{

// GET..................................................................................................................................................
   // To fetch the information in a card from db.json

   let toolsUrl='http://localhost:3000/tools'


     fetch(toolsUrl)
     .then( response => response.json())
     .then( toolsData => displayTools(toolsData))

 
    //Display items in a card  

   function displayTools(toolsData){

    let container= document.getElementById('toollist')
    
    toolsData.forEach(tool=> {
       
        const card=document.createElement('div')
        card.id='card'

        const img=document.createElement('img')
          img.src=tool.image
          img.alt=tool.name
          card.appendChild(img)

        const toolName= document.createElement('h3')
          toolName.textContent=tool.name
          card.appendChild(toolName)

        const toolNumber= document.createElement('p')
          toolNumber.className='toolNumber'
          toolNumber.textContent=`The total Number of tools: ${tool.total}`
          card.appendChild(toolNumber)

        let available=document.createElement('p')
          available.className='toolNumber'
          available.textContent=`Number of tools available: ${tool.total}`
          card.appendChild(available)

        const addButton=document.createElement('button')  
          addButton.textContent='RETURNED'
          addButton.addEventListener('click',() => {
          
           if(tool.availableTools>=0 && tool.availableTools < tool.total){

            tool.availableTools++
            available.textContent=`Number of tools available: ${tool.availableTools}`

           }else {
            addButton.disable=false
           }
        })

        card.appendChild(addButton)


        const reduceButton=document.createElement('button')  
            reduceButton.textContent='TAKEN'
            reduceButton.addEventListener('click',() => {
          
                if(tool.availableTools<50 && tool.availableTools>0){
                
                 tool.availableTools--
                 available.textContent=`Number of tools available: ${tool.availableTools}`
     
                } 
                if(tool.availableTools===0){
                 addButton.disable=false}
                
             })
            card.appendChild(reduceButton)


        const deleteButton =document.createElement('button')
           deleteButton.textContent='DELETE TOOL'
           deleteButton.id='delete-btn'
           deleteButton.addEventListener('click', () => {
            card.remove()
            deleteTool(tool.id)
           })
           card.appendChild(deleteButton)


        container.appendChild(card)

      });

    }  

// POST.................................................................................................................................................
// To add more tools at the json

 let form=document.getElementById('form')

   form.addEventListener('submit',(event) =>{
    event.preventDefault()

    let toolObj={
      name:document.getElementById('tool').value,
      image:document.getElementById('tool-picture').value,
      total: document.getElementById('tool-number').value,
      availableTools:(0)
    }
    
    fetch(toolsUrl,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(toolObj)
     })
     .then(response => response.json())
     .then(data =>{

      displayTools([data])

      document.getElementById('tool').value=''
      document.getElementById('tool-picture').value=''
      document.getElementById('tool-number').value=''
      })
    .catch(error => console.error('Error',error))

    })


// PATCH................................................................................................................................................
// To update the number of tool-items


//DELETE................................................................................................................................................
// To remove a certain number of tools, due to wear and tear :(

  function deleteTool(id){
    

    const password= prompt('Please enter the password to confirm deletion')

    if(password === 'password'){
      fetch(`${toolsUrl}/${id}`,{
        method: 'DELETE'
     })
     .then( response => response.json())
     .then( tool => console.log(tool))
   
     } else if(password !==null){
      alert('Wrong password')
     }
    }
   


})