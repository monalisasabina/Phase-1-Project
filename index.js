document.addEventListener("DOMContentLoaded",() =>{

// GET..................................................................................................................................................
   // To fetch the information in a card from db.json

   let toolsUrl='http://localhost:3000/tools'


     fetch(toolsUrl)
     .then( response => response.json())
     .then( toolsData => displayTools(toolsData))

 
    //CARD
   function displayTools(toolsData){

    let container= document.getElementById('toollist')
    
    toolsData.forEach(tool=> {
       
        // Creating the card
        const card=document.createElement('div')
        card.id='card'

        // Image of the tool
        const img=document.createElement('img')
          img.src=tool.image
          img.alt=tool.name
          card.appendChild(img)

        // The tool name 
        const toolName= document.createElement('h3')
          toolName.textContent=tool.name
          card.appendChild(toolName)

        // To display the total number of tools
        const toolNumber= document.createElement('p')
          toolNumber.className='toolNumber'
          toolNumber.textContent=`The total Number of tools: ${tool.total}`
          card.appendChild(toolNumber)

        //To display the number of available tools
        const available=document.createElement('p')
          available.className='toolNumber'
          available.textContent=`Number of tools available: ${tool.total}`
          card.appendChild(available)
        
        //To display the availability of the tools. 
        let toolStatus=document.createElement('p')
          card.appendChild(toolStatus)
          toolStatus.textContent='Tool Status: AVAILABLE'

        // The 'RETURNED' button adds the number of tools when the tool is returned by the tool-user
        const addButton=document.createElement('button')  
          addButton.textContent='RETURNED'
          addButton.addEventListener('click',() => {

          //Ensuring the button does not add tool number beyond its total number and must be above 0
           if(tool.availableTools>=0 && tool.availableTools < tool.total){
            tool.availableTools++
            available.textContent=`Number of tools available: ${tool.availableTools}`
            toolStatus.textContent='Tool Status: AVAILABLE'

           }else {
           console.log('tools available') //not expecting it on html
           }
        })

        card.appendChild(addButton)

        // The 'TAKEN' button reduces the number of tools when the tool is taken by the tool-user
        const reduceButton=document.createElement('button')  
            reduceButton.textContent='TAKEN'
            reduceButton.addEventListener('click',() => {

                //Ensuring the buttons doesn't give negative numbers of the tools, that is beyond 0, -1,-2...
                if(tool.availableTools>0){
                 tool.availableTools--
                 available.textContent=`Number of tools available: ${tool.availableTools}`
                 toolStatus.textContent='Tool Status: AVAILABLE'
     
                } else {
                  toolStatus.textContent='Tool Status: NO TOOLS AVAILABLE'
                  console.log('no tools') //not expecting it on html
                }
                
             })
            card.appendChild(reduceButton)

        // Delete button: For deleting the card
        const deleteButton =document.createElement('button')
           deleteButton.textContent='DELETE TOOL'
           deleteButton.id='delete-btn'
           deleteButton.addEventListener('click', () => {
            card.remove()
            deleteTool(tool.id)
           })
           card.appendChild(deleteButton)


        container.appendChild(card)

      })
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


//DELETE................................................................................................................................................
// To remove a certain number of tools, due to wear and tear :(

  function deleteTool(id){
    
    //Putting the password prompt on the delete button
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
