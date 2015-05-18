var maxFeeds = 6;	    
	    
        var entries, titles, links, pubDates;

	    google.load("feeds", "1");
	    function initialize() {          
          var conjur = new google.feeds.Feed("http://www.conjur.com.br/rss.xml");
	      conjur.setResultFormat(google.feeds.Feed.XML_FORMAT);

	      conjur.load(function(result) {
	        if (!result.error) {
	          var container = document.getElementById("feeds");
	          
	          entries = result.xmlDocument.getElementsByTagName('item');
	          titles = result.xmlDocument.getElementsByTagName('title');
	      	  pubDates = result.xmlDocument.getElementsByTagName('pubDate');
	      	  links = result.xmlDocument.getElementsByTagName('link');
			  descriptions = result.xmlDocument.getElementsByTagName('description');

	          var numberOfFeeds = (entries.length > maxFeeds ? maxFeeds : entries.length);
	          
				var listGroup = document.createElement("div");
	            listGroup.className = "list-group";

	          for (var i = 0; i < numberOfFeeds; i++) {            	            
        			var link = document.createElement('a');
        			link.setAttribute('href', links[i+1].firstChild.nodeValue);
        			link.className = "list-group-item";

        				var title = document.createElement("h5");
                        title.className = "list-group-item-heading feedLink";			
        				title.appendChild(document.createTextNode(titles[i+1].firstChild.nodeValue));

						var info = document.createElement('p');
            			info.appendChild(document.createTextNode(new Date(pubDates[i+1].firstChild.nodeValue).toDateString()+" @ Consultor Jurídico"));
            			info.className = "feedInfo caption";

        				var content = document.createElement('p');
                    	content.innerHTML = descriptions[i+1].firstChild.nodeValue;
        				content.className = "list-group-item-text feedContent";

        			link.appendChild(title);
        			link.appendChild(info);
        			link.appendChild(content);	            				 			
        		listGroup.appendChild(link);	            
	          }
	          container.appendChild(listGroup);






































	          /*var numberOfFeeds = (entries.length > maxFeeds ? maxFeeds : entries.length);
	          for (var i = 0; i < numberOfFeeds; i++) {            
	            var mainDiv = document.createElement("div");
	            mainDiv.className = "col-xs-"+12/numberOfFeeds;

	            	var thumbnail = document.createElement("div");
	            	thumbnail.className = "thumbnail feedThumbnail";

	            			var link = document.createElement('a');
	            			link.setAttribute('href', links[i+1].firstChild.nodeValue);
	            			link.className = "feedLink";

	            				var title = document.createElement("h5");
                                title.className = "feedTitle";			
	            				title.appendChild(document.createTextNode(titles[i+1].firstChild.nodeValue));

	            			link.appendChild(title);

	            			var info = document.createElement('p');
	            			info.appendChild(document.createTextNode(new Date(pubDates[i+1].firstChild.nodeValue).toDateString()+" @ Consultor Jurídico"));
	            			info.className = "feedInfo caption";

	            			var content = document.createElement('p');
                            content.innerHTML = descriptions[i+1].firstChild.nodeValue;
	            			content.className = "feedContent";	 			

	            		thumbnail.appendChild(link);
	            		thumbnail.appendChild(info);
	            		thumbnail.appendChild(content);

	            mainDiv.appendChild(thumbnail);
	            container.appendChild(mainDiv);
	          }*/
	        }
	        });
	    }
	    google.setOnLoadCallback(initialize);