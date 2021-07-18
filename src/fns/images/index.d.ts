export function closestAspectRatio({ width, height }: {
    width: any;
    height: any;
}): {
    aspectRatio: number;
    mustCrop: boolean;
};
