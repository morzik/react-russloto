export default function mousePlugin(coords, {MouseController}, {referencePoint, cameraPosition}, depth){
    if (!MouseController) return coords;
    const x = MouseController.mouseX - referencePoint.x;
    const y = MouseController.mouseY - referencePoint.y;
    coords.x = x * coords.x * (-cameraPosition + depth) * 100;
    coords.y = y * coords.y * (-cameraPosition + depth) * 100;
    return coords;
}