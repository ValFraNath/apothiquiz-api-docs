#!/bin/sh

awk 'BEGIN { echo = 1}
     /^    {{#if article.sampleRequest}}$/{ echo = 0} 
     /^<\/script>$/{ echo = 1 } 
     {if (echo == 1) { print }}' docs/index.html >tmpfile && mv tmpfile docs/index.html
