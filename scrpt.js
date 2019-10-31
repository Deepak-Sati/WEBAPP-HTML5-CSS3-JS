var tscore,activePlayer,cur,gameplaying;
init();

function init(){
    tscore=[0,0];
	activePlayer=cur=0;
	gameplaying=true;
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
	document.querySelector('.final-score').value='FINAL SCORE';
}

document.querySelector('.btn-new').addEventListener('click',function(){
	var x=(activePlayer===0)?1:2;	
	        document.getElementById('name-'+activePlayer).textContent='PLAYER '+x;
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
	init();
});

document.querySelector('.btn-roll').addEventListener('click',function(){
   
    if(gameplaying){
	var ran = Math.floor(Math.random()*6)+1;
    var x=document.querySelector('.dice');
    
    x.style.display='block';
    x.src='dice-'+ran+'.png';
    
    if(ran!==1){
        cur+=ran;
        document.getElementById('current-'+activePlayer).textContent=cur;
    }
    else{
        cur=0;
		nextPlayer();
    }
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gameplaying){
	tscore[activePlayer]+=cur;
	document.getElementById('score-'+activePlayer).textContent=tscore[activePlayer];
	        if(tscore[activePlayer]>=20){
				document.getElementById('name-'+activePlayer).textContent='WINNER !';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			document.querySelector('.final-score').value='WON BY '+tscore[activePlayer];
				gameplaying=false;
			}
		else
		nextPlayer();
	}
});

function nextPlayer(){
	
	cur=0;
	document.getElementById('current-'+activePlayer).textContent='0';
	activePlayer=(activePlayer===0)?1:0;
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.player-0-panel').classList.toggle('active');
}