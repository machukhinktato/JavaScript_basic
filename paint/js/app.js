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
        this._handleEvents();
    },
    _handleEvents() {
        this.canvas.addEventListener('mousemove', this._moveHandler.bind(this));
        this.canvas.addEventListener('mousedown', this._startProcess.bind(this));
        document.addEventListener('ouseup', this._endProcess.bind(this));
        this.tools.addEventListener('click', this._clickHandler.bind(this));
        this.tools.addEventListener('change', this._changeHandler.bind(this));
    },
    _moveHandler(e) {
        this.x = e.offsetX;
        this.y = e.offsetY;
        this._renderCoordinates();
        // this.context.fillRect(this.x, this.y, this.editor.currentBrushSize, this.editor.currentBrushSize);
    },
    _clickHandler(e) {
        if (e.target.tool === 'tool') {
            this.editor.currentTool = e.target.dataset.tool;
        }
    },
    _renderCoordinates() {
        document.querySelector('#xCoord').innerText = this.x;
        document.querySelector('#yCoord').innerText = this.y;
    },
    _startProcess() {
        this.canvas.onmousemove = () => {
            this.context.fillRect(this.x, this.y, this.editor.currentBrushSize, this.editor.currentBrushSize);
        }
    },
    _endProcess() {
        this.canvas.onmousemove = null;
    }
}

abobe.init();
