sucCSS
======

A simple .less CSS setup for your global cascade. You will need your own preferred .less compiler either of the following are a really good bet.
I myself use LiveReload :

LiveReload : http://livereload.com/

Less PHP : http://leafo.net/lessphp/

Less JS : http://lesscss.org/

The reset.less is roughly based off of the following approaches and will soon be updated to refrect the changes in these projects.

Eric Meyers reset : http://meyerweb.com/eric/tools/css/reset/

HTML5 Doctor : http://html5doctor.com/html-5-reset-stylesheet/

Mixins stolen from : http://designshack.net/articles/css/10-less-css-examples-you-should-steal-for-your-projects/

There is an optional repsonsive CSS grid thrown in, still a work in progress but stands up pretty well to the current CSS within the sucCSS project. Just remove the @import 'layout.less'; line within main.less 
to roll with your own / favourite grid setup.