// Put your zillow.com API key here
var zwsid = "X1-ZWz1b3kbsmyhvv_1oefy"; 
var request = new XMLHttpRequest();
var xml, mapObj;
var map_Estate;
var addrArr;
var addressClick=null;

function initialize() 
{
  document.getElementById("test1").innerHTML = "Please enter the address of the property in the fields above. Or Click anywhere on the map. ";
  geocoder = new google.maps.Geocoder();
  var defaultLoc = new google.maps.LatLng(32.75, -97.13); //defines location of the Map
  map_Estate =        // defines the properties of the map
  {
    center: defaultLoc,
    zoom:16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  mapObj = new google.maps.Map( document.getElementById('mapArea'), map_Estate);  //creates a object to load in HTML file
   //google.maps.event.addDomListener(mapObj, 'click', callRevGeo);
     google.maps.event.addListener(mapObj, 'click', function(event) {
    revGeo(event.latLng);
  });
}



//function callRevGeo()
//{ revGeo(); }

function xml_to_string ( xml_node ) 
{
  var value1, marker, infoProp;

    if (xml_node.xml)
    value1 = xml_node.xml;
    var xml_serializer = new XMLSerializer();
    value1 =  xml_serializer.serializeToString(xml_node);  

    /*document.getElementById("text1").innerHTML += "City: "+document.getElementById("city").value +
                                                     ",  State: "+document.getElementById("state").value+ ", Cost: "+value1+"<br></br>";  */
  display(value1);
  return value1;
}

function xml_to_string1 ( xml_node ) 
{
  var value1, marker, infoProp;

    if (xml_node.xml)
    value1 = xml_node.xml;
    var xml_serializer = new XMLSerializer();
    value1 =  xml_serializer.serializeToString(xml_node);  

    /*document.getElementById("text1").innerHTML += "City: "+document.getElementById("city").value +
                                                     ",  State: "+document.getElementById("state").value+ ", Cost: "+value1+"<br></br>";  */
  //alert("Again  "+addrArr)
  display1(value1);
  return value1;
}

function display( value1 )
{        
           
        var address = document.getElementById("address").value;
        var city = document.getElementById("city").value;
        var state = document.getElementById("state").value;
        var zipcode = document.getElementById("zipcode").value;
        var new_address=address+","+city+","+state+","+zipcode;

        geocoder.geocode( { 'address': new_address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) 
        {          
                 mapObj.setCenter(results[0].geometry.location);
                 marker = new google.maps.Marker({
                                                    map: mapObj,
                                                    position: results[0].geometry.location  });  
        google.maps.event.addListener(marker, 'click', function()
        {
            infoProp = new google.maps.InfoWindow({ content: "Value of the property is "+value1});
            infoProp.open(mapObj, marker);
    });
    document.getElementById("text1").innerHTML += "<br/>City: "+document.getElementById("city").value +
                                                     ",  State: "+document.getElementById("state").value+ ", Cost: "+value1+"<br></br>";  
               
        }  
        else 
        {   alert('Geocode was not successful for the following reason: ' + status);  }
        });        
}

function display1( value1 )
{        
        /*addrArr=addrArr.split(",");
        var address =addrArr[0];
        var city = addrArr[1];
        var state = addrArr[2];
        var zipcode = addrArr[3];
        var new_address=address+","+city+","+state+","+zipcode;*/
        //var address = document.getElementById('address').value;
        var addrArr = addressClick.split(",",4);
        var addr0 = addrArr[0];
        var addr1 = addrArr[1];
        var addr2 = addrArr[2];

        geocoder=new google.maps.Geocoder();        
        geocoder.geocode( { 'address': addressClick}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) 
        {          
                 mapObj.setCenter(results[0].geometry.location);
                 marker = new google.maps.Marker({
                                                    map: mapObj,
                                                    position: results[0].geometry.location  });  
        google.maps.event.addListener(marker, 'click', function()
        {
            infoProp = new google.maps.InfoWindow({ content: "Value of the property is "+value1});
            infoProp.open(mapObj, marker);
    });
    document.getElementById("text1").innerHTML += "<br/>City: "+ addr0 +
                                                     ",  State: "+addr1+addr2+ ", Cost: "+value1+"<br></br>";  
               
        }  
        else 
        {   alert('Geocode was not successful for the following reason: ' + status);  }
        });        
}


function revGeo(loc)
{
  var marker;

  //request.onreadystatechange = displayAdd;

  var infoW2 = new google.maps.InfoWindow();
  //var addressClick;

  //google.maps.event.addListener(mapObj, 'click', function(event)
    /*        {
              //latlong = event.latLng;
              addressClick = null;
              latCl = event.latLng.lat();
              longCl = event.latLng.lng();
              var latlngMap =  new google.maps.LatLng(latCl, longCl);     // Latitute and Longitude of the map on the location clicked */

              geocoder.geocode( {'latLng': loc}, function(results, status)
              {
                if( status ==  google.maps.GeocoderStatus.OK)
                {
                  //if(results[1])
                  //{
                    /*marker = new google.maps.Marker(
                    {
                      position: latLng,
                      map: mapObj
                    });*/
                    addressClick = results[0].formatted_address;
                    //infoW2.setContent("" + addressClick + " value is: ");
                    //infoW2.open(mapObj, marker);
                    addrArr = addressClick.split(",",4);
                    if( document.getElementsByTagName(code).value!=0)
  {
    alert("The property is not meant for sale!");
  }
                    
                    var addr0 = addrArr[0];
                    var addr1 = addrArr[1];
                    var addr2 = addrArr[2];
                    //alert("Address is addrArr0: "+addr0+" addr1: "+addr1+" addr2: "+addr2);
                    request.onreadystatechange = displayResult1;
                    request.open("GET","proxy.php?zws-id="+zwsid+"&address="+addr0+"&citystatezip="+addr1+"+"+addr2);
                    request.withCredentials = "true";
                    request.send(null);  
                    //displayAdd(addr0, addr1, addr2, infoW2);
                  //}
                }
                else
                { alert("Geocoder failed due to: "+ status);}
              } );
displayAdd(addressClick, infoW2);
} 

function displayAdd(addressClick, infoW2)
{ //alert("sadfsadfsadfsadf");
  var xmlResp, valueResp;

  /*if( document.getElementsByTagName(code).value!=0)
  {
    alert("The property is not meant for sale!");
  }*/

  if (request.readyState == 4) 
    {
        xmlResp = request.responseXML.documentElement;      //we are making xml variable global
        var value = xml.getElementsByTagName("zestimate")[0].getElementsByTagName("amount")[0];        
        //valueResp = xml_to_string(value);

    if (xml_node.xml)
    value = xml_node.xml;
    var xml_serializer = new XMLSerializer();
    valueResp =  xml_serializer.serializeToString(value);
    
    infoW2.setContent(""+addr0+addr1+addr2+" value is: "+valueResp);
    document.getElementById("text1").innerHTML += "<br/>"+" Address: "+addr0+" City: "+addr1+" State & Zip: "+addr2;
    }
    //document.getElementById("text1").innerHTML += "<br/>"+" Address: "+addr0+" City: "+addr1+" State & Zip: "+addr2;
}

function displayResult () 
{
    if (request.readyState == 4) 
    {
        xml = request.responseXML.documentElement;      //we are making xml variable global
        var value = xml.getElementsByTagName("zestimate")[0].getElementsByTagName("amount")[0];        
        xml_to_string(value);
    }
}

function displayResult1 () 
{
    if (request.readyState == 4) 
    {

        xml = request.responseXML.documentElement;      //we are making xml variable global
        var value = xml.getElementsByTagName("zestimate")[0].getElementsByTagName("amount")[0];        
        xml_to_string1(value);
    }
}
function sendRequest () {
    request.onreadystatechange = displayResult;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;
    request.open("GET","proxy.php?zws-id="+zwsid+"&address="+address+"&citystatezip="+city+"+"+state+"+"+zipcode);
    request.withCredentials = "true";
    request.send(null);
}
