export default function WaitingLoad(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
