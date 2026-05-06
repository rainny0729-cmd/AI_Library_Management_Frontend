export function compactNumber(value: number) {
  return new Intl.NumberFormat("zh-CN", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function percent(value: number) {
  return `${value.toFixed(1)}%`;
}

export function withSign(value: number) {
  return value > 0 ? `+${value}` : `${value}`;
}
