# PHASE-1 PROJECT: THE TOOLS STOCKTAKING APPlICATION

## INTRODUCTION
  The tools stocktaking application is used to check the number of tools that are in an engineering store.

  The motivation behind this app is, I was working for a company where the engineering tools kept disappearing at the store. Upon investigation, it was noted that proper stocktaking was not done. So I thought why don't I come up with something quickly that would help in stocktaking process. It can be used to also check the tool availability when the technician or engineer wants to get a specific tool from the store.


## HOW TO OPEN THE APP
  To open this application you must use web browser(e.g Google Chrome) and then use this link to access the application:

     https://celadon-florentine-ad5f67.netlify.app/


## INSTRUCTIONS
   The users are mainly the store manager and store clerks.

   The users should be able to;
   1. See all tools in the store on the application page. There are cards displayed of each tool below the form. The card consists of;

       * The picture of the tool

       * The name of the tool

       * The total number of the tools  is displayed

       * The number of tools available.

       * 'RETURNED' button: When a person returns a tool, the store employee should CLICK it to add the number of tools available. Clicking it increments the 'number of tools available' by one.

       * 'TAKEN' button: When a person takes a tool, the store employee should click it to reduce the number of tools available. Clicking the button, decrements the 'number of tools' by one.

       * 'DELETE' button: It is used delete the tool card. This is used in the case where may be the tool(s) are spoilt beyond repair and is disposed. Due to security concerns I have place a password prompt for the store manager (not a store clerk) to use it to delete the tool. A detailed report should be presented to the store manager as to why the tool was deleted.

       NOTE: The password is 'password', for the project purpose.


   2. Use the form to add a new tool or tools that have been bought.
       
       * The tool name should be entered in the 'TOOL' input text box. 

       * The picture of the tool should be put in the 'PICTURE' input text box.    
       
          Note: The user should take the picture first take a picture of the tool, save it in the computer then enter the path or URL of where tool is stored, at the 'PICTURE' input text box.

       * The total number of that new tool being brought at the store should be entered at the 'NUMBER OF TOOLS' input.

       * Once all inputs of the tool are filled, the user should CLICK the 'ADD TOOL' button to submit. Once submitted a new card of the tool is displayed.

   
##  REFERENCES

   1. https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

   2. Using DELETE: https://vimeo.com/551943184 
  
   3. Using forEach: https://vimeo.com/549325446

   4. Material from canvas



   

