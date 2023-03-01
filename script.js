jwplayer("container").setup({

		    controls: true,
		    displaytitle: true,
		    fullscreen: "true",
		    primary: 'html5',
		    stretching: "16:9",
		    

		    skin: {
		    	name: 'Netflix',
		    },


		     
		    captions: {
		        color: '#FFF',
		         fontSize: 14,
		         backgroundOpacity: 0,
		         edgeStyle: 'raised' 
		    },

		  playlist: [
        ,
        //series
       {        
           
		    title: "  ",
		    description: "  ",
		    image: " ",
		    
		    sources: [{
		    file: "https://ia801706.us.archive.org/6/items/tu-nombre-kimi-no-nawa/Tu%20Nombre%20(Kimi%20no%20nawa).mp4",
		      label: '720p',
		      'type': 'mp4',
		      primary: 'html5',},
		      
		      {
		    file: "https://ia802508.us.archive.org/0/items/kimi-no-na-wa_202207/Kimi%20no%20na%20wa.mp4",
		      label: '1080p',
		      'type': 'mp4',
		      primary: 'html5',}],
		    
		    
		 
		  }//end of movies
      ]
		});
jwplayer("container").setCaptions({
  "back": true,
  "backgroundOpacity": "32",
  "edgeStyle": "dropshadow",
  "fontSize": 14,
  "fontOpacity": 100,
  "fontScale": 0.05,
  "windowOpacity": 0,
  "color": "#ffff00"
  
});