# Funmarklets! #
## Image Placeholder Bookmarklets ##

**To use these bookmarklets**:

- **[Click here](https://rawgithub.com/patricknelson/funmarklets/master/bookmarklets.html)** and drag/drop the links for the bookmarlets you want to use.
- Go to [http://google.com](http://google.com), add it to your bookmarks bar, edit that bookmark and then copy the code below and paste it into the URL.

## Nicholas Cage ##

    javascript:(function(){var%20cages=function(){for(var%20b=document.images,a=0;a%20%3C%20b.length;a++){var%20c=b[a].width,d=b[a].height;if(c%20%26%26%20d)b[a].src='http://placecage.com/'+c+'/'+d}return%20false};cages();})();


## Charlie Sheen ##

    javascript:(function(){var%20sheens=function(){for(var%20b=document.images,a=0;a%20%3C%20b.length;a++){var%20c=b[a].width,d=b[a].height;if(c%20%26%26%20d)b[a].src='http://placesheen.com/'+c+'/'+d}return%20false};sheens();})();


## Dogs ##

    javascript:(function(){var%20dogs=function(){for(var%20b=document.images,a=0;a%20%3C%20b.length;a++){var%20c=b[a].width,d=b[a].height;if(c%20%26%26%20d)b[a].src='http://placedog.com/'+c+'/'+d}return%20false};dogs();})();

## Kittens ##

    javascript:(function(){var%20kittens=function(){for(var%20b=document.images,a=0;a%20%3C%20b.length;a++){var%20c=b[a].width,d=b[a].height;if(c%20%26%26%20d)b[a].src='http://placekitten.com/'+c+'/'+d}return%20false};kittens();})();

## Robots ##

    javascript:(function()%7B(function%20()%20%7Bvar%20killHumans%20%3D%20function%20()%20%7Bfor%20(var%20b%20%3D%20document.images%2C%20a%20%3D%200%3B%20a%20%3C%20b.length%3B%20a%2B%2B)%20%7Bvar%20c%20%3D%20b%5Ba%5D.width%2C%20d%20%3D%20b%5Ba%5D.height%3Bif%20(c%20%26%26%20d)b%5Ba%5D.src%20%3D%20'https%3A%2F%2Frobohash.org%2F'%20%2B%20encodeURIComponent(b%5Ba%5D.src)%20%2B%20'%3Fsize%3D'%20%2B%20c%20%2B%20'x'%20%2B%20d%7Dreturn%20false%7D%3BkillHumans()%3B%7D)()%7D)()