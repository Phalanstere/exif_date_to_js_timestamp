/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
function exif_to_timestamp(str)
    {
    "use strict";  
    var a = str.search(" "), sub1, sub2, date;
    sub1 = str.substr(0, a).replace(/:/g, "-");
    sub2 = str.substr(a+1, str.length);
    str = sub1 + "T" + sub2;
    return new Date(str).getTime();     
    }

function exif_to_date(str)
    {
    "use strict";  
    var a = str.search(" "), sub1, sub2, date;
    sub1 = str.substr(0, a).replace(/:/g, "-");
    sub2 = str.substr(a+1, str.length);
    str = sub1 + "T" + sub2;
    return new Date(str);    
    }

