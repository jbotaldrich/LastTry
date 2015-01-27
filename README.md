# LastTry

This is a 5e character and other things generator web app project, just for fun.  
Its using yo angular for scaffolding.
In order to run checkout the repository, 
run npm install and maybe bower install (I'm new to this).  The grunt config is currently set up for window cli so if 
using bash you will have to change the test and prod environments to set the NODE_ENV correctly but otherwise it should run.

After installing, to get the test environment up and running at the command line type grunt serve in your client directory.
This will cause a window to open in the browser.  Close this then under the server directory run npm test in a separate terminal.  Navigating in the
browser to http://localhost:3000 you will find the webpage.  The web page is simple using express to forward all html content
from the client(I think this is not completely true, will update).
