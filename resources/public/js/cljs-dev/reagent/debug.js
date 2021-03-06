// Compiled by ClojureScript 1.10.764 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__1377__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1378__i = 0, G__1378__a = new Array(arguments.length -  0);
while (G__1378__i < G__1378__a.length) {G__1378__a[G__1378__i] = arguments[G__1378__i + 0]; ++G__1378__i;}
  args = new cljs.core.IndexedSeq(G__1378__a,0,null);
} 
return G__1377__delegate.call(this,args);};
G__1377.cljs$lang$maxFixedArity = 0;
G__1377.cljs$lang$applyTo = (function (arglist__1379){
var args = cljs.core.seq(arglist__1379);
return G__1377__delegate(args);
});
G__1377.cljs$core$IFn$_invoke$arity$variadic = G__1377__delegate;
return G__1377;
})()
);

(o.error = (function() { 
var G__1380__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1380 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1381__i = 0, G__1381__a = new Array(arguments.length -  0);
while (G__1381__i < G__1381__a.length) {G__1381__a[G__1381__i] = arguments[G__1381__i + 0]; ++G__1381__i;}
  args = new cljs.core.IndexedSeq(G__1381__a,0,null);
} 
return G__1380__delegate.call(this,args);};
G__1380.cljs$lang$maxFixedArity = 0;
G__1380.cljs$lang$applyTo = (function (arglist__1382){
var args = cljs.core.seq(arglist__1382);
return G__1380__delegate(args);
});
G__1380.cljs$core$IFn$_invoke$arity$variadic = G__1380__delegate;
return G__1380;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
