exports.default = (ffi) => {
  ffi.defun("mem.alloc", (size0) => {
    const size = Number(ffi.integer_to_bigint(size0));
    const mem = Array.from({ length: size }, (_) => ffi.integer(0n));
    return ffi.box(mem);
  });

  ffi.defun("mem.at", (mem0, ox0) => {
    const mem = ffi.unbox(mem0);
    const ox = Number(ffi.integer_to_bigint(ox0));
    if (ox0 < 0 || ox0 >= mem.length) {
      throw ffi.panic("Memory outside of bounds", "bounds-violation");
    }
    return mem[ox];
  });

  ffi.defun("mem.at-put", (mem0, ox0, v) => {
    const mem = ffi.unbox(mem0);
    const ox = Number(ffi.integer_to_bigint(ox0));
    if (ox0 < 0 || ox0 >= mem.length) {
      throw ffi.panic("Memory outside of bounds", "bounds-violation");
    }
    mem[ox] = v;
    return ffi.box(mem);
  });

  ffi.defun("mem.list", (mem0) => {
    return ffi.list(ffi.unbox(mem0));
  });
};
