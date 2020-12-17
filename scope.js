
foo()
 var bar
return zip
    ↑
    |
  zip()
bar = 'SY';


(global)
  quux
    ↑
    |
  foo()
 var bar
    ↑
    |
   zip()
 var quux,



 (global)
    ↑
    |
  foo()
 var bar
    ↑
    |
   zip()
 var quux;



 function foo() {
  var bar;
}