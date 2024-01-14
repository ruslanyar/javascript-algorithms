function fishHex(name) {
  return (
    name.match(/[a-f]/g)?.reduce((acc, cur) => acc ^ parseInt(cur, 16), 0) ?? 0
  );
}

console.log(fishHex("jkiu"));
