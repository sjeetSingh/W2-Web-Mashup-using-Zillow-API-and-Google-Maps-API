This repository contains the map.html and map.js files of the 2nd project. 
The description of this project is: 

Web Services used by the Web Mashup

For this project, you will use the

    Real Estate API from the Zillow API (more specifically, GetSearchResults)
    Geocoding and Reverse Geocoding from the Google Maps JavaScript API V3
    Google Map Markers 

To use Google Maps, you need to create a Google Account (if you do not have one) and get an API key. To use the Zillow API, you need to register and obtain a web service ID from Zillow Web Services ID (ZWSID). After you get the API key, you put it in map.js and you test your setup on your web browser by using the URL address:

http://omega.uta.edu/~xyz1234/project2/map.html

(use your username instead of xyz1234) and by typing the address of some existing house. It will display the estimated value of this house (empty if the address is invalid).

Project Description

You need to edit the HTML file map.html and the JavaScript file map.js. Your HTML web page must have 3 sections:

    an input text area with two buttons: Find and Clear.
    a Google map of size 600*500 pixels, initially centered at (32.75, -97.13) with zoom level 16
    a text display area

Your program must insert a number of overlay markers on the Google map, where each marker pinned on a house must display the house's postal address and its Zestimate value (the house value) from zillow.com. The same information must be appended at the end of the text display area (third section). There are two ways to create a marker:

    When you provide a valid postal address, say "904 Austin St, Arlington, TX 76012", in the input text area and you push the Find button.
    When you click on a house on the map.

To implement the first way, you need to get the address from the input text area and send an asynchronous request to the Zillow API (GetSearchResults API) to retrieve the Zestimate (in $), which is the estimated home value of the house at that address. The address used by the GetSearchResults API must have two components: address and citystatezip. This means that you must use JavaScript code to break the address string from the input text area into these two strings. Then you insert a new overlay marker on the map at the latitude and longitude of this postal address, using Geocoding. To implement the second way, when you click on the map, your program must find the address of the point you clicked (using Reverse Geocoding) and must send an asynchronous request to the Zillow API (GetSearchResults API) to retrieve the Zestimate (in $), which is the estimated home value of the house at that address.

Note that the call to the GetSearchResults API must be done using Ajax: inside the callback function (the listener for the left click) of the map, you should create an Ajax request that calls the GetSearchResults API. When the result arrives (this is the callback of the Ajax request), you extract the Zestimate and you display a new overlay marker on the map at the point you clicked. The overlay marker must display the house postal address and its Zestimate. The same information must be appended at the end of the text display area (third section). Note also that the map may display multiple markers with Zestimates and the text display area may contain multiple addresses/zestimates. Basically, each time you enter a new postal address or when you click on the map, if there is a Zestimate, you add a new flag in the map and you append a new entry in the display area. If it is an invalid address or there is no Zestimate value, you don't put any marker and you don't append any entry in the display area. Finally, the Clear button clears all markers from the google map and clears the text display.
Hints:

    How to URL-encode the address to send it to zillow: use the method encodeURI(address).
    How to extract the Zestimate value from the zillow XML response: use the method getElementsByTagName('amount').

Note that everything should be done asynchronously and your web page should never be redrawn completely. You need only one XMLHttpRequest object for sending a request to Zillow, since Google Maps is already asynchronous. 
