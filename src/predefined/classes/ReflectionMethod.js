/* automatically built from ReflectionMethod.php*/
PHP.VM.Class.Predefined.ReflectionMethod = function( ENV, $$ ) {
ENV.$Class.New( "ReflectionMethod", 0, {}, function( M, $ ){
 M.Constant("IS_IMPLICIT_ABSTRACT", $$(16))
.Constant("IS_EXPLICIT_ABSTRACT", $$(32))
.Constant("IS_FINAL", $$(64))
.Variable( "name", 1 )
.Variable( "class", 1 )
.Method( "__construct", 1, [{name:"class"}, {name:"name", d: $$(null)}], function( $, ctx, $Static ) {
$("parts")._((ENV.$F("explode", arguments, $$("::"), $("class"))));
if ( ((ENV.$F("count", arguments, $("parts"))).$Greater($$(1))).$Bool.$) {
$("class")._($("parts").$Dim( this, $$(0) ));
$("name")._($("parts").$Dim( this, $$(1) ));
};
if ( ((ENV.$F("class_exists", arguments, $("class"))).$Not()).$Bool.$) {
throw $$(new (ENV.$Class.Get("ReflectionException"))( this, $$("Class ").$Concat($("class")).$Concat($$(" does not exist ")) ));
};
})
.Method( "export", 9, [{name:"argument"}, {name:"return", d: $$(false)}], function( $, ctx, $Static ) {
})
.Method( "__toString", 1, [], function( $, ctx, $Static ) {
})
.Create()});

};