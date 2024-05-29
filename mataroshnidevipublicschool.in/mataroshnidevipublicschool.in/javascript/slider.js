$(document).ready(function() {
    var tpj=jQuery;               // MAKE JQUERY PLUGIN CONFLICTFREE
      tpj.noConflict();
                
      tpj(document).ready(function() {
                
                   if (tpj.fn.cssOriginal!=undefined)   // CHECK IF fn.css already extended
                   tpj.fn.css = tpj.fn.cssOriginal;
 
                    tpj('.tp-banner').revolution(
                        {    
                            delay:9000,                                                
                            startheight:490,                            
                            startwidth:890,
                            
                            hideThumbs:200,
                            
                            thumbWidth:100,                            
                            thumbHeight:50,
                            thumbAmount:5,
                            
                            navigationType:"both",                  
                            navigationArrows:"nexttobullets",        
                            navigationStyle:"round",                
                            touchenabled:"on",                      
                            onHoverStop:"on",                        
                            
                            navOffsetHorizontal:0,
                            navOffsetVertical:20,
                            
                            shadow:1,
                            fullWidth:"off"    
                                                        
                        });    
	  });
});