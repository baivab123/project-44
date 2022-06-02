class Player{
    constructor(){
        this.name = null;
        this.index = null;
    }
    readPlayerCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCountValue = data.val();
        })
    }
    writePlayerCount(count){
        database.ref("/").update({
            playerCount: count 
        })
    }
}