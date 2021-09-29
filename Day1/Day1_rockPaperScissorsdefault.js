function rockPaperScissors(player1Option,player2Option)
{
    switch (player1Option) {
    case "rock": 
    {
        switch (player2Option)
        {
            case "rock": {
                console.log('It is a Draw')
                break }

            case "paper":  {
               console.log('The Second player paper wins')
                break } 

            case "scissors":  {
               console.log('The First player paper wins')
                break }
            default:
                console.log('Argument Error for player 2 Option')
                break
        }
        break
    }
    default:
        console.log('Argument Error for player 1 Option')
        break
    case "paper": 
    {
       switch (player2Option)
        {
            case "paper": {
                console.log('It is a Draw')
                break }

            case "rock":  {
               console.log('The First player paper wins')
                break } 

            case "scissors":  {
               console.log('The Second player paper wins')
                break }
            default:
                console.log('Argument Error for player 2 Option')
                break                
        }
        break        
    }
}
}

rockPaperScissors("rock","paper")
rockPaperScissors("rock","rock")
rockPaperScissors("rock","scissors")
rockPaperScissors("paper","scissors")
rockPaperScissors("paper","potatoes")
rockPaperScissors("glue","scissors")