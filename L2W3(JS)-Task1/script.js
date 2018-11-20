/*  Implement polyfill for Array.map. As you can check on caniuse the [].map is not supported IE 10.
As a best software engineer, I would like to have ability to use Array.map in my project at IE 10.
Can you please help me? :) Send us jsfiddle, or Github Page for this polyfill. */

if (navigator.appVersion == "5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)") {
    Array.prototype.map = function(func, arr){
        var i, j, n = 0;
        var m = Object(this);
        var leng = m.length;
        j = new Array(leng);
        while (n < leng) {
            var nValue, mappedValue;
            if (n in m) {
                nValue = m[n];
                mappedValue = func.call(i, nValue, n, m);
                j[n] = mappedValue;
            }
            n++;
        }
        return j;
    };
}

var values = ['Verify_Text', 'Update', 'Form_RESTfull', '1783514', '()&^%$#@!/*-+.-'];
var lengths = values.map(function(value) {
    return value.length;
});