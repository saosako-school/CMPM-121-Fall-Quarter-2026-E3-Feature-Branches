// @deno-types="./asset-url.d.ts"
import leftEyeUrl from "./assets/A_leftEye.jpg?no-inline";
// @deno-types="./asset-url.d.ts"
import rightEyeUrl from "./assets/Z_rightEye.jpg?no-inline";
// @deno-types="./asset-url.d.ts"
import smileUrl from "./assets/N_mouth.png?no-inline";
// @deno-types="./asset-url.d.ts"
import noseUrl from "./assets/F_nose.jpg?no-inline";

interface ImageData {
  url: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const leftEyeData: ImageData = {
  url: leftEyeUrl,
  x: 30,
  y: 49,
  width: 70,
  height: 67,
};

const rightEyeData: ImageData = {
  url: rightEyeUrl,
  x: 104,
  y: 49,
  width: 70,
  height: 67,
};

const mouthData: ImageData = {
  url: smileUrl,
  x: 40,
  y: 122,
  width: 120,
  height: 40,
};

const noseData: ImageData = {
  url: noseUrl,
  x: 74,
  y: 73,
  width: 50,
  height: 58,
};

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A neutral face");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

function addImage(imageInfo: ImageData): SVGImageElement {
  const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
  image.setAttribute("href", imageInfo.url);
  image.setAttribute("x", `${imageInfo.x}`);
  image.setAttribute("y", `${imageInfo.y}`);
  image.setAttribute("width", `${imageInfo.width}`);
  image.setAttribute("height", `${imageInfo.height}`);
  face.append(image);
  return image;
}

/**
 * The mouth image is a photo of my friend, N, cropped to only show her mouth.
 *
 * Only the first initial of N's name is used for privacy reasons.
 *
 * I have been given permission to use this picture for the purposes of this project.
 *
 * I used the Photos application (by Microsoft) that comes with my laptop to crop the image.
 */
addImage(mouthData);
/**
 * The nose image is a photo of my friend, F, cropped to only show their mouth.
 *
 * Only the first initial of F's name is used for privacy reasons.
 *
 * I have been given permission to use this picture for the purposes of this project.
 *
 * I used the Photos application (by Microsoft) that comes with my laptop to crop the image.
 */
addImage(noseData);
/**
 * The left eye image is a photo of my friend, A, cropped to only show their right (from their perspective) eye.
 * It is often referred to as the "left eye" in my program since it is left from our perspective, however the image is
 * actually of their right eye.
 *
 * Only the first initial of A's name is used for privacy reasons.
 *
 * I have been given permission to use this picture for the purposes of this project.
 *
 * I used the Photos application (by Microsoft) that comes with my laptop to crop the image.
 */
addImage(leftEyeData);
/**
 * The nose image is a photo of my friend, Z, cropped to only show his left (from his perspective) eye.
 * It is often referred to as the "right eye" in my program since it is left from our perspective, however the image is
 * actually of his left eye.
 *
 * Only the first initial of Z's name is used for privacy reasons.
 *
 * I have been given permission to use this picture for the purposes of this project.
 *
 * I used the Photos application (by Microsoft) that comes with my laptop to crop the image.
 */
addImage(rightEyeData);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
