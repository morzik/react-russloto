export default function orientationPlugin(coords, {OrientationController, MouseController}, {cameraPosition}, depth){
    if (!OrientationController || MouseController) return coords;
    const {beta, gamma} = OrientationController;
    coords.x = gamma * coords.x * (-cameraPosition + depth);
    coords.y = (beta-90) * coords.y * (-cameraPosition + depth);
    return coords;
}