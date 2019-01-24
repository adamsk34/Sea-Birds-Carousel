
var currImageIndex = 0 ;

function setImage (newImageIndex)
{
    newImageIndex = newImageIndex%5 ;
    currImageIndex = newImageIndex ;
    
    switch(newImageIndex)
    {
        case 0:
            document.getElementById("myImage").src="../res/Image0 Title.png" ;
            document.getElementById("myDescription").innerHTML = "This is the title screen for the game, set in the Golden Age of Piracy.<br>I spent more time on this than I probably should have, but I'm proud of how it turned out." ;
            break;
        case 1:
            document.getElementById("myImage").src="../res/Image1 Player.png" ;
            document.getElementById("myDescription").innerHTML = "This is the first asset that I ever drew for this game and he's also the protagonist. He looks<br>like almost every other character that I've ever drawn in pixel art, but I love him." ;
            break;
        case 2:
            document.getElementById("myImage").src="../res/Image2 Trade Ship.png" ;
            document.getElementById("myDescription").innerHTML = "This is the nicest ship that I've drawn for the game. All of the others needed to look very<br>maneuverable. This one mostly goes in just one direction, so I could make it however I wanted." ;
            break;
        case 3:
            document.getElementById("myImage").src="../res/Image3 Lotan.png" ;
            document.getElementById("myDescription").innerHTML = "Here we have a cool one. This sea monster (named Lotan) eventually got scrapped but I<br>still think he is one of the coolest looking things that  I've drawn for the game." ;
            break;
        case 4:
            document.getElementById("myImage").src="../res/Image4 BarTender.png" ;
            document.getElementById("myDescription").innerHTML = "This is an NPC that works as a bartender. He isn't an interresting part of the game but<br>I think I hit the nail on the head with his look. I mean just look at that 'stache!" ;
            break;
    }
}

function nextImage ()
{
    setImage(currImageIndex+4)
}

function previousImage ()
{
    setImage(currImageIndex+1)
}
