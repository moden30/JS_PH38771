
const gameEvents = new Map([
  [17, "Ghi bàn"],
  [36, "Thay người"],
  [47, "Ghi bàn"],
  [61, "Thay người"],
  [64, "Nhận thẻ vàng"],
  [69, "Nhận thẻ đỏ"],
  [70, "Thay người"],
  [72, "Thay người"],
  [76, "Ghi bàn"],
  [80, "Ghi bàn"],
  [92, "Nhận thẻ vàng"],
]);


const events = [...new Set(gameEvents.values())];
console.log(events);


gameEvents.delete(64);

console.log(
  `1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
