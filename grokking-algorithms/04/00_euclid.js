function euclid(l, w) {
  if (l % w === 0) return w;

  return euclid(w, l % w);
}

console.log(euclid(1680, 640));
