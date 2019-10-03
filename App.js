(function() {
    let settings = new Settings();
    
    let model = new Game(settings);
    let view = new GameView(model);
    let controller = new GameController(model, view);

    document.body.appendChild(view.getVisualHTML());
})();