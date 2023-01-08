
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____  __                     _         _____                          
   / __ \/ /_  ___  ____  ____  (_)  __   / ___/___  ______   _____  _____
  / /_/ / __ \/ _ \/ __ \/ __ \/ / |/_/   \__ \/ _ \/ ___/ | / / _ \/ ___/
 / ____/ / / /  __/ /_/ / / / / />  <    ___/ /  __/ /   | |/ /  __/ /    
/_/   /_/ /_/\___/\____/_/ /_/_/_/|_|   /____/\___/_/    |___/\___/_/     
                                                                       </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
