function getMousePos(event) {
    let rect = canvas.getBoundingClientRect();
    return new Point(event.clientX - rect.left, event.clientY - rect.top);
}
