exports.default = (ffi) => {
  ffi.defun("text.characters", (text0) => {
    const text = ffi.text_to_string(text0);
    const chars = [...text].map(x => ffi.text(x));
    return ffi.list(chars);
  });
}