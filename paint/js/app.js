const abobe = {
    container: document.querySelector('#app'),
    canvas: document.querySelector('#canv'),
    tools: document.querySelector('#tools'),
    x: 0,
    y: 0,
    context: null, //context //// ctx,
    editor: {
        currentTool: null,
        currentColor: '#000',
        currentBrushSize: 10
    },
    init() {
        this.context = this.canvas.getContext('2d');
        this.canvas.addEventListener('mousemove', this._moveHandler.bind(this));
    },
    _moveHandler(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this._renderCoordinates();
        this.context.fillRect(this.x, this.y, this.editor.currentBrushSize, this.editor.currentBrushSize);
    },
    _renderCoordinates() {
        document.querySelector('#xCoord').innerText = this.x;
        document.querySelector('#yCoord').innerText = this.y;
    }
}

abobe.init();