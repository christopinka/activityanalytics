var ringNum = 0;
var taxonomy = [];
var activityTheory = {"subject":["Individual Participation","High"],"tools":["System & Whiteboard","Average"],"object":["Participation Across Modules","Average"],"rules":["Group Participation","Low"],"community":["Chat & Awareness","High"],"divisionOfLabor":["Balance of Workload","Low"]};
var cluster = ['High','Average','Low']; // Cluster names
var indData = {1:[1,2,2,3,1,2],2:[2,2,1,3,3,2],3:[3,2,1,3,1,3],5:[2,1,1,1,2,2],6:[1,3,1,3,2,1],7:[2,3,3,2,2,1],9:[2,3,3,3,2,1],10:[3,1,3,2,2,2],11:[2,3,1,2,3,3],12:[1,3,2,2,3,2],13:[2,1,3,3,2,1],14:[2,1,3,2,1,2], 101:[2,2,1,2,2,3]}; // Individual's clusters
var feedback = ['Student collaboration is unequal among members of the group (some students are doing much more than others).','Feedback sentence goes here','Feedback sentence goes here','Feedback sentence goes here','Feedback sentence goes here','Students are having troubles collaborating with each other.'];
var radarChartData = {
    1:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [66,80,66,48,66,66]},{fillColor : "rgba(151,187,205,0.7)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [80,66,66,48,80,48]}]},
    2:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    3:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [66,48,66,66,66,66]},{fillColor : "rgba(255,0,0,0.8)",strokeColor : "rgba(255,0,0,1)",pointColor : "rgba(255,0,0,1)", pointStrokeColor : "#333",data : [48,66,80,48,80,48]}]},
    5:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    6:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    7:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    9:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    10:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    11:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    12:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    13:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    14:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [65,59,90,81,56,55]},{fillColor : "rgba(151,187,205,1.0)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [28,48,40,19,96,27]}]},
    101:{labels : ["Individual Participation","System & Whiteboard","Participation Across Modules","Group Participation","Chat & Awareness","Balance of Workload"], datasets : [{fillColor : "rgba(220,220,220,1.0)",strokeColor : "rgba(220,220,220,1)",pointColor : "rgba(220,220,220,1)",pointStrokeColor : "#333",data : [48,66,66,48,66,80]},{fillColor : "rgba(151,187,205,0.8)",strokeColor : "rgba(151,187,205,1)",pointColor : "rgba(151,187,205,1)", pointStrokeColor : "#333",data : [66,66,80,66,66,48]}]}
};
var groupAnalyticsAll = {"Group 1":{}};
var groupAnalytics5 = {};
var individualAnalyticsAll = {};


// Get length of top-level taxonomy	
var distance = 1000; // Allowed distance from current word 

$(function(){
    // fill graphs with data
    $('.indGraph').each(function(){
        var k = $(this).attr('id').substring(2);
        
        var radar = new Chart(document.getElementById("cr"+ k).getContext("2d")).Radar(radarChartData[k],{scaleShowLabels : false, pointLabelFontSize : 11});
        var i = 0;
        $(this).find('span').each(function(){
            $(this).addClass("cluster"+ indData[k][i]).addClass('measure');
            i++;
        });
        k++;
    });
    
    $('body').on('mouseover','span.measure', function(){
        var currentAct = $(this).attr('class').split(' ')[0];
        $(this).html('<div><h2>'+ activityTheory[currentAct][0] +': '+ activityTheory[currentAct][1] +'</h2><p>'+ feedback[0] +'</p></div>');
    });
    $('body').on('mouseout','span.measure', function(){
        $(this).html('');
    });
    
    $('body').on('mousedown','a.compare',function(e){
        e.preventDefault();
        var currentRadial = $(this).attr('id');
        $('#c'+ currentRadial).toggle();
        $('#r'+ currentRadial).toggle();
        $('#c'+ currentRadial +'Legend').toggle();
    });
    
    $('body').on('change','input#allModules',function(e){
        e.preventDefault();
        $('#modules p').toggle();
        
        if($('input#allModules').prop("checked")){
            $('.chatResults').fadeOut();
            $('#modules p input').each(function(){
                //$(this).prop( "checked", true );
            });
        } else {
            $('#modules p input').each(function(){
                $(this).prop( "checked", false );
            });
        }
    });
    
    $('body').on('change','input#allGroups',function(e){
        e.preventDefault();
        $('#groups p').toggle();
        
        if($('input#allGroups').prop("checked")){
            $('.actAnalytics').fadeIn();
            $('#groups p input').each(function(){
                $(this).prop( "checked", true );
            });
        } else {
            $('.actAnalytics').fadeOut();
            $('#groups p input').each(function(){
                $(this).prop( "checked", false );
            });
        }
    });
    
    $('body').on('change','#modules p input',function(e){
        e.preventDefault();
        var curModule = $(this).attr('id');
        if($(this).prop("checked")){
            $('.chatResults').fadeIn();
        } else {
            $('.chatResults').fadeOut();
        }
    });
    
    $('body').on('change','#groups p input',function(e){
        e.preventDefault();
        var curGroup = $(this).attr('id');
        $('.'+ curGroup).toggle();
    });
    
    $('body').on('mousedown','a.indShow', function(e){
        e.preventDefault();
        var curInd = $(this).attr('id');
        $('.'+ curInd).toggle();
        $('.indHide').toggle();
    });
		




	// Sequences of events in chat	
    taxonomy = {
    "text":["Uppercase","Exclamations","Try","Triangle/Circle","Think","Make","Questions","Look","Compass"],
    "regex":["\\b[A-Z]{4,}\\b","\\\! ","\\btry\\b|Try|attempt|crack|stab|shot","(added \\Kpoint)|triangle(?!\\n)|circle","think","make|creat","\\\?","look|Look|attention|eye|glance|glimpse|peek|review|view\\b|stare|behold|beheld|notic|gaze|inspect|introspect|leer|mark|observ|regard|scrutin|sight|speculat|survey|watch|see","(tool changed to \\\KCompass)|compass"],
    "ref":{"Uppercase":[],"Exclamations":[],"Try":[],"Triangle/Circle":[],"Think":[],"Make":[],"Questions":[],"Look":[],"Compass":[]}
    };
    
    
    // get the word at the specified index and from the specified object
    function getWord(e){
    	return taxonomy.text[e]; 
    }
    // how many times this word appears in the specified object
    function wordNum(word){
        if(word !== undefined){
            return taxonomy.ref[word].length - 1; 
        }
    }
    
    var ringNum = taxonomy['text'].length - 1;
    var groupNums = $('.wholeText').length;
    
    for(var groupN = 0; groupN <= groupNums; groupN++ ){
		
		var bodyText = $('#wholeText'+ groupN).text();
		var bodySize = parseInt(bodyText.length) / 470;
		console.log(bodySize);		
		
		
		// provides character numbers for each taxonomic term
		i = 0;
		while(i <= ringNum){
			var word = '('+ taxonomy.regex[i] +')';
			var regWord = new RegExp(word, 'g');
			var keyword = taxonomy.text[i];
			while (regWord.test(bodyText)===true) {
				// throw numbers into ref object inside of taxonomy object
				var thisIndex = regWord.lastIndex;				
				taxonomy.ref[keyword].push(thisIndex);
				var charIndex = parseInt(regWord.lastIndex);
				var charLocation = parseInt(charIndex / bodySize);
				var spanText = bodyText.substr((thisIndex - 150),300);
				var fixSpanText = spanText.replace(' ->','</small><br/>');
				var newSpanText = fixSpanText.replace(/(Spring|Fall|Summer).*/,'');
				$('#resultGraph'+ groupN).append('<a href="#" data-word="'+ keyword +'" id="graph'+ thisIndex +'" data-regex="'+ taxonomy.regex[i] +'" style="left: '+ (charLocation * 2) +'px; top: '+ ((i * 20)+4) +'px"><span class="callOut"><strong>'+ keyword +'</strong><br /><small>&hellip;'+ newSpanText +'<small class="hide">X</small></span></a>');
				
			}
			$('#resultGraph'+ groupN).append('<p style="top: '+ (i * 19) +'px">'+ taxonomy.text[i] +'</p>');
			i++;			
		}
		$('#resultGraph'+ groupN).append('<p class="direction">&larr;Time of appearance in chat&rarr;</p>').css({"width":(i * 20) +"px"}).fadeIn(1000);
		

// Get the specific character number after each occurence of the specified word in the specified object
function char(number, word){
	return parseInt(taxonomy.ref[word][number]);	
}		
		// separates clusters and gets numbers close to each other		
		for(i=0; i<= ringNum; i++){ // iterate over taxonomy
			var charNum = []; // Hold info for all words			
			charNum[i] = wordNum(getWord(i)); // Hold the number of how many times this word occurs in the text
			if (wordNum(getWord(i)) >= 0){ // If the word occurs
			
				for(var j=0; j <= charNum[i]; j++){	// iterate through all occurences of that specific word	
					// The character number of the current word we are looking at
					var currentChar = char(j, getWord(i));
						
					// The iterated over character number of the next word
					for(var k=0; k <= wordNum(getWord(i+1)); k++){ // iterate over the next word										
						var nextChar = char(k, getWord(i + 1));
						if(nextChar){
							if(nextChar <= (currentChar + distance) && nextChar >=currentChar){			
								$('#resultGraph'+ groupN +' #graph'+ currentChar).addClass('highlightGraph');
								$('#resultGraph'+ groupN +' #graph'+ nextChar).addClass('highlightGraph');
								//console.log(getWord(i) +' ('+ currentChar +') => '+ getWord(i + 1) +' ('+ nextChar +')');
							}
						}	
					}
				}
			}
		}
    };
	
	
	$('body').on('click','.resultGraph a',function(e){
		e.preventDefault();
	});
	
	$('body').on('mousedown','.resultGraph a',function(e){
		e.preventDefault();
		$('.showSpan').removeClass('showSpan');
		$(this).find('span').addClass('showSpan');
	});    	
	
	
	$('body').on('mouseup','.resultGraph small.hide',function(e){
		e.preventDefault();	
		$('.showSpan').removeClass('showSpan');	
	});	
});
