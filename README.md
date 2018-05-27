## MOTIVATION
When I develop for the mobile or web frontend, I usually get some RGB values on zepline from our designers, which I need to transform them into the hex code. Sounds like just trivial, right? But it does become painful when you need to do a lot of them. And I feel that the worst part is that I have to copy three times to put in the red, green, and blue values to get a result (https://www.rgbtohex.net/), which does not look right to me!

So I decided to build a small tool for myself to make life easier. The nice part about the tool is that it uses regex to try to extract the rgb values from your input. Whether you put 0, 0, 0, or 0 0 0 or rgb(0, 0, 0) or (0, 0, 0), it will always give you the correct hex string. 


## USAGE
I am hosting this at https://4rgbtohex.com/