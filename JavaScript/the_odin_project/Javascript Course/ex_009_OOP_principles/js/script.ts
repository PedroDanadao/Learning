function is_game_over() {
    if (game_over) {
        const game_over_div = document.createElement("div");
        game_over_div.classList.add("game-over");
        game_over_div.textContent = `${this.winner} won the game!`;
        document.body.appendChild(game_over_div);
    }
}