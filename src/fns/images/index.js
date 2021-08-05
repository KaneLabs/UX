export const closestAspectRatio = ({ width, height }) => {
  const ratio = width / height;
  if (ratio > 3) {
    return { aspectRatio: 3, mustCrop: true };
  }
  if (ratio === 3) {
    return { aspectRatio: 3, mustCrop: false };
  }
  if (ratio > 16 / 9) {
    return { aspectRatio: 16 / 9, mustCrop: true };
  }
  if (ratio === 16 / 9) {
    return { aspectRatio: 16 / 9, mustCrop: false };
  }
  if (ratio > 1) {
    return { aspectRatio: 1, mustCrop: true };
  }
  if (ratio === 1) {
    return { aspectRatio: 1, mustCrop: false };
  }
  // vertical crop to square
  return { aspectRatio: 1, mustCrop: true };
};
