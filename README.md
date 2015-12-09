This repository contains the map.html and map.js file of the 2nd project. 
The description of this project is: 

**Web Services used by the Web Mashup**

For this project, I have used the

    Real Estate API from the Zillow API (more specifically, GetSearchResults),
    Geocoding and Reverse Geocoding from the Google Maps JavaScript API V3, 
    Google Map Markers 
    
The main aim of this project is to retrieve the value of any property for sale. The value of the property is fetched using Zillow API which takes the address as input and fetched the *[Zestimate](http://www.zillow.com/zestimate/)* value of the property. 

Two ways to implement the value of any property were implemented in this project:

    1. Finding a properyty by entering the address in the respective address fields.
    2. Clicking on the map fetches an address which would then be used.

The address, fetched in either of the above mentioned ways, is used to fetch the Zestimate value by making an asynchronous request call using AJAX to GetSearchResults API. The callback function returns the data in XML format which is serialized to String and displayed in the HTML DOM element.
