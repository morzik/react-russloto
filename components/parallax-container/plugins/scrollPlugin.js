export default function scrollPlugin(coords, {ScrollController}, {referencePoint, cameraPosition}, depth){
    if (!ScrollController) return coords;
    const scrollX = ScrollController.scrollX - referencePoint.x;
    const scrollY = ScrollController.scrollY - referencePoint.y;
    coords.x = coords.x + scrollX * (-cameraPosition + depth) * 100;
    coords.y = coords.y + scrollY * (-cameraPosition + depth) * 100;
    return coords;
}